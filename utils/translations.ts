export type Language = 'en' | 'hi' | 'ml';

export interface Translations {
  // Navigation
  home: string;
  queries: string;
  myProfile: string;
  help: string;
  contact: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  askYourQuery: string;
  voice: string;
  image: string;
  text: string;
  trustedBy: string;
  expertSupport: string;
  successRate: string;
  avgResponse: string;
  
  // Shortcut Cards
  quickSolutions: string;
  quickSolutionsDesc: string;
  pestControl: string;
  pestControlDesc: string;
  weatherAdvisory: string;
  weatherAdvisoryDesc: string;
  subsidies: string;
  subsidiesDesc: string;
  marketTrends: string;
  marketTrendsDesc: string;
  getHelp: string;
  
  // Chatbot
  chatTitle: string;
  chatSubtitle: string;
  typeMessage: string;
  connectOfficer: string;
  suggestedTopics: string;
  uploadImage: string;
  startRecording: string;
  stopRecording: string;
  
  // Advisory Section
  latestAdvisories: string;
  advisoriesDesc: string;
  actionRequired: string;
  urgent: string;
  active: string;
  completed: string;
  
  // Feedback
  helpImprove: string;
  rateExperience: string;
  additionalComments: string;
  submitFeedback: string;
  needImmediateHelp: string;
  escalateOfficer: string;
  emergencyHelpline: string;
  communitySupport: string;
  feedbackDescription: string;
  rateServiceQuestion: string;
  feedbackPlaceholder: string;
  thankYouFeedback: string;
  feedbackHelpMessage: string;
  provideMoreFeedback: string;
  urgentAttentionMessage: string;
  joinCommunityMessage: string;
  joinFarmerCommunity: string;
  excellent: string;
  good: string;
  average: string;
  poor: string;
  veryPoor: string;
  
  // Footer
  empoweringFarmers: string;
  quickLinks: string;
  ourServices: string;
  contactUs: string;
  
  // Pages
  profileTitle: string;
  helpTitle: string;
  contactTitle: string;
  queryTitle: string;
  
  // Advisory Content
  wheatRustTitle: string;
  wheatRustContent: string;
  wheatRustAction: string;
  expertPriya: string;
  sowingTimeTitle: string;
  sowingTimeContent: string;
  sowingTimeAction: string;
  agriculturalOfficer: string;
  subsidyUpdateTitle: string;
  subsidyUpdateContent: string;
  subsidyUpdateAction: string;
  districtCollector: string;
  hoursAgo: string;
  dayAgo: string;
  daysAgo: string;
  
  // Chatbot Responses
  pestControlResponse: string;
  weatherResponse: string;
  subsidyResponse: string;
  marketResponse: string;
  defaultResponse: string;
  escalationResponse: string;
  voiceMessage: string;
  imageMessage: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    home: "Home",
    queries: "Queries",
    myProfile: "My Profile",
    help: "Help",
    contact: "Contact",
    
    // Hero Section
    heroTitle: "Get Expert Agricultural Advice Instantly",
    heroSubtitle: "Connect with agricultural experts, get instant solutions for your farming queries, and grow your crops successfully.",
    askYourQuery: "Ask Your Query",
    voice: "Voice",
    image: "Image",
    text: "Text",
    trustedBy: "Trusted by 10,000+ Farmers",
    expertSupport: "Expert Support",
    successRate: "Success Rate",
    avgResponse: "Avg Response",
    
    // Shortcut Cards
    quickSolutions: "Quick Solutions for Common Queries",
    quickSolutionsDesc: "Get instant help with these popular farming topics. Click on any card to start a conversation.",
    pestControl: "Pest Control",
    pestControlDesc: "Identify and treat crop pests effectively",
    weatherAdvisory: "Weather Advisory",
    weatherAdvisoryDesc: "Get weather forecasts and farming tips",
    subsidies: "Subsidies & Loans",
    subsidiesDesc: "Learn about government schemes",
    marketTrends: "Market Trends",
    marketTrendsDesc: "Track crop prices and market insights",
    getHelp: "Get Help",
    
