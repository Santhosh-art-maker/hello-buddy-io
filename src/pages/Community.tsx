import { Users, GraduationCap, Heart, Briefcase, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import villageSchool from "@/assets/village-school.jpg";

const Community = () => {
  const organizations = [
    {
      name: "Women's Self Help Group",
      description: "Empowering women through skill development and microfinance",
      members: "150+ members",
      activities: ["Handicrafts", "Tailoring", "Food processing"]
    },
    {
      name: "Youth Sports Club",
      description: "Promoting sports and physical fitness among village youth",
      members: "80+ members",
      activities: ["Cricket", "Volleyball", "Athletics"]
    },
    {
      name: "Farmers Association",
      description: "Supporting agricultural development and modern farming techniques",
      members: "200+ members",
      activities: ["Organic farming", "Crop insurance", "Market linkage"]
    },
    {
      name: "Cultural Society",
      description: "Preserving and promoting traditional arts and culture",
      members: "100+ members",
      activities: ["Folk dance", "Music", "Drama"]
    }
  ];

  const services = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Primary and secondary schools with digital learning facilities"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Primary health center with visiting doctors and medical camps"
    },
    {
      icon: Briefcase,
      title: "Employment",
      description: "Skill development programs and job placement assistance"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Awards for outstanding contributions to community development"
    }
  ];

  const achievements = [
    "100% Primary Education Coverage",
    "Solar Street Lighting",
    "Digital Literacy Program",
    "Organic Farming Initiative",
    "Waste Management System",
    "Water Conservation Project"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Our Community</h1>
            <p className="text-xl">United in progress, rooted in tradition</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Community Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our People, Our Strength</h2>
            <p className="text-muted-foreground mb-4">
              Sagam Cheruvu is home to a diverse and vibrant community of 2,500+ residents 
              who work together to build a better future while preserving our cultural heritage. 
              Our village is known for its strong social fabric and collaborative spirit.
            </p>
            <p className="text-muted-foreground mb-6">
              From farmers and artisans to teachers and entrepreneurs, every member of our 
              community contributes to the collective growth and prosperity of Sagam Cheruvu.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src={villageSchool} 
              alt="Village School" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Community Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">Community Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index}>
                  <CardHeader className="text-center">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Community Organizations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">Community Organizations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizations.map((org, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {org.name}
                    <Badge variant="secondary">{org.members}</Badge>
                  </CardTitle>
                  <CardDescription>{org.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Key Activities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {org.activities.map((activity, actIndex) => (
                      <Badge key={actIndex} variant="outline">
                        {activity}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Village Leadership</h3>
            <Card>
              <CardHeader>
                <CardTitle>Village Panchayat</CardTitle>
                <CardDescription>
                  Elected representatives working for community development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Sarpanch (Village Head)</h4>
                    <p className="text-muted-foreground">Leading community initiatives and development projects</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ward Members</h4>
                    <p className="text-muted-foreground">Representatives from different areas of the village</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Secretary</h4>
                    <p className="text-muted-foreground">Administrative support and record keeping</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Get Involved</h3>
            <Card>
              <CardHeader>
                <CardTitle>Join Our Community</CardTitle>
                <CardDescription>
                  There are many ways to contribute to our village's growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">Volunteer for community events</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="text-sm">Support education initiatives</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="text-sm">Participate in health camps</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-sm">Join skill development programs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center bg-secondary rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
          <p className="text-muted-foreground mb-6">
            Want to learn more about our community or get involved? We welcome new members 
            and visitors who share our vision of sustainable development and cultural preservation.
          </p>
          <div className="flex justify-center">
            <Badge variant="outline" className="text-base px-4 py-2">
              Contact Village Panchayat Office
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;