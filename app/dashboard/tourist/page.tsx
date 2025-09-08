"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Search } from "lucide-react"
import {
  Shield,
  MapPin,
  AlertTriangle,
  Phone,
  Globe,
  Moon,
  Sun,
  Menu,
  X,
  Bell,
  Settings,
  LogOut,
  CheckCircle,
  Clock,
  Navigation,
  Zap,
  Users,
  Heart,
  Activity,
  Map,
  QrCode,
  Download,
  Share2,
  Home,
  Star,
  User,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function TouristDashboard() {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [panicActive, setPanicActive] = useState(false)
  const [locationSharing, setLocationSharing] = useState(true)
  const [searchQuery, setSearchQuery] = useState("") // Added search state for best places
  const router = useRouter()

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const handlePanicButton = () => {
    setPanicActive(true)
    // Simulate emergency alert
    setTimeout(() => {
      setPanicActive(false)
    }, 5000)
  }

  const translations = {
    en: {
      dashboard: "Tourist Dashboard",
      welcome: "Welcome back",
      overview: "Overview",
      safety: "Safety",
      emergency: "Emergency",
      profile: "Profile",
      home: "Home",
      location: "Location",
      bestPlaces: "Best Places",
      safetyScore: "Safety Score",
      currentLocation: "Current Location",
      lastUpdated: "Last updated",
      excellent: "Excellent",
      good: "Good",
      moderate: "Moderate",
      poor: "Poor",
      safeZone: "Safe Zone",
      restrictedZone: "Restricted Zone",
      highRiskZone: "High Risk Zone",
      dangerZone: "Danger Zone",
      panicButton: "Emergency Panic Button",
      panicDescription: "Press and hold for 3 seconds to send emergency alert",
      panicActive: "Emergency Alert Sent!",
      panicActiveDesc: "Authorities and emergency contacts have been notified",
      emergencyContacts: "Emergency Contacts",
      indianEmergency: "Indian Emergency Services",
      police: "Police",
      ambulance: "Ambulance",
      fire: "Fire Service",
      touristHelpline: "Tourist Helpline",
      personalContacts: "Personal Emergency Contacts",
      digitalId: "Digital Tourist ID",
      downloadId: "Download ID",
      shareId: "Share ID",
      validUntil: "Valid until",
      recentAlerts: "Recent Safety Alerts",
      noAlerts: "No recent alerts",
      locationTracking: "Location Tracking",
      trackingEnabled: "Enabled",
      trackingDisabled: "Disabled",
      safetyTips: "Safety Tips",
      tip1: "Always inform someone about your travel plans",
      tip2: "Keep emergency contacts updated",
      tip3: "Stay in well-lit and populated areas",
      tip4: "Carry identification documents",
      itinerary: "Travel Itinerary",
      upcomingDestinations: "Upcoming Destinations",
      completedVisits: "Completed Visits",
      settings: "Settings",
      logout: "Logout",
      notifications: "Notifications",
      liveLocation: "Live Location & Safety Zones",
      yourLocation: "Your Location",
      tajMahal: "Taj Mahal",
      redFort: "Red Fort",
      indiaGate: "India Gate",
      goldenTemple: "Golden Temple",
      keralaBackwaters: "Kerala Backwaters",
      goaBeaches: "Goa Beaches",
      rajasthanPalaces: "Rajasthan Palaces",
      himalayanPeaks: "Himalayan Peaks",
    },
    hi: {
      dashboard: "पर्यटक डैशबोर्ड",
      welcome: "वापसी पर स्वागत है",
      overview: "अवलोकन",
      safety: "सुरक्षा",
      emergency: "आपातकाल",
      profile: "प्रोफ़ाइल",
      home: "होम",
      location: "स्थान",
      bestPlaces: "बेहतरीन जगहें",
      safetyScore: "सुरक्षा स्कोर",
      currentLocation: "वर्तमान स्थान",
      lastUpdated: "अंतिम अपडेट",
      excellent: "उत्कृष्ट",
      good: "अच्छा",
      moderate: "मध्यम",
      poor: "खराब",
      safeZone: "सुरक्षित क्षेत्र",
      restrictedZone: "प्रतिबंधित क्षेत्र",
      highRiskZone: "उच्च जोखिम क्षेत्र",
      dangerZone: "खतरनाक क्षेत्र",
      panicButton: "आपातकालीन पैनिक बटन",
      panicDescription: "आपातकालीन अलर्ट भेजने के लिए 3 सेकंड दबाकर रखें",
      panicActive: "आपातकालीन अलर्ट भेजा गया!",
      panicActiveDesc: "अधिकारियों और आपातकालीन संपर्कों को सूचित कर दिया गया है",
      emergencyContacts: "आपातकालीन संपर्क",
      indianEmergency: "भारतीय आपातकालीन सेवाएं",
      police: "पुलिस",
      ambulance: "एम्बुलेंस",
      fire: "अग्निशमन सेवा",
      touristHelpline: "पर्यटक हेल्पलाइन",
      personalContacts: "व्यक्तिगत आपातकालीन संपर्क",
      digitalId: "डिजिटल पर्यटक आईडी",
      downloadId: "आईडी डाउनलोड करें",
      shareId: "आईडी साझा करें",
      validUntil: "तक वैध",
      recentAlerts: "हाल की सुरक्षा चेतावनियां",
      noAlerts: "कोई हाल की चेतावनी नहीं",
      locationTracking: "स्थान ट्रैकिंग",
      trackingEnabled: "सक्षम",
      trackingDisabled: "अक्षम",
      safetyTips: "सुरक्षा सुझाव",
      tip1: "हमेशा किसी को अपनी यात्रा योजनाओं के बारे में बताएं",
      tip2: "आपातकालीन संपर्कों को अपडेट रखें",
      tip3: "अच्छी रोशनी और आबादी वाले क्षेत्रों में रहें",
      tip4: "पहचान दस्तावेज साथ रखें",
      itinerary: "यात्रा कार्यक्रम",
      upcomingDestinations: "आगामी गंतव्य",
      completedVisits: "पूर्ण यात्राएं",
      settings: "सेटिंग्स",
      logout: "लॉगआउट",
      notifications: "सूचनाएं",
      liveLocation: "लाइव स्थान और सुरक्षा क्षेत्र",
      yourLocation: "आपका स्थान",
      tajMahal: "ताज महल",
      redFort: "लाल किला",
      indiaGate: "इंडिया गेट",
      goldenTemple: "स्वर्ण मंदिर",
      keralaBackwaters: "केरल बैकवाटर्स",
      goaBeaches: "गोवा बीच",
      rajasthanPalaces: "राजस्थान के महल",
      himalayanPeaks: "हिमालयी चोटियां",
    },
  }

  const t = translations[language]

  // Mock data
  const safetyScore = 85
  const currentLocation = "Connaught Place, New Delhi"
  const digitalIdNumber = "TID-2024001234"
  const validUntil = "2024-12-31"

  const bestPlaces = [
    {
      name: t.tajMahal,
      image: "/taj-mahal.jpg",
      location: "Agra, Uttar Pradesh",
    },
    {
      name: t.redFort,
      image: "/red-fort.jpg",
      location: "Delhi",
    },
    {
      name: t.indiaGate,
      image: "/india-gate.jpg",
      location: "New Delhi",
    },
    {
      name: t.goldenTemple,
      image: "/golden-temple.jpg",
      location: "Amritsar, Punjab",
    },
    {
      name: t.keralaBackwaters,
      image: "/kerala-backwaters.jpg",
      location: "Kerala",
    },
    {
      name: t.goaBeaches,
      image: "/goa-beaches.jpg",
      location: "Goa",
    },
    {
      name: t.rajasthanPalaces,
      image: "/rajasthan-palaces.jpg",
      location: "Rajasthan",
    },
    {
      name: t.himalayanPeaks,
      image: "/himalayan-peaks.jpg",
      location: "Himachal Pradesh",
    },
  ]

  const emergencyServices = [
    { name: t.police, number: "100", icon: Shield },
    { name: t.ambulance, number: "108", icon: Heart },
    { name: t.fire, number: "101", icon: AlertTriangle },
    { name: t.touristHelpline, number: "1363", icon: Phone },
  ]

  const personalContacts = [
    { name: "Rajesh Kumar", relation: "Father", number: "+91 98765 43210" },
    { name: "Priya Sharma", relation: "Sister", number: "+91 87654 32109" },
  ]

  const recentAlerts = [
    {
      id: 1,
      type: "info",
      title: "Weather Alert",
      message: "Heavy rainfall expected in your area. Stay indoors if possible.",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "warning",
      title: "Area Restriction",
      message: "Temporary restrictions in Red Fort area due to maintenance.",
      time: "1 day ago",
    },
  ]

  const upcomingDestinations = [
    { name: "India Gate", date: "Today", status: "planned" },
    { name: "Lotus Temple", date: "Tomorrow", status: "planned" },
    { name: "Qutub Minar", date: "Dec 28", status: "planned" },
  ]

  const completedVisits = [
    { name: "Red Fort", date: "Yesterday", rating: 5 },
    { name: "Jama Masjid", date: "Dec 25", rating: 4 },
  ]

  const getSafetyScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    if (score >= 40) return "text-orange-600"
    return "text-red-600"
  }

  const getSafetyScoreText = (score: number) => {
    if (score >= 80) return t.excellent
    if (score >= 60) return t.good
    if (score >= 40) return t.moderate
    return t.poor
  }

  // Mock data for map visualization
  const touristLocation = { lat: 28.6139, lng: 77.209 } // Connaught Place coordinates
  const dangerZone = { lat: 28.65, lng: 77.25 } // Danger zone coordinates (far from tourist)

  const filteredPlaces = bestPlaces.filter(
    (place) =>
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className={`min-h-screen bg-background text-foreground ${isDark ? "dark" : ""} pb-20`}>
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
                <p className="text-sm text-muted-foreground">{t.dashboard}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <Bell className="w-4 h-4" />
                {t.notifications}
              </Button>
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
              <Button variant="ghost" size="sm" className="gap-2">
                <Settings className="w-4 h-4" />
                {t.settings}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => router.push("/")} className="gap-2">
                <LogOut className="w-4 h-4" />
                {t.logout}
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
                <Button variant="ghost" size="sm" className="justify-start gap-2">
                  <Bell className="w-4 h-4" />
                  {t.notifications}
                </Button>
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
                <Button variant="ghost" size="sm" className="justify-start gap-2">
                  <Settings className="w-4 h-4" />
                  {t.settings}
                </Button>
                <Button variant="ghost" size="sm" onClick={() => router.push("/")} className="justify-start gap-2">
                  <LogOut className="w-4 h-4" />
                  {t.logout}
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/tourist-profile-photo.jpg" />
              <AvatarFallback>VK</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{t.welcome}, Vishal Kumar</h1>
              <p className="text-muted-foreground">Digital ID: {digitalIdNumber}</p>
            </div>
          </div>

          {/* Emergency Alert */}
          {panicActive && (
            <Alert className="mb-4 border-destructive bg-destructive/10">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <AlertTitle className="text-destructive">{t.panicActive}</AlertTitle>
              <AlertDescription>{t.panicActiveDesc}</AlertDescription>
            </Alert>
          )}
        </div>

        {/* Main Dashboard */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">{t.overview}</TabsTrigger>
            <TabsTrigger value="safety">{t.safety}</TabsTrigger>
            <TabsTrigger value="emergency">{t.emergency}</TabsTrigger>
            <TabsTrigger value="profile">{t.profile}</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Live Location Map */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  {t.liveLocation}
                </CardTitle>
                <CardDescription>Real-time location tracking with safety zones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-80 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-lg border border-border overflow-hidden">
                  {/* Map Background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30"></div>
                  </div>

                  {/* Tourist Location (Blue Dot) */}
                  <div
                    className="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"
                    style={{
                      left: "45%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 10,
                    }}
                  >
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Tourist Location Label */}
                  <div
                    className="absolute bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-md text-xs font-medium border"
                    style={{
                      left: "45%",
                      top: "45%",
                      transform: "translate(-50%, -100%)",
                      zIndex: 11,
                    }}
                  >
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {t.yourLocation}
                    </div>
                  </div>

                  {/* Danger Zone (Red Circle) */}
                  <div
                    className="absolute border-2 border-red-500 rounded-full bg-red-500/10"
                    style={{
                      width: "120px",
                      height: "120px",
                      left: "75%",
                      top: "20%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 5,
                    }}
                  >
                    <div className="absolute inset-2 border border-red-400 rounded-full bg-red-400/5"></div>
                  </div>

                  {/* Danger Zone Label */}
                  <div
                    className="absolute bg-red-50 dark:bg-red-950/50 px-2 py-1 rounded shadow-md text-xs font-medium border border-red-200 dark:border-red-800"
                    style={{
                      left: "75%",
                      top: "15%",
                      transform: "translate(-50%, -100%)",
                      zIndex: 11,
                    }}
                  >
                    <div className="flex items-center gap-1 text-red-700 dark:text-red-300">
                      <AlertTriangle className="w-3 h-3" />
                      {t.dangerZone}
                    </div>
                  </div>

                  {/* Safe Zone Indicator */}
                  <div
                    className="absolute border-2 border-green-500 rounded-full bg-green-500/10"
                    style={{
                      width: "80px",
                      height: "80px",
                      left: "45%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 3,
                    }}
                  ></div>

                  {/* Map Grid Lines */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute border-l border-gray-400"
                        style={{ left: `${i * 12.5}%`, height: "100%" }}
                      ></div>
                    ))}
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute border-t border-gray-400"
                        style={{ top: `${i * 16.67}%`, width: "100%" }}
                      ></div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-lg border shadow-sm">
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span>{t.yourLocation}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 border-2 border-green-500 rounded-full bg-green-500/20"></div>
                        <span>{t.safeZone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 border-2 border-red-500 rounded-full bg-red-500/20"></div>
                        <span>{t.dangerZone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Safety Score Card */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5 text-accent" />
                    {t.safetyScore}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-3xl font-bold ${getSafetyScoreColor(safetyScore)}`}>
                        {safetyScore}/100
                      </span>
                      <Badge variant="secondary">{getSafetyScoreText(safetyScore)}</Badge>
                    </div>
                    <Progress value={safetyScore} className="h-2" />
                    <p className="text-sm text-muted-foreground">Based on location, behavior, and travel patterns</p>
                  </div>
                </CardContent>
              </Card>

              {/* Current Location Card */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    {t.currentLocation}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="font-medium">{currentLocation}</p>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {t.safeZone}
                    </Badge>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {t.lastUpdated}: 2 min ago
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Location Tracking Status */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-accent" />
                    {t.locationTracking}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{locationSharing ? t.trackingEnabled : t.trackingDisabled}</span>
                      <Badge variant={locationSharing ? "default" : "secondary"}>
                        {locationSharing ? <Activity className="w-3 h-3 mr-1" /> : <X className="w-3 h-3 mr-1" />}
                        {locationSharing ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLocationSharing(!locationSharing)}
                      className="w-full"
                    >
                      {locationSharing ? "Disable" : "Enable"} Tracking
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Alerts and Itinerary */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-accent" />
                    {t.recentAlerts}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {recentAlerts.length > 0 ? (
                    <div className="space-y-4">
                      {recentAlerts.map((alert) => (
                        <div key={alert.id} className="border-l-4 border-accent pl-4 py-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium">{alert.title}</h4>
                              <p className="text-sm text-muted-foreground">{alert.message}</p>
                            </div>
                            <span className="text-xs text-muted-foreground">{alert.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-center py-4">{t.noAlerts}</p>
                  )}
                </CardContent>
              </Card>

              {/* Travel Itinerary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Map className="w-5 h-5 text-accent" />
                    {t.itinerary}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">{t.upcomingDestinations}</h4>
                      <div className="space-y-2">
                        {upcomingDestinations.map((dest, index) => (
                          <div key={index} className="flex items-center justify-between py-2 border-b border-border">
                            <div>
                              <p className="font-medium">{dest.name}</p>
                              <p className="text-sm text-muted-foreground">{dest.date}</p>
                            </div>
                            <Badge variant="outline">Planned</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Safety Tab */}
          <TabsContent value="safety" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Safety Score Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Safety Score Breakdown</CardTitle>
                  <CardDescription>Detailed analysis of your safety metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Location Safety</span>
                      <span className="font-medium">90/100</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Travel Pattern</span>
                      <span className="font-medium">85/100</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Emergency Preparedness</span>
                      <span className="font-medium">80/100</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Safety Tips */}
              <Card>
                <CardHeader>
                  <CardTitle>{t.safetyTips}</CardTitle>
                  <CardDescription>Important safety recommendations for your trip</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-sm">{t.tip1}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-sm">{t.tip2}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-sm">{t.tip3}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-sm">{t.tip4}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Safety Zone Map</CardTitle>
                <CardDescription>Real-time safety zones and your current location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Map className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive safety map would be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Emergency Tab */}
          <TabsContent value="emergency" className="space-y-6">
            {/* Panic Button */}
            <Card className="border-destructive">
              <CardHeader className="text-center">
                <CardTitle className="text-destructive">{t.panicButton}</CardTitle>
                <CardDescription>{t.panicDescription}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  size="lg"
                  variant="destructive"
                  className={`w-32 h-32 rounded-full text-lg font-bold ${panicActive ? "animate-pulse" : ""}`}
                  onClick={handlePanicButton}
                  disabled={panicActive}
                >
                  {panicActive ? (
                    <div className="flex flex-col items-center">
                      <Zap className="w-8 h-8 mb-1" />
                      <span className="text-sm">SENT</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <AlertTriangle className="w-8 h-8 mb-1" />
                      <span className="text-sm">PANIC</span>
                    </div>
                  )}
                </Button>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Indian Emergency Services */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-accent" />
                    {t.indianEmergency}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {emergencyServices.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-border rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <service.icon className="w-5 h-5 text-accent" />
                          <span className="font-medium">{service.name}</span>
                        </div>
                        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                          <Phone className="w-4 h-4" />
                          {service.number}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Personal Emergency Contacts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    {t.personalContacts}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {personalContacts.map((contact, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-border rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{contact.name}</p>
                          <p className="text-sm text-muted-foreground">{contact.relation}</p>
                        </div>
                        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                          <Phone className="w-4 h-4" />
                          Call
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Digital ID Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <QrCode className="w-5 h-5 text-accent" />
                    {t.digitalId}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg border border-accent/20">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src="/tourist-profile-photo.jpg" />
                          <AvatarFallback>VK</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-bold">Vishal Kumar</h3>
                          <p className="text-sm text-muted-foreground">Tourist ID: {digitalIdNumber}</p>
                          <p className="text-sm text-muted-foreground">
                            {t.validUntil}: {validUntil}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center mb-4">
                        <div className="w-24 h-24 bg-background border border-border rounded-lg flex items-center justify-center">
                          <QrCode className="w-12 h-12 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent">
                          <Download className="w-4 h-4" />
                          {t.downloadId}
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent">
                          <Share2 className="w-4 h-4" />
                          {t.shareId}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Completed Visits */}
              <Card>
                <CardHeader>
                  <CardTitle>{t.completedVisits}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {completedVisits.map((visit, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-border rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{visit.name}</p>
                          <p className="text-sm text-muted-foreground">{visit.date}</p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${i < visit.rating ? "text-yellow-500" : "text-muted-foreground"}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {activeTab === "bestPlaces" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-accent" />
                        {t.bestPlaces}
                      </CardTitle>
                      <CardDescription>Discover India's most beautiful destinations</CardDescription>
                    </div>
                    <div className="relative w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search places..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredPlaces.map((place, index) => (
                      <div key={index} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300">
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={place.image || "/placeholder.svg"}
                              alt={place.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-lg mb-1 text-foreground">{place.name}</h3>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {place.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {filteredPlaces.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No places found matching "{searchQuery}"
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </Tabs>
      </div>

      {/* Bottom Taskbar Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            <Button
              variant="ghost"
              size="sm"
              className="flex flex-col items-center gap-1 h-auto py-2 px-3"
              onClick={() => setActiveTab("overview")}
            >
              <Home className="w-5 h-5" />
              <span className="text-xs">{t.home}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex flex-col items-center gap-1 h-auto py-2 px-3"
              onClick={() => setActiveTab("safety")}
            >
              <MapPin className="w-5 h-5" />
              <span className="text-xs">{t.location}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex flex-col items-center gap-1 h-auto py-2 px-3"
              onClick={() => setActiveTab("bestPlaces")}
            >
              <Star className="w-5 h-5" />
              <span className="text-xs">{t.bestPlaces}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex flex-col items-center gap-1 h-auto py-2 px-3"
              onClick={() => setActiveTab("profile")}
            >
              <User className="w-5 h-5" />
              <span className="text-xs">{t.profile}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
