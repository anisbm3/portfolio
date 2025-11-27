"use client";

import React, { useState, useEffect } from "react";
import { Briefcase, Code, FolderOpen, Info, Mail, Users, Menu, X } from "lucide-react";

const navItems = [
  { href: "#about", label: "About", icon: Info },
  { href: "#skills", label: "Skills", icon: Code },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#project", label: "Project", icon: FolderOpen },
  { href: "#social", label: "Social", icon: Users },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={`mx-4 md:mx-[8%] lg:mx-[12%] mt-4 md:mt-8 shadow-2xl rounded-[30px] md:rounded-[60px] bg-[#222831]/95 backdrop-blur-sm py-3 md:py-4 sticky top-4 md:top-8 z-50 border border-[#00ADB5]/20 transition-all duration-300 ${
        scrolled ? "shadow-[#00ADB5]/20" : ""
      }`}
    >
      <div className="flex items-center justify-between w-full px-4 md:px-8">
        {/* Left side - About (visible on desktop) */}
        <a
          href="#about"
          className="hidden md:flex text-xl transition-all duration-300 hover:text-[#00ADB5] hover:scale-110 relative group px-2 py-1 items-center gap-2"
        >
          <Info className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ADB5] transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Mobile - Logo/Brand */}
        <a href="#about" className="md:hidden text-xl font-bold text-[#00ADB5]">
          ABM
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-12">
          {navItems.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg lg:text-xl transition-all duration-300 hover:text-[#00ADB5] hover:scale-110 relative group px-2 py-1 flex items-center gap-2"
            >
              <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ADB5] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="text-lg lg:text-xl px-4 lg:px-6 py-2 bg-[#00ADB5] hover:bg-[#00ADB5]/80 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#00ADB5]/50 hover:scale-105 flex items-center gap-2"
          >
            <Mail className="w-4 h-4 lg:w-5 lg:h-5" />
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl bg-[#00ADB5]/10 hover:bg-[#00ADB5]/20 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#00ADB5]" />
          ) : (
            <Menu className="w-6 h-6 text-[#00ADB5]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: "0", zIndex: -1 }}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`absolute top-full left-0 right-0 mt-2 mx-4 bg-[#222831]/98 backdrop-blur-md rounded-3xl border border-[#00ADB5]/20 shadow-2xl overflow-hidden transition-all duration-300 md:hidden ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <nav className="flex flex-col p-4">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="flex items-center gap-4 px-4 py-4 text-lg text-white hover:text-[#00ADB5] hover:bg-[#00ADB5]/10 rounded-xl transition-all duration-300 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#00ADB5]/10 flex items-center justify-center group-hover:bg-[#00ADB5]/20 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-[#00ADB5]" />
              </div>
              <span className="font-medium">{item.label}</span>
              <div className="ml-auto w-2 h-2 rounded-full bg-[#00ADB5]/30 group-hover:bg-[#00ADB5] transition-colors duration-300" />
            </a>
          ))}
          
          {/* Contact Button in Mobile Menu */}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="flex items-center justify-center gap-3 mt-4 px-6 py-4 bg-gradient-to-r from-[#00ADB5] to-[#00ADB5]/80 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-[#00ADB5]/30 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
