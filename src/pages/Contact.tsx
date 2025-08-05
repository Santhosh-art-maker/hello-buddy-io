import { MapPin, Phone, Mail, Clock, Building, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: Building,
      title: "Village Panchayat Office",
      details: [
        "Sagam Cheruvu Village",
        "Post: Sagam Cheruvu",
        "District: [District Name]",
        "State: [State Name], India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Panchayat Office: +91 XXXXX XXXXX",
        "Sarpanch: +91 XXXXX XXXXX",
        "Emergency: 108, 100"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@sagamcheruvu.gov.in",
        "panchayat@sagamcheruvu.gov.in",
        "tourism@sagamcheruvu.org"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const services = [
    {
      title: "Village Administration",
      description: "Birth/Death certificates, Property documents, Ration cards",
      contact: "Panchayat Secretary"
    },
    {
      title: "Tourism Information",
      description: "Guided tours, Accommodation booking, Local attractions",
      contact: "Tourism Officer"
    },
    {
      title: "Development Projects",
      description: "Infrastructure development, Welfare schemes, Public works",
      contact: "Development Officer"
    },
    {
      title: "Emergency Services",
      description: "Medical emergencies, Natural disasters, Security issues",
      contact: "Emergency Coordinator"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get in touch with Sagam Cheruvu administration</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index}>
                <CardHeader className="text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-muted-foreground text-center">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>
                  Have questions or suggestions? We'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this about?" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Location & Services */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Location & Services</h2>
            
            {/* Map Placeholder */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Village Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive map coming soon</p>
                    <p className="text-sm text-muted-foreground">
                      Sagam Cheruvu Village, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Contact: {service.contact}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-destructive">Emergency Contacts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <Phone className="w-8 h-8 text-destructive mx-auto mb-2" />
              <h4 className="font-semibold">Medical Emergency</h4>
              <p className="text-2xl font-bold text-destructive">108</p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 text-destructive mx-auto mb-2" />
              <h4 className="font-semibold">Police</h4>
              <p className="text-2xl font-bold text-destructive">100</p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 text-destructive mx-auto mb-2" />
              <h4 className="font-semibold">Fire Department</h4>
              <p className="text-2xl font-bold text-destructive">101</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;