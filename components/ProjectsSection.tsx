"use client";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "MediVault",
      subtitle: "Medical Records Management System",
      description:
        "When a MedTech startup needed to go from “our records are a mess” to a working, reliable medical platform — I built the entire backend in just 2 weeks. From a raw Notion doc to a functional system with OCR, structured data, and clean APIs — fast, scalable, and ready for real users.",
      visible: false,
      technologies: [
        "Laravel",
        "FastAPI",
        "SQLite",
        "Redis",
        "MongoDB",
        "Docker",
        "Tesseract OCR",
        "Gemini API",
      ],
      github: "https://github.com/yogesh/medivault",
      demo: "https://medivault-api.herokuapp.com/docs",
      status: "Production Ready",
      details: [
        "Patient onboarding that actually works for busy clinics",
        "OCR that reads doctor handwriting (yes, really)",
        "APIs so clean the frontend team thanked me",
        "HIPAA compliance without breaking the bank",
        "Performance that handles real clinic traffic",
        "Documentation that non-tech stakeholders understand",
      ],
      Note: "🔒 Codebase is private, but I’m happy to walk you through the architecture or decisions I made.",
    },
    {
      id: 2,
      title: "Authify",
      subtitle: "JWT Authentication Microservice",
      description:
        'Every startup needs auth that "just works" but is also bulletproof. Built this as a drop-in solution — JWT tokens, role management, rate limiting. The kind of auth system I wish existed when I was scrambling to launch MVPs.',
      // image: 'https://readdy.ai/api/search-image?query=JWT%20authentication%20system%20backend%20architecture%2C%20secure%20API%20authentication%20flow%2C%20token%20management%20system%2C%20Node.js%20microservice%20infrastructure%2C%20security%20backend%20design&width=600&height=400&seq=authify-backend&orientation=landscape',
      visibile: true,
      technologies: [
        "Python",
        "FastAPI",
        "Tortoise ORM",
        "JWT",
        "Bcrypt",
        "Pytest",
      ],
      github: "https://github.com/yogesh-xcode/Authify",
      demo: "https://authify-api.herokuapp.com/api/docs",
      status: "Production Ready",
      details: [
        "Auth that scales from MVP to enterprise",
        "Security that passes startup security audits",
        "Token refresh that actually works reliably",
        "Role system flexible enough for changing requirements",
        "Rate limiting that stops the obvious attacks",
        "Error messages that help debug, not confuse",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Outgrowing No-Code? Still on a Notion Doc?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're just starting or stuck scaling, I help founders ship
            clean, scalable products users can count on.
          </p>
        </div>

        {/* Experience Highlight */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                🏥 Med Tech Startup Journey
              </h3>
              <p className="text-lg text-blue-700">
                From idea validation to production deployment
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/70 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  3 Weeks
                </div>
                <p className="text-gray-700">Notion to Production</p>
              </div>
              <div className="bg-white/70 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  Data to Dashboard
                </div>
                <p className="text-gray-700">Compliant & Secure</p>
              </div>
              <div className="bg-white/70 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  Hospital Frontier
                </div>
                <p className="text-gray-700">
                  Designed to support real hospital dashboards
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col  md:flex-row flex-wrap gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full md:w-[calc(50%-0.5rem)] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div>
                {/* Image Part Come here (optional!) */}

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {project.subtitle}
                      </p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      What I Actually Built
                    </h4>
                    <ul className="space-y-2">
                      {project.details.map((detail, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.visibile ? (
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        <i className="ri-github-line w-4 h-4 flex items-center justify-center"></i>
                        <span className="whitespace-nowrap">See the Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        <i className="ri-api-line w-4 h-4 flex items-center justify-center"></i>
                        <span className="whitespace-nowrap">Try the API</span>
                      </a>
                    </div>
                  ) : (
                    project.Note
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🚀 Ready to Build Something Real?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you’re starting from scratch or scaling what you’ve got —
              I help turn ideas into production-grade products that real users
              rely on.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Let's Build Something Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// {
//   /* <div className="relative">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-80 lg:h-full object-cover object-top"
//                   />
//                   <div className="absolute top-4 right-4 flex gap-2">
//                     <a
//                       href={project.github}
//                       className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors cursor-pointer"
//                     >
//                       <i className="ri-github-fill w-5 h-5 flex items-center justify-center"></i>
//                     </a>
//                     <a
//                       href={project.demo}
//                       className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors cursor-pointer"
//                     >
//                       <i className="ri-external-link-line w-5 h-5 flex items-center justify-center"></i>
//                     </a>
//                   </div>
//                 </div> */
// }
