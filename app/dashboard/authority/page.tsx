"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Shield,
  Users,
  AlertTriangle,
  Bell,
  Globe,
  Moon,
  Sun,
  Menu,
  X,
  Settings,
  LogOut,
  Search,
  Plus,
  Eye,
  Edit,
  Clock,
  CheckCircle,
  Activity,
  TrendingUp,
  TrendingDown,
  Map,
  Send,
  FileText,
  Download,
  RefreshCw,
} from "lucide-react"
import { useRouter } from "next/navigation"

interface Tourist {
  id: string
  name: string
  nationality: string
  digitalId: string
  currentLocation: string
  safetyScore: number
  status: "safe" | "alert" | "emergency"
  lastSeen: string
  phone: string
  checkInTime: string
}

interface Incident {
  id: string
  type: "missing" | "emergency" | "medical" | "theft" | "other"
  touristId: string
  touristName: string
  location: string
  description: string
  status: "open" | "investigating" | "resolved" | "closed"
  priority: "low" | "medium" | "high" | "critical"
  reportedAt: string
  assignedOfficer: string
}

interface AlertBroadcast {
  id: string
  title: string
  message: string
  type: "info" | "warning" | "emergency"
  targetArea: string
  createdAt: string
  status: "draft" | "sent"
}

export default function AuthorityDashboard() {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedTourist, setSelectedTourist] = useState<Tourist | null>(null)
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null)
  const [newAlert, setNewAlert] = useState({
    title: "",
    message: "",
    type: "info" as "info" | "warning" | "emergency",
    targetArea: "",
  })
  const router = useRouter()

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const translations = {
    en: {
      dashboard: "Authority Dashboard",
      welcome: "Welcome, Officer",
      overview: "Overview",
      tourists: "Tourists",
      incidents: "Incidents",
      alerts: "Alerts",
      totalTourists: "Total Tourists",
      activeTourists: "Active Tourists",
      safetyAlerts: "Safety Alerts",
      openIncidents: "Open Incidents",
      recentActivity: "Recent Activity",
      touristManagement: "Tourist Management",
      searchTourists: "Search tourists...",
      filterByStatus: "Filter by status",
      allStatuses: "All Statuses",
      safe: "Safe",
      alert: "Alert",
      emergency: "Emergency",
      viewDetails: "View Details",
      touristDetails: "Tourist Details",
      digitalId: "Digital ID",
      nationality: "Nationality",
      currentLocation: "Current Location",
      safetyScore: "Safety Score",
      lastSeen: "Last Seen",
      checkInTime: "Check-in Time",
      contactInfo: "Contact Information",
      incidentManagement: "Incident Management",
      createIncident: "Create Incident",
      incidentDetails: "Incident Details",
      incidentType: "Incident Type",
      missing: "Missing Person",
      medical: "Medical Emergency",
      theft: "Theft",
      other: "Other",
      priority: "Priority",
      low: "Low",
      medium: "Medium",
      high: "High",
      critical: "Critical",
      status: "Status",
      open: "Open",
      investigating: "Investigating",
      resolved: "Resolved",
      closed: "Closed",
      assignedOfficer: "Assigned Officer",
      description: "Description",
      location: "Location",
      reportedAt: "Reported At",
      alertBroadcasting: "Alert Broadcasting",
      createAlert: "Create Alert",
      broadcastAlert: "Broadcast Alert",
      alertTitle: "Alert Title",
      alertMessage: "Alert Message",
      alertType: "Alert Type",
      info: "Information",
      warning: "Warning",
      targetArea: "Target Area",
      recentAlerts: "Recent Alerts",
      sent: "Sent",
      draft: "Draft",
      sendAlert: "Send Alert",
      saveDraft: "Save Draft",
      realTimeMap: "Real-time Tourist Map",
      mapPlaceholder: "Interactive map showing tourist locations and safety zones",
      generateReport: "Generate Report",
      exportData: "Export Data",
      refreshData: "Refresh Data",
      settings: "Settings",
      logout: "Logout",
      notifications: "Notifications",
      viewIncident: "View Incident",
      editIncident: "Edit Incident",
      closeIncident: "Close Incident",
      escalateIncident: "Escalate Incident",
    },
    hi: {
      dashboard: "प्राधिकरण डैशबोर्ड",
      welcome: "स्वागत है, अधिकारी",
      overview: "अवलोकन",
      tourists: "पर्यटक",
      incidents: "घटनाएं",
      alerts: "चेतावनियां",
      totalTourists: "कुल पर्यटक",
      activeTourists: "सक्रिय पर्यटक",
      safetyAlerts: "सुरक्षा चेतावनियां",
      openIncidents: "खुली घटनाएं",
      recentActivity: "हाल की गतिविधि",
      touristManagement: "पर्यटक प्रबंधन",
      searchTourists: "पर्यटक खोजें...",
      filterByStatus: "स्थिति के अनुसार फ़िल्टर करें",
      allStatuses: "सभी स्थितियां",
      safe: "सुरक्षित",
      alert: "चेतावनी",
      emergency: "आपातकाल",
      viewDetails: "विवरण देखें",
      touristDetails: "पर्यटक विवरण",
      digitalId: "डिजिटल आईडी",
      nationality: "राष्ट्रीयता",
      currentLocation: "वर्तमान स्थान",
      safetyScore: "सुरक्षा स्कोर",
      lastSeen: "अंतिम बार देखा गया",
      checkInTime: "चेक-इन समय",
      contactInfo: "संपर्क जानकारी",
      incidentManagement: "घटना प्रबंधन",
      createIncident: "घटना बनाएं",
      incidentDetails: "घटना विवरण",
      incidentType: "घटना प्रकार",
      missing: "लापता व्यक्ति",
      medical: "चिकित्सा आपातकाल",
      theft: "चोरी",
      other: "अन्य",
      priority: "प्राथमिकता",
      low: "कम",
      medium: "मध्यम",
      high: "उच्च",
      critical: "गंभीर",
      status: "स्थिति",
      open: "खुला",
      investigating: "जांच में",
      resolved: "हल हो गया",
      closed: "बंद",
      assignedOfficer: "नियुक्त अधिकारी",
      description: "विवरण",
      location: "स्थान",
      reportedAt: "रिपोर्ट किया गया",
      alertBroadcasting: "चेतावनी प्रसारण",
      createAlert: "चेतावनी बनाएं",
      broadcastAlert: "चेतावनी प्रसारित करें",
      alertTitle: "चेतावनी शीर्षक",
      alertMessage: "चेतावनी संदेश",
      alertType: "चेतावनी प्रकार",
      info: "जानकारी",
      warning: "चेतावनी",
      targetArea: "लक्षित क्षेत्र",
      recentAlerts: "हाल की चेतावनियां",
      sent: "भेजा गया",
      draft: "मसौदा",
      sendAlert: "चेतावनी भेजें",
      saveDraft: "मसौदा सहेजें",
      realTimeMap: "रियल-टाइम पर्यटक मानचित्र",
      mapPlaceholder: "पर्यटक स्थानों और सुरक्षा क्षेत्रों को दिखाने वाला इंटरैक्टिव मानचित्र",
      generateReport: "रिपोर्ट जेनरेट करें",
      exportData: "डेटा निर्यात करें",
      refreshData: "डेटा रीफ्रेश करें",
      settings: "सेटिंग्स",
      logout: "लॉगआउट",
      notifications: "सूचनाएं",
      viewIncident: "घटना देखें",
      editIncident: "घटना संपादित करें",
      closeIncident: "घटना बंद करें",
      escalateIncident: "घटना को बढ़ाएं",
    },
  }

  const t = translations[language]

  // Mock data
  const dashboardStats = {
    totalTourists: 1247,
    activeTourists: 892,
    safetyAlerts: 23,
    openIncidents: 7,
  }

  const mockTourists: Tourist[] = [
    {
      id: "TID-001",
      name: "John Smith",
      nationality: "American",
      digitalId: "TID-2024001234",
      currentLocation: "India Gate, New Delhi",
      safetyScore: 85,
      status: "safe",
      lastSeen: "2 min ago",
      phone: "+1 555-0123",
      checkInTime: "2024-12-26 09:30",
    },
    {
      id: "TID-002",
      name: "Emma Johnson",
      nationality: "British",
      digitalId: "TID-2024001235",
      currentLocation: "Red Fort, New Delhi",
      safetyScore: 92,
      status: "safe",
      lastSeen: "5 min ago",
      phone: "+44 20 7946 0958",
      checkInTime: "2024-12-26 08:15",
    },
    {
      id: "TID-003",
      name: "Hiroshi Tanaka",
      nationality: "Japanese",
      digitalId: "TID-2024001236",
      currentLocation: "Chandni Chowk, New Delhi",
      safetyScore: 65,
      status: "alert",
      lastSeen: "15 min ago",
      phone: "+81 3-1234-5678",
      checkInTime: "2024-12-26 07:45",
    },
    {
      id: "TID-004",
      name: "Maria Garcia",
      nationality: "Spanish",
      digitalId: "TID-2024001237",
      currentLocation: "Unknown",
      safetyScore: 30,
      status: "emergency",
      lastSeen: "2 hours ago",
      phone: "+34 91 123 4567",
      checkInTime: "2024-12-25 18:20",
    },
  ]

  const mockIncidents: Incident[] = [
    {
      id: "INC-001",
      type: "missing",
      touristId: "TID-004",
      touristName: "Maria Garcia",
      location: "Karol Bagh Market",
      description: "Tourist reported missing after visiting local market. Last seen at 14:30.",
      status: "investigating",
      priority: "high",
      reportedAt: "2024-12-26 16:45",
      assignedOfficer: "Officer Sharma",
    },
    {
      id: "INC-002",
      type: "medical",
      touristId: "TID-005",
      touristName: "Robert Wilson",
      location: "Lotus Temple",
      description: "Tourist experienced chest pain and difficulty breathing.",
      status: "resolved",
      priority: "critical",
      reportedAt: "2024-12-26 11:20",
      assignedOfficer: "Officer Patel",
    },
    {
      id: "INC-003",
      type: "theft",
      touristId: "TID-006",
      touristName: "Lisa Chen",
      location: "Connaught Place",
      description: "Tourist reported theft of passport and wallet.",
      status: "open",
      priority: "medium",
      reportedAt: "2024-12-26 13:15",
      assignedOfficer: "Officer Kumar",
    },
  ]

  const mockAlerts: AlertBroadcast[] = [
    {
      id: "ALT-001",
      title: "Heavy Rainfall Warning",
      message: "Heavy rainfall expected in Delhi NCR. Tourists advised to stay indoors.",
      type: "warning",
      targetArea: "Delhi NCR",
      createdAt: "2024-12-26 14:30",
      status: "sent",
    },
    {
      id: "ALT-002",
      title: "Traffic Disruption",
      message: "Major traffic disruption on NH-1 due to construction work.",
      type: "info",
      targetArea: "NH-1 Corridor",
      createdAt: "2024-12-26 12:15",
      status: "sent",
    },
  ]

  const filteredTourists = mockTourists.filter((tourist) => {
    const matchesSearch =
      tourist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tourist.digitalId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || tourist.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "safe":
        return (
          <Badge variant="outline" className="text-green-600 border-green-600">
            Safe
          </Badge>
        )
      case "alert":
        return (
          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
            Alert
          </Badge>
        )
      case "emergency":
        return <Badge variant="destructive">Emergency</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "low":
        return (
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            Low
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
            Medium
          </Badge>
        )
      case "high":
        return (
          <Badge variant="outline" className="text-orange-600 border-orange-600">
            High
          </Badge>
        )
      case "critical":
        return <Badge variant="destructive">Critical</Badge>
      default:
        return <Badge variant="secondary">{priority}</Badge>
    }
  }

  const handleSendAlert = () => {
    // Simulate sending alert
    console.log("Sending alert:", newAlert)
    setNewAlert({ title: "", message: "", type: "info", targetArea: "" })
  }

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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{t.welcome}</h1>
              <p className="text-muted-foreground">Delhi Police - Tourism Division</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <RefreshCw className="w-4 h-4" />
                {t.refreshData}
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Download className="w-4 h-4" />
                {t.exportData}
              </Button>
            </div>
          </div>
        </div>

        {/* Main Dashboard */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">{t.overview}</TabsTrigger>
            <TabsTrigger value="tourists">{t.tourists}</TabsTrigger>
            <TabsTrigger value="incidents">{t.incidents}</TabsTrigger>
            <TabsTrigger value="alerts">{t.alerts}</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Statistics Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    {t.totalTourists}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">{dashboardStats.totalTourists}</span>
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">+12% from last week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="w-5 h-5 text-accent" />
                    {t.activeTourists}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">{dashboardStats.activeTourists}</span>
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Currently online</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Bell className="w-5 h-5 text-accent" />
                    {t.safetyAlerts}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">{dashboardStats.safetyAlerts}</span>
                    <TrendingDown className="w-5 h-5 text-yellow-600" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Active alerts</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-accent" />
                    {t.openIncidents}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">{dashboardStats.openIncidents}</span>
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Require attention</p>
                </CardContent>
              </Card>
            </div>

            {/* Real-time Map and Recent Activity */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Real-time Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Map className="w-5 h-5 text-accent" />
                    {t.realTimeMap}
                  </CardTitle>
                  <CardDescription>{t.mapPlaceholder}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Map className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive map with tourist locations</p>
                      <p className="text-sm text-muted-foreground">Safe zones, alerts, and real-time tracking</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    {t.recentActivity}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">Tourist check-in: John Smith</p>
                        <p className="text-xs text-muted-foreground">India Gate - 2 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">Safety alert triggered</p>
                        <p className="text-xs text-muted-foreground">Chandni Chowk area - 15 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">Incident reported: Missing person</p>
                        <p className="text-xs text-muted-foreground">Karol Bagh - 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">Alert broadcast sent</p>
                        <p className="text-xs text-muted-foreground">Weather warning - 3 hours ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tourists Tab */}
          <TabsContent value="tourists" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.touristManagement}</CardTitle>
                <CardDescription>Monitor and manage registered tourists</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder={t.searchTourists}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder={t.filterByStatus} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t.allStatuses}</SelectItem>
                      <SelectItem value="safe">{t.safe}</SelectItem>
                      <SelectItem value="alert">{t.alert}</SelectItem>
                      <SelectItem value="emergency">{t.emergency}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Tourists Table */}
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tourist</TableHead>
                        <TableHead>{t.digitalId}</TableHead>
                        <TableHead>{t.currentLocation}</TableHead>
                        <TableHead>{t.safetyScore}</TableHead>
                        <TableHead>{t.status}</TableHead>
                        <TableHead>{t.lastSeen}</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTourists.map((tourist) => (
                        <TableRow key={tourist.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="w-8 h-8">
                                <AvatarFallback>
                                  {tourist.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{tourist.name}</p>
                                <p className="text-sm text-muted-foreground">{tourist.nationality}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="font-mono text-sm">{tourist.digitalId}</TableCell>
                          <TableCell>{tourist.currentLocation}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{tourist.safetyScore}</span>
                              <div className="w-16 h-2 bg-muted rounded-full">
                                <div
                                  className="h-full bg-accent rounded-full"
                                  style={{ width: `${tourist.safetyScore}%` }}
                                />
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{getStatusBadge(tourist.status)}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{tourist.lastSeen}</TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="gap-2 bg-transparent"
                                  onClick={() => setSelectedTourist(tourist)}
                                >
                                  <Eye className="w-4 h-4" />
                                  {t.viewDetails}
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>{t.touristDetails}</DialogTitle>
                                  <DialogDescription>
                                    Detailed information for {selectedTourist?.name}
                                  </DialogDescription>
                                </DialogHeader>
                                {selectedTourist && (
                                  <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                      <div>
                                        <Label className="text-sm font-medium">{t.digitalId}</Label>
                                        <p className="font-mono">{selectedTourist.digitalId}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">{t.nationality}</Label>
                                        <p>{selectedTourist.nationality}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">{t.currentLocation}</Label>
                                        <p>{selectedTourist.currentLocation}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">{t.safetyScore}</Label>
                                        <p>{selectedTourist.safetyScore}/100</p>
                                      </div>
                                    </div>
                                    <div className="space-y-4">
                                      <div>
                                        <Label className="text-sm font-medium">{t.status}</Label>
                                        <div className="mt-1">{getStatusBadge(selectedTourist.status)}</div>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">{t.lastSeen}</Label>
                                        <p>{selectedTourist.lastSeen}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">{t.checkInTime}</Label>
                                        <p>{selectedTourist.checkInTime}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">{t.contactInfo}</Label>
                                        <p>{selectedTourist.phone}</p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Incidents Tab */}
          <TabsContent value="incidents" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{t.incidentManagement}</CardTitle>
                    <CardDescription>Track and manage safety incidents</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="gap-2">
                        <Plus className="w-4 h-4" />
                        {t.createIncident}
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{t.createIncident}</DialogTitle>
                        <DialogDescription>Report a new safety incident</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>{t.incidentType}</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="missing">{t.missing}</SelectItem>
                                <SelectItem value="emergency">{t.emergency}</SelectItem>
                                <SelectItem value="medical">{t.medical}</SelectItem>
                                <SelectItem value="theft">{t.theft}</SelectItem>
                                <SelectItem value="other">{t.other}</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>{t.priority}</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select priority" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="low">{t.low}</SelectItem>
                                <SelectItem value="medium">{t.medium}</SelectItem>
                                <SelectItem value="high">{t.high}</SelectItem>
                                <SelectItem value="critical">{t.critical}</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>{t.location}</Label>
                          <Input placeholder="Enter incident location" />
                        </div>
                        <div className="space-y-2">
                          <Label>{t.description}</Label>
                          <Textarea placeholder="Describe the incident..." rows={3} />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" className="bg-transparent">
                          Cancel
                        </Button>
                        <Button>Create Incident</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Incident ID</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Tourist</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Assigned Officer</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockIncidents.map((incident) => (
                        <TableRow key={incident.id}>
                          <TableCell className="font-mono text-sm">{incident.id}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{incident.type}</Badge>
                          </TableCell>
                          <TableCell>{incident.touristName}</TableCell>
                          <TableCell>{incident.location}</TableCell>
                          <TableCell>{getPriorityBadge(incident.priority)}</TableCell>
                          <TableCell>
                            <Badge variant={incident.status === "resolved" ? "default" : "secondary"}>
                              {incident.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{incident.assignedOfficer}</TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="gap-2 bg-transparent"
                                  onClick={() => setSelectedIncident(incident)}
                                >
                                  <Eye className="w-4 h-4" />
                                  View
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>{t.incidentDetails}</DialogTitle>
                                  <DialogDescription>Incident {selectedIncident?.id}</DialogDescription>
                                </DialogHeader>
                                {selectedIncident && (
                                  <div className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                      <div>
                                        <Label className="text-sm font-medium">Type</Label>
                                        <p>{selectedIncident.type}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">Priority</Label>
                                        <div className="mt-1">{getPriorityBadge(selectedIncident.priority)}</div>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">Tourist</Label>
                                        <p>{selectedIncident.touristName}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">Location</Label>
                                        <p>{selectedIncident.location}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">Status</Label>
                                        <p>{selectedIncident.status}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">Assigned Officer</Label>
                                        <p>{selectedIncident.assignedOfficer}</p>
                                      </div>
                                    </div>
                                    <div>
                                      <Label className="text-sm font-medium">Description</Label>
                                      <p className="mt-1">{selectedIncident.description}</p>
                                    </div>
                                    <div>
                                      <Label className="text-sm font-medium">Reported At</Label>
                                      <p>{selectedIncident.reportedAt}</p>
                                    </div>
                                  </div>
                                )}
                                <DialogFooter>
                                  <Button variant="outline" className="bg-transparent">
                                    <Edit className="w-4 h-4 mr-2" />
                                    Edit
                                  </Button>
                                  <Button>
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Resolve
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Create Alert */}
              <Card>
                <CardHeader>
                  <CardTitle>{t.createAlert}</CardTitle>
                  <CardDescription>Broadcast safety alerts to tourists</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>{t.alertTitle}</Label>
                    <Input
                      placeholder="Enter alert title"
                      value={newAlert.title}
                      onChange={(e) => setNewAlert({ ...newAlert, title: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>{t.alertType}</Label>
                    <Select
                      value={newAlert.type}
                      onValueChange={(value: "info" | "warning" | "emergency") =>
                        setNewAlert({ ...newAlert, type: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="info">{t.info}</SelectItem>
                        <SelectItem value="warning">{t.warning}</SelectItem>
                        <SelectItem value="emergency">{t.emergency}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>{t.targetArea}</Label>
                    <Input
                      placeholder="Enter target area"
                      value={newAlert.targetArea}
                      onChange={(e) => setNewAlert({ ...newAlert, targetArea: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>{t.alertMessage}</Label>
                    <Textarea
                      placeholder="Enter alert message"
                      value={newAlert.message}
                      onChange={(e) => setNewAlert({ ...newAlert, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSendAlert} className="flex-1 gap-2">
                      <Send className="w-4 h-4" />
                      {t.sendAlert}
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2 bg-transparent">
                      <FileText className="w-4 h-4" />
                      {t.saveDraft}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle>{t.recentAlerts}</CardTitle>
                  <CardDescription>Previously sent alerts and broadcasts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockAlerts.map((alert) => (
                      <div key={alert.id} className="border border-border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium">{alert.title}</h4>
                          <Badge variant={alert.status === "sent" ? "default" : "secondary"}>{alert.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{alert.targetArea}</span>
                          <span>{alert.createdAt}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
