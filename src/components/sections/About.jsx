import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
  ];

  const backendSkills = [
    "Java",
    "Spring Boot",
    "SAP Commerce Cloud",
    "Fluent Commerce",
    "Groovy",
    "Node.js",
    "GraphQL",
    "MYSQL",
    "Python",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> M.S. in Information Science </strong> - University of
                  Pittsburgh (2024-2026)
                </li>
                <ul>
                  <li>
                    Relevant Coursework: Data Structures, Web Development, Cloud
                    Computing...
                  </li>
                </ul>
                <li>
                  <strong>B.E. in Computer Engineering </strong> - University of Pune (2016 - 2020)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at Nagarro (2022 - 2024){" "}
                  </h4>
                  <p>
                    Led Fluent OMS implementation, reducing order cancellations
                    by 85%, enhancing stock accessibility 10x, cutting delivery
                    costs by 22%, automating shipping to lower freight costs by
                    20%, and reducing production incidents by 75%.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Programmer Analyst at Cognizant (2020 - 2022){" "}
                  </h4>
                  <p>
                    Implemented a seamless Salesforce CRM and SAP Commerce Cloud
                    integration, optimized database structures, automated
                    product data import, and enhanced code quality with robust
                    testing and SonarQube issue resolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
