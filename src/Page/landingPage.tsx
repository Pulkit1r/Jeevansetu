import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconArrowAutofitContent, IconArrowRight } from "@tabler/icons-react";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";
import AppTutorial from "@/components/how-to-use";
// Import required components (you'll need to create these)
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { LanguageSelector } from '@/components/language/language-selector';
// import { VideoPreview } from '@/components/video/video-preview';
// import { TestimonialCard } from '@/components/testimonial/testimonial-card';

const PreLoginLanding = () => {
  const router = useRouter();
  const features = [
    {
      icon: "📹",
      title: "Video Consultations",
      description:
        "Connect with qualified doctors through secure video calls in your preferred language",
      highlight: "Multilingual Support",
      link: "/consult",
    },
    {
      icon: "📱",
      title: "Offline Health Records",
      description:
        "Access your medical records even without internet connection in rural areas",
      highlight: "Works Offline",
      link: "records",
    },
    {
      icon: "💊",
      title: "Medicine Availability",
      description:
        "Real-time updates on medicine stock at local pharmacies near you",
      highlight: "Local Pharmacy Network",
      link: "/medicines",
    },
    {
      icon: "🤖",
      title: "AI Symptom Checker",
      description:
        "Get instant preliminary health assessment powered by AI technology",
      highlight: "AI-Powered",
      link: "/chatbot",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Rural Maharashtra",
      text: "This app helped me consult with a specialist doctor without traveling 50km to the city. The Hindi interface made it so easy!",
      rating: 5,
    },
    {
      name: "Sunita Devi",
      location: "Village in Bihar",
      text: "I could access my health records even when there was no internet. The offline feature is a lifesaver!",
      rating: 5,
    },
    {
      name: "Vikram Patel",
      location: "Gujarat Village",
      text: "Found my medicine at a nearby pharmacy through this app. Saved me hours of searching!",
      rating: 5,
    },
  ];

  const stats = [
    { number: "50,000+", label: "Patients Served" },
    { number: "500+", label: "Doctors Available" },
    { number: "1,200+", label: "Pharmacies Connected" },
    { number: "15+", label: "Languages Supported" },
  ];

  const [openTutorial, setOpenTutorial] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-green-200 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">Swasthya Saathi</h1>

            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Your health, our priority
            </p>

            <AppTutorial
              isOpen={openTutorial}
              onClose={() => setOpenTutorial(false)}
            />

            <button
              onClick={() => setOpenTutorial(true)}
              className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 cursor-pointer transition"
            >
              How to use this app?
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-6">
            <div className="bg-white/15 backdrop-blur rounded-xl px-6 py-4">
              <p className="text-2xl font-bold">10K+</p>
              <p className="text-sm opacity-80">Users</p>
            </div>
            <div className="bg-white/15 backdrop-blur rounded-xl px-6 py-4">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm opacity-80">Secure</p>
            </div>
            <div className="bg-white/15 backdrop-blur rounded-xl px-6 py-4">
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm opacity-80">Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need for Rural Healthcare
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform is specifically designed to address the unique
              challenges of healthcare access in rural India
            </p>
          </div>

          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="h-full sm:max-w-[600px]">
                <BackgroundGradient className="bg-card h-full rounded-[22px]">
                  <div className="rounded-xl flex flex-wrap h-full gap-y-6 items-center p-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{feature.icon}</div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold">
                            {feature.title}
                          </h3>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-2xl">
                            {feature.highlight}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={feature.link}
                      className="mx-auto self-end p-2 px-3 rounded-2xl hover:bg-primary/10"
                    >
                      <IconArrowRight className="text-primary" />
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to access healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-muted-foreground">
            {[1, 2, 3].map((step) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {step === 1 ? "Sign Up" : step === 2 ? "Connect" : "Access"}
                </h3>
                <p>
                  {step === 1 &&
                    "Create your account in your preferred language"}
                  {step === 2 &&
                    "Video call with doctors or use AI symptom checker"}
                  {step === 3 &&
                    "Get prescriptions, medicines, and offline records"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground">
              Real stories from rural communities across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-primary mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Rural Healthcare?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of patients and doctors already using our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/signup")}
              className="px-8 py-4 bg-white text-primary text-lg font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Start Your Journey
            </button>
            <button
              onClick={() => router.push("/login")}
              className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              Already Have Account?
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreLoginLanding;
