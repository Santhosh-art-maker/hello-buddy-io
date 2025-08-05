import { Calendar, Clock, MapPin, Users, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import villageFestival from "@/assets/village-festival.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Harvest Festival",
      date: "March 15, 2024",
      time: "6:00 AM - 10:00 PM",
      location: "Village Center",
      description: "Annual celebration of successful harvest with traditional dances, music, and feast",
      type: "Cultural",
      attendees: "500+ expected"
    },
    {
      title: "Health & Wellness Camp",
      date: "March 22, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Primary Health Center",
      description: "Free medical checkups, vaccination drive, and health awareness programs",
      type: "Health",
      attendees: "300+ expected"
    },
    {
      title: "Youth Sports Tournament",
      date: "April 5-7, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "Village Sports Ground",
      description: "Inter-village cricket and volleyball tournament for youth",
      type: "Sports",
      attendees: "200+ participants"
    },
    {
      title: "Cultural Heritage Week",
      date: "April 15-21, 2024",
      time: "Various timings",
      location: "Multiple venues",
      description: "Week-long celebration of local arts, crafts, and traditional performances",
      type: "Cultural",
      attendees: "1000+ expected"
    }
  ];

  const regularEvents = [
    {
      title: "Weekly Market",
      schedule: "Every Tuesday & Friday",
      time: "6:00 AM - 2:00 PM",
      description: "Fresh produce, local crafts, and household items"
    },
    {
      title: "Temple Prayers",
      schedule: "Daily",
      time: "6:00 AM & 6:00 PM",
      description: "Daily prayers and spiritual gatherings"
    },
    {
      title: "Youth Club Meetings",
      schedule: "Every Saturday",
      time: "4:00 PM - 6:00 PM",
      description: "Sports activities and community service planning"
    },
    {
      title: "Women's Group Meeting",
      schedule: "First Monday of month",
      time: "10:00 AM - 12:00 PM",
      description: "Skill development and community discussions"
    }
  ];

  const pastEvents = [
    {
      title: "Republic Day Celebration",
      date: "January 26, 2024",
      highlights: "Flag hoisting, cultural programs, sports competitions"
    },
    {
      title: "New Year Festival",
      date: "January 1, 2024",
      highlights: "Community feast, traditional games, fireworks"
    },
    {
      title: "Annual Village Fair",
      date: "December 2023",
      highlights: "3-day fair with rides, food stalls, cultural performances"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Village Events</h1>
            <p className="text-xl">Celebrating community spirit throughout the year</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Event */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Featured Event</h2>
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={villageFestival} 
                  alt="Village Festival"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Harvest Festival 2024</h3>
                <p className="text-muted-foreground mb-6">
                  Join us for our biggest celebration of the year! The annual Harvest Festival 
                  brings together the entire community to celebrate our agricultural heritage 
                  with traditional dances, local cuisine, craft exhibitions, and cultural performances.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm">March 15, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">Village Center</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">500+ expected attendees</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{event.attendees}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regular Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Regular Events</h3>
            <div className="space-y-4">
              {regularEvents.map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{event.schedule}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Recent Highlights</h3>
            <div className="space-y-4">
              {pastEvents.map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>{event.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{event.highlights}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Event Calendar */}
        <div className="text-center bg-secondary rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Event Calendar</h3>
          <p className="text-muted-foreground mb-6">
            Stay updated with all village events and activities. Follow our calendar to never miss 
            an important celebration or community gathering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-primary" />
              <span>Monthly newsletters available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Event reminders via village announcements</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;