"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handlePagechange = () => {
    router.push("/about");
    console.log("Button clicked!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/30 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            MyApp
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-gray-300 hover:text-purple-400 transition">Home</a>
            <a href="#features" className="text-gray-300 hover:text-purple-400 transition">Features</a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
        <div className="space-y-6 mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
            Welcome to the
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"> Future</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Build amazing applications with cutting-edge technology. Experience innovation like never before.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handlePagechange}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 active:scale-95"
          >
            Explore More
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/60 transition hover:shadow-xl hover:shadow-purple-500/20">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg mb-4 flex items-center justify-center text-xl">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
            <p className="text-gray-400">Experience blazing-fast performance with our optimized infrastructure.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/60 transition hover:shadow-xl hover:shadow-purple-500/20">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg mb-4 flex items-center justify-center text-xl">
              🔒
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Secure</h3>
            <p className="text-gray-400">Enterprise-grade security to keep your data safe and protected.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/60 transition hover:shadow-xl hover:shadow-purple-500/20">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg mb-4 flex items-center justify-center text-xl">
              🎨
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Beautiful Design</h3>
            <p className="text-gray-400">Modern, responsive designs that look great on any device.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-12 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 text-lg">Join thousands of satisfied users today</p>
          <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 active:scale-95">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-black/20 mt-20 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 MyApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
