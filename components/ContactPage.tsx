import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Facebook, Twitter, Youtube } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useTranslation, Language } from "../utils/translations";

interface ContactPageProps {
  language: Language;
}

export function ContactPage({ language }: ContactPageProps) {
  const t = useTranslation(language);

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      details: [
        "Helpline: 1800-180-1551",
        "SMS: Send 'HELP' to 51969",
        "Available 24/7"
      ],
      color: "#205A28"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      details: [
        "help@farmerassist.gov.in",
        "feedback@farmerassist.gov.in",
        "Response within 24 hours"
      ],
      color: "#4A90E2"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      details: [
        "Instant responses",
        "AI-powered assistance",
        "Expert escalation available"
      ],
      color: "#7ED321"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: [
        "Ministry of Agriculture",
        "New Delhi - 110001",
        "Mon-Fri: 9 AM - 6 PM"
      ],
      color: "#F5A623"
    }
  ];

  const offices = [
    {
      state: "Uttar Pradesh",
      address: "Agricultural Directorate, Krishi Bhawan, Lucknow - 226001",
      phone: "0522-2286532",
      email: "agri.up@gov.in"
    },
    {
      state: "Punjab",
      address: "Department of Agriculture, Sector 35-A, Chandigarh - 160036",
      phone: "0172-2601989",
      email: "agri.punjab@gov.in"
    },
    {
      state: "Kerala",
      address: "Agriculture Department, Vikas Bhawan, Thiruvananthapuram - 695033",
      phone: "0471-2305326",
      email: "agri.kerala@gov.in"
    },
    {
      state: "Maharashtra",
      address: "Commissionerate of Agriculture, Pune - 411001",
      phone: "020-26127394",
      email: "agri.maharashtra@gov.in"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl mb-4" style={{ color: '#205A28' }}>
            {t.contactTitle}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our agricultural experts and support team. We're here to help you succeed in farming.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div 
                  className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: method.color }}
                >
                  {method.icon}
                </div>
                <h3 className="font-semibold mb-4" style={{ color: '#205A28' }}>
                  {method.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  {method.details.map((detail, idx) => (
                    <div key={idx}>{detail}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle style={{ color: '#205A28' }}>Send us a Message</CardTitle>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <Input placeholder="Enter your phone number" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <Input placeholder="Enter your email address" type="email" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <Input placeholder="Village, District, State" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject *</label>
                <Input placeholder="What is your query about?" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <Textarea 
                  placeholder="Describe your farming question or issue in detail..."
                  rows={5}
                />
              </div>
              
              <Button className="w-full" style={{ backgroundColor: '#205A28' }}>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Office Hours & Emergency */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle style={{ color: '#205A28' }}>Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Regular Support</p>
                    <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-medium">Emergency Helpline</p>
                    <p className="text-sm text-gray-600">Available 24/7 for urgent farming issues</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">AI Chat Assistant</p>
                    <p className="text-sm text-gray-600">Always available for instant help</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card style={{ backgroundColor: '#FFF3CD', borderColor: '#F5C842' }}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2" style={{ color: '#C72B32' }}>
                  🚨 Emergency Situations
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  For urgent crop diseases, pest attacks, or weather-related emergencies, call our emergency helpline immediately.
                </p>
                <Button 
                  className="w-full text-white"
                  style={{ backgroundColor: '#C72B32' }}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency: 1800-180-1551
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle style={{ color: '#205A28' }}>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Youtube className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Stay updated with latest farming tips, weather alerts, and government schemes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Regional Offices */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: '#205A28' }}>Regional Offices</CardTitle>
            <p className="text-gray-600">Contact your nearest regional office for local support</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {offices.map((office, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3" style={{ color: '#205A28' }}>
                    {office.state}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 mt-0.5 text-gray-400" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span>{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}