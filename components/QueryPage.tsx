import { Search, Filter, MessageSquare, Calendar, Clock, CheckCircle, AlertCircle, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useTranslation, Language } from "../utils/translations";

interface QueryPageProps {
  language: Language;
  onOpenChat: () => void;
}

export function QueryPage({ language, onOpenChat }: QueryPageProps) {
  const t = useTranslation(language);

  const queries = [
    {
      id: "Q001",
      question: "How to treat wheat rust disease affecting my 3-acre field?",
      category: "Disease Management",
      status: "resolved",
      priority: "high",
      createdAt: "2024-01-15",
      resolvedAt: "2024-01-15",
      expert: "Dr. Priya Sharma",
      solution: "Apply Propiconazole-based fungicide (2ml/liter) immediately. Ensure proper field drainage and avoid overhead irrigation.",
      satisfaction: 5
    },
    {
      id: "Q002",
      question: "Best time for cotton sowing in my region (Rajasthan)?",
      category: "Crop Planning",
      status: "in-progress",
      priority: "medium",
      createdAt: "2024-01-12",
      expert: "Agricultural Officer",
      solution: null,
      satisfaction: null
    },
    {
      id: "Q003",
      question: "Government subsidy available for drip irrigation setup?",
      category: "Subsidies",
      status: "resolved",
      priority: "low",
      createdAt: "2024-01-10",
      resolvedAt: "2024-01-11",
      expert: "District Officer",
      solution: "You're eligible for 55% subsidy under PMKSY scheme. Required documents: land records, bank details, estimate from approved vendor.",
      satisfaction: 4
    },
    {
      id: "Q004",
      question: "Organic pest control methods for tomato cultivation",
      category: "Organic Farming",
      status: "resolved",
      priority: "medium",
      createdAt: "2024-01-08",
      resolvedAt: "2024-01-09",
      expert: "Dr. Raj Kumar",
      solution: "Use neem oil spray (5ml/liter), introduce beneficial insects like ladybugs, and maintain proper plant spacing for air circulation.",
      satisfaction: 5
    },
    {
      id: "Q005",
      question: "Soil health improvement techniques for sandy soil",
      category: "Soil Management",
      status: "pending",
      priority: "medium",
      createdAt: "2024-01-14",
      expert: null,
      solution: null,
      satisfaction: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-green-100 text-green-700';
      case 'in-progress': return 'bg-yellow-100 text-yellow-700';
      case 'pending': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
    ));
  };

  const resolvedQueries = queries.filter(q => q.status === 'resolved');
  const activeQueries = queries.filter(q => q.status !== 'resolved');

  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl mb-4" style={{ color: '#205A28' }}>
            {t.queryTitle}
          </h1>
          <p className="text-gray-600 mb-6">
            Track your farming queries, view expert solutions, and manage your agricultural consultations.
          </p>
          
          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search your queries..." className="pl-10" />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button onClick={onOpenChat} style={{ backgroundColor: '#205A28' }}>
                <MessageSquare className="mr-2 h-4 w-4" />
                Ask New Query
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold" style={{ color: '#205A28' }}>
                {queries.length}
              </div>
              <div className="text-sm text-gray-600">Total Queries</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {resolvedQueries.length}
              </div>
              <div className="text-sm text-gray-600">Resolved</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {activeQueries.length}
              </div>
              <div className="text-sm text-gray-600">Active</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {resolvedQueries.reduce((sum, q) => sum + (q.satisfaction || 0), 0) / resolvedQueries.length || 0}⭐
              </div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Query Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Queries</TabsTrigger>
            <TabsTrigger value="active">Active ({activeQueries.length})</TabsTrigger>
            <TabsTrigger value="resolved">Resolved ({resolvedQueries.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4 mt-6">
            {queries.map((query) => (
              <QueryCard key={query.id} query={query} />
            ))}
          </TabsContent>

          <TabsContent value="active" className="space-y-4 mt-6">
            {activeQueries.map((query) => (
              <QueryCard key={query.id} query={query} />
            ))}
          </TabsContent>

          <TabsContent value="resolved" className="space-y-4 mt-6">
            {resolvedQueries.map((query) => (
              <QueryCard key={query.id} query={query} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );

  function QueryCard({ query }: { query: typeof queries[0] }) {
    return (
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="outline" className="text-xs">
                  {query.id}
                </Badge>
                <Badge className={getStatusColor(query.status)}>
                  {query.status.replace('-', ' ')}
                </Badge>
                <Badge className={getPriorityColor(query.priority)}>
                  {query.priority}
                </Badge>
              </div>
              <CardTitle className="text-lg">{query.question}</CardTitle>
              <p className="text-sm text-gray-600">{query.category}</p>
            </div>
            <div className="text-right text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(query.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {query.solution && (
            <div className="mb-4 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center mb-2">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="font-medium text-green-800">Expert Solution</span>
              </div>
              <p className="text-gray-700 text-sm">{query.solution}</p>
              {query.expert && (
                <p className="text-xs text-gray-600 mt-2">- {query.expert}</p>
              )}
              
              {query.satisfaction && (
                <div className="flex items-center mt-3">
                  <span className="text-sm text-gray-600 mr-2">Your Rating:</span>
                  <div className="flex">{renderStars(query.satisfaction)}</div>
                </div>
              )}
            </div>
          )}

          {query.status === 'in-progress' && (
            <div className="mb-4 p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-yellow-600 mr-2" />
                <span className="font-medium text-yellow-800">In Progress</span>
              </div>
              <p className="text-gray-700 text-sm">
                Your query is being reviewed by {query.expert}. You'll receive a solution within 24 hours.
              </p>
            </div>
          )}

          {query.status === 'pending' && (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-2">
                <AlertCircle className="h-4 w-4 text-gray-600 mr-2" />
                <span className="font-medium text-gray-800">Pending Assignment</span>
              </div>
              <p className="text-gray-700 text-sm">
                Your query is in queue and will be assigned to an expert shortly.
              </p>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Category: {query.category}</span>
              {query.resolvedAt && (
                <span>Resolved: {new Date(query.resolvedAt).toLocaleDateString()}</span>
              )}
            </div>
            
            <div className="flex space-x-2">
              {query.status !== 'resolved' && (
                <Button variant="outline" size="sm" style={{ color: '#C72B32', borderColor: '#C72B32' }}>
                  <Phone className="h-4 w-4 mr-1" />
                  Escalate
                </Button>
              )}
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}