    // Chatbot
    chatTitle: "FarmerAssist Chat",
    chatSubtitle: "Get instant farming solutions",
    typeMessage: "Type your farming question...",
    connectOfficer: "Connect to Officer",
    suggestedTopics: "Suggested Topics",
    uploadImage: "Upload Image",
    startRecording: "Start Recording",
    stopRecording: "Stop Recording",
    
    // Advisory Section
    latestAdvisories: "Latest Agricultural Advisories",
    advisoriesDesc: "Stay updated with expert recommendations, weather alerts, and important farming information.",
    actionRequired: "Action Required",
    urgent: "urgent",
    active: "active",
    completed: "completed",
    
    // Feedback
    helpImprove: "Help Us Improve",
    rateExperience: "Rate Your Experience",
    additionalComments: "Additional Comments (Optional)",
    submitFeedback: "Submit Feedback",
    needImmediateHelp: "Need Immediate Help?",
    escalateOfficer: "Escalate to Agricultural Officer",
    emergencyHelpline: "Emergency Helpline",
    communitySupport: "Community Support",
    feedbackDescription: "Your feedback is valuable to us. Rate your experience and let us know how we can serve farmers better.",
    rateServiceQuestion: "How would you rate our service?",
    feedbackPlaceholder: "Tell us more about your experience or suggest improvements...",
    thankYouFeedback: "Thank You for Your Feedback!",
    feedbackHelpMessage: "Your feedback helps us improve our services for all farmers.",
    provideMoreFeedback: "Provide More Feedback",
    urgentAttentionMessage: "If your query needs urgent attention or you're not satisfied with the automated response, connect directly with our agricultural officers.",
    joinCommunityMessage: "Join thousands of farmers sharing knowledge and experiences.",
    joinFarmerCommunity: "Join Farmer Community",
    excellent: "Excellent",
    good: "Good",
    average: "Average",
    poor: "Poor",
    veryPoor: "Very Poor",
    
    // Footer
    empoweringFarmers: "Empowering farmers with AI-driven agricultural solutions, expert advice, and real-time support.",
    quickLinks: "Quick Links",
    ourServices: "Our Services",
    contactUs: "Contact Us",
    
    // Pages
    profileTitle: "My Profile",
    helpTitle: "Help & Support",
    contactTitle: "Contact Us",
    queryTitle: "My Queries",
    
    // Advisory Content
    wheatRustTitle: "Wheat Rust Disease Alert",
    wheatRustContent: "Yellow rust has been detected in several wheat fields in your district. Immediate fungicide application recommended. Use Propiconazole-based sprays within 48 hours.",
    wheatRustAction: "Apply fungicide immediately",
    expertPriya: "Dr. Priya Sharma",
    sowingTimeTitle: "Optimal Sowing Time for Kharif Crops",
    sowingTimeContent: "Based on current weather patterns, the ideal sowing time for cotton and sugarcane is approaching. Ensure seed treatment and proper soil preparation.",
    sowingTimeAction: "Prepare for sowing",
    agriculturalOfficer: "Agricultural Officer",
    subsidyUpdateTitle: "Subsidy Scheme Update",
    subsidyUpdateContent: "New PM-KISAN installment has been released. Check your bank account for ₹2,000 credit. Next subsidy application deadline is 30th June.",
    subsidyUpdateAction: "Check bank account",
    districtCollector: "District Collector",
    hoursAgo: "2 hours ago",
    dayAgo: "1 day ago",
    daysAgo: "3 days ago",
    
