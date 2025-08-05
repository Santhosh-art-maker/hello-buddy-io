import { ArrowRight, MapPin, Users, Calendar, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import villageHero from "@/assets/village-hero.jpg";
import villageTemple from "@/assets/village-temple.jpg";
import villageLake from "@/assets/village-lake.jpg";
import villageAgriculture from "@/assets/village-agriculture.jpg";

const Index = () => {
  const highlights = [
    {
      title: "Rich Heritage",
      description: "Centuries of cultural traditions and historical significance",
      icon: Calendar
    },
    {
      title: "Natural Beauty",
      description: "Pristine lake, lush fields, and scenic landscapes",
      icon: Camera
    },
    {
      title: "Vibrant Community",
      description: "2,500+ residents working together for progress",
      icon: Users
    },
    {
      title: "Perfect Location",
      description: "Accessible from major cities with rural charm",
      icon: MapPin
    }
  ];

  const featuredAttractions = [
    {
      title: "Sacred Temple",
      description: "Ancient temple with beautiful architecture",
      image: villageTemple,
      link: "/tourism"
    },
    {
      title: "Sagam Cheruvu Lake",
      description: "Pristine waters perfect for peaceful moments",
      image: villageLake,
      link: "/tourism"
    },
    {
      title: "Agricultural Heritage",
      description: "Experience traditional farming methods",
      image: villageAgriculture,
      link: "/tourism"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${villageHero})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-primary text-primary-foreground">Welcome to</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            SAGAM CHERUVU
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Where tradition meets progress in the heart of rural India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/about">
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-black">
              <Link to="/tourism">Explore Tourism</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Visit Sagam Cheruvu?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the unique charm of our village where ancient traditions blend 
              seamlessly with modern progress
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="text-center border-none shadow-lg">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {highlight.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Attractions */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Attractions</h2>
            <p className="text-xl text-muted-foreground">
              Experience the beauty and culture of our village
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAttractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
                <Link to={attraction.link}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={attraction.image} 
                      alt={attraction.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {attraction.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {attraction.description}
                    </CardDescription>
                  </CardHeader>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/tourism">
                View All Attractions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore More</h2>
            <p className="text-xl text-muted-foreground">
              Learn about our community, events, and how to get in touch
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Meet the people who make Sagam Cheruvu special. Learn about our 
                  organizations, services, and community initiatives.
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/community">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Events & Festivals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Join us for cultural celebrations, community gatherings, and 
                  traditional festivals throughout the year.
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/events">View Events</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Visit & Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Plan your visit or get in touch with village administration. 
                  Find directions, contact information, and visitor services.
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Authentic Village Life
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're a visitor seeking cultural experiences or looking to connect 
            with our community, Sagam Cheruvu welcomes you with open arms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/tourism">Plan Your Visit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
