import { Bug, CloudRain, DollarSign, TrendingUp, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useTranslation, Language } from "../utils/translations";

interface ShortcutCardsProps {
  onOpenChat: (topic: string) => void;
  language: Language;
}

export function ShortcutCards({ onOpenChat, language }: ShortcutCardsProps) {
  const t = useTranslation(language);
  const shortcuts = [
    {
      icon: <Bug className="h-8 w-8" />,
      title: t.pestControl,
      description: t.pestControlDesc,
      color: "#205A28",
      topic: "pest control"
    },
    {
      icon: <CloudRain className="h-8 w-8" />,
      title: t.weatherAdvisory,
      description: t.weatherAdvisoryDesc,
      color: "#4A90E2",
      topic: "weather"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: t.subsidies,
      description: t.subsidiesDesc,
      color: "#F5A623",
      topic: "subsidies"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: t.marketTrends,
      description: t.marketTrendsDesc,
      color: "#7ED321",
      topic: "market trends"
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4" style={{ color: '#205A28' }}>
            {t.quickSolutions}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.quickSolutionsDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shortcuts.map((shortcut, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-green-200"
              onClick={() => onOpenChat(shortcut.topic)}
            >
              <CardContent className="p-6 text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: shortcut.color }}
                >
                  {shortcut.icon}
                </div>
                <h3 className="text-xl mb-2" style={{ color: '#205A28' }}>
                  {shortcut.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {shortcut.description}
                </p>
                <div className="flex items-center justify-center text-sm group-hover:text-green-600 transition-colors">
                  <span>{t.getHelp}</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}