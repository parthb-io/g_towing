import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Truck, Home, Phone, ArrowLeft, Search, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-50">
      
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          

          {/* Error Code */}
          <h1 className="text-8xl font-bold text-gray-200 mb-4">404</h1>

          {/* Message */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been
            moved or doesn&apos;t exist. Let us help you get back on track.
          </p>

          {/* Emergency CTA */}
          <div className=" flex items-center justify-center ">
          <div className="bg-primary/5 container max-w-3xl border border-primary/20 rounded-lg p-4 mb-8 items-center justify-center ">
          <p className="text-base text-gray-600 mb-3">
              Need roadside assistance right now?
            </p>
            <Button size="lg" asChild>
              <a href="tel:+17808097860">
                <Phone className="mr-2 h-5 w-5" />
                +1 780-809-7860
              </a>
            </Button>
          </div>
          
          </div>

          
        </div>
      </div>
    </div>
  );
}
