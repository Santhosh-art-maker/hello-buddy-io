import { MapPin, Camera, Clock, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import villageTemple from "@/assets/village-temple.jpg";
import villageLake from "@/assets/village-lake.jpg";
import villageAgriculture from "@/assets/village-agriculture.jpg";
import villageFestival from "@/assets/village-festival.jpg";

const Tourism = () => {
  const attractions = [
    {
      name: "Sacred Village Temple",
      description: "Ancient temple with beautiful stone carvings and peaceful atmosphere",
      image: villageTemple,
      type: "Religious",
      duration: "1-2 hours"
    },
    {
      name: "Sagam Cheruvu Lake",
      description: "Pristine lake perfect for boating, fishing, and peaceful meditation",
      image: villageLake,
      type: "Nature",
      duration: "2-3 hours"
    },
    {
      name: "Agricultural Fields",
      description: "Experience traditional farming methods and rural life",
      image: villageAgriculture,
      type: "Cultural",
      duration: "3-4 hours"
    },
    {
      name: "Cultural Festivals",
      description: "Vibrant celebrations showcasing local traditions and arts",
      image: villageFestival,
      type: "Cultural",
      duration: "Full day"
    }
  ];

  const activities = [
    "Village walking tours",
    "Traditional cooking classes",
    "Boat rides on the lake",
    "Bird watching",
    "Photography workshops",
    "Organic farming experience",
    "Temple meditation sessions",
    "Cultural performances"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Explore Sagam Cheruvu</h1>
            <p className="text-xl">Discover the beauty and culture of our village</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Village</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Sagam Cheruvu offers a unique blend of natural beauty, cultural richness, and authentic rural experiences. 
            Come and discover the charm of traditional Indian village life while enjoying modern amenities and hospitality.
          </p>
        </div>

        {/* Attractions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">Top Attractions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{attraction.type}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {attraction.name}
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{attraction.duration}</span>
                    </div>
                  </CardTitle>
                  <CardDescription>{attraction.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Things to Do</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-secondary rounded-lg">
                  <Camera className="w-5 h-5 text-primary" />
                  <span className="text-sm">{activity}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Visitor Information</h3>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Best Time to Visit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    October to March offers pleasant weather. Monsoon season (June-September) 
                    showcases lush green landscapes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How to Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nearest railway station: 25 km away. Regular bus services available from 
                    major cities. Local transportation includes auto-rickshaws and bicycles.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Accommodation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Traditional homestays, guesthouses, and eco-friendly resorts available. 
                    Experience authentic village hospitality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-secondary rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Plan Your Visit</h3>
          <p className="text-muted-foreground mb-6">
            Ready to experience the authentic charm of Sagam Cheruvu? Contact us for guided tours, 
            accommodation bookings, and custom itineraries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Village Tourism Office</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-primary" />
              <span>Licensed Tour Guides Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourism;