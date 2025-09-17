import { AlertTriangle, CheckCircle, Clock, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { useTranslation, Language } from "../utils/translations";

interface AdvisorySectionProps {
  language: Language;
}

export function AdvisorySection({ language }: AdvisorySectionProps) {
  const t = useTranslation(language);
  const advisories = [
    {
      id: 1,
      title: t.wheatRustTitle,
      type: "warning",
      priority: "high",
      expert: t.expertPriya,
      time: t.hoursAgo,
      content: t.wheatRustContent,
      action: t.wheatRustAction,
      status: t.urgent
    },
    {
      id: 2,
      title: t.sowingTimeTitle,
      type: "advisory",
      priority: "medium",
      expert: t.agriculturalOfficer,
      time: t.dayAgo,
      content: t.sowingTimeContent,
      action: t.sowingTimeAction,
      status: t.active
    },
    {
      id: 3,
      title: t.subsidyUpdateTitle,
      type: "info",
      priority: "low",
      expert: t.districtCollector,
      time: t.daysAgo,
      content: t.subsidyUpdateContent,
      action: t.subsidyUpdateAction,
      status: t.completed
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4" style={{ color: '#205A28' }}>
            {t.latestAdvisories}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.advisoriesDesc}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {advisories.map((advisory) => (
            <Card 
              key={advisory.id} 
              className={`border-l-4 ${
                advisory.type === 'warning' ? 'border-l-red-500' : 
                advisory.type === 'advisory' ? 'border-l-yellow-500' : 
                'border-l-green-500'
              } hover:shadow-lg transition-shadow`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    {advisory.type === 'warning' && (
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                    )}
                    {advisory.type === 'advisory' && (
                      <Clock className="h-5 w-5 text-yellow-500" />
                    )}
                    {advisory.type === 'info' && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                    <Badge 
                      variant={
                        advisory.priority === 'high' ? 'destructive' : 
                        advisory.priority === 'medium' ? 'secondary' : 
                        'outline'
                      }
                    >
                      {advisory.priority.toUpperCase()}
                    </Badge>
                  </div>
                  <span className="text-sm text-gray-500">{advisory.time}</span>
                </div>
                <CardTitle 
                  className={`text-lg ${
                    advisory.type === 'warning' ? 'text-red-700' : 'text-green-700'
                  }`}
                >
                  {advisory.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {advisory.content}
                </p>

                <div 
                  className={`p-3 rounded-lg mb-4 ${
                    advisory.type === 'warning' ? 'bg-red-50' : 
                    advisory.type === 'advisory' ? 'bg-yellow-50' : 
                    'bg-green-50'
                  }`}
                >
                  <p className="font-medium text-sm">
                    📋 <strong>{t.actionRequired}:</strong> {advisory.action}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    {advisory.expert}
                  </div>
                  <Badge 
                    variant={advisory.status === 'urgent' ? 'destructive' : 'outline'}
                    className={`${
                      advisory.status === 'completed' ? 'bg-green-100 text-green-700' : ''
                    }`}
                  >
                    {advisory.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}