import { User, Edit, MapPin, Phone, Mail, Calendar, Leaf, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useTranslation, Language } from "../utils/translations";

interface ProfilePageProps {
  language: Language;
}

export function ProfilePage({ language }: ProfilePageProps) {
  const t = useTranslation(language);

  const userStats = [
    { label: "Queries Resolved", value: "42", icon: "✅" },
    { label: "Expert Connections", value: "8", icon: "👨‍🌾" },
    { label: "Satisfaction Rate", value: "98%", icon: "⭐" },
    { label: "Member Since", value: "2023", icon: "📅" }
  ];

  const recentQueries = [
    { id: 1, question: "How to treat wheat rust disease?", status: "Resolved", date: "2 days ago" },
    { id: 2, question: "Best time for cotton sowing", status: "In Progress", date: "1 week ago" },
    { id: 3, question: "Government subsidy for drip irrigation", status: "Resolved", date: "2 weeks ago" }
  ];

  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl mb-2" style={{ color: '#205A28' }}>
            {t.profileTitle}
          </h1>
          <p className="text-gray-600">Manage your farming profile and track your progress</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#205A28' }}>
                  <User className="h-12 w-12 text-white" />
                </div>
                <CardTitle style={{ color: '#205A28' }}>Rajesh Kumar</CardTitle>
                <p className="text-gray-600">Organic Farmer</p>
                <Badge variant="outline" className="w-fit mx-auto mt-2">
                  <Leaf className="h-3 w-3 mr-1" />
                  Verified Farmer
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Village Rampur, District Meerut, UP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">rajesh.kumar@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Member since Jan 2023</span>
                </div>
                
                <Button className="w-full mt-4" style={{ backgroundColor: '#205A28' }}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Stats and Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {userStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold" style={{ color: '#205A28' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Farm Details */}
            <Card>
              <CardHeader>
                <CardTitle style={{ color: '#205A28' }}>Farm Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Farm Size</label>
                    <p className="text-lg">5.2 Acres</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Soil Type</label>
                    <p className="text-lg">Alluvial Soil</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Primary Crops</label>
                    <p className="text-lg">Wheat, Rice, Sugarcane</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Irrigation Method</label>
                    <p className="text-lg">Drip Irrigation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Queries */}
            <Card>
              <CardHeader>
                <CardTitle style={{ color: '#205A28' }}>Recent Queries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentQueries.map((query) => (
                    <div key={query.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{query.question}</p>
                        <p className="text-sm text-gray-600">{query.date}</p>
                      </div>
                      <Badge 
                        variant={query.status === 'Resolved' ? 'default' : 'secondary'}
                        className={query.status === 'Resolved' ? 'bg-green-100 text-green-700' : ''}
                      >
                        {query.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Queries
                </Button>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle style={{ color: '#205A28' }}>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <Award className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="font-medium">Expert Contributor</p>
                      <p className="text-sm text-gray-600">Helped 20+ farmers</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Award className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="font-medium">Active Member</p>
                      <p className="text-sm text-gray-600">1 year membership</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}