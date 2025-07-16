
'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Yogesh</h3>
            <p className="text-gray-400 leading-relaxed">
              Backend Developer specializing in building robust, scalable systems with clean APIs 
              that perform in production. From Karur, Tamil Nadu.
            </p>
            <div className="mt-4 text-gray-400">
              <p>📧 yogesh.xcode@gmail.com</p>
              <p>📱 +91 74486 24928</p>
              <p>📍 Karur, Tamil Nadu</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                About
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Projects
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Contact
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Tech Stack</h4>
            <div className="space-y-2 text-gray-400">
              <p>• PHP (Laravel)</p>
              <p>• Python (FastAPI)</p>
              <p>• Node.js</p>
              <p>• Database Design</p>
              <p>• API Development</p>
              <p>• Docker & DevOps</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Yogesh. All rights reserved. Building backends that deliver.</p>
        </div>
      </div>
    </footer>
  );
}
