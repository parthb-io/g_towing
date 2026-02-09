import { Truck, Phone, Mail, Clock, Wrench, Shield } from "lucide-react";

export const metadata = {
  title: "Under Maintenance | Guardium Towing",
  description:
    "Guardium Towing website is currently under maintenance. For emergencies, call 1-800-GUARDIUM.",
};

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center shadow-lg">
            <Truck className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Guardium Towing
            </h1>
            <p className="text-xs text-white/60 tracking-widest uppercase">
              Canada&apos;s #1 Towing Service
            </p>
          </div>
        </div>

        {/* Maintenance icon */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm">
            <Wrench className="h-12 w-12 text-secondary animate-pulse" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
            <Clock className="h-3.5 w-3.5 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 leading-tight">
          We&apos;re Under{" "}
          <span className="text-gradient">Maintenance</span>
        </h2>
        <p className="text-white/70 text-center max-w-lg mb-10 text-lg">
          Our website is currently being upgraded to serve you better. We&apos;ll
          be back shortly with an improved experience.
        </p>

        {/* Emergency contact card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 max-w-md w-full mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-secondary" />
            <h3 className="font-semibold text-lg">Need Emergency Help?</h3>
          </div>
          <p className="text-white/70 text-sm mb-6">
            Our 24/7 dispatch team is still available. Call us for immediate
            roadside assistance anywhere in Canada.
          </p>

          <div className="space-y-3">
            <a
              href="tel:1-800-GUARDIUM"
              className="flex items-center gap-3 bg-secondary hover:bg-secondary/90 transition-colors text-white rounded-xl px-5 py-3.5 font-semibold text-center justify-center"
            >
              <Phone className="h-5 w-5" />
              Call 1-800-GUARDIUM
            </a>
            <a
              href="mailto:support@guardiumtowing.ca"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors text-white rounded-xl px-5 py-3.5 font-medium text-center justify-center border border-white/20"
            >
              <Mail className="h-5 w-5" />
              support@guardiumtowing.ca
            </a>
          </div>
        </div>

        {/* Status indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            Phone lines active
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            Dispatch operational
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500" />
            </span>
            Website upgrading
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-6 px-4">
        <div className="max-w-md mx-auto text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Guardium Towing. All rights
            reserved.
          </p>
          <p className="text-white/30 text-xs mt-1">
            24/7 Emergency Towing &amp; Roadside Assistance Across Canada
          </p>
        </div>
      </footer>
    </div>
  );
}
