"use client";

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20workspace%20with%20clean%20desk%20setup%2C%20laptop%2C%20coding%20environment%2C%20soft%20natural%20lighting%2C%20contemporary%20office%20space%20with%20neutral%20colors%2C%20professional%20developer%20workspace%2C%20clean%20background&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-800/80"></div>
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <div className="my-6 mt-10">
          <span className="inline-block bg-green-500/20 text-green-200 px-4 py-2 rounded-full text-sm font-medium border border-green-300/30">
            🚀 Let’s Bring Your Next Product to Life — End to End
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          I Craft products your
          <span className="text-blue-400"> audience will love</span>
          <span> — not just admire</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
          I’m Yogesh — a full-stack developer with a product-first mindset,
          helping founders turn raw ideas into fully functional, user-ready
          products. From MVPs to scalable systems, I build end-to-end solutions
          that are fast, clean, reliable, and built to grow.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <i className="ri-rocket-line text-blue-300 w-6 h-6 flex items-center justify-center"></i>
            </div>
            <h3 className="font-semibold text-white mb-1">
              From Idea to Deployment
            </h3>
            <p className="text-sm text-gray-300">Work with someone who ships</p>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <i className="ri-chat-smile-3-line text-green-300 w-6 h-6 flex items-center justify-center"></i>
            </div>
            <h3 className="font-semibold text-white mb-1">Zero Dev Jargon</h3>
            <p className="text-sm text-gray-300">
              {" "}
              handle the technical logic while explaining everything in plain
              English.
            </p>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <i className="ri-line-chart-line text-purple-300 w-6 h-6 flex items-center justify-center"></i>
            </div>
            <h3 className="font-semibold text-white mb-1">
              Backend That Grows With You
            </h3>
            <p className="text-sm text-gray-300">Scale-ready from day one</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