    // Chatbot Responses
    pestControlResponse: "⚠️ For pest control, I recommend:\n1. Identify the specific pest first\n2. Use neem-based organic pesticides\n3. Ensure proper crop rotation\n\nWould you like me to connect you with a pest control expert?",
    weatherResponse: "🌤️ Current weather advisory:\n• Rain expected in next 2-3 days\n• Avoid irrigation before rainfall\n• Protect crops from waterlogging\n\nCheck detailed weather forecast in your area.",
    subsidyResponse: "💰 Available schemes for farmers:\n1. PM-KISAN: Direct income support\n2. Crop Insurance Scheme\n3. Soil Health Card Scheme\n\nWould you like specific eligibility details?",
    marketResponse: "📈 Today's market rates:\n• Wheat: ₹2,100/quintal\n• Rice: ₹1,950/quintal\n• Sugarcane: ₹350/quintal\n\nPrices are trending upward this week.",
    defaultResponse: "Thank you for your question! I'm analyzing your query. For complex issues, I can connect you with our agricultural experts. Is there any specific crop or problem you'd like immediate help with?",
    escalationResponse: "🚨 Connecting you to Agricultural Officer...\n\nYour query has been escalated. Officer Rajesh Kumar will contact you within 15 minutes. Please keep your phone nearby.",
    voiceMessage: "Voice message: How to treat wheat rust disease?",
    imageMessage: "Image uploaded: Crop leaf with brown spots",
  },
  
  hi: {
    // Navigation
    home: "होम",
    queries: "प्रश्न",
    myProfile: "मेरी प्रोफाइल",
    help: "सहायता",
    contact: "संपर्क",
    
    // Hero Section
    heroTitle: "तुरंत विशेषज्ञ कृषि सलाह प्राप्त करें",
    heroSubtitle: "कृषि विशेषज्ञों से जुड़ें, अपने खेती के प्रश्नों का तुरंत समाधान पाएं, और अपनी फसलों को सफलतापूर्वक उगाएं।",
    askYourQuery: "अपना प्रश्न पूछें",
    voice: "आवाज",
    image: "चित्र",
    text: "टेक्स्ट",
    trustedBy: "10,000+ किसानों का भरोसा",
    expertSupport: "विशेषज्ञ सहायता",
    successRate: "सफलता दर",
    avgResponse: "औसत प्रतिक्रिया",
    
    // Shortcut Cards
    quickSolutions: "सामान्य प्रश्नों के त्वरित समाधान",
    quickSolutionsDesc: "इन लोकप्रिय खेती के विषयों पर तुरंत सहायता प्राप्त करें। बातचीत शुरू करने के लिए किसी भी कार्ड पर क्लिक करें।",
    pestControl: "कीट नियंत्रण",
    pestControlDesc: "फसल के कीटों की पहचान और प्रभावी उपचार",
    weatherAdvisory: "मौसम सलाह",
    weatherAdvisoryDesc: "मौसम पूर्वानुमान और खेती की सलाह प्राप्त करें",
    subsidies: "सब्सिडी और ऋण",
    subsidiesDesc: "सरकारी योजनाओं के बारे में जानें",
    marketTrends: "बाजार के रुझान",
    marketTrendsDesc: "फसल की कीमतों और बाजार की जानकारी ट्रैक करें",
    getHelp: "सहायता प्राप्त करें",
    
    // Chatbot
    chatTitle: "फार्मरअसिस्ट चैट",
    chatSubtitle: "तुरंत खेती के समाधान प्राप्त करें",
    typeMessage: "अपना खेती का सवाल टाइप करें...",
    connectOfficer: "अधिकारी से जुड़ें",
    suggestedTopics: "सुझाए गए विषय",
    uploadImage: "चित्र अपलोड करें",
    startRecording: "रिकॉर्डिंग शुरू करें",
    stopRecording: "रिकॉर्डिंग बंद करें",
    
    // Advisory Section
    latestAdvisories: "नवीनतम कृषि सलाह",
    advisoriesDesc: "विशेषज्ञ सिफारिशों, मौसम चेतावनियों और महत्वपूर्ण खेती की जानकारी के साथ अपडेट रहें।",
    actionRequired: "कार्रवाई आवश्यक",
    urgent: "तत्काल",
    active: "सक्रिय",
    completed: "पूर्ण",
    
    // Feedback
    helpImprove: "हमें बेहतर बनाने में मदद करें",
    rateExperience: "अपने अनुभव को रेट करें",
    additionalComments: "अतिरिक्त टिप्पणियां (वैकल्पिक)",
    submitFeedback: "प्रतिक्रिया सबमिट करें",
    needImmediateHelp: "तत्काल सहायता चाहिए?",
    escalateOfficer: "कृषि अधिकारी को भेजें",
    emergencyHelpline: "आपातकालीन हेल्पलाइन",
    communitySupport: "समुदायिक सहायता",
    feedbackDescription: "आपकी प्रतिक्रिया हमारे लिए मूल्यवान है। अपने अनुभव को रेट करें और हमें बताएं कि हम किसानों की बेहतर सेवा कैसे कर सकते हैं।",
    rateServiceQuestion: "आप हमारी सेवा को कैसे रेट करेंगे?",
    feedbackPlaceholder: "अपने अनुभव के बारे में और बताएं या सुधार का सुझाव दें...",
    thankYouFeedback: "आपकी प्रतिक्रिया के लिए धन्यवाद!",
    feedbackHelpMessage: "आपकी प्रतिक्रिया सभी किसानों के लिए हमारी सेवाओं को बेहतर बनाने में मदद करती है।",
    provideMoreFeedback: "और प्रतिक्रिया दें",
    urgentAttentionMessage: "यदि आपकी जांच को तत्काल ध्यान देने की आवश्यकता है या आप स्वचालित प्रतिक्रिया से संतुष्ट नहीं हैं, तो सीधे हमारे कृषि अधिकारियों से जुड़ें।",
    joinCommunityMessage: "ज्ञान और अनुभव साझा करने वाले हजारों किसानों से जुड़ें।",
    joinFarmerCommunity: "किसान समुदाय में शामिल हों",
    excellent: "उत्कृष्ट",
    good: "अच्छा",
    average: "औसत",
    poor: "खराब",
    veryPoor: "बहुत खराब",
    
    // Footer
    empoweringFarmers: "AI-संचालित कृषि समाधान, विशेषज्ञ सलाह और वास्तविक समय सहायता के साथ किसानों को सशक्त बनाना।",
    quickLinks: "त्वरित लिंक",
    ourServices: "हमारी सेवाएं",
    contactUs: "हमसे संपर्क करें",
    
    // Pages
    profileTitle: "मेरी प्रोफाइल",
    helpTitle: "सहायता और समर्थन",
    contactTitle: "हमसे संपर्क करें",
    queryTitle: "मेरे प्रश्न",
    
    // Advisory Content
    wheatRustTitle: "गेहूं में रस्ट रोग की चेतावनी",
    wheatRustContent: "आपके जिले में कई गेहूं के खेतों में पीला रस्ट मिला है। तत्काल फफूंदनाशी का प्रयोग करने की सिफारिश। 48 घंटों के भीतर प्रोपिकोनाजोल आधारित स्प्रे का उपयोग करें।",
    wheatRustAction: "तुरंत फफूंदनाशी का प्रयोग करें",
    expertPriya: "डॉ. प्रिया शर्मा",
    sowingTimeTitle: "खरीफ फसलों की बुवाई का सही समय",
    sowingTimeContent: "वर्तमान मौसम पैटर्न के आधार पर, कपास और गन्ने की बुवाई का आदर्श समय आ रहा है। बीज उपचार और उचित मिट्टी की तैयारी सुनिश्चित करें।",
    sowingTimeAction: "बुवाई की तैयारी करें",
    agriculturalOfficer: "कृषि अधिकारी",
    subsidyUpdateTitle: "सब्सिडी योजना अपडेट",
    subsidyUpdateContent: "नई PM-KISAN किस्त जारी की गई है। ₹2,000 क्रेडिट के लिए अपना बैंक खाता चेक करें। अगली सब्सिडी आवेदन की अंतिम तारीख 30 जून है।",
    subsidyUpdateAction: "बैंक खाता चेक करें",
    districtCollector: "जिला कलेक्टर",
    hoursAgo: "2 घंटे पहले",
    dayAgo: "1 दिन पहले",
    daysAgo: "3 दिन पहले",
    
    // Chatbot Responses
    pestControlResponse: "⚠️ कीट नियंत्रण के लिए, मैं सुझाता हूं:\n1. पहले विशिष्ट कीट की पहचान करें\n2. नीम आधारित जैविक कीटनाशकों का उपयोग करें\n3. उचित फसल चक्र सुनिश्चित करें\n\nक्या आप चाहते हैं कि मैं आपको कीट नियंत्रण विशेषज्ञ से जोड़ूं?",
    weatherResponse: "🌤️ वर्तमान मौसम सलाह:\n• अगले 2-3 दिनों में बारिश की उम्मीद\n• बारिश से पहले सिंचाई से बचें\n• फसलों को जलजमाव से बचाएं\n\nअपने क्षेत्र में विस्तृत मौसम पूर्वानुमान देखें।",
    subsidyResponse: "💰 किसानों के लिए उपलब्ध योजनाएं:\n1. PM-KISAN: प्रत्यक्ष आय सहायता\n2. फसल बीमा योजना\n3. मृदा स्वास्थ्य कार्ड योजना\n\nक्या आप विशिष्ट पात्रता विवरण चाहते हैं?",
    marketResponse: "📈 आज की बाजार दरें:\n• गेहूं: ₹2,100/क्विंटल\n• चावल: ₹1,950/क्विंटल\n• गन्ना: ₹350/क्विंटल\n\nइस सप्ताह कीमतें बढ़ने की प्रवृत्ति में हैं।",
    defaultResponse: "आपके प्रश्न के लिए धन्यवाद! मैं आपकी जांच का विश्लेषण कर रहा हूं। जटिल समस्याओं के लिए, मैं आपको हमारे कृषि विशेषज्ञों से जोड़ सकता हूं। क्या कोई विशिष्ट फसल या समस्या है जिसमें आप तत्काल सहायता चाहते हैं?",
    escalationResponse: "🚨 आपको कृषि अधिकारी से जोड़ा जा रहा है...\n\nआपकी जांच को आगे बढ़ाया गया है। अधिकारी राजेश कुमार 15 मिनट के भीतर आपसे संपर्क करेंगे। कृपया अपना फोन पास रखें।",
    voiceMessage: "वॉइस मैसेज: गेहूं में रस्ट रोग का इलाज कैसे करें?",
    imageMessage: "चित्र अपलोड किया गया: भूरे धब्बों वाली फसल की पत्ती",
  },
  
  ml: {
    // Navigation
    home: "ഹോം",
    queries: "ചോദ്യങ്ങൾ",
    myProfile: "എന്റെ പ്രൊഫൈൽ",
    help: "സഹായം",
    contact: "സമ്പർക്കം",
    
    // Hero Section
    heroTitle: "തൽക്ഷണം വിദഗ്ധ കാർഷിക ഉപദേശം നേടുക",
    heroSubtitle: "കാർഷിക വിദഗ്ധരുമായി ബന്ധപ്പെടുക, നിങ്ങളുടെ കൃഷി ചോദ്യങ്ങൾക്ക് തൽക്ഷണ പരിഹാരങ്ങൾ നേടുക, നിങ്ങളുടെ വിളകൾ വിജയകരമായി വളർത്തുക.",
    askYourQuery: "നിങ്ങളുടെ ചോദ്യം ചോദിക്കുക",
    voice: "ശബ്ദം",
    image: "ചിത്രം",
    text: "ടെക്സ്റ്റ്",
    trustedBy: "10,000+ കർഷകരുടെ വിശ്വാസം",
    expertSupport: "വിദഗ്ധ പിന്തുണ",
    successRate: "വിജയ നിരക്ക്",
    avgResponse: "ശരാശരി പ്രതികരണം",
    
    // Shortcut Cards
    quickSolutions: "സാധാരണ ചോദ്യങ്ങൾക്കുള്ള വേഗത്തിലുള്ള പരിഹാരങ്ങൾ",
    quickSolutionsDesc: "ഈ ജനപ്രിയ കൃഷി വിഷയങ്ങളിൽ തൽക്ഷണ സഹായം നേടുക. സംഭാഷണം ആരംഭിക്കാൻ ഏതെങ്കിലും കാർഡിൽ ക്ലിക്ക് ചെയ്യുക.",
    pestControl: "കീട നിയന്ത്രണം",
    pestControlDesc: "വിള കീടങ്ങളെ തിരിച്ചറിയുകയും ഫലപ്രദമായി ചികിത്സിക്കുകയും ചെയ്യുക",
    weatherAdvisory: "കാലാവസ്ഥാ ഉപദേശം",
    weatherAdvisoryDesc: "കാലാവസ്ഥാ പ്രവചനങ്ങളും കൃഷി നുറുങ്ങുകളും നേടുക",
    subsidies: "സബ്സിഡികളും വായ്പകളും",
    subsidiesDesc: "സർക്കാർ പദ്ധതികളെക്കുറിച്ച് അറിയുക",
    marketTrends: "വിപണി പ്രവണതകൾ",
    marketTrendsDesc: "വിള വിലകളും വിപണി സ്ഥിതിവിവരക്കണക്കുകളും ട്രാക്ക് ചെയ്യുക",
    getHelp: "സഹായം നേടുക",
    
    // Chatbot
    chatTitle: "ഫാർമർഅസിസ്റ്റ് ചാറ്റ്",
    chatSubtitle: "തൽക്ഷണ കൃഷി പരിഹാരങ്ങൾ നേടുക",
    typeMessage: "നിങ്ങളുടെ കൃഷി ചോദ്യം ടൈപ്പ് ചെയ്യുക...",
    connectOfficer: "ഓഫീസറുമായി ബന്ധപ്പെടുക",
    suggestedTopics: "നിർദ്ദേശിച്ച വിഷയങ്ങൾ",
    uploadImage: "ചിത്രം അപ്‌ലോഡ് ചെയ്യുക",
    startRecording: "റെക്കോർഡിംഗ് ആരംഭിക്കുക",
    stopRecording: "റെക്കോർഡിംഗ് നിർത്തുക",
    
    // Advisory Section
    latestAdvisories: "ഏറ്റവും പുതിയ കാർഷിക ഉപദേശങ്ങൾ",
    advisoriesDesc: "വിദഗ്ധ ശുപാർശകൾ, കാലാവസ്ഥാ മുന്നറിയിപ്പുകൾ, പ്രധാന കൃഷി വിവരങ്ങൾ എന്നിവയിൽ അപ്‌ഡേറ്റ് ആയിരിക്കുക.",
    actionRequired: "നടപടി ആവശ്യമാണ്",
    urgent: "അടിയന്തിര",
    active: "സജീവം",
    completed: "പൂർത്തിയായി",
    
    // Feedback
    helpImprove: "മെച്ചപ്പെടുത്താൻ ഞങ്ങളെ സഹായിക്കുക",
    rateExperience: "നിങ്ങളുടെ അനുഭവം റേറ്റ് ചെയ്യുക",
    additionalComments: "അധിക അഭിപ്രായങ്ങൾ (ഓപ്ഷണൽ)",
    submitFeedback: "ഫീഡ്‌ബാക്ക് സമർപ്പിക്കുക",
    needImmediateHelp: "അടിയന്തിര സഹായം വേണോ?",
    escalateOfficer: "കാർഷിക ഓഫീസറിലേക്ക് അയയ്ക്കുക",
    emergencyHelpline: "എമർജൻസി ഹെൽപ്പ്‌ലൈൻ",
    communitySupport: "കമ്മ്യൂണിറ്റി പിന്തുണ",
    feedbackDescription: "നിങ്ങളുടെ ഫീഡ്‌ബാക്ക് ഞങ്ങൾക്ക് വിലപ്പെട്ടതാണ്. നിങ്ങളുടെ അനുഭവം റേറ്റ് ചെയ്യുകയും കർഷകർക്ക് എങ്ങനെ മികച്ച സേവനം നൽകാമെന്ന് ഞങ്ങളെ അറിയിക്കുകയും ചെയ്യുക.",
    rateServiceQuestion: "ഞങ്ങളുടെ സേവനത്തെ നിങ്ങൾ എങ്ങനെ റേറ്റ് ചെയ്യും?",
    feedbackPlaceholder: "നിങ്ങളുടെ അനുഭവത്തെക്കുറിച്ച് കൂടുതൽ പറയുകയോ മെച്ചപ്പെടുത്തലുകൾ നിർദ്ദേശിക്കുകയോ ചെയ്യുക...",
    thankYouFeedback: "നിങ്ങളുടെ ഫീഡ്‌ബാക്കിന് നന്ദി!",
    feedbackHelpMessage: "നിങ്ങളുടെ ഫീഡ്‌ബാക്ക് എല്ലാ കർഷകർക്കും ഞങ്ങളുടെ സേവനങ്ങൾ മെച്ചപ്പെടുത്താൻ സഹായിക്കുന്നു.",
    provideMoreFeedback: "കൂടുതൽ ഫീഡ്‌ബാക്ക് നൽകുക",
    urgentAttentionMessage: "നിങ്ങളുടെ അന്വേഷണത്തിന് അടിയന്തിര ശ്രദ്ധ ആവശ്യമുണ്ടെങ്കിലോ ഓട്ടോമേറ്റഡ് പ്രതികരണത്തിൽ നിങ്ങൾ സംതൃപ്തനല്ലെങ്കിലോ, ഞങ്ങളുടെ കാർഷിക ഓഫീസർമാരുമായി നേരിട്ട് ബന്ധപ്പെടുക.",
    joinCommunityMessage: "അറിവും അനുഭവങ്ങളും പങ്കിടുന്ന ആയിരക്കണക്കിന് കർഷകരുമായി ചേരുക.",
    joinFarmerCommunity: "കർഷക സമൂഹത്തിൽ ചേരുക",
    excellent: "മികച്ചത്",
    good: "നല്ലത്",
    average: "ശരാശരി",
    poor: "മോശം",
    veryPoor: "വളരെ മോശം",
    
    // Footer
    empoweringFarmers: "AI-നയിക്കുന്ന കാർഷിക പരിഹാരങ്ങൾ, വിദഗ്ധ ഉപദേശം, തത്സമയ പിന്തുണ എന്നിവയിലൂടെ കർഷകരെ ശാക്തീകരിക്കുന്നു.",
    quickLinks: "വേഗത്തിലുള്ള ലിങ്കുകൾ",
    ourServices: "ഞങ്ങളുടെ സേവനങ്ങൾ",
    contactUs: "ഞങ്ങളെ സമീപിക്കുക",
    
    // Pages
    profileTitle: "എന്റെ പ്രൊഫൈൽ",
    helpTitle: "സഹായവും പിന്തുണയും",
    contactTitle: "ഞങ്ങളെ സമീപിക്കുക",
    queryTitle: "എന്റെ ചോദ്യങ്ങൾ",
    
    // Advisory Content
    wheatRustTitle: "ഗോതമ്പിലെ റസ്റ്റ് രോഗ മുന്നറിയിപ്പ്",
    wheatRustContent: "നിങ്ങളുടെ ജില്ലയിലെ നിരവധി ഗോതമ്പ് വയലുകളിൽ മഞ്ഞ റസ്റ്റ് കണ്ടെത്തിയിട്ടുണ്ട്. ഉടനടി കുമിൾനാശിനി പ്രയോഗം ശുപാർശ ചെയ്യുന്നു. 48 മണിക്കൂറിനുള്ളിൽ പ്രോപികോണസോൾ അടിസ്ഥാനമാക്കിയ സ്പ്രേകൾ ഉപയോഗിക്കുക.",
    wheatRustAction: "ഉടനടി കുമിൾനാശിനി പ്രയോഗിക്കുക",
    expertPriya: "ഡോ. പ്രിയ ശർമ്മ",
    sowingTimeTitle: "ഖരീഫ് വിളകളുടെ ഒപ്റ്റിമൽ വിതയ്ക്കൽ സമയം",
    sowingTimeContent: "നിലവിലെ കാലാവസ്ഥാ പാറ്റേണുകളെ അടിസ്ഥാനമാക്കി, പഞ്ഞിയുടെയും കരിമ്പിന്റെയും ആദർശ വിതയ്ക്കൽ സമയം അടുത്തുവരുന്നു. വിത്ത് ചികിത്സയും ശരിയായ മണ്ണ് തയ്യാറാക്കലും ഉറപ്പാക്കുക.",
    sowingTimeAction: "വിതയ്ക്കാൻ തയ്യാറാകുക",
    agriculturalOfficer: "കാർഷിക ഓഫീസർ",
    subsidyUpdateTitle: "സബ്സിഡി പദ്ധതി അപ്‌ഡേറ്റ്",
    subsidyUpdateContent: "പുതിയ PM-KISAN ഇൻസ്റ്റാൾമെന്റ് പുറത്തിറക്കിയിട്ടുണ്ട്. ₹2,000 ക്രെഡിറ്റിനായി നിങ്ങളുടെ ബാങ്ക് അക്കൗണ്ട് പരിശോധിക്കുക. അടുത്ത സബ്സിഡി അപേക്ഷാ അവസാന തീയതി ജൂൺ 30 ആണ്.",
    subsidyUpdateAction: "ബാങ്ക് അക്കൗണ്ട് പരിശോധിക്കുക",
    districtCollector: "ജില്ലാ കളക്ടർ",
    hoursAgo: "2 മണിക്കൂർ മുമ്പ്",
    dayAgo: "1 ദിവസം മുമ്പ്",
    daysAgo: "3 ദിവസം മുമ്പ്",
    
    // Chatbot Responses
    pestControlResponse: "⚠️ കീട നിയന്ത്രണത്തിനായി, ഞാൻ ശുപാർശ ചെയ്യുന്നു:\n1. ആദ്യം നിർദ്ദിഷ്ട കീടത്തെ തിരിച്ചറിയുക\n2. വേപ്പ് അടിസ്ഥാനമാക്കിയ ജൈവ കീടനാശിനികൾ ഉപയോഗിക്കുക\n3. ശരിയായ വിള ഭ്രമണം ഉറപ്പാക്കുക\n\nകീട നിയന്ത്രണ വിദഗ്ധനുമായി നിങ്ങളെ ബന്ധിപ്പിക്കാൻ ആഗ്രഹിക്കുന്നുണ്ടോ?",
    weatherResponse: "🌤️ നിലവിലെ കാലാവസ്ഥാ ഉപദേശം:\n• അടുത്ത 2-3 ദിവസങ്ങളിൽ മഴ പ്രതീക്ഷിക്കുന്നു\n• മഴയ്ക്ക് മുമ്പ് നനയ്ക്കൽ ഒഴിവാക്കുക\n• വിളകളെ വെള്ളക്കെട്ടിൽ നിന്ന് സംരക്ഷിക്കുക\n\nനിങ്ങളുടെ പ്രദേശത്ത് വിശദമായ കാലാവസ്ഥാ പ്രവചനം പരിശോധിക്കുക.",
    subsidyResponse: "💰 കർഷകർക്ക് ലഭ്യമായ പദ്ധതികൾ:\n1. PM-KISAN: നേരിട്ടുള്ള വരുമാന പിന്തുണ\n2. വിള ഇൻഷുറൻസ് പദ്ധതി\n3. മണ്ണ് ആരോഗ്യ കാർഡ് പദ്ധതി\n\nനിർദ്ദിഷ്ട യോഗ്യതാ വിവരങ്ങൾ വേണോ?",
    marketResponse: "📈 ഇന്നത്തെ വിപണി നിരക്കുകൾ:\n• ഗോതമ്പ്: ₹2,100/ക്വിന്റൽ\n• അരി: ₹1,950/ക്വിന്റൽ\n• കരിമ്പ്: ₹350/ക്വിന്റൽ\n\nഈ ആഴ്ച വിലകൾ ഉയരുന്ന പ്രവണത കാണിക്കുന്നു.",
    defaultResponse: "നിങ്ങളുടെ ചോദ്യത്തിന് നന്ദി! ഞാൻ നിങ്ങളുടെ അന്വേഷണം വിശകലനം ചെയ്യുന്നു. സങ്കീർണ്ണമായ പ്രശ്നങ്ങൾക്കായി, ഞാൻ നിങ്ങളെ ഞങ്ങളുടെ കാർഷിക വിദഗ്ധരുമായി ബന്ധിപ്പിക്കാൻ കഴിയും. ഉടനടി സഹായം ആവശ്യമുള്ള ഏതെങ്കിലും നിർദ്ദിഷ്ട വിളയോ പ്രശ്നമോ ഉണ്ടോ?",
    escalationResponse: "🚨 നിങ്ങളെ കാർഷിക ഓഫീസറുമായി ബന്ധിപ്പിക്കുന്നു...\n\nനിങ്ങളുടെ അന്വേഷണം മുന്നോട്ട് കൊണ്ടുപോയി. ഓഫീസർ രാജേഷ് കുമാർ 15 മിനിറ്റിനുള്ളിൽ നിങ്ങളെ ബന്ധപ്പെടും. ദയവായി നിങ്ങളുടെ ഫോൺ അടുത്ത് വയ്ക്കുക.",
    voiceMessage: "വോയ്സ് സന്ദേശം: ഗോതമ്പിലെ റസ്റ്റ് രോഗം എങ്ങനെ ചികിത്സിക്കാം?",
    imageMessage: "ചിത്രം അപ്‌ലോഡ് ചെയ്തു: തവിട്ട് പാടുകളുള്ള വിള ഇല",
  }
};

export function useTranslation(language: Language) {
  return translations[language];
}