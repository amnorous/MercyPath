import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Phone, MessageCircle, Heart, Users } from "lucide-react";

interface Official {
  id: number;
  name: string;
  title: string;
  phone: string;
  whatsapp: string;
  initials: string;
  description: string;
}

//todo: remove mock functionality - replace with real official data
const officials: Official[] = [
  {
    id: 1,
    name: "Rev. Sarah Mwangi",
    title: "Chaplain & Counselor",
    phone: "+254712345678",
    whatsapp: "254712345678",
    initials: "SM",
    description: "Spiritual guidance and pastoral care"
  },
  {
    id: 2,
    name: "Dr. James Kimani",
    title: "Medical Assistance Coordinator",
    phone: "+254723456789",
    whatsapp: "254723456789",
    initials: "JK",
    description: "Medical support and healthcare guidance"
  },
  {
    id: 3,
    name: "Grace Njeri",
    title: "Student Welfare Officer",
    phone: "+254734567890",
    whatsapp: "254734567890",
    initials: "GN",
    description: "Academic and personal support for students"
  },
  {
    id: 4,
    name: "Prof. David Ochieng",
    title: "Crisis Intervention Specialist",
    phone: "+254745678901",
    whatsapp: "254745678901",
    initials: "DO",
    description: "Emergency support and crisis counseling"
  }
];

export default function SeekAssistanceSection() {
  const handleCall = (phone: string, name: string) => {
    window.open(`tel:${phone}`, '_self');
    console.log(`Calling ${name} at ${phone}`);
  };

  const handleWhatsApp = (whatsapp: string, name: string) => {
    const message = encodeURIComponent(`Hello ${name}, I am reaching out for assistance through the Compassion Week initiative. Could you please help me?`);
    window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
    console.log(`Opening WhatsApp chat with ${name}`);
  };

  return (
    <section id="assistance" className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Heart className="w-4 h-4" />
            We're Here to Help
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Seek Assistance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't face your challenges alone. Our dedicated team is here to provide support, guidance, and assistance when you need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {officials.map((official) => (
            <Card key={official.id} className="bg-card border-2 border-border hover-elevate">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                    {official.initials}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl text-foreground" data-testid={`text-official-name-${official.id}`}>
                  {official.name}
                </CardTitle>
                <p className="text-primary font-medium" data-testid={`text-official-title-${official.id}`}>
                  {official.title}
                </p>
                <p className="text-muted-foreground text-sm" data-testid={`text-official-description-${official.id}`}>
                  {official.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  onClick={() => handleCall(official.phone, official.name)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  data-testid={`button-call-${official.id}`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call {official.name.split(' ')[0]}
                </Button>
                <Button
                  onClick={() => handleWhatsApp(official.whatsapp, official.name)}
                  variant="outline"
                  className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-950"
                  data-testid={`button-whatsapp-${official.id}`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp {official.name.split(' ')[0]}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* WhatsApp Group Section */}
        <Card className="bg-gradient-to-r from-primary/5 to-chart-1/5 border-2 border-primary/20">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Community
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with fellow members of the Medical Christian Union community. 
              Share experiences, find support, and stay updated on our compassion initiatives.
            </p>
            <Button
              onClick={() => {
                window.open('https://chat.whatsapp.com/compassion-group', '_blank');
                console.log('Opening WhatsApp group');
              }}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              data-testid="button-whatsapp-group"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join WhatsApp Group
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Connect with over 200+ members of our compassionate community
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}