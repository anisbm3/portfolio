import { Brain, Clock, Folder, Lightbulb, MessageCircle, RefreshCw, Users } from "lucide-react";
import Image from "next/image";

type Skill = {
  name: string;
  src?: string;
  icon?: React.ComponentType<any>;
};

export default function Skills() {
  const skillsData: Record<string, Skill[]> = {
    Backend: [
      { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Nest.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
      { name: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Spring Boot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    ],
    Frontend: [
      { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Angular", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    ],
    Database: [
      { name: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
    Design: [
      { name: "TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Shadcn UI", src: "https://ui.shadcn.com/favicon.ico" }, // Placeholder for Shadcn
    ],
    "Soft Skills": [
      { name: "Analytic Thinking", icon: Brain },
      { name: "Team Work", icon: Users },
      { name: "Communication", icon: MessageCircle },
      { name: "Adaptability", icon: RefreshCw },
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Time Management", icon: Clock },
    ],
    Others: [
      { name: "CI/CD", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "RAG", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" }, // Placeholder for RAG
      { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    ],
  };

  return (
    <section id="skills" className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-8">
      <h2 className="text-5xl font-bold mb-12 text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div
            key={category}
            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <Folder className="w-8 h-8 text-[#00ADB5] mr-3" />
              <h3 className="text-2xl font-semibold text-white">{category}</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  {skill.src ? (
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      width={50}
                      height={50}
                      className="mb-2 hover:scale-110 transition-transform duration-300"
                    />
                  ) : skill.icon ? (
                    <skill.icon className="w-12 h-12 mb-2 text-[#00ADB5] hover:scale-110 transition-transform duration-300" />
                  ) : null}
                  <span className="text-sm text-white text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}