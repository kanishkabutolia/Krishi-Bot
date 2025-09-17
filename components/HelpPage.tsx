import { Search, Phone, MessageCircle, Book, Video, Download, HelpCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { useTranslation, Language } from "../utils/translations";

interface HelpPageProps {
  language: Language;
}

export function HelpPage({ language }: HelpPageProps) {
  const t = useTranslation(language);

  const helpCategories = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Getting Started",
      description: "Learn how to use FarmerAssist platform effectively",
      articles: 12
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: "Crop Management",
      description: "Expert guides on crop planning and management",
      articles: 25
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Expert Consultation",
      description: "How to connect with agricultural experts",
      articles: 8
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Tutorials",
      description: "Step-by-step farming technique videos",
      articles: 15
    }
  ];

  const faqs = [
    {
      question: "How do I ask a farming question?",
      answer: "You can ask questions through our chatbot by clicking the floating chat icon, using voice commands, uploading images of your crops, or typing your question directly."
    },
    {
      question: "Is the service available 24/7?",
      answer: "Yes, our AI-powered chatbot is available 24/7. For expert consultations, agricultural officers are available during business hours (9 AM - 6 PM)."
    },
    {
      question: "How do I escalate my query to an expert?",
      answer: "If you need expert help, click the 'Connect to Officer' button in the chatbot or use the escalation feature in any conversation."
    },
    {
      question: "What languages are supported?",
      answer: "Currently, we support English, Hindi, and Malayalam. You can change the language from the navigation bar."
    },
    {
      question: "How do I check government subsidy eligibility?",
      answer: "Ask about specific subsidies in the chatbot or use the 'Subsidies & Loans' shortcut card. Our system will guide you through eligibility criteria."
    },
    {
      question: "Can I upload images of crop diseases?",
      answer: "Yes, you can upload images through the chatbot's image upload feature. Our AI will analyze the image and provide recommendations."
    }
  ];

  const quickActions = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Emergency Helpline",
      description: "1800-180-1551",
      action: "Call Now",
      urgent: true
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Live Chat Support",
      description: "Chat with our support team",
      action: "Start Chat",
      urgent: false
    },
    {
      icon: <Download className="h-5 w-5" />,
      title: "Mobile App",
      description: "Download our mobile app",
      action: "Download",
      urgent: false
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl mb-4" style={{ color: '#205A28' }}>
            {t.helpTitle}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to your questions, learn farming techniques, and get the support you need.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search for help articles..."
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {quickActions.map((action, index) => (
            <Card key={index} className={`cursor-pointer hover:shadow-lg transition-shadow ${
              action.urgent ? 'border-red-200 bg-red-50' : ''
            }`}>
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  action.urgent ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                }`}>
                  {action.icon}
                </div>
                <h3 className="font-semibold mb-2">{action.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{action.description}</p>
                <Button 
                  variant={action.urgent ? "destructive" : "default"}
                  size="sm"
                  style={!action.urgent ? { backgroundColor: '#205A28' } : {}}
                >
                  {action.action}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help Categories */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6" style={{ color: '#205A28' }}>Browse Help Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div 
                    className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: '#205A28' }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <p className="text-xs text-gray-500">{category.articles} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6" style={{ color: '#205A28' }}>Frequently Asked Questions</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center">
                        <HelpCircle className="h-4 w-4 mr-2 text-green-600" />
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Contact Support */}
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🌾</div>
            <h3 className="text-xl mb-4" style={{ color: '#205A28' }}>Still Need Help?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is here to help you succeed in your farming journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button style={{ backgroundColor: '#205A28' }}>
                <MessageCircle className="mr-2 h-4 w-4" />
                Start Live Chat
              </Button>
              <Button variant="outline" className="border-green-300 text-green-700">
                <Phone className="mr-2 h-4 w-4" />
                Call Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}