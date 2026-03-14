'use client'

import { useState } from 'react'
import Script from 'next/script'
import Image from 'next/image'

export default function RealEstateAICallerPage() {
  // n8n webhook URL for lead capture
  const WEBHOOK_URL = "https://n8n.novasoftai.com/webhook/real-estate-ai-caller"
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentIncome: '',
    netWorth: '',
    aboutYourself: '',
    agreeToTerms: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null) // Clear any previous messages
    
    // Build URLSearchParams for simple POST (no CORS preflight)
    const data = new URLSearchParams()
    data.append('name', formData.fullName)
    data.append('email', formData.email)
    data.append('phone', formData.phone)
    data.append('monthlyLeads', formData.currentIncome)
    data.append('timestamp', new Date().toISOString())
    data.append('source', 'real-estate-ai-caller')
    
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        body: data,
        // No custom headers = simple request = no CORS preflight
      })
      
      if (!res.ok) throw new Error('Network response was not ok')
      
      // Success! Clear form and show message
      setSubmitMessage({
        type: 'success',
        text: "Perfect! We've received your information and will be in touch shortly."
      })
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        currentIncome: '',
        netWorth: '',
        aboutYourself: '',
        agreeToTerms: false
      })
    } catch (err) {
      console.error('Submit failed:', err)
      setSubmitMessage({
        type: 'error',
        text: "Oops! Something went wrong. Please email us directly at Jess@novasoftai.com or try again in a moment."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // ROI Calculator State
  const [roiInputs, setRoiInputs] = useState({
    avgCommission: 11500,
    expectedAppts: 10,
    closeRate: 45
  })

  const calculateROI = () => {
    const closedDeals = (roiInputs.expectedAppts * roiInputs.closeRate) / 100
    const expectedRevenue = closedDeals * roiInputs.avgCommission
    const setupCost = 3997 // One-time setup cost
    const roiMultiple = expectedRevenue / setupCost
    return { expectedRevenue, roiMultiple }
  }

  const roi = calculateROI()

  return (
    <div className="min-h-screen">
      {/* Cal.com Embed Script */}
      <Script id="cal-embed" strategy="lazyOnload">
        {`
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "intro-call", {origin:"https://app.cal.com"});
          Cal.ns["intro-call"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        `}
      </Script>

      {/* Hero Section with Background */}
      <section className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
            alt="Luxury real estate property background"
            fill
            priority
            quality={85}
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header Bar */}
          <div className="bg-gray-800/80 backdrop-blur-sm py-3 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <a href="https://novasoftai.com" className="flex items-center">
                <Image
                  src="/novasoftai-logo.png"
                  alt="NovasoftAI Logo"
                  width={180}
                  height={50}
                  className="h-8 sm:h-10 w-auto"
                  priority
                />
              </a>
              <div className="text-white text-sm sm:text-base">
                <button
                  data-cal-link="jess-mason/intro-call"
                  data-cal-namespace="intro-call"
                  data-cal-config='{"layout":"month_view"}'
                  className="hover:text-blue-400 transition-colors"
                >
                  <span className="font-bold">Schedule Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
            {/* H1 with Red Box */}
            <div className="bg-red-600 text-white text-center py-6 px-4 mb-6 rounded-lg">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
                BOOK REAL APPOINTMENTS FROM YOUR 'DEAD' LEADS IN &lt;60S
              </h1>
            </div>

            {/* Subtitle Badge */}
            <div className="text-center mb-8">
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                <p className="text-white text-sm sm:text-base font-medium">
                  Powered by Agentless ISA™ — our AI caller built for Real Estate Brokers
                </p>
              </div>
            </div>

            {/* Two Column Layout: VSL Video + Proof/Guarantee | Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
              {/* Left: VSL Video + Proof + Guarantee */}
              <div className="space-y-6">
                {/* VSL Video - COMMENTED OUT UNTIL VIDEO IS READY */}
                {/* <div className="relative">
                  <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                    <Image 
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
                      alt="Real Estate AI Caller demo video - Watch how the system works"
                      fill
                      priority
                      quality={90}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="group relative">
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2">
                          <div className="relative">
                            <div className="text-white text-4xl sm:text-5xl font-black transform -rotate-12">
                              <span className="bg-black px-4 py-2 inline-block">WATCH</span>
                            </div>
                            <div className="text-yellow-400 text-4xl sm:text-5xl font-black transform -rotate-12">
                              <span className="bg-black px-4 py-2 inline-block">THIS FIRST</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="absolute -top-12 left-1/2 text-white text-6xl transform rotate-45">
                          ↓
                        </div>
                        
                        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-red-700 transition-all group-hover:scale-110">
                          <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div> */}

                {/* Proof Bullets */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-5">
                  <p className="text-white text-lg font-semibold mb-4">Our Last Client Saw:</p>
                  <div className="space-y-3 text-white">
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                      <span className="text-base sm:text-lg">14 additional appointments in 30 days</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                      <span className="text-base sm:text-lg">&lt;60s speed-to-lead (vs 3+ days)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                      <span className="text-base sm:text-lg">$72k in commissions, zero new ad spend</span>
                    </div>
                  </div>
                </div>

                {/* Trust & Urgency Banner */}
                <div className="bg-yellow-400 text-gray-900 px-6 py-4 rounded-lg shadow-lg">
                  <p className="text-base sm:text-lg font-bold leading-relaxed">
                    <span className="text-green-700">✓</span> 100% Refund guaranteed if you're not satisfied after 500 free minutes
                    <br className="hidden sm:block" />
                    <span className="sm:ml-2">· Q4 intake closes Nov 30 (limited build slots)</span>
                  </p>
                </div>
              </div>

              {/* Right: Form */}
              <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8">
                <h3 className="text-gray-800 text-xl sm:text-2xl font-bold mb-2 text-center">
                  See If You Qualify For AI Caller Access
                </h3>
                <p className="text-gray-500 text-sm text-center mb-6">
                  Takes ~45 sec. We'll be in touch shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone <span className="text-red-600">*</span>
                    </label>
                      <input
                        type="tel"
                        required
                      placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                      />
                  </div>

                  {/* Approx. Monthly Leads */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Approx. Monthly Leads <span className="text-red-600">*</span>
                    </label>
                    <select
                      required
                      value={formData.currentIncome}
                      onChange={(e) => setFormData({...formData, currentIncome: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                    >
                      <option value="">Select range</option>
                      <option value="0-50">0 - 50</option>
                      <option value="50-100">50 - 100</option>
                      <option value="100-250">100 - 250</option>
                      <option value="250-500">250 - 500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white font-bold py-4 px-6 rounded-md text-lg hover:bg-red-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Demo Access'}
                  </button>

                  {/* Success/Error Message */}
                  {submitMessage && (
                    <div className={`mt-4 p-4 rounded-md text-sm ${
                      submitMessage.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      <p className="font-medium">{submitMessage.text}</p>
                    </div>
                  )}

                  {/* Terms Link */}
                  <div className="text-center">
                    <a href="#" className="text-xs text-gray-500 hover:text-gray-700 underline">
                      View Terms & Privacy
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Tools Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* YouTube Channel Banner */}
          <div className="bg-black text-white rounded-lg overflow-hidden mb-12 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 gap-4">
              <div className="flex items-center gap-4">
                {/* Profile Photo */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                  <Image
                    src="/images/profile/pfpcopycropped copy.png"
                    alt="Jess Mason - Founder"
                    width={240}
                    height={240}
                    className="w-full h-full rounded-full object-cover ring-2 ring-white/20"
                    quality={100}
                    priority
                    unoptimized
                  />
                </div>
                
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  {/* YouTube Logo Placeholder */}
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-lg sm:text-xl font-bold">
                    Created by NovasoftAI, Founded by @Jessautomates
                  </p>
                  <p className="text-sm sm:text-base text-gray-300">
                    A fast growing YouTube channel about AI Business Application
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Stats - Optional Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
                <span className="text-sm font-medium text-gray-600">PAGE LIKES</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-sky-500 mb-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <span className="text-sm font-medium text-gray-600">FOLLOWERS</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-pink-600 mb-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm font-medium text-gray-600">FOLLOWERS</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-red-600 mb-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-sm font-medium text-gray-600">SUBSCRIBERS</span>
              </div>
            </div>
          </div>

          {/* Tools We Build With */}
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Tools We Build With
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              (And many more — we meet your stack where it is)
            </p>
          </div>

          {/* Logo Grid - 2, 4, 4 layout on desktop */}
          <div className="mb-16 w-full px-4">
            {/* Row 1: 2 logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-12 lg:mb-16">
              {/* Follow Up Boss Logo */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/FUBnobg.png"
                  alt="Follow Up Boss"
                  width={320}
                  height={100}
                  className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] h-auto object-contain hover:scale-105 transition-transform"
                  unoptimized
                />
              </div>
              
              {/* Logo 2 - Zillow */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/Zillownobg.png"
                  alt="Zillow"
                  width={320}
                  height={100}
                  className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] h-auto object-contain hover:scale-105 transition-transform"
                  unoptimized
                />
              </div>
            </div>

            {/* Row 2: 4 logos */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12 mb-12 lg:mb-16">
              {/* Logo 3 - OpenAI */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/OpenAInobg.png"
                  alt="OpenAI"
                  width={260}
                  height={100}
                  className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-auto object-contain hover:scale-105 transition-transform"
                  unoptimized
                />
              </div>
              
              {/* Logo 4 - Retell AI */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/Retellai nobg.png"
                  alt="Retell AI"
                  width={260}
                  height={100}
                  className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-auto object-contain hover:scale-105 transition-transform"
                  unoptimized
                />
              </div>
              
              {/* Logo 5 - Twilio */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/Twilionobg.png"
                  alt="Twilio"
                  width={260}
                  height={100}
                  className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-auto object-contain hover:scale-105 transition-transform"
                  unoptimized
                />
              </div>
              
              {/* Logo 6 - Google Workspace */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/Google Workspacenobg.png"
                  alt="Google Workspace"
                  width={260}
                  height={100}
                  className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-auto object-contain hover:scale-105 transition-transform"
                  unoptimized
                />
              </div>
            </div>

            {/* Row 3: 4 logos */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
              {/* Logo 7 - n8n */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/n8nnobg.png"
                  alt="n8n"
                  width={260}
                  height={100}
                  className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-auto object-contain hover:scale-105 transition-transform"
                  unoptimized
                />
              </div>
              
              {/* Logo 8 - Salesforce */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/Salesforcenobg.png"
                  alt="Salesforce"
                  width={260}
                  height={100}
                  className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-auto object-contain hover:scale-105 transition-transform"
                  unoptimized
                />
              </div>
              
              {/* Logo 9 - Ascendix */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/ascendixnobg.png"
                  alt="Ascendix"
                  width={260}
                  height={100}
                  className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-auto object-contain hover:scale-105 transition-transform"
                  unoptimized
                />
              </div>
              
              {/* Logo 10 - HubSpot */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/hubspotnobg1.png"
                  alt="HubSpot"
                  width={260}
                  height={100}
                  className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-auto object-contain hover:scale-105 transition-transform"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Disclaimer Text */}

        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 sm:py-24 bg-gray-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-gray-600">See how much revenue AI calling could generate for your team</p>
          </div>

          <div className="rounded-2xl border border-gray-300 bg-white p-8 shadow-xl">
            <div className="space-y-6 mb-8">
              {/* Average Commission per Deal */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Commission per Deal
                </label>
                <div className="relative flex items-center">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-500 text-lg">$</span>
                  </div>
                  <input
                    type="text"
                    value={roiInputs.avgCommission.toLocaleString()}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '')
                      setRoiInputs({...roiInputs, avgCommission: Number(value) || 0})
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp') {
                        e.preventDefault()
                        setRoiInputs({...roiInputs, avgCommission: roiInputs.avgCommission + 500})
                      } else if (e.key === 'ArrowDown') {
                        e.preventDefault()
                        setRoiInputs({...roiInputs, avgCommission: Math.max(0, roiInputs.avgCommission - 500)})
                      }
                    }}
                    className="w-full rounded-lg bg-white border border-gray-300 pl-8 pr-20 py-3 text-gray-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <div className="absolute right-3 flex flex-col gap-0.5">
                    <button
                      type="button"
                      onClick={() => setRoiInputs({...roiInputs, avgCommission: roiInputs.avgCommission + 500})}
                      className="px-2 py-0.5 text-gray-400 hover:text-gray-600 transition-all active:scale-110 text-xs"
                    >
                      ^
                    </button>
                    <button
                      type="button"
                      onClick={() => setRoiInputs({...roiInputs, avgCommission: Math.max(0, roiInputs.avgCommission - 500)})}
                      className="px-2 py-0.5 text-gray-400 hover:text-gray-600 transition-all active:scale-110 text-xs rotate-180"
                    >
                      ^
                    </button>
                  </div>
                </div>
              </div>

              {/* Expected Kept Appointments per Month */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Kept Appointments per Month
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={roiInputs.expectedAppts}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '')
                      setRoiInputs({...roiInputs, expectedAppts: Number(value) || 0})
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp') {
                        e.preventDefault()
                        setRoiInputs({...roiInputs, expectedAppts: roiInputs.expectedAppts + 1})
                      } else if (e.key === 'ArrowDown') {
                        e.preventDefault()
                        setRoiInputs({...roiInputs, expectedAppts: Math.max(0, roiInputs.expectedAppts - 1)})
                      }
                    }}
                    className="w-full rounded-lg bg-white border border-gray-300 px-4 pr-16 py-3 text-gray-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <div className="absolute right-3 flex flex-col gap-0.5">
                    <button
                      type="button"
                      onClick={() => setRoiInputs({...roiInputs, expectedAppts: roiInputs.expectedAppts + 1})}
                      className="px-2 py-0.5 text-gray-400 hover:text-gray-600 transition-all active:scale-110 text-xs"
                    >
                      ^
                    </button>
                    <button
                      type="button"
                      onClick={() => setRoiInputs({...roiInputs, expectedAppts: Math.max(0, roiInputs.expectedAppts - 1)})}
                      className="px-2 py-0.5 text-gray-400 hover:text-gray-600 transition-all active:scale-110 text-xs rotate-180"
                    >
                      ^
                    </button>
                  </div>
                </div>
              </div>

              {/* Close Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Close Rate
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={roiInputs.closeRate}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '')
                      setRoiInputs({...roiInputs, closeRate: Number(value) || 0})
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp') {
                        e.preventDefault()
                        setRoiInputs({...roiInputs, closeRate: roiInputs.closeRate + 1})
                      } else if (e.key === 'ArrowDown') {
                        e.preventDefault()
                        setRoiInputs({...roiInputs, closeRate: Math.max(0, roiInputs.closeRate - 1)})
                      }
                    }}
                    className="w-full rounded-lg bg-white border border-gray-300 px-4 pr-20 py-3 text-gray-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <div className="absolute right-10 flex items-center pointer-events-none">
                    <span className="text-gray-500 text-lg">%</span>
                  </div>
                  <div className="absolute right-3 flex flex-col gap-0.5">
                    <button
                      type="button"
                      onClick={() => setRoiInputs({...roiInputs, closeRate: roiInputs.closeRate + 1})}
                      className="px-2 py-0.5 text-gray-400 hover:text-gray-600 transition-all active:scale-110 text-xs"
                    >
                      ^
                    </button>
                    <button
                      type="button"
                      onClick={() => setRoiInputs({...roiInputs, closeRate: Math.max(0, roiInputs.closeRate - 1)})}
                      className="px-2 py-0.5 text-gray-400 hover:text-gray-600 transition-all active:scale-110 text-xs rotate-180"
                    >
                      ^
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-red-600">
                    ${roi.expectedRevenue.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Expected Monthly Revenue</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">
                    {roi.roiMultiple.toFixed(1)}x
                  </div>
                  <div className="text-sm text-gray-600 mt-2">ROI Multiple</div>
                </div>
              </div>

              <button 
                data-cal-link="jess-mason/intro-call"
                data-cal-namespace="intro-call"
                data-cal-config='{"layout":"month_view"}'
                className="mt-8 w-full rounded-lg bg-red-600 px-8 py-4 text-base font-semibold text-white hover:bg-red-700 transition-all shadow-xl hover:scale-105"
              >
                Book Demo to Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE PROBLEM */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Your leads are dying in your CRM. And it's costing you six figures.
            </h2>
            </div>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">

            <p>
              You have thousands of leads sitting cold. Leads you paid for. Leads that came in hot. But they never got called or got called 3 days later by an agent who "forgot," or by a $4/hour VA who butchered it.
              </p>

              <p>
              Every missed follow-up is $10K-$50K in lost commission. Your speed-to-lead is garbage. Your agents are too busy. Your VAs are inconsistent.
            </p>

            <p className="text-xl font-bold text-red-600">
              You don't have a lead gen problem. You have a follow-up problem.
            </p>
          </div>

          <div className="text-center mt-12">
            <button
              data-cal-link="jess-mason/intro-call"
              data-cal-namespace="intro-call"
              data-cal-config='{"layout":"month_view"}'
              className="bg-red-600 text-white font-bold px-12 py-5 rounded-lg text-xl hover:bg-red-700 transition-all shadow-2xl hover:scale-105 uppercase"
            >
              See How We Can Fix This
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE RESULTS */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
              THE RESULTS
            </h2>
            <p className="text-2xl font-bold text-gray-700">
              DFW Brokerage - First 30 Days:
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 sm:p-12">
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <span className="text-green-500 text-2xl flex-shrink-0">✓</span>
                <span className="text-gray-700">14 appointments booked</span>
            </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-2xl flex-shrink-0">✓</span>
                <span className="text-gray-700">7,000+ old dead leads contacted</span>
          </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-2xl flex-shrink-0">✓</span>
                <span className="text-gray-700">94% faster speed-to-lead (under 60 seconds vs 3+ days)</span>
        </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-2xl flex-shrink-0">✓</span>
                <span className="text-gray-700">44% of appointments closed = 6 deals</span>
        </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-2xl flex-shrink-0">✓</span>
                <span className="text-gray-700 font-bold text-xl">$72,412 in commission</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-center text-lg">
                From leads they already owned. Zero new ad spend. They just turned the system on.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
          <button
            data-cal-link="jess-mason/intro-call"
            data-cal-namespace="intro-call"
            data-cal-config='{"layout":"month_view"}'
              className="bg-red-600 text-white font-bold px-12 py-5 rounded-lg text-xl hover:bg-red-700 transition-all shadow-2xl hover:scale-105 uppercase"
          >
              Book Your Strategy Call
          </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
              HOW IT WORKS
            </h2>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Step 1: We Build It
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Full CRM integration. Custom scripts. Voice cloning (optional). Intelligent callback logic. We test until it performs like your best SDR.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Step 2: It Goes to Work
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Every new lead called in under 60 seconds. Every old lead revived. It calls, qualifies, books appointments. If they don't answer, it tries again. And again. Never forgets. Never quits.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Step 3: You Get Appointments
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Booked meetings go straight to your calendar with full notes. Warm/hot leads trigger instant email alerts. Your agents only talk to people who are ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT YOU GET */}
      <section className="bg-gray-100 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
              WHAT YOU GET
            </h2>
            <p className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">
              The Complete Agentless ISA™ System
            </p>
            <p className="text-lg sm:text-xl font-bold text-red-600">
              ($31K+ value if you built it yourself)
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 sm:p-12">
            <div className="space-y-5 text-lg">
              <div className="flex items-start gap-4">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Full custom AI caller integrated with your CRM</span>
            </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">500 free minutes</span>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Instant follow-up on all new leads (under 60 seconds)</span>
                  </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Old lead revival across your entire database</span>
                </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Custom conversion driven call sequence with intelligent retry logic</span>
            </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Smart callback scheduling that remembers conversations</span>
          </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Direct calendar booking with qualification data</span>
          </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Warm/hot lead email alerts with recordings</span>
                  </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Multi-language support</span>
                </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Voice cloning (optional)</span>
                </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Full optimization until you're satisfied</span>
              </div>



              <div className="flex items-start gap-4">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">Ongoing monitoring and script improvements</span>
                  </div>
                </div>
              </div>

          <div className="text-center mt-12">
            <button
              data-cal-link="jess-mason/intro-call"
              data-cal-namespace="intro-call"
              data-cal-config='{"layout":"month_view"}'
              className="bg-red-600 text-white font-bold px-12 py-5 rounded-lg text-xl hover:bg-red-700 transition-all shadow-2xl hover:scale-105 uppercase"
            >
              Get Started Today
            </button>
                  </div>
                </div>
      </section>

      {/* SECTION 7: PRICING */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
              Your Investment
            </h2>
            <p className="text-gray-600 text-lg">
              Simple, transparent pricing that scales with your call volume.
            </p>
          </div>

          {/* Two-Column Card Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Card: One-Time Setup */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                One-Time Setup
              </h3>
              <div className="text-5xl font-black text-red-600 mb-4">
                $3,997
              </div>
              <p className="text-gray-600 mb-6">
                Everything included above. Fully custom build and fully managed for you.
              </p>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span>Custom AI Caller built and integrated with your CRM</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span>Scripts, custom smart follow-up sequence, and ongoing optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span>Direct calendar booking plus instant alerts for warm leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="font-semibold">500 free minutes included</span>
                </li>
              </ul>
            </div>

            {/* Right Card: Monthly Usage */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Monthly Usage (Scales With You)
              </h3>
              <p className="text-gray-600 mb-6">
                You pay based on total minutes used. Pricing is tiered and cumulative.
              </p>

              {/* Pricing Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="py-2 px-2 text-gray-900 font-bold">Minutes</th>
                      <th className="py-2 px-2 text-gray-900 font-bold">Price/Min</th>
                      <th className="py-2 px-2 text-gray-900 font-bold">Monthly Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-2 text-gray-700">0 to 1,000</td>
                      <td className="py-2 px-2 text-gray-700">$0.75</td>
                      <td className="py-2 px-2 text-gray-700">up to $750</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-2 text-gray-700">1,000 to 2,000</td>
                      <td className="py-2 px-2 text-gray-700">$0.60</td>
                      <td className="py-2 px-2 text-gray-700">up to $600</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-2 text-gray-700">2,000 to 3,500</td>
                      <td className="py-2 px-2 text-gray-700">$0.50</td>
                      <td className="py-2 px-2 text-gray-700">up to $750</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 text-gray-700">3,500+</td>
                      <td className="py-2 px-2 text-gray-700">$0.40</td>
                      <td className="py-2 px-2 text-gray-700 text-xs">Unlimited usage*</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Example:</strong> If you use 2,500 minutes in a month:
                </p>
                <p className="text-gray-600 text-sm">
                  1,000 min at $0.75 + 1,000 min at $0.60 + 500 min at $0.50 = <strong>$1,600 total</strong>
                </p>
              </div>

              <p className="text-gray-500 text-sm">
                This is cheaper than hiring a full-time human caller for $3,000 to $4,000 per month who can only handle about 200 to 300 calls, while the AI runs 24/7 at roughly 60% less cost.
              </p>
            </div>
          </div>

          {/* Assurances Section */}
          <div className="bg-green-50 rounded-lg p-8 border-2 border-green-500 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Guarantee */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  🛡️ 100% Money-Back Guarantee
                </h4>
                <p className="text-gray-700">
                  If you are not satisfied after your first 500 minutes, your setup fee is refunded.
                </p>
              </div>

              {/* Friction Reducers */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  No Risk, Total Flexibility
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>No long-term contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>You can pause anytime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Handles unlimited daily calling and scales instantly with usage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              data-cal-link="jess-mason/intro-call"
              data-cal-namespace="intro-call"
              data-cal-config='{"layout":"month_view"}'
              className="bg-red-600 text-white font-bold px-12 py-5 rounded-lg text-xl hover:bg-red-700 transition-all shadow-2xl hover:scale-105"
            >
              See If You Qualify
            </button>
          </div>

          {/* Fine Print */}
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-sm">
              * First 500 minutes included at launch, saving up to $375. "Unlimited" means you can use any number of minutes above 3,500 at a flat rate of $0.40 per minute.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIAL */}
      <section className="bg-gray-100 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 sm:p-12">
            <div className="mb-6">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                        </div>
              
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "We had 7,000 leads just sitting there. No chance even 10% of them ever would've been contacted. Within 30 days we booked 14 appointments and closed 6 deals over $70K in commissions. Our agents only talk to warm leads now."
              </blockquote>

              <p className="text-gray-900 font-bold">
                Our last client, a Dallas-Fort Worth Brokerage Owner.
              </p>
                      </div>
                    </div>
                  </div>
      </section>

      {/* SECTION 9: WHY YOU CAN'T DIY THIS */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
              WHY YOU CAN'T DIY THIS
            </h2>
                </div>

          <div className="space-y-8">
            {/* Reason 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                1. Built for Real Estate
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Optimized scripts based on months of real brokerage data. Knows how to qualify, when to push, when to back off. Generic AI callers sound robotic and burn leads.
              </p>
              </div>

            {/* Reason 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                2. The Follow-Up Logic Prints Money
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Intelligent callbacks that understand context. Remembers conversations. Pulls CRM data before calling. DIY = 100+ hours programming this alone.
              </p>
                        </div>

            {/* Reason 3 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                3. Who's Going to Manage It?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Monitor, optimize, fix, update? That's full-time work. We handle everything. You watch appointments roll in.
              </p>
                      </div>

            <div className="mt-8 p-6 bg-red-50 rounded-lg border-2 border-red-500 text-center">
              <p className="text-gray-900 font-bold text-xl">
                DIY = 6 months + $10K in dev costs for worse results. Or have us deploy in 2-3 weeks.
              </p>
                    </div>
                  </div>

          <div className="text-center mt-12">
            <button
              data-cal-link="jess-mason/intro-call"
              data-cal-namespace="intro-call"
              data-cal-config='{"layout":"month_view"}'
              className="bg-red-600 text-white font-bold px-12 py-5 rounded-lg text-xl hover:bg-red-700 transition-all shadow-2xl hover:scale-105 uppercase"
            >
              Let Us Build It For You
            </button>
                </div>
              </div>
      </section>

      {/* SECTION 10: WHO THIS IS FOR */}
      <section className="bg-gray-100 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
              WHO THIS IS FOR
            </h2>
                  </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Perfect For */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-6">
                Perfect for brokerages with:
              </h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">10+ agents</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Hundreds/thousands of leads in CRM</span>
                  </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Slow follow-up killing deals</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Inconsistent VAs or overworked agents</span>
                  </div>
                </div>
              </div>

            {/* Not For */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-6">
                Not for you if:
              </h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">Under 100 leads in CRM</span>
                  </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">Want a DIY tool you manage yourself</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">Need results tomorrow (takes 2-3 weeks to build right)</span>
                  </div>
                </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              data-cal-link="jess-mason/intro-call"
              data-cal-namespace="intro-call"
              data-cal-config='{"layout":"month_view"}'
              className="bg-red-600 text-white font-bold px-12 py-5 rounded-lg text-xl hover:bg-red-700 transition-all shadow-2xl hover:scale-105 uppercase"
            >
              See If You Qualify
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
              FAQ
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Setup time?
              </h3>
              <p className="text-gray-700 text-lg">
                2-3 weeks
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Works with my CRM?
              </h3>
              <p className="text-gray-700 text-lg">
                Yes (if it has an API, we integrate)
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Sounds robotic?
              </h3>
              <p className="text-gray-700 text-lg">
                We optimize until it doesn't or 100% refund
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                How many calls/day?
              </h3>
              <p className="text-gray-700 text-lg">
                Unlimited. Scales instantly
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Want to talk to human?
              </h3>
              <p className="text-gray-700 text-lg">
                AI books appointment or transfers live
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Can I pause?
              </h3>
              <p className="text-gray-700 text-lg">
                Anytime. No long-term contract
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              data-cal-link="jess-mason/intro-call"
              data-cal-namespace="intro-call"
              data-cal-config='{"layout":"month_view"}'
              className="bg-red-600 text-white font-bold px-12 py-5 rounded-lg text-xl hover:bg-red-700 transition-all shadow-2xl hover:scale-105 uppercase"
            >
              Book Your Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 12: THE URGENCY */}
      <section className="bg-red-600 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
            We're taking on 8 new clients this quarter,
            <br />
            and there are only 2 spots left
          </h2>

          <div className="space-y-6 text-white text-lg leading-relaxed">
            <p className="text-xl font-bold">
              Every day you wait = more dead leads and lost deals.
            </p>

            <p>
              We custom-build every system no templates, no rushing. When slots are gone, next start date is 90 days out.
            </p>

            <p className="text-xl font-bold">
              Book today to reserve your spot.
              <br />
              Wait, and you're watching competitors close deals with AI while you're on a waitlist.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 13: BOOK YOUR CALL */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
              BOOK YOUR CALL
            </h2>
            <p className="text-2xl font-bold text-gray-700 mb-6">
              Free Demo & AI Audit
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 sm:p-12 shadow-xl mb-8">
            <p className="text-gray-700 text-xl mb-6">
              We'll show you:
            </p>

            <div className="space-y-4 text-lg mb-8">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl flex-shrink-0">•</span>
                <span className="text-gray-700">Where you're losing money in follow-up</span>
            </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl flex-shrink-0">•</span>
                <span className="text-gray-700">Live demo of the system</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl flex-shrink-0">•</span>
                <span className="text-gray-700">Custom implementation plan for your brokerage</span>
                </div>
              </div>

            <p className="text-gray-600 text-lg text-center">
              No pressure. No pitch. Just value.
            </p>
          </div>

          <div className="text-center">
            <button
              data-cal-link="jess-mason/intro-call"
              data-cal-namespace="intro-call"
              data-cal-config='{"layout":"month_view"}'
              className="bg-red-600 text-white font-bold px-12 py-5 rounded-lg text-xl hover:bg-red-700 transition-all shadow-2xl hover:scale-105 uppercase"
            >
              Schedule Your Free Demo
            </button>
          </div>

          <div className="mt-12 p-6 bg-yellow-50 rounded-lg border-2 border-yellow-400">
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>P.S.</strong> That DFW brokerage made $72,412 in 30 days. They almost didn't book the call. They thought AI was gimmicky. They were wrong. Don't make the same mistake.
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              <strong>Disclaimer:</strong> Results vary based on market, lead quality, and execution. Past performance doesn't guarantee future results.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Top Navigation */}
          <div className="text-center mb-6">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase">Blog</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase">Case Studies</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase">Help</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase">Login</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase">Terms of Use</a>
            </div>
            
            <p className="text-gray-400 text-sm mb-6">
              <button
                data-cal-link="jess-mason/intro-call"
                data-cal-namespace="intro-call"
                data-cal-config='{"layout":"month_view"}'
                className="hover:text-white transition-colors"
              >
                Schedule a Demo
              </button>
              {' | '}
              <a href="mailto:Jess@novasoftai.com" className="hover:text-white transition-colors">
                Jess@novasoftai.com
              </a>
            </p>

            <p className="text-gray-500 text-xs mt-8">
              ©2024 - 2025, NovasoftAI
            </p>

            <div className="text-center mt-4 text-xs text-gray-500">
              <p>NovasoftAI LLC</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
