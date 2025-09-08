"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Upload, Shield, CheckCircle, Globe, Moon, Sun } from "lucide-react"
import { useRouter } from "next/navigation"

interface FormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  nationality: string
  aadhaarNumber: string
  passportNumber: string
  dateOfBirth: string
  gender: string

  // Travel Details
  travelPurpose: string
  arrivalDate: string
  departureDate: string
  accommodationType: string
  accommodationAddress: string
  plannedDestinations: string

  // Emergency Contacts
  emergencyContact1Name: string
  emergencyContact1Phone: string
  emergencyContact1Relation: string
  emergencyContact2Name: string
  emergencyContact2Phone: string
  emergencyContact2Relation: string

  // Document Verification
  profilePhoto: File | null
  idDocument: File | null
  addressProof: File | null

  // Agreements
  termsAccepted: boolean
  dataProcessingConsent: boolean
  locationTrackingConsent: boolean
}

export default function TouristRegistration() {
  const [currentStep, setCurrentStep] = useState(1)
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const [isDark, setIsDark] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const router = useRouter()

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    aadhaarNumber: "",
    passportNumber: "",
    dateOfBirth: "",
    gender: "",
    travelPurpose: "",
    arrivalDate: "",
    departureDate: "",
    accommodationType: "",
    accommodationAddress: "",
    plannedDestinations: "",
    emergencyContact1Name: "",
    emergencyContact1Phone: "",
    emergencyContact1Relation: "",
    emergencyContact2Name: "",
    emergencyContact2Phone: "",
    emergencyContact2Relation: "",
    profilePhoto: null,
    idDocument: null,
    addressProof: null,
    termsAccepted: false,
    dataProcessingConsent: false,
    locationTrackingConsent: false,
  })

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const translations = {
    en: {
      title: "Tourist Registration",
      subtitle: "Create your Digital Tourist ID",
      step1: "Personal Information",
      step2: "Travel Details",
      step3: "Emergency Contacts",
      step4: "Document Verification",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      nationality: "Nationality",
      aadhaarNumber: "Aadhaar Number (Indian Citizens)",
      passportNumber: "Passport Number",
      dateOfBirth: "Date of Birth",
      gender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      travelPurpose: "Purpose of Travel",
      tourism: "Tourism",
      business: "Business",
      medical: "Medical",
      education: "Education",
      arrivalDate: "Arrival Date",
      departureDate: "Departure Date",
      accommodationType: "Accommodation Type",
      hotel: "Hotel",
      guesthouse: "Guest House",
      homestay: "Homestay",
      hostel: "Hostel",
      accommodationAddress: "Accommodation Address",
      plannedDestinations: "Planned Destinations",
      emergencyContact1: "Primary Emergency Contact",
      emergencyContact2: "Secondary Emergency Contact",
      contactName: "Contact Name",
      contactPhone: "Contact Phone",
      relation: "Relation",
      parent: "Parent",
      spouse: "Spouse",
      sibling: "Sibling",
      friend: "Friend",
      profilePhoto: "Profile Photo",
      idDocument: "ID Document (Aadhaar/Passport)",
      addressProof: "Address Proof",
      uploadFile: "Upload File",
      termsAccepted: "I accept the Terms and Conditions",
      dataProcessingConsent: "I consent to data processing for safety monitoring",
      locationTrackingConsent: "I consent to location tracking for emergency response",
      previous: "Previous",
      next: "Next",
      submit: "Submit Registration",
      submitting: "Processing...",
      registrationComplete: "Registration Complete!",
      digitalIdGenerated: "Your Digital Tourist ID has been generated successfully",
      downloadId: "Download Digital ID",
      goToDashboard: "Go to Dashboard",
      required: "Required",
      optional: "Optional",
    },
    hi: {
      title: "पर्यटक पंजीकरण",
      subtitle: "अपनी डिजिटल पर्यटक आईडी बनाएं",
      step1: "व्यक्तिगत जानकारी",
      step2: "यात्रा विवरण",
      step3: "आपातकालीन संपर्क",
      step4: "दस्तावेज़ सत्यापन",
      firstName: "पहला नाम",
      lastName: "अंतिम नाम",
      email: "ईमेल पता",
      phone: "फोन नंबर",
      nationality: "राष्ट्रीयता",
      aadhaarNumber: "आधार संख्या (भारतीय नागरिक)",
      passportNumber: "पासपोर्ट संख्या",
      dateOfBirth: "जन्म तिथि",
      gender: "लिंग",
      male: "पुरुष",
      female: "महिला",
      other: "अन्य",
      travelPurpose: "यात्रा का उद्देश्य",
      tourism: "पर्यटन",
      business: "व्यापार",
      medical: "चिकित्सा",
      education: "शिक्षा",
      arrivalDate: "आगमन तिथि",
      departureDate: "प्रस्थान तिथि",
      accommodationType: "आवास प्रकार",
      hotel: "होटल",
      guesthouse: "गेस्ट हाउस",
      homestay: "होमस्टे",
      hostel: "हॉस्टल",
      accommodationAddress: "आवास का पता",
      plannedDestinations: "नियोजित गंतव्य",
      emergencyContact1: "प्राथमिक आपातकालीन संपर्क",
      emergencyContact2: "द्वितीयक आपातकालीन संपर्क",
      contactName: "संपर्क नाम",
      contactPhone: "संपर्क फोन",
      relation: "रिश्ता",
      parent: "माता-पिता",
      spouse: "पति/पत्नी",
      sibling: "भाई-बहन",
      friend: "मित्र",
      profilePhoto: "प्रोफाइल फोटो",
      idDocument: "आईडी दस्तावेज़ (आधार/पासपोर्ट)",
      addressProof: "पता प्रमाण",
      uploadFile: "फाइल अपलोड करें",
      termsAccepted: "मैं नियम और शर्तों को स्वीकार करता हूं",
      dataProcessingConsent: "मैं सुरक्षा निगरानी के लिए डेटा प्रसंस्करण की सहमति देता हूं",
      locationTrackingConsent: "मैं आपातकालीन प्रतिक्रिया के लिए स्थान ट्रैकिंग की सहमति देता हूं",
      previous: "पिछला",
      next: "अगला",
      submit: "पंजीकरण जमा करें",
      submitting: "प्रसंस्करण...",
      registrationComplete: "पंजीकरण पूर्ण!",
      digitalIdGenerated: "आपकी डिजिटल पर्यटक आईडी सफलतापूर्वक जेनरेट हो गई है",
      downloadId: "डिजिटल आईडी डाउनलोड करें",
      goToDashboard: "डैशबोर्ड पर जाएं",
      required: "आवश्यक",
      optional: "वैकल्पिक",
    },
  }

  const t = translations[language]

  const steps = [
    { number: 1, title: t.step1 },
    { number: 2, title: t.step2 },
    { number: 3, title: t.step3 },
    { number: 4, title: t.step4 },
  ]

  const handleInputChange = (field: keyof FormData, value: string | boolean | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (field: keyof FormData, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    handleInputChange(field, file)
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.email && formData.phone && formData.nationality)
      case 2:
        return !!(formData.travelPurpose && formData.arrivalDate && formData.departureDate)
      case 3:
        return !!(formData.emergencyContact1Name && formData.emergencyContact1Phone)
      case 4:
        return !!(formData.termsAccepted && formData.dataProcessingConsent)
      default:
        return false
    }
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    if (!validateStep(4)) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsComplete(true)
  }

  if (isComplete) {
    return (
      <div className={`min-h-screen bg-background text-foreground ${isDark ? "dark" : ""}`}>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-3xl font-bold mb-4">{t.registrationComplete}</h1>
            <p className="text-lg text-muted-foreground mb-8">{t.digitalIdGenerated}</p>

            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center w-32 h-32 bg-accent/10 rounded-lg mx-auto mb-4">
                <Shield className="w-16 h-16 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Tourist ID</h3>
              <p className="text-sm text-muted-foreground mb-4">ID: TID-{Date.now()}</p>
              <div className="w-24 h-24 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">QR Code</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Upload className="w-4 h-4" />
                {t.downloadId}
              </Button>
              <Button variant="outline" size="lg" onClick={() => router.push("/dashboard/tourist")}>
                {t.goToDashboard}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-background text-foreground ${isDark ? "dark" : ""}`}>
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => router.push("/")} className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-accent rounded-lg">
                  <Shield className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold">{t.title}</h1>
                  <p className="text-sm text-muted-foreground">{t.subtitle}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
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
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step.number ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.number}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p
                      className={`text-sm font-medium ${
                        currentStep >= step.number ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-0.5 mx-4 ${currentStep > step.number ? "bg-accent" : "bg-muted"}`} />
                  )}
                </div>
              ))}
            </div>
            <Progress value={(currentStep / 4) * 100} className="h-2" />
          </div>

          {/* Form Content */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{steps[currentStep - 1].title}</CardTitle>
              <CardDescription>Step {currentStep} of 4</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      {t.firstName}{" "}
                      <Badge variant="destructive" className="ml-1 text-xs">
                        {t.required}
                      </Badge>
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      {t.lastName}{" "}
                      <Badge variant="destructive" className="ml-1 text-xs">
                        {t.required}
                      </Badge>
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {t.email}{" "}
                      <Badge variant="destructive" className="ml-1 text-xs">
                        {t.required}
                      </Badge>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      {t.phone}{" "}
                      <Badge variant="destructive" className="ml-1 text-xs">
                        {t.required}
                      </Badge>
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationality">
                      {t.nationality}{" "}
                      <Badge variant="destructive" className="ml-1 text-xs">
                        {t.required}
                      </Badge>
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("nationality", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="indian">Indian</SelectItem>
                        <SelectItem value="american">American</SelectItem>
                        <SelectItem value="british">British</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">{t.gender}</Label>
                    <Select onValueChange={(value) => handleInputChange("gender", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">{t.male}</SelectItem>
                        <SelectItem value="female">{t.female}</SelectItem>
                        <SelectItem value="other">{t.other}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">{t.dateOfBirth}</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="aadhaarNumber">{t.aadhaarNumber}</Label>
                    <Input
                      id="aadhaarNumber"
                      value={formData.aadhaarNumber}
                      onChange={(e) => handleInputChange("aadhaarNumber", e.target.value)}
                      placeholder="XXXX XXXX XXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passportNumber">{t.passportNumber}</Label>
                    <Input
                      id="passportNumber"
                      value={formData.passportNumber}
                      onChange={(e) => handleInputChange("passportNumber", e.target.value)}
                      placeholder="Enter passport number"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Travel Details */}
              {currentStep === 2 && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="travelPurpose">
                      {t.travelPurpose}{" "}
                      <Badge variant="destructive" className="ml-1 text-xs">
                        {t.required}
                      </Badge>
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("travelPurpose", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select purpose" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tourism">{t.tourism}</SelectItem>
                        <SelectItem value="business">{t.business}</SelectItem>
                        <SelectItem value="medical">{t.medical}</SelectItem>
                        <SelectItem value="education">{t.education}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accommodationType">{t.accommodationType}</Label>
                    <Select onValueChange={(value) => handleInputChange("accommodationType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select accommodation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hotel">{t.hotel}</SelectItem>
                        <SelectItem value="guesthouse">{t.guesthouse}</SelectItem>
                        <SelectItem value="homestay">{t.homestay}</SelectItem>
                        <SelectItem value="hostel">{t.hostel}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="arrivalDate">
                      {t.arrivalDate}{" "}
                      <Badge variant="destructive" className="ml-1 text-xs">
                        {t.required}
                      </Badge>
                    </Label>
                    <Input
                      id="arrivalDate"
                      type="date"
                      value={formData.arrivalDate}
                      onChange={(e) => handleInputChange("arrivalDate", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="departureDate">
                      {t.departureDate}{" "}
                      <Badge variant="destructive" className="ml-1 text-xs">
                        {t.required}
                      </Badge>
                    </Label>
                    <Input
                      id="departureDate"
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) => handleInputChange("departureDate", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="accommodationAddress">{t.accommodationAddress}</Label>
                    <Textarea
                      id="accommodationAddress"
                      value={formData.accommodationAddress}
                      onChange={(e) => handleInputChange("accommodationAddress", e.target.value)}
                      placeholder="Enter your accommodation address"
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="plannedDestinations">{t.plannedDestinations}</Label>
                    <Textarea
                      id="plannedDestinations"
                      value={formData.plannedDestinations}
                      onChange={(e) => handleInputChange("plannedDestinations", e.target.value)}
                      placeholder="List the places you plan to visit"
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Emergency Contacts */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">{t.emergencyContact1}</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact1Name">
                          {t.contactName}{" "}
                          <Badge variant="destructive" className="ml-1 text-xs">
                            {t.required}
                          </Badge>
                        </Label>
                        <Input
                          id="emergencyContact1Name"
                          value={formData.emergencyContact1Name}
                          onChange={(e) => handleInputChange("emergencyContact1Name", e.target.value)}
                          placeholder="Enter contact name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact1Phone">
                          {t.contactPhone}{" "}
                          <Badge variant="destructive" className="ml-1 text-xs">
                            {t.required}
                          </Badge>
                        </Label>
                        <Input
                          id="emergencyContact1Phone"
                          value={formData.emergencyContact1Phone}
                          onChange={(e) => handleInputChange("emergencyContact1Phone", e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact1Relation">{t.relation}</Label>
                        <Select onValueChange={(value) => handleInputChange("emergencyContact1Relation", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select relation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="parent">{t.parent}</SelectItem>
                            <SelectItem value="spouse">{t.spouse}</SelectItem>
                            <SelectItem value="sibling">{t.sibling}</SelectItem>
                            <SelectItem value="friend">{t.friend}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">{t.emergencyContact2}</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact2Name">{t.contactName}</Label>
                        <Input
                          id="emergencyContact2Name"
                          value={formData.emergencyContact2Name}
                          onChange={(e) => handleInputChange("emergencyContact2Name", e.target.value)}
                          placeholder="Enter contact name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact2Phone">{t.contactPhone}</Label>
                        <Input
                          id="emergencyContact2Phone"
                          value={formData.emergencyContact2Phone}
                          onChange={(e) => handleInputChange("emergencyContact2Phone", e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact2Relation">{t.relation}</Label>
                        <Select onValueChange={(value) => handleInputChange("emergencyContact2Relation", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select relation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="parent">{t.parent}</SelectItem>
                            <SelectItem value="spouse">{t.spouse}</SelectItem>
                            <SelectItem value="sibling">{t.sibling}</SelectItem>
                            <SelectItem value="friend">{t.friend}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Document Verification */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="profilePhoto">{t.profilePhoto}</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">{t.uploadFile}</p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload("profilePhoto", e)}
                          className="hidden"
                          id="profilePhoto"
                        />
                        <Button variant="outline" size="sm" asChild>
                          <label htmlFor="profilePhoto" className="cursor-pointer">
                            Choose File
                          </label>
                        </Button>
                        {formData.profilePhoto && (
                          <p className="text-xs text-accent mt-2">{formData.profilePhoto.name}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="idDocument">{t.idDocument}</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">{t.uploadFile}</p>
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => handleFileUpload("idDocument", e)}
                          className="hidden"
                          id="idDocument"
                        />
                        <Button variant="outline" size="sm" asChild>
                          <label htmlFor="idDocument" className="cursor-pointer">
                            Choose File
                          </label>
                        </Button>
                        {formData.idDocument && <p className="text-xs text-accent mt-2">{formData.idDocument.name}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="addressProof">{t.addressProof}</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">{t.uploadFile}</p>
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => handleFileUpload("addressProof", e)}
                          className="hidden"
                          id="addressProof"
                        />
                        <Button variant="outline" size="sm" asChild>
                          <label htmlFor="addressProof" className="cursor-pointer">
                            Choose File
                          </label>
                        </Button>
                        {formData.addressProof && (
                          <p className="text-xs text-accent mt-2">{formData.addressProof.name}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-border">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="termsAccepted"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                      />
                      <Label htmlFor="termsAccepted" className="text-sm leading-relaxed">
                        {t.termsAccepted}{" "}
                        <Badge variant="destructive" className="ml-1 text-xs">
                          {t.required}
                        </Badge>
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="dataProcessingConsent"
                        checked={formData.dataProcessingConsent}
                        onCheckedChange={(checked) => handleInputChange("dataProcessingConsent", checked as boolean)}
                      />
                      <Label htmlFor="dataProcessingConsent" className="text-sm leading-relaxed">
                        {t.dataProcessingConsent}{" "}
                        <Badge variant="destructive" className="ml-1 text-xs">
                          {t.required}
                        </Badge>
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="locationTrackingConsent"
                        checked={formData.locationTrackingConsent}
                        onCheckedChange={(checked) => handleInputChange("locationTrackingConsent", checked as boolean)}
                      />
                      <Label htmlFor="locationTrackingConsent" className="text-sm leading-relaxed">
                        {t.locationTrackingConsent}
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="gap-2 bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t.previous}
                </Button>

                {currentStep < 4 ? (
                  <Button onClick={handleNext} className="gap-2">
                    {t.next}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={!validateStep(4) || isSubmitting} className="gap-2">
                    {isSubmitting ? t.submitting : t.submit}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
