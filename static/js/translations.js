// Translation data for all supported languages
const translations = {
    'English': {
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

        // Testimonials
        'farmersSaying': 'What Farmers Are Saying',
        'testimonialSubtext': 'Real success stories from farmers across India',

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

        // Testimonials
        'farmersSaying': 'किसान क्या कह रहे हैं',
        'testimonialSubtext': 'भारत भर के किसानों की वास्तविक सफलता की कहानियां',

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

        // Testimonials
        'farmersSaying': 'കർഷകർ പറയുന്നത്',
        'testimonialSubtext': 'ഇന്ത്യയിലെ കർഷകരുടെ യഥാർത്ഥ വിജയ കഥകൾ',

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