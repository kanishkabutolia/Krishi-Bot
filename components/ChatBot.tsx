import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Mic, Camera, AlertTriangle, Phone, Keyboard, Upload, MicOff } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { useTranslation, Language } from "../utils/translations";

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'system';
  timestamp: Date;
  isWarning?: boolean;
}

interface ChatBotProps {
  isOpen: boolean;
  onToggle: () => void;
  initialTopic?: string;
  language: Language;
}

export function ChatBot({ isOpen, onToggle, initialTopic, language }: ChatBotProps) {
  const t = useTranslation(language);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [activeTab, setActiveTab] = useState<'text' | 'voice' | 'image'>('text');
  const [showSuggestions, setShowSuggestions] = useState(true);

  const suggestedTopics = [
    { text: "Pest control in wheat", icon: "🐛" },
    { text: "Weather advisory", icon: "🌤️" },
    { text: "Government subsidies", icon: "💰" },
    { text: "Market prices today", icon: "📈" },
    { text: "Soil health check", icon: "🌱" },
    { text: "Organic farming tips", icon: "🌿" }
  ];

  // Initialize messages when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: '1',
        content: initialTopic 
          ? `${language === 'hi' ? 'नमस्ते!' : language === 'ml' ? 'ഹലോ!' : 'Hello!'} ${language === 'hi' ? 'मैं देख रहा हूं कि आप' : language === 'ml' ? 'നിങ്ങൾക്ക് താൽപ്പര്യമുണ്ടെന്ന് ഞാൻ കാണുന്നു' : 'I see you\'re interested in'} ${initialTopic}${language === 'hi' ? ' में रुचि रखते हैं। आज मैं आपकी कैसे मदद कर सकता हूं?' : language === 'ml' ? '. ഇന്ന് എനിക്ക് നിങ്ങളെ എങ്ങനെ സഹായിക്കാനാകും?' : '. How can I help you today?'}`
          : language === 'hi' ? "नमस्ते! मैं आपका कृषि सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?" : language === 'ml' ? "ഹലോ! ഞാൻ നിങ്ങളുടെ കാർഷിക സഹായകനാണ്. ഇന്ന് എനിക്ക് നിങ്ങളെ എങ്ങനെ സഹായിക്കാനാകും?" : "Hello! I'm your agricultural assistant. How can I help you today?",
        sender: 'system',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
      setShowSuggestions(!initialTopic);
    }
  }, [isOpen, initialTopic, messages.length, language]);

  const sendMessage = (message?: string) => {
    const content = message || inputMessage;
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: content,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setShowSuggestions(false);

    // Simulate system response
    setTimeout(() => {
      const systemResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(content),
        sender: 'system',
        timestamp: new Date(),
        isWarning: content.toLowerCase().includes('disease') || content.toLowerCase().includes('pest')
      };
      setMessages(prev => [...prev, systemResponse]);
    }, 1000);
  };

  const generateResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    // Check for language-specific keywords
    const isPestQuery = lowerInput.includes('pest') || lowerInput.includes('insect') || 
                       lowerInput.includes('कीट') || lowerInput.includes('पेस्ट') || 
                       lowerInput.includes('കീട');
    
    const isWeatherQuery = lowerInput.includes('weather') || lowerInput.includes('rain') || 
                          lowerInput.includes('मौसम') || lowerInput.includes('बारिश') || 
                          lowerInput.includes('കാലാവസ്ഥ') || lowerInput.includes('മഴ');
    
    const isSubsidyQuery = lowerInput.includes('subsidy') || lowerInput.includes('loan') || 
                          lowerInput.includes('सब्सिडी') || lowerInput.includes('योजना') || 
                          lowerInput.includes('സബ്സിഡി') || lowerInput.includes('പദ്ധതി');
    
    const isMarketQuery = lowerInput.includes('market') || lowerInput.includes('price') || 
                         lowerInput.includes('बाजार') || lowerInput.includes('कीमत') || 
                         lowerInput.includes('വിപണി') || lowerInput.includes('വില');
    
    if (isPestQuery) {
      return t.pestControlResponse;
    }
    
    if (isWeatherQuery) {
      return t.weatherResponse;
    }
    
    if (isSubsidyQuery) {
      return t.subsidyResponse;
    }
    
    if (isMarketQuery) {
      return t.marketResponse;
    }

    return t.defaultResponse;
  };

  const escalateToOfficer = () => {
    const escalationMessage: ChatMessage = {
      id: Date.now().toString(),
      content: t.escalationResponse,
      sender: 'system',
      timestamp: new Date(),
      isWarning: true
    };
    setMessages(prev => [...prev, escalationMessage]);
  };

  const handleVoiceToggle = () => {
    setIsRecording(!isRecording);
    // Simulate voice recording functionality
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        sendMessage(t.voiceMessage);
      }, 3000);
    }
  };

  const handleImageUpload = () => {
    // Simulate image upload
    sendMessage(t.imageMessage);
  };

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 animate-pulse"
        style={{ backgroundColor: '#205A28' }}
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[650px] z-50 shadow-xl">
      <Card className="h-full flex flex-col">
        <CardHeader style={{ backgroundColor: '#205A28' }} className="text-white p-4 rounded-t-lg flex-shrink-0">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              {t.chatTitle}
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onToggle} className="text-white hover:bg-white/20">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm opacity-90">{t.chatSubtitle}</p>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0 min-h-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'text-white'
                      : message.isWarning
                      ? 'bg-red-50 border border-red-200'
                      : 'bg-gray-100'
                  }`}
                  style={message.sender === 'user' ? { backgroundColor: '#205A28' } : {}}
                >
                  {message.isWarning && (
                    <div className="flex items-center mb-2" style={{ color: '#C72B32' }}>
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      <span className="text-sm">Important</span>
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                  <span className={`text-xs mt-1 block ${
                    message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {/* Suggested Topics */}
            {showSuggestions && (
              <div className="space-y-3">
                <p className="text-sm text-gray-600 font-medium">{t.suggestedTopics}:</p>
                <div className="grid grid-cols-2 gap-2">
                  {suggestedTopics.map((topic, index) => (
                    <button
                      key={index}
                      onClick={() => sendMessage(topic.text)}
                      className="p-2 text-left border rounded-lg hover:bg-green-50 hover:border-green-200 transition-colors"
                    >
                      <div className="flex items-center space-x-1">
                        <span className="text-sm">{topic.icon}</span>
                        <span className="text-xs">{topic.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Escalation Button */}
          <div className="p-2 border-t flex-shrink-0">
            <Button
              onClick={escalateToOfficer}
              size="sm"
              className="w-full text-white"
              style={{ backgroundColor: '#C72B32' }}
            >
              <Phone className="mr-2 h-4 w-4" />
              {t.connectOfficer}
            </Button>
          </div>

          {/* Input Tabs */}
          <div className="border-t flex-shrink-0">
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'text' | 'voice' | 'image')}>
              <TabsList className="grid w-full grid-cols-3 bg-gray-50 h-12">
                <TabsTrigger value="text" className="flex items-center justify-center space-x-1 cursor-pointer">
                  <Keyboard className="h-4 w-4" />
                  <span className="text-xs">{t.text}</span>
                </TabsTrigger>
                <TabsTrigger value="voice" className="flex items-center justify-center space-x-1 cursor-pointer">
                  <Mic className="h-4 w-4" />
                  <span className="text-xs">{t.voice}</span>
                </TabsTrigger>
                <TabsTrigger value="image" className="flex items-center justify-center space-x-1 cursor-pointer">
                  <Camera className="h-4 w-4" />
                  <span className="text-xs">{t.image}</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="text" className="p-3 m-0">
                <div className="flex items-center space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder={t.typeMessage}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    className="flex-1"
                  />
                  <Button 
                    size="sm" 
                    onClick={() => sendMessage()} 
                    style={{ backgroundColor: '#205A28' }} 
                    className="text-white"
                    disabled={!inputMessage.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="voice" className="p-3 m-0">
                <div className="text-center space-y-3">
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center cursor-pointer ${
                    isRecording ? 'bg-red-100 animate-pulse' : 'bg-green-100'
                  }`} onClick={handleVoiceToggle}>
                    {isRecording ? (
                      <MicOff className="h-6 w-6 text-red-600" />
                    ) : (
                      <Mic className="h-6 w-6 text-green-600" />
                    )}
                  </div>
                  <div>
                    {isRecording ? (
                      <div>
                        <p className="text-sm text-red-600 font-medium">Recording...</p>
                        <p className="text-xs text-gray-500">Tap to stop</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm text-gray-600">Tap to record your question</p>
                        <p className="text-xs text-gray-500">Speak clearly in your preferred language</p>
                      </div>
                    )}
                  </div>
                  <Button
                    onClick={handleVoiceToggle}
                    className={`w-full ${isRecording ? 'bg-red-500 hover:bg-red-600' : ''}`}
                    style={!isRecording ? { backgroundColor: '#205A28' } : {}}
                  >
                    {isRecording ? t.stopRecording : t.startRecording}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="image" className="p-3 m-0">
                <div className="text-center space-y-3">
                  <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer" onClick={handleImageUpload}>
                    <Upload className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Upload a photo of your crop issue</p>
                    <p className="text-xs text-gray-500">Supports JPG, PNG up to 5MB</p>
                  </div>
                  <Button
                    onClick={handleImageUpload}
                    style={{ backgroundColor: '#205A28' }}
                    className="w-full"
                  >
                    <Camera className="mr-2 h-4 w-4" />
                    {t.uploadImage}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}