import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Globe, MessageCircle, Heart } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "compassion@medicalcu.org",
      action: () => window.open("mailto:compassion@medicalcu.org", '_self')
    },
    {
      icon: MapPin,
      label: "Location",
      value: "University of Nairobi, School of Medicine",
      action: () => console.log("Opening location")
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.medicalcu.org",
      action: () => window.open("https://www.medicalcu.org", '_blank')
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-primary/5 to-chart-1/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <MessageCircle className="w-4 h-4" />
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our compassion initiatives? Need support or want to get involved? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-card hover-elevate cursor-pointer" onClick={info.action}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1" data-testid={`text-contact-label-${index}`}>
                    {info.label}
                  </h3>
                  <p className="text-muted-foreground text-sm" data-testid={`text-contact-value-${index}`}>
                    {info.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main WhatsApp CTA */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Connect with Our Community
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our WhatsApp group to stay connected with the Medical Christian Union community, 
              receive updates on compassion initiatives, and find support from fellow members.
            </p>
            <Button
              onClick={() => {
                window.open('https://chat.whatsapp.com/medical-christian-union', '_blank');
                console.log('Opening main WhatsApp group');
              }}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              data-testid="button-main-whatsapp"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Our WhatsApp Community
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Over 200+ active members sharing in compassion and support
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold text-foreground">Medical Christian Union</span>
          </div>
          <p className="text-muted-foreground">
            Reconciled to God, Ambassadors for Christ
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Compassion Week: September 8-14, 2024
          </p>
        </div>
      </div>
    </section>
  );
}