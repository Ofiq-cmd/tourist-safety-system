"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, MapPin, AlertTriangle, Users, Globe, Moon, Sun, Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LandingPage() {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const translations = {
    en: {
      title: "Smart Tourist Safety Monitoring System",
      subtitle: "Ensuring safe and secure travel experiences across India",
      description:
        "Advanced AI-powered safety monitoring with real-time tracking, emergency response, and comprehensive incident management for tourists and authorities.",
      touristRole: "I am a Tourist",
      authorityRole: "I am an Authority",
      touristDesc: "Get digital ID, safety alerts, and emergency assistance",
      authorityDesc: "Monitor tourists, manage incidents, and coordinate responses",
      features: "Key Features",
      digitalId: "Digital Tourist ID",
      digitalIdDesc: "Blockchain-secured identity with QR codes and emergency contacts",
      realTimeTracking: "Real-time Safety Monitoring",
      realTimeTrackingDesc: "AI-powered anomaly detection and geo-fencing alerts",
      emergencyResponse: "Emergency Response",
      emergencyResponseDesc: "Instant panic button with location sharing to authorities",
      incidentManagement: "Incident Management",
      incidentManagementDesc: "Comprehensive dashboard for authorities to track and respond",
      multilingualSupport: "Multilingual Support",
      multilingualSupportDesc: "Full English and Hindi support with cultural context",
      authorityDashboard: "Authority Dashboard",
      authorityDashboardDesc: "Real-time visualizations and automated alert systems",
      getStarted: "Get Started",
      chooseRole: "Choose Your Role",
      safetyFirst: "Safety First, Always",
      poweredBy: "Powered by advanced AI and blockchain technology",
    },
    hi: {
      title: "स्मार्ट पर्यटक सुरक्षा निगरानी प्रणाली",
      subtitle: "भारत भर में सुरक्षित और संरक्षित यात्रा अनुभव सुनिश्चित करना",
      description:
        "पर्यटकों और अधिकारियों के लिए रियल-टाइम ट्रैकिंग, आपातकालीन प्रतिक्रिया और व्यापक घटना प्रबंधन के साथ उन्नत AI-संचालित सुरक्षा निगरानी।",
      touristRole: "मैं एक पर्यटक हूं",
      authorityRole: "मैं एक अधिकारी हूं",
      touristDesc: "डिजिटल आईडी, सुरक्षा अलर्ट और आपातकालीन सहायता प्राप्त करें",
      authorityDesc: "पर्यटकों की निगरानी करें, घटनाओं का प्रबंधन करें और प्रतिक्रियाओं का समन्वय करें",
      features: "मुख्य विशेषताएं",
      digitalId: "डिजिटल पर्यटक आईडी",
      digitalIdDesc: "QR कोड और आपातकालीन संपर्कों के साथ ब्लॉकचेन-सुरक्षित पहचान",
      realTimeTracking: "रियल-टाइम सुरक्षा निगरानी",
      realTimeTrackingDesc: "AI-संचालित विसंगति का पता लगाना और जियो-फेंसिंग अलर्ट",
      emergencyResponse: "आपातकालीन प्रतिक्रिया",
      emergencyResponseDesc: "अधिकारियों को स्थान साझाकरण के साथ तत्काल पैनिक बटन",
      incidentManagement: "घटना प्रबंधन",
      incidentManagementDesc: "अधिकारियों के लिए ट्रैक और प्रतिक्रिया के लिए व्यापक डैशबोर्ड",
      multilingualSupport: "बहुभाषी समर्थन",
      multilingualSupportDesc: "सांस्कृतिक संदर्भ के साथ पूर्ण अंग्रेजी और हिंदी समर्थन",
      authorityDashboard: "प्राधिकरण डैशबोर्ड",
      authorityDashboardDesc: "रियल-टाइम विज़ुअलाइज़ेशन और स्वचालित अलर्ट सिस्टम",
      getStarted: "शुरू करें",
      chooseRole: "अपनी भूमिका चुनें",
      safetyFirst: "सुरक्षा पहले, हमेशा",
      poweredBy: "उन्नत AI और ब्लॉकचेन तकनीक द्वारा संचालित",
    },
  }

  const t = translations[language]

  return (
    <div className={`min-h-screen bg-background text-foreground ${isDark ? "dark" : ""}`}>
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-lg">
                <Shield className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-foreground">SafeTourism India</h1>
                <p className="text-sm text-muted-foreground">Government of India</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "hi" : "en")}
                className="gap-2"
              >
                <Globe className="w-4 h-4" />
                {language === "en" ? "हिंदी" : "English"}
              </Button>
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="gap-2">
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(language === "en" ? "hi" : "en")}
                  className="justify-start gap-2"
                >
                  <Globe className="w-4 h-4" />
                  {language === "en" ? "हिंदी" : "English"}
                </Button>
                <Button variant="ghost" size="sm" onClick={toggleTheme} className="justify-start gap-2">
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 text-sm">
            {t.poweredBy}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{t.title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">{t.subtitle}</p>
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto text-pretty">{t.description}</p>

          {/* Role Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-accent">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">{t.touristRole}</CardTitle>
                <CardDescription className="text-base">{t.touristDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg" onClick={() => router.push("/register/tourist")}>
                  {t.getStarted}
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-accent">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">{t.authorityRole}</CardTitle>
                <CardDescription className="text-base">{t.authorityDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-transparent"
                  variant="outline"
                  size="lg"
                  onClick={() => router.push("/dashboard/authority")}
                >
                  {t.getStarted}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.features}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.safetyFirst}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>{t.digitalId}</CardTitle>
                <CardDescription>{t.digitalIdDesc}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>{t.realTimeTracking}</CardTitle>
                <CardDescription>{t.realTimeTrackingDesc}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>{t.emergencyResponse}</CardTitle>
                <CardDescription>{t.emergencyResponseDesc}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>{t.incidentManagement}</CardTitle>
                <CardDescription>{t.incidentManagementDesc}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>{t.multilingualSupport}</CardTitle>
                <CardDescription>{t.multilingualSupportDesc}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>{t.authorityDashboard}</CardTitle>
                <CardDescription>{t.authorityDashboardDesc}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 bg-accent rounded-lg">
              <Shield className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-lg font-semibold">SafeTourism India</span>
          </div>
          <p className="text-muted-foreground mb-4">Ministry of Tourism, Government of India</p>
          <p className="text-sm text-muted-foreground">
            Emergency Numbers: Police (100) | Ambulance (108) | Fire (101) | Tourist Helpline (1363)
          </p>
        </div>
      </footer>
    </div>
  )
}
