import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, LineChart, Shield, Zap, ArrowRight, BarChart3, Brain, Target } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-sm font-medium mb-4">
              <Zap className="h-4 w-4" />
              AI-Powered Stock Analysis
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Smart Trading with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                AI Insights
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Make informed trading decisions with real-time market data, advanced analytics, 
              and AI-powered recommendations tailored to your investment strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/register">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Trade Smarter
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Powerful tools and insights to help you make better investment decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:bg-gray-900 hover:border-yellow-500/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-gray-800 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Start Trading Smarter?
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands of traders using AI-powered insights to maximize their returns
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 mt-4">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 bg-yellow-500 rounded">
                <span className="text-gray-900 font-bold">AI</span>
              </div>
              <span className="font-bold text-white">ALGO-AI</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 ALGO-AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Advanced machine learning algorithms analyze market patterns and provide intelligent trading recommendations."
  },
  {
    icon: LineChart,
    title: "Real-Time Data",
    description: "Access live market data and real-time price updates for thousands of stocks worldwide."
  },
  {
    icon: Target,
    title: "Custom Watchlists",
    description: "Create and manage personalized watchlists to track your favorite stocks and opportunities."
  },
  {
    icon: BarChart3,
    title: "Technical Indicators",
    description: "Comprehensive technical analysis tools including RSI, MACD, and custom indicators."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Bank-level security with encrypted data transmission and secure authentication."
  },
  {
    icon: TrendingUp,
    title: "Market Trends",
    description: "Stay ahead with trend analysis and market sentiment indicators powered by AI."
  }
];

const stats = [
  { value: "50K+", label: "Active Traders" },
  { value: "1M+", label: "Daily Analyses" },
  { value: "99.9%", label: "Uptime" }
];
