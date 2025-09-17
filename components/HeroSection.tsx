import { MessageCircle, Mic, Camera, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslation, Language } from "../utils/translations";

interface HeroSectionProps {
  onOpenChat: () => void;
  language: Language;
}

export function HeroSection({ onOpenChat, language }: HeroSectionProps) {
  const t = useTranslation(language);
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1690986375486-460dc48dd499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBhZ3JpY3VsdHVyZSUyMGZpZWxkJTIwZ3JlZW4lMjBjcm9wc3xlbnwxfHx8fDE3NTgwOTY3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Farmer in field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl lg:text-6xl mb-6 max-w-4xl mx-auto">
          {t.heroTitle}
        </h1>
        <p className="text-xl lg:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          {t.heroSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={onOpenChat}
            size="lg" 
            style={{ backgroundColor: '#205A28' }}
            className="text-lg px-8 py-4 hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            {t.askYourQuery}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-lg">
              <Mic size={16} />
              <span>{t.voice}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-lg">
              <Camera size={16} />
              <span>{t.image}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-lg">
              <MessageCircle size={16} />
              <span>{t.text}</span>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-lg mb-4">🌱 <strong>{t.trustedBy}</strong></p>
          <div className="flex justify-center gap-8 text-sm">
            <div>
              <div className="text-2xl font-bold" style={{ color: '#205A28' }}>24/7</div>
              <div>{t.expertSupport}</div>
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: '#205A28' }}>98%</div>
              <div>{t.successRate}</div>
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: '#205A28' }}>5min</div>
              <div>{t.avgResponse}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}