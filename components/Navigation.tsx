import { Home, MessageSquare, User, HelpCircle, Phone, Leaf, Globe, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useTranslation, Language } from "../utils/translations";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export function Navigation({ currentPage, onPageChange, language, onLanguageChange }: NavigationProps) {
  const t = useTranslation(language);

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'hi' as Language, name: 'हिंदी', flag: '🇮🇳' },
    { code: 'ml' as Language, name: 'മലയാളം', flag: '🇮🇳' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <nav style={{ backgroundColor: '#205A28' }} className="px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onPageChange('home')}
          className="flex items-center space-x-2 text-white hover:opacity-80 transition-opacity"
        >
          <Leaf className="h-8 w-8" />
          <span className="text-xl font-semibold">FarmerAssist</span>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <NavItem 
            icon={<Home size={20} />} 
            label={t.home} 
            active={currentPage === 'home'}
            onClick={() => onPageChange('home')}
          />
          <NavItem 
            icon={<MessageSquare size={20} />} 
            label={t.queries}
            active={currentPage === 'queries'}
            onClick={() => onPageChange('queries')}
          />
          <NavItem 
            icon={<User size={20} />} 
            label={t.myProfile}
            active={currentPage === 'profile'}
            onClick={() => onPageChange('profile')}
          />
          <NavItem 
            icon={<HelpCircle size={20} />} 
            label={t.help}
            active={currentPage === 'help'}
            onClick={() => onPageChange('help')}
          />
          <NavItem 
            icon={<Phone size={20} />} 
            label={t.contact}
            active={currentPage === 'contact'}
            onClick={() => onPageChange('contact')}
          />

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:bg-white/20 flex items-center space-x-2">
                <Globe size={16} />
                <span className="hidden lg:inline">{currentLanguage?.flag} {currentLanguage?.name}</span>
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code)}
                  className={`cursor-pointer ${language === lang.code ? 'bg-green-50' : ''}`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

function NavItem({ 
  icon, 
  label, 
  active = false, 
  onClick 
}: { 
  icon: React.ReactNode, 
  label: string, 
  active?: boolean,
  onClick: () => void 
}) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
        active 
          ? 'bg-white/20 text-white' 
          : 'text-white/80 hover:text-white hover:bg-white/10'
      }`}
    >
      {icon}
      <span className="hidden lg:block">{label}</span>
    </button>
  );
}