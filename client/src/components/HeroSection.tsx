import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";

interface HeroSectionProps {
  onSupportClick: () => void;
  onAssistanceClick: () => void;
}

export default function HeroSection({ onSupportClick, onAssistanceClick }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/media/CompassionVID.mp4" type="video/mp4" />
        {/* Fallback background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-chart-1/80" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 space-y-8">
        {/* Logo/Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <span className="text-sm font-medium tracking-wide">MEDICAL SCHOOL CHRISTIAN UNION</span>
        </div>
        
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            COMPASSION
            <span className="block text-primary">WEEK</span>
          </h1>
          <div className="bg-white rounded-full px-8 py-4 inline-block">
            <p className="text-chart-1 text-xl md:text-2xl font-semibold">
              ACTS OF KINDNESS, HEARTS OF LOVE
            </p>
          </div>
        </div>
        
        {/* Date Range */}
        <div className="bg-chart-1/90 backdrop-blur-sm rounded-2xl px-8 py-4 inline-block border border-white/20">
          <p className="text-lg md:text-xl font-semibold">
            FROM: MONDAY, SEP 8 TO: SUNDAY, SEP 14
          </p>
        </div>
        
        {/* Tagline */}
        <div className="space-y-2">
          <p className="text-lg md:text-xl font-light italic">
            "Kindness is contagious"
          </p>
          <p className="text-base md:text-lg opacity-90">
            Reconciled to God, Ambassadors for Christ
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold border-2 border-primary"
            onClick={onSupportClick}
            data-testid="button-support"
          >
            <Heart className="w-5 h-5 mr-2" />
            Support Us
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/10 hover:bg-white/20 text-white border-2 border-white backdrop-blur-sm px-8 py-4 text-lg font-semibold"
            onClick={onAssistanceClick}
            data-testid="button-assistance"
          >
            <Users className="w-5 h-5 mr-2" />
            Seek Assistance
          </Button>
        </div>
      </div>
    </section>
  );
}