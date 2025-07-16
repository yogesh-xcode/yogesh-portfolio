"use client";

export default function AboutSection() {
  const focusAreas = [
    {
      icon: "ri-settings-3-line",
      title: "Scalable Systems from Day One",
      description: "Architected for long-term success, not just MVPs",
    },
    {
      icon: "ri-shield-check-line",
      title: "Production-Ready Foundations",
      description: "Engineered to handle real-world load, not just test cases",
    },
    {
      icon: "ri-rocket-line",
      title: "Startup-Savvy Development",
      description: "Fast when you need speed, stable when you hit scale",
    },
  ];

  const technologies = [
    { name: "PHP (Laravel)", level: 95 },
    { name: "Python (FastAPI)", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Database Design", level: 92 },
    { name: "API Development", level: 95 },
    { name: "Testing & QA", level: 88 },
  ];

  return (
    <section id="about" className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              👋 About Me
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                I'm Yogesh — a backend-first developer with a product mindset.
              </p>
              <p>
                I've explored a wide range of technologies, evaluated startup
                ideas, and worked directly with founders and early teams to
                bring rough concepts to life. I've seen firsthand what it takes
                to go from an idea in a Notion doc to something real users
                actually rely on.
              </p>
              <p>
                I'm not just here to write clean code — I'm here to help you
                move fast, make smart decisions, and deliver real business
                value.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              How I Help Founders & Teams Succeed
            </h3>
            <div className="grid gap-6 mb-12">
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
                    <i className={`${area.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {area.title}
                    </h4>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
