import Link from "next/link";
import { Sparkles, ArrowRight, Play, Users, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:p-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20">
            <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">SalesCast</span>
        </div>
        <Link 
          href="/sign-in"
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/20 text-gray-900 dark:text-white font-medium hover:scale-105 transition-all duration-300 backdrop-blur-sm"
        >
          Login
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6 lg:px-20 text-center space-y-12">
        <div className="space-y-8 max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/20 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI-Powered Retail Experience Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 dark:from-white dark:via-purple-200 dark:to-blue-200 bg-clip-text text-transparent leading-tight">
            Transform Every Customer
            <span className="block">Into a Conversion</span>
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Revolutionize customer engagement with AI-powered voice agents, real-time personalization, and intelligent conversion tracking that turns every interaction into a sales opportunity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link 
              href="/sign-up"
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <button className="group px-8 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">15K+</div>
            <div className="text-gray-600 dark:text-gray-400">Active Users</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">98%</div>
            <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">2.4K</div>
            <div className="text-gray-600 dark:text-gray-400">Conversions</div>
          </div>
        </div>

        {/* Waitlist */}
        {/* <div className="pt-12">
          <Waitlist />
        </div> */}
      </main>

      {/* Features Preview */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              AI-Powered Customer Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From voice AI agents to real-time personalization, we deliver the future of customer engagement with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-2xl bg-purple-500/20 w-fit mb-6">
                <Play className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Voice AI Agents</h3>
              <p className="text-gray-600 dark:text-gray-400">Intelligent voice conversations that qualify leads and drive conversions in real-time.</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-2xl bg-blue-500/20 w-fit mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Real-Time Intelligence</h3>
              <p className="text-gray-600 dark:text-gray-400">AI-powered analytics that predict customer behavior and optimize conversion paths.</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-2xl bg-green-500/20 w-fit mb-6">
                <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Hyper-Personalization</h3>
              <p className="text-gray-600 dark:text-gray-400">Dynamic content and offers that adapt to each customer&apos;s unique journey and preferences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
