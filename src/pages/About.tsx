import { Users, MapPin, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import villageTemple from "@/assets/village-temple.jpg";
import villageLake from "@/assets/village-lake.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">About Sagam Cheruvu</h1>
            <p className="text-xl">Discover our rich heritage and vibrant community</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Village Story</h2>
            <p className="text-muted-foreground mb-4">
              Sagam Cheruvu, meaning "Ocean Lake" in the local language, is a picturesque village 
              nestled in the heart of rural India. With a history spanning several centuries, 
              our village has been a testament to the harmonious blend of tradition and progress.
            </p>
            <p className="text-muted-foreground mb-4">
              The village gets its name from the beautiful lake that serves as its centerpiece, 
              providing water for irrigation and serving as a gathering place for the community. 
              Our ancestors settled here for the fertile lands and abundant water resources.
            </p>
            <p className="text-muted-foreground">
              Today, Sagam Cheruvu is home to a thriving community that values education, 
              agriculture, and cultural preservation while embracing modern development.
            </p>
          </div>
          <div className="relative">
            <img 
              src={villageTemple} 
              alt="Village Temple" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Population</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,500+</div>
              <p className="text-xs text-muted-foreground">Residents</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Area</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15 km²</div>
              <p className="text-xs text-muted-foreground">Total area</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Established</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1850</div>
              <p className="text-xs text-muted-foreground">Founded</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Literacy Rate</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">Education level</p>
            </CardContent>
          </Card>
        </div>

        {/* Geography and Culture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img 
              src={villageLake} 
              alt="Village Lake" 
              className="rounded-lg shadow-lg w-full h-64 object-cover mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">Geography & Climate</h3>
            <p className="text-muted-foreground mb-4">
              Located in a fertile plain with the central lake (cheruvu) as our main water source, 
              the village enjoys a tropical climate with distinct wet and dry seasons. The surrounding 
              agricultural fields produce rice, vegetables, and various crops.
            </p>
            <p className="text-muted-foreground">
              The landscape is dotted with ancient trees, traditional houses, and modern infrastructure 
              that coexist harmoniously with the natural environment.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Culture & Traditions</h3>
            <p className="text-muted-foreground mb-4">
              Our village is rich in cultural traditions that have been passed down through generations. 
              We celebrate various festivals throughout the year, including traditional harvest festivals, 
              religious ceremonies, and cultural events that bring the entire community together.
            </p>
            <p className="text-muted-foreground mb-4">
              The village temple serves as the spiritual center of our community, hosting regular prayers 
              and special ceremonies. Traditional arts, crafts, and music are actively preserved and 
              taught to younger generations.
            </p>
            <p className="text-muted-foreground">
              Agriculture remains the primary occupation, with many families engaged in organic farming 
              and sustainable agricultural practices that respect our environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;