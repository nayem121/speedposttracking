import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Search, Bell, Shield, Clock, Download, AlertCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Speed Post Tracking Logo" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Speed Post Tracking</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
            >
              Features
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.nuc.speedposttracking"
              className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
            >
              Download
            </Link>
            <Link href="#video" className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400">
              Video
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
            >
              Privacy Policy
            </Link>
          </div>
        </nav>
      </header>

      {/* Third-party disclaimer */}
      <section className="container mx-auto px-4 py-2">
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 max-w-4xl mx-auto">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Third-Party App:</strong> This is an unofficial app developed independently. We are not affiliated
              with India Post or Speed Post services.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge variant="secondary" className="mb-4">
          Free App Available Now
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
          Track Your India Post Speed Post Parcels
          <span className="text-red-600"> Anytime, Anywhere</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-pretty">
          Stay updated on your India Post Speed Post parcels with our fast, reliable tracking app. Whether you're
          waiting for documents, packages, or business shipments, get real-time updates directly on your phone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
            <Link
              href="https://play.google.com/store/apps/details?id=com.nuc.speedposttracking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for Android
            </Link>
          </Button>
          <Button size="lg" variant="outline" disabled className="opacity-60 bg-transparent">
            iOS Coming Soon
          </Button>
        </div>
      </section>

      {/* App Feature Image Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">See Our App in Action</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the intuitive interface designed specifically for tracking India Post Speed Post parcels.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Image
            src="/app-feature.png"
            alt="Speed Post Tracking App Interface"
            width={1024}
            height={500}
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Watch Our App Demo</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how easy it is to track your Speed Post parcels with our mobile application.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/VV0arM2swUk"
              title="Speed Post Tracking App Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Our App?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the most convenient way to track your India Post Speed Post shipments with our feature-rich
            mobile application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <CardTitle>Real-Time Tracking</CardTitle>
              <CardDescription>
                Get instant updates on your Speed Post parcel's location and delivery status with our advanced tracking
                system.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle>Push Notifications</CardTitle>
              <CardDescription>
                Receive instant notifications about important updates, delivery attempts, and successful deliveries.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle>Mobile Optimized</CardTitle>
              <CardDescription>
                Designed specifically for mobile devices with an intuitive interface that works seamlessly on any screen
                size.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <CardTitle>24/7 Availability</CardTitle>
              <CardDescription>
                Track your parcels anytime, day or night. Our service is available round the clock for your convenience.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <CardTitle>Secure & Private</CardTitle>
              <CardDescription>
                Your data is protected with industry-standard security measures. We respect your privacy and never share
                personal information.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <CardTitle>Free to Use</CardTitle>
              <CardDescription>
                Completely free app with no hidden charges. Track unlimited Speed Post parcels without any subscription
                fees.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="container mx-auto px-4 py-16">
        <Card className="border-0 shadow-xl bg-gradient-to-r from-red-600 to-rose-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Tracking?</h2>
            <p className="text-xl mb-8 opacity-90">
              Download the Speed Post Tracking app now and never lose track of your parcels again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100" asChild>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.nuc.speedposttracking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Get it on Google Play
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                disabled
              >
                iOS Coming Soon
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo.png" alt="Speed Post Tracking Logo" width={32} height={32} className="w-8 h-8" />
                <span className="text-xl font-bold">Speed Post Tracking</span>
              </div>
              <p className="text-gray-400">
                Track your India Post Speed Post parcels anytime, anywhere with our reliable mobile application.
              </p>
              <p className="text-gray-500 text-sm mt-2">Third-party app - Not affiliated with India Post</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.indiapost.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    India Post Official Website
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.nuc.speedposttracking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    Download App
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://youtu.be/VV0arM2swUk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    Watch Demo Video
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">Email: nayem121@programmer.com</p>
              <p className="text-gray-400">
                Developed by{" "}
                <Link
                  href="https://nayem121.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Nayem Uddin Chowdhury
                </Link>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Speed Post Tracking - India App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
