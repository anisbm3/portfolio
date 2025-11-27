"use client";

import { Github, Linkedin, Mail, MapPin, Phone, User } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-[60vh] bg-white py-12 px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-pink-100 to-orange-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-60" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full opacity-40" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent mb-4">
            Let&apos;s Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact Card */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            {/* Profile Header */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-700">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Anis Ben Mehrez</h3>
                <p className="text-gray-400">Software Developer</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-5">
              {/* Emails */}
              <div className="group">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a href="mailto:anis.benmehrez@esprit.tn" className="text-white hover:text-blue-400 transition-colors block text-sm md:text-base">
                      anis.benmehrez@esprit.tn
                    </a>
                    <a href="mailto:anisbenmehrez108@gmail.com" className="text-white hover:text-blue-400 transition-colors block text-sm md:text-base">
                      anisbenmehrez108@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <a href="tel:+21653796961" className="text-white hover:text-green-400 transition-colors">
                      +216 53 796 961
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="group">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white">Manouba, Denden, Tunisia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-4">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/anis-ben-mehrez-851a222a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                >
                  <Linkedin className="w-7 h-7 text-white" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://github.com/anisbm3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-gray-500/30 transition-all duration-300"
                >
                  <Github className="w-7 h-7 text-white" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Interactive Card */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-32 h-32 border-2 border-gray-900 rounded-full" />
              <div className="absolute top-8 left-8 w-32 h-32 border-2 border-gray-900 rounded-full" />
              <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-gray-900 rounded-full" />
              <div className="absolute bottom-8 right-8 w-24 h-24 border-2 border-gray-900 rounded-full" />
            </div>

            <div className="relative z-10">
              {/* Quote section */}
              <div className="text-center mb-8">
                <div className="text-6xl text-gray-200 font-serif">&ldquo;</div>
                <p className="text-xl text-gray-700 italic leading-relaxed px-4">
                  Passionate about crafting digital experiences that make a difference. 
                  Let&apos;s turn ideas into reality.
                </p>
                <div className="text-6xl text-gray-200 font-serif rotate-180">&ldquo;</div>
              </div>

              {/* Stats/Highlights */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">3+</div>
                  <div className="text-sm text-gray-600 mt-1">Years Coding</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">10+</div>
                  <div className="text-sm text-gray-600 mt-1">Projects</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">∞</div>
                  <div className="text-sm text-gray-600 mt-1">Curiosity</div>
                </div>
              </div>

              {/* What I do */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">What I Love Working On</h4>
                {[
                  { emoji: "🚀", text: "Web Applications", color: "from-cyan-500 to-blue-500" },
                  { emoji: "🎨", text: "UI/UX Design", color: "from-purple-500 to-pink-500" },
                  { emoji: "⚡", text: "Performance Optimization", color: "from-yellow-500 to-orange-500" },
                  { emoji: "🔧", text: "Problem Solving", color: "from-green-500 to-emerald-500" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 group cursor-default"
                  >
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{item.emoji}</span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                    <div className={`ml-auto w-16 h-1 rounded-full bg-gradient-to-r ${item.color} opacity-50 group-hover:opacity-100 group-hover:w-24 transition-all duration-300`} />
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <a
                  href="mailto:anis.benmehrez@esprit.tn"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold hover:shadow-xl hover:shadow-gray-900/20 hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-gray-600">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Available for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
