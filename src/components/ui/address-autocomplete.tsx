"use client";

import { useEffect, useRef, useState, useCallback, useSyncExternalStore } from "react";
import { Input } from "./input";
import { MapPin, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onSelect?: (place: google.maps.places.PlaceResult) => void;
  placeholder?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
}

declare global {
  interface Window {
    google: typeof google;
    initGoogleMaps?: () => void;
  }
}

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// External store for Google Maps script loading state
let googleMapsLoaded = false;
let googleMapsError = false;
const listeners = new Set<() => void>();

function subscribeToGoogleMaps(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getGoogleMapsSnapshot() {
  return googleMapsLoaded;
}

function getServerSnapshot() {
  return false;
}

function loadGoogleMapsScript() {
  if (!GOOGLE_MAPS_API_KEY || googleMapsLoaded || googleMapsError) return;

  if (typeof window !== "undefined" && window.google?.maps?.places) {
    googleMapsLoaded = true;
    listeners.forEach((l) => l());
    return;
  }

  const existingScript = document.querySelector(
    'script[src*="maps.googleapis.com"]'
  );

  if (existingScript) {
    existingScript.addEventListener("load", () => {
      // Check if Places API is actually available
      if (window.google?.maps?.places) {
        googleMapsLoaded = true;
      } else {
        googleMapsError = true;
        console.warn("Google Maps Places API not available");
      }
      listeners.forEach((l) => l());
    });
    existingScript.addEventListener("error", () => {
      googleMapsError = true;
      listeners.forEach((l) => l());
    });
    return;
  }

  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
  script.async = true;
  script.defer = true;
  script.onload = () => {
    // Verify the API is actually working
    setTimeout(() => {
      if (window.google?.maps?.places?.AutocompleteService) {
        googleMapsLoaded = true;
      } else {
        googleMapsError = true;
        console.warn("Google Maps Places API failed to initialize");
      }
      listeners.forEach((l) => l());
    }, 100);
  };
  script.onerror = () => {
    googleMapsError = true;
    console.error("Failed to load Google Maps script");
    listeners.forEach((l) => l());
  };
  document.head.appendChild(script);
}

// Check if API has error
function hasGoogleMapsError() {
  return googleMapsError;
}

export function AddressAutocomplete({
  value,
  onChange,
  onSelect,
  placeholder = "Enter address",
  className,
  error,
  disabled,
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
  const isScriptLoaded = useSyncExternalStore(
    subscribeToGoogleMaps,
    getGoogleMapsSnapshot,
    getServerSnapshot
  );

  // Check for API errors
  useEffect(() => {
    if (hasGoogleMapsError()) {
      setApiError(true);
    }
  }, [isScriptLoaded]);
  const [predictions, setPredictions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const autocompleteServiceRef =
    useRef<google.maps.places.AutocompleteService | null>(null);
  const placesServiceRef = useRef<google.maps.places.PlacesService | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load Google Maps script on mount
  useEffect(() => {
    loadGoogleMapsScript();
  }, []);

  // Initialize services when script is loaded
  useEffect(() => {
    if (isScriptLoaded && window.google?.maps?.places) {
      autocompleteServiceRef.current =
        new window.google.maps.places.AutocompleteService();

      // Create a dummy div for PlacesService
      const dummyDiv = document.createElement("div");
      placesServiceRef.current = new window.google.maps.places.PlacesService(
        dummyDiv
      );
    }
  }, [isScriptLoaded]);

  // Debounced search function
  const searchPlaces = useCallback(
    (input: string) => {
      if (!autocompleteServiceRef.current || input.length < 3) {
        setPredictions([]);
        setShowDropdown(false);
        return;
      }

      setIsLoading(true);

      autocompleteServiceRef.current.getPlacePredictions(
        {
          input,
          componentRestrictions: { country: "ca" }, // Restrict to Canada
          types: ["address"],
        },
        (results, status) => {
          setIsLoading(false);
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            results
          ) {
            setPredictions(results);
            setShowDropdown(true);
            setSelectedIndex(-1);
          } else {
            setPredictions([]);
            setShowDropdown(false);
          }
        }
      );
    },
    []
  );

  // Handle input change with debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (value && isScriptLoaded) {
        searchPlaces(value);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [value, isScriptLoaded, searchPlaces]);

  // Handle place selection
  const handleSelectPlace = useCallback(
    (prediction: google.maps.places.AutocompletePrediction) => {
      if (!placesServiceRef.current) return;

      placesServiceRef.current.getDetails(
        {
          placeId: prediction.place_id,
          fields: ["formatted_address", "geometry", "address_components"],
        },
        (place, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            place
          ) {
            onChange(place.formatted_address || prediction.description);
            onSelect?.(place);
          } else {
            onChange(prediction.description);
          }
          setShowDropdown(false);
          setPredictions([]);
        }
      );
    },
    [onChange, onSelect]
  );

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown || predictions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < predictions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSelectPlace(predictions[selectedIndex]);
        }
        break;
      case "Escape":
        setShowDropdown(false);
        setSelectedIndex(-1);
        break;
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // If no API key or API error, render a simple input
  if (!GOOGLE_MAPS_API_KEY || apiError) {
    return (
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          ref={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn("pl-10 bg-white", error && "border-red-500", className)}
          disabled={disabled}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }

  return (
    <div className="relative">
      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
      {isLoading && (
        <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 animate-spin z-10" />
      )}
      <Input
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => predictions.length > 0 && setShowDropdown(true)}
        placeholder={placeholder}
        className={cn("pl-10 bg-white", error && "border-red-500", className)}
        disabled={disabled}
        autoComplete="off"
      />

      {/* Predictions dropdown */}
      {showDropdown && predictions.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
        >
          {predictions.map((prediction, index) => (
            <button
              key={prediction.place_id}
              type="button"
              className={cn(
                "w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors flex items-start gap-3",
                index === selectedIndex && "bg-gray-100"
              )}
              onClick={() => handleSelectPlace(prediction)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">
                  {prediction.structured_formatting.main_text}
                </p>
                <p className="text-gray-500 text-xs">
                  {prediction.structured_formatting.secondary_text}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
