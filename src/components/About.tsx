import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="min-h-[60vh] flex items-center justify-center py-12 px-8 animate-fadeIn">
      <div className="flex items-center gap-12 max-w-6xl mx-auto">
        <Image
          src="/anis1.jpg"
          alt="Anis"
          width={256}
          height={256}
          className="rounded-lg object-cover shadow-2xl border-4 border-[#00ADB5] hover:scale-105 transition-transform duration-300 animate-fadeIn"
          style={{ animationDelay: '0.3s' }}
        />
        <Card className="backdrop-blur-md bg-white/10 border-white/20 p-8 shadow-2xl animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <CardContent className="p-0">
            <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-xl text-white leading-relaxed">
              I'm <strong>Anis Ben Mehrez</strong>, a passionate <strong>full-stack web developer</strong> and <strong>engineering student at ESPRIT</strong>. I enjoy creating intuitive, efficient, and modern digital experiences, with solid experience across both frontend and backend technologies such as <strong>Angular</strong>, <strong>Spring Boot</strong>, <strong>MERN</strong>, <strong>Next.js</strong>, <strong>Nest.js</strong>, <strong>Python/Flask</strong>, and <strong>Flutter</strong>.<br /><br />
              Driven by curiosity and continuous learning, I love exploring new technologies—especially in <strong>AI</strong>, <strong>RAG systems</strong>, and <strong>web development</strong>. I value <strong>collaboration</strong>, <strong>problem-solving</strong>, and building solutions that make an impact. Beyond tech, I'm someone who loves <strong>animals</strong>, <strong>football</strong>, spending time with <strong>friends</strong>, and meeting new people, which helps me stay balanced, social, and inspired.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}