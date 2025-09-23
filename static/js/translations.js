// Translation data for all supported languages
const translations = {
    'English': {
        // Chat Interface
        'chatbotTitle': 'KrishiBot — Your Farm Assistant',
        'chatbotSubtitle': 'Crop guidance, pest help, soil tips — quick answers.',
        'poweredBy': 'Powered by AI',
        'sustainableAdvice': 'Sustainable advice',
        'chatInputPlaceholder': 'Ask about crop care, irrigation, soil, pests...',
        'sendButton': 'Send',

        // Header
        'home': 'Home',
        'query': 'Query',
        'myProfile': 'My Profile',
        'contact': 'Contact',
        'login': 'Login/SignUp',
        'logout': 'Logout',

        // Main content
        'mainHeading': 'Get Expert Farming Advice Instantly',
        'mainSubheading': 'Connect with agricultural experts, get answers to your farming questions, and receive personalized advice to boost your crop yields',
        'askQuery': 'Ask Your Query',
        'text': 'Text',
        'voice': 'Voice',
        'image': 'Image',

        // Categories
        'quickHelp': 'Quick Help Categories',
        'quickHelpSubtext': 'Get instant answers for the most common farming questions',
        'pestsAndDiseases': 'Pests & Diseases',
        'pestsAndDiseasesDesc': 'Identify and treat crop pests and diseases',
        'weatherForecast': 'Weather Forecast',
        'weatherForecastDesc': 'Get weather updates and farming alerts',
        'govtSubsidies': 'Government Subsidies',
        'govtSubsidiesDesc': 'Find available subsidies and schemes',
        'marketTrends': 'Market Trends',
        'marketTrendsDesc': 'Check crop prices and market demand',
        'getHelp': 'Get Help',

        // Advisory Results
        'advisoryResults': 'Your Advisory Results',
        'advisorySubtext': 'Expert advice and solutions for your farming queries',
        'answered': 'Answered',
        'pending': 'Pending',
        'escalated': 'Escalated',
        'rateAnswer': 'Rate this answer',
        'followUp': 'Follow-up',
        'importantNotice': 'Important Notice',
        'pendingAssignment': 'Pending Assignment',

        // Advisory Cards Categories
        'categoryPlantDisease': 'Plant Disease',
        'categoryCropPlanning': 'Crop Planning',
        'categoryPestControl': 'Pest Control',

        // Card 1
        'card1Title': 'Leaf yellowing in wheat crop',
        'card1Time': '2 hours ago',
        'expertName1': 'Dr. Rajesh Kumar',
        'card1Content': 'Diagnosed as nitrogen deficiency. Apply urea fertilizer at 50kg/acre immediately. Soil test recommended.',

        // Card 2
        'card2Title': 'Best time for cotton sowing',
        'card2Time': '1 day ago',
        'expertName2': 'Prof. Meera Singh',
        'card2Content': 'Optimal sowing window is April 15-May 15 for your region. Ensure soil temperature above 18°C.',

        // Card 3
        'card3Title': 'Unusual pest attack on tomatoes',
        'card3Time': '3 hours ago',
        'card3Content': 'Query escalated to entomology specialist. Field visit scheduled within 48 hours.',

        // Testimonials
        'farmersSaying': 'What Farmers Are Saying',
        'testimonialSubtext': 'Real success stories from farmers across India',

        // Testimonial 1
        'testimonial1Quote': '"FarmAdvisor helped me identify and treat a pest problem that could have destroyed my entire cotton crop. The expert advice was accurate and timely."',
        'testimonial1Name': 'Ramesh Patel',
        'testimonial1Location': 'Gujarat, India',
        'testimonial1Crop': 'Cotton',

        // Testimonial 2
        'testimonial2Quote': '"The weather alerts and farming tips have improved my wheat yield by 30%. The chatbot is very easy to use, even for someone like me who is not tech-savvy."',
        'testimonial2Name': 'Priya Sharma',
        'testimonial2Location': 'Punjab, India',
        'testimonial2Crop': 'Wheat',

        // Testimonial 3
        'testimonial3Quote': '"Great platform for getting quick answers to farming questions. The subsidy information helped me apply for government schemes I didn\'t know existed."',
        'testimonial3Name': 'Arjun Reddy',
        'testimonial3Location': 'Karnataka, India',
        'testimonial3Crop': 'Rice',

        // Feedback form
        'shareExperience': 'Share Your Experience',
        'feedbackSubtext': 'Help us improve by sharing your feedback.',
        'name': 'Name',
        'email': 'Email',
        'yourRating': 'Your Rating',
        'feedbackPlaceholder': 'Tell us about your experience with कृषिBot...',
        'submitFeedback': 'Submit Feedback',

        // Footer
        'empoweringFarmers': 'Empowering farmers with expert advice, real-time weather updates, and personalized agricultural solutions for better crop yields and sustainable farming.',
        'services': 'Services',
        'cropAdvisory': 'Crop Advisory',
        'weatherAlerts': 'Weather Alerts',
        'pestControl': 'Pest Control',
        'marketPrices': 'Market Prices',
        'support': 'Support',
        'helpCenter': 'Help Center',
        'contactUs': 'Contact Us',
        'faqs': 'FAQs',
        'userGuide': 'User Guide',
        'legal': 'Legal',
        'privacy': 'Privacy Policy',
        'terms': 'Terms of Service',
        'cookie': 'Cookie Policy',
        'disclaimer': 'Disclaimer',
        'stayUpdated': 'Stay Updated',
        'emailUpdates': 'Get the latest farming tips, weather alerts, and market updates delivered to your inbox.',
        'subscribe': 'Subscribe',
        'copyright': '© 2025 कृषिBot. All rights reserved. | Developed for farmers, by farmers.'
    },
    'हिन्दी': {
        // Chat Interface
        'chatbotTitle': 'कृषिBot — आपका कृषि सहायक',
        'chatbotSubtitle': 'फसल मार्गदर्शन, कीट सहायता, मिट्टी के सुझाव — त्वरित उत्तर।',
        'poweredBy': 'AI द्वारा संचालित',
        'sustainableAdvice': 'टिकाऊ सलाह',
        'chatInputPlaceholder': 'फसल देखभाल, सिंचाई, मिट्टी, कीटों के बारे में पूछें...',
        'sendButton': 'भेजें',

        // Header
        'home': 'होम',
        'query': 'प्रश्न',
        'myProfile': 'मेरी प्रोफाइल',
        'contact': 'संपर्क',
        'login': 'लॉगिन/साइन अप',
        'logout': 'लॉगआउट',

        // Main content
        'mainHeading': 'तुरंत विशेषज्ञ कृषि सलाह प्राप्त करें',
        'mainSubheading': 'कृषि विशेषज्ञों से जुड़ें, अपने कृषि प्रश्नों के उत्तर पाएं, और अपनी फसल की पैदावार बढ़ाने के लिए व्यक्तिगत सलाह प्राप्त करें',
        'askQuery': 'प्रश्न पूछें',
        'text': 'टेक्स्ट',
        'voice': 'आवाज',
        'image': 'फोटो',

        // Categories
        'quickHelp': 'त्वरित मदद श्रेणियां',
        'quickHelpSubtext': 'सबसे सामान्य कृषि प्रश्नों के लिए तुरंत उत्तर प्राप्त करें',
        'pestsAndDiseases': 'कीट और बीमारियां',
        'pestsAndDiseasesDesc': 'फसल के कीटों और बीमारियों की पहचान और इलाज करें',
        'weatherForecast': 'मौसम का पूर्वानुमान',
        'weatherForecastDesc': 'मौसम अपडेट और कृषि चेतावनियां प्राप्त करें',
        'govtSubsidies': 'सरकारी सब्सिडी',
        'govtSubsidiesDesc': 'उपलब्ध सब्सिडी और योजनाएं खोजें',
        'marketTrends': 'बाजार के रुझान',
        'marketTrendsDesc': 'फसल की कीमतें और बाजार की मांग देखें',
        'getHelp': 'मदद लें',

        // Advisory Results
        'advisoryResults': 'आपके सलाहकार परिणाम',
        'advisorySubtext': 'आपके कृषि प्रश्नों के लिए विशेषज्ञ सलाह और समाधान',
        'answered': 'जवाब मिला',
        'pending': 'विचाराधीन',
        'escalated': 'बढ़ाया गया',
        'rateAnswer': 'उत्तर को रेट करें',
        'followUp': 'फॉलो-अप',
        'importantNotice': 'महत्वपूर्ण सूचना',
        'pendingAssignment': 'आवंटन लंबित',

        // Advisory Cards Categories
        'categoryPlantDisease': 'पौधों की बीमारी',
        'categoryCropPlanning': 'फसल योजना',
        'categoryPestControl': 'कीट नियंत्रण',

        // Card 1
        'card1Title': 'गेहूं की फसल में पत्तियां पीली होना',
        'card1Time': '2 घंटे पहले',
        'expertName1': 'डॉ. राजेश कुमार',
        'card1Content': 'नाइट्रोजन की कमी का निदान। तुरंत 50 किग्रा/एकड़ यूरिया उर्वरक लगाएं। मिट्टी की जांच की सिफारिश की गई।',

        // Card 2
        'card2Title': 'कपास की बुवाई का सबसे अच्छा समय',
        'card2Time': '1 दिन पहले',
        'expertName2': 'प्रो. मीरा सिंह',
        'card2Content': 'आपके क्षेत्र के लिए बुवाई का सर्वोत्तम समय 15 अप्रैल से 15 मई है। मिट्टी का तापमान 18°C से ऊपर सुनिश्चित करें।',

        // Card 3
        'card3Title': 'टमाटर पर असामान्य कीट हमला',
        'card3Time': '3 घंटे पहले',
        'card3Content': 'कीट विशेषज्ञ को प्रश्न भेजा गया। 48 घंटों के भीतर क्षेत्र का दौरा निर्धारित।',

        // Testimonials
        'farmersSaying': 'किसान क्या कह रहे हैं',
        'testimonialSubtext': 'भारत भर के किसानों की वास्तविक सफलता की कहानियां',

        // Testimonial 1
        'testimonial1Quote': '"कृषिBot ने मुझे कपास की फसल को नष्ट कर सकने वाली कीट समस्या की पहचान और उपचार में मदद की। विशेषज्ञ की सलाह सटीक और समय पर थी।"',
        'testimonial1Name': 'रमेश पटेल',
        'testimonial1Location': 'गुजरात, भारत',
        'testimonial1Crop': 'कपास',

        // Testimonial 2
        'testimonial2Quote': '"मौसम की चेतावनियों और कृषि सुझावों ने मेरी गेहूं की उपज में 30% की वृद्धि की है। चैटबॉट उपयोग में बहुत आसान है, यहां तक कि मेरे जैसे तकनीकी रूप से कुशल नहीं व्यक्ति के लिए भी।"',
        'testimonial2Name': 'प्रिया शर्मा',
        'testimonial2Location': 'पंजाब, भारत',
        'testimonial2Crop': 'गेहूं',

        // Testimonial 3
        'testimonial3Quote': '"कृषि प्रश्नों के त्वरित उत्तर पाने के लिए बेहतरीन मंच। सब्सिडी की जानकारी ने मुझे ऐसी सरकारी योजनाओं के लिए आवेदन करने में मदद की जिनके बारे में मुझे पता ही नहीं था।"',
        'testimonial3Name': 'अर्जुन रेड्डी',
        'testimonial3Location': 'कर्नाटक, भारत',
        'testimonial3Crop': 'चावल',

        // Feedback form
        'shareExperience': 'अपना अनुभव साझा करें',
        'feedbackSubtext': 'हमें बेहतर बनाने में मदद करें अपनी प्रतिक्रिया साझा करके।',
        'name': 'नाम',
        'email': 'ईमेल',
        'yourRating': 'आपकी रेटिंग',
        'feedbackPlaceholder': 'कृषिBot के साथ अपने अनुभव के बारे में बताएं...',
        'submitFeedback': 'प्रतिक्रिया भेजें',

        // Footer
        'empoweringFarmers': 'विशेषज्ञ सलाह, रीयल-टाइम मौसम अपडेट, और बेहतर फसल उपज के लिए व्यक्तिगत कृषि समाधानों के साथ किसानों को सशक्त बनाना।',
        'services': 'सेवाएं',
        'cropAdvisory': 'फसल सलाहकार',
        'weatherAlerts': 'मौसम चेतावनियां',
        'pestControl': 'कीट नियंत्रण',
        'marketPrices': 'बाजार मूल्य',
        'support': 'सहायता',
        'helpCenter': 'सहायता केंद्र',
        'contactUs': 'संपर्क करें',
        'faqs': 'सामान्य प्रश्न',
        'userGuide': 'उपयोगकर्ता गाइड',
        'legal': 'कानूनी',
        'privacy': 'गोपनीयता नीति',
        'terms': 'सेवा की शर्तें',
        'cookie': 'कुकी नीति',
        'disclaimer': 'अस्वीकरण',
        'stayUpdated': 'अपडेट रहें',
        'emailUpdates': 'नवीनतम कृषि टिप्स, मौसम अलर्ट और बाजार अपडेट अपने इनबॉक्स में प्राप्त करें।',
        'subscribe': 'सदस्यता लें',
        'copyright': '© 2025 कृषिBot. सर्वाधिकार सुरक्षित। | किसानों द्वारा, किसानों के लिए विकसित।'
    },
    'മലയാളം': {
        // Chat Interface
        'chatbotTitle': 'കൃഷിBot — നിങ്ങളുടെ കാർഷിക സഹായി',
        'chatbotSubtitle': 'വിള മാർഗ്ഗനിർദ്ദേശം, കീട സഹായം, മണ്ണ് നുറുങ്ങുകൾ — വേഗത്തിലുള്ള ഉത്തരങ്ങൾ.',
        'poweredBy': 'AI പ്രവർത്തിപ്പിക്കുന്നത്',
        'sustainableAdvice': 'സുസ്ഥിര ഉപദേശം',
        'chatInputPlaceholder': 'വിള പരിപാലനം, ജലസേചനം, മണ്ണ്, കീടങ്ങൾ എന്നിവയെക്കുറിച്ച് ചോദിക്കൂ...',
        'sendButton': 'അയക്കുക',

        // Header
        'home': 'ഹോം',
        'query': 'ചോദ്യം',
        'myProfile': 'എന്റെ പ്രൊഫൈൽ',
        'contact': 'സമ്പർക്കം',
        'login': 'ലോഗിൻ/സൈൻ അപ്പ്',
        'logout': 'ലോഗ്ഔട്ട്',

        // Main content
        'mainHeading': 'വിദഗ്ധ കാർഷിക ഉപദേശം ഉടൻ ലഭിക്കുക',
        'mainSubheading': 'കാർഷിക വിദഗ്ധരുമായി ബന്ധപ്പെടുക, നിങ്ങളുടെ കാർഷിക ചോദ്യങ്ങൾക്ക് ഉത്തരം ലഭിക്കുക, വിളവ് വർദ്ധിപ്പിക്കുന്നതിന് വ്യക്തിഗത ഉപദേശം ലഭിക്കുക',
        'askQuery': 'ചോദ്യം ചോദിക്കുക',
        'text': 'ടെക്സ്റ്റ്',
        'voice': 'ശബ്ദം',
        'image': 'ചിത്രം',

        // Categories
        'quickHelp': 'വേഗ സഹായ വിഭാഗങ്ങൾ',
        'quickHelpSubtext': 'ഏറ്റവും സാധാരണമായ കാർഷിക ചോദ്യങ്ങൾക്ക് ഉടൻ ഉത്തരം ലഭിക്കുക',
        'pestsAndDiseases': 'കീടങ്ങളും രോഗങ്ങളും',
        'pestsAndDiseasesDesc': 'വിളകളിലെ കീടങ്ങളെയും രോഗങ്ങളെയും തിരിച്ചറിഞ്ഞ് ചികിത്സിക്കുക',
        'weatherForecast': 'കാലാവസ്ഥ പ്രവചനം',
        'weatherForecastDesc': 'കാലാവസ്ഥ അപ്ഡേറ്റുകളും കാർഷിക മുന്നറിയിപ്പുകളും ലഭിക്കുക',
        'govtSubsidies': 'സർക്കാർ സബ്സിഡികൾ',
        'govtSubsidiesDesc': 'ലഭ്യമായ സബ്സിഡികളും പദ്ധതികളും കണ്ടെത്തുക',
        'marketTrends': 'വിപണി പ്രവണതകൾ',
        'marketTrendsDesc': 'വിളകളുടെ വിലകളും വിപണി ആവശ്യകതയും പരിശോധിക്കുക',
        'getHelp': 'സഹായം നേടുക',

        // Advisory Results
        'advisoryResults': 'നിങ്ങളുടെ ഉപദേശക ഫലങ്ങൾ',
        'advisorySubtext': 'നിങ്ങളുടെ കാർഷിക ചോദ്യങ്ങൾക്കുള്ള വിദഗ്ധ ഉപദേശവും പരിഹാരങ്ങളും',
        'answered': 'ഉത്തരം നൽകി',
        'pending': 'പെൻഡിംഗ്',
        'escalated': 'എസ്കലേറ്റ് ചെയ്തു',
        'rateAnswer': 'ഉത്തരം റേറ്റ് ചെയ്യുക',
        'followUp': 'ഫോളോ-അപ്പ്',
        'importantNotice': 'പ്രധാന അറിയിപ്പ്',
        'pendingAssignment': 'നിയോഗം പെൻഡിംഗ്',

        // Advisory Cards Categories
        'categoryPlantDisease': 'സസ്യരോഗം',
        'categoryCropPlanning': 'കൃഷി ആസൂത്രണം',
        'categoryPestControl': 'കീടനിയന്ത്രണം',

        // Card 1
        'card1Title': 'ഗോതമ്പ് വിളയിൽ ഇലകൾ മഞ്ഞളിക്കുന്നു',
        'card1Time': '2 മണിക്കൂർ മുമ്പ്',
        'expertName1': 'ഡോ. രാജേഷ് കുമാർ',
        'card1Content': 'നൈട്രജൻ കുറവ് കണ്ടെത്തി. ഉടൻ തന്നെ 50 കിലോ/ഏക്കർ യൂറിയ വളം ചേർക്കുക. മണ്ണ് പരിശോധന ശുപാർശ ചെയ്യുന്നു.',

        // Card 2
        'card2Title': 'പരുത്തി നടീലിനുള്ള ഏറ്റവും നല്ല സമയം',
        'card2Time': '1 ദിവസം മുമ്പ്',
        'expertName2': 'പ്രൊഫ. മീര സിംഗ്',
        'card2Content': 'നിങ്ങളുടെ പ്രദേശത്തിന് ഏപ്രിൽ 15 മുതൽ മെയ് 15 വരെയാണ് നടീൽ കാലം. മണ്ണിന്റെ താപനില 18°C-ൽ കൂടുതലാണെന്ന് ഉറപ്പാക്കുക.',

        // Card 3
        'card3Title': 'തക്കാളിയിൽ അസാധാരണ കീടബാധ',
        'card3Time': '3 മണിക്കൂർ മുമ്പ്',
        'card3Content': 'കീടശാസ്ത്ര വിദഗ്ധനിലേക്ക് ചോദ്യം എസ്കലേറ്റ് ചെയ്തു. 48 മണിക്കൂറിനുള്ളിൽ ഫീൽഡ് സന്ദർശനം ഷെഡ്യൂൾ ചെയ്തു.',

        // Testimonials
        'farmersSaying': 'കർഷകർ പറയുന്നത്',
        'testimonialSubtext': 'ഇന്ത്യയിലെ കർഷകരുടെ യഥാർത്ഥ വിജയ കഥകൾ',

        // Testimonial 1
        'testimonial1Quote': '"എന്റെ പരുത്തി വിളയെ മുഴുവൻ നശിപ്പിക്കാമായിരുന്ന ഒരു കീട പ്രശ്നം തിരിച്ചറിയാനും ചികിത്സിക്കാനും കൃഷിBot സഹായിച്ചു. വിദഗ്ധ ഉപദേശം കൃത്യവും സമയോചിതവുമായിരുന്നു."',
        'testimonial1Name': 'രമേശ് പട്ടേൽ',
        'testimonial1Location': 'ഗുജറാത്ത്, ഇന്ത്യ',
        'testimonial1Crop': 'പരുത്തി',

        // Testimonial 2
        'testimonial2Quote': '"കാലാവസ്ഥ മുന്നറിയിപ്പുകളും കൃഷി നുറുങ്ങുകളും എന്റെ ഗോതമ്പ് വിളവ് 30% വർധിപ്പിച്ചു. ടെക്നോളജിയിൽ വിദഗ്ധനല്ലാത്ത എന്നെപ്പോലുള്ള ഒരാൾക്ക് പോലും ചാറ്റ്ബോട്ട് ഉപയോഗിക്കാൻ വളരെ എളുപ്പമാണ്."',
        'testimonial2Name': 'പ്രിയ ശർമ്മ',
        'testimonial2Location': 'പഞ്ചാബ്, ഇന്ത്യ',
        'testimonial2Crop': 'ഗോതമ്പ്',

        // Testimonial 3
        'testimonial3Quote': '"കാർഷിക ചോദ്യങ്ങൾക്ക് വേഗത്തിൽ ഉത്തരം ലഭിക്കുന്നതിനുള്ള മികച്ച പ്ലാറ്റ്ഫോം. എനിക്ക് അറിയാത്ത സർക്കാർ പദ്ധതികൾക്ക് അപേക്ഷിക്കാൻ സബ്സിഡി വിവരങ്ങൾ സഹായിച്ചു."',
        'testimonial3Name': 'അർജുൻ റെഡ്ഡി',
        'testimonial3Location': 'കർണാടക, ഇന്ത്യ',
        'testimonial3Crop': 'നെല്ല്',

        // Feedback form
        'shareExperience': 'നിങ്ങളുടെ അനുഭവം പങ്കുവയ്ക്കുക',
        'feedbackSubtext': 'നിങ്ങളുടെ ഫീഡ്ബാക്ക് പങ്കുവച്ച് മെച്ചപ്പെടുത്താൻ സഹായിക്കുക.',
        'name': 'പേര്',
        'email': 'ഇമെയിൽ',
        'yourRating': 'നിങ്ങളുടെ റേറ്റിംഗ്',
        'feedbackPlaceholder': 'കൃഷിBot-മായുള്ള നിങ്ങളുടെ അനുഭവത്തെക്കുറിച്ച് പറയുക...',
        'submitFeedback': 'ഫീഡ്ബാക്ക് സമർപ്പിക്കുക',

        // Footer
        'empoweringFarmers': 'വിദഗ്ധ ഉപദേശം, റിയൽ-ടൈം കാലാവസ്ഥ അപ്ഡേറ്റുകൾ, കൂടുതൽ വിളവിനും സുസ്ഥിര കൃഷിക്കുമായുള്ള വ്യക്തിഗത കാർഷിക പരിഹാരങ്ങൾ എന്നിവയിലൂടെ കർഷകരെ ശാക്തീകരിക്കുന്നു.',
        'services': 'സേവനങ്ങൾ',
        'cropAdvisory': 'വിള ഉപദേശം',
        'weatherAlerts': 'കാലാവസ്ഥ അലേർട്ടുകൾ',
        'pestControl': 'കീട നിയന്ത്രണം',
        'marketPrices': 'വിപണി വിലകൾ',
        'support': 'പിന്തുണ',
        'helpCenter': 'സഹായ കേന്ദ്രം',
        'contactUs': 'ഞങ്ങളെ സമീപിക്കുക',
        'faqs': 'സാധാരണ ചോദ്യങ്ങൾ',
        'userGuide': 'ഉപയോക്തൃ ഗൈഡ്',
        'legal': 'നിയമപരം',
        'privacy': 'സ്വകാര്യതാ നയം',
        'terms': 'സേവന നിബന്ധനകൾ',
        'cookie': 'കുക്കി നയം',
        'disclaimer': 'നിരാകരണം',
        'stayUpdated': 'അപ്ഡേറ്റഡ് ആയിരിക്കുക',
        'emailUpdates': 'ഏറ്റവും പുതിയ കൃഷി നുറുങ്ങുകൾ, കാലാവസ്ഥ അലേർട്ടുകൾ, വിപണി അപ്ഡേറ്റുകൾ എന്നിവ നിങ്ങളുടെ ഇൻബോക്സിൽ ലഭിക്കുക.',
        'subscribe': 'സബ്സ്ക്രൈബ് ചെയ്യുക',
        'copyright': '© 2025 കൃഷിBot. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം. | കർഷകർക്കായി, കർഷകരാൽ വികസിപ്പിച്ചത്.'
    }
};