import { Github, Linkedin, Mail, Download, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = '$ whoami';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: Github, url: 'https://github.com/rajsharma07', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/raj-r-sharma/', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:rajrsharma2004@gmail.com', label: 'Email' },
  ];

  const resumeUrl = 'https://drive.google.com/file/d/1D5Ta7HMjXTmCDSCj0lJsvkwELm0XSc1o/view?usp=drive_link'; // Ensure the resume file is in the public folder

  const profilePicUrl = '/profile-pic.png'; // Ensure the profile picture is in the public folder

  const handleDownloadResume = () => {
    alert('Resume download would start here. Please add your resume PDF to the public folder.');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4">
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Terminal-style intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8 bg-[#111827] border border-[#38BDF8]/20 rounded-lg overflow-hidden"
          >
            <div className="bg-[#1F2937] px-3 sm:px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-[#9CA3AF] text-xs sm:text-sm font-mono ml-2">terminal</span>
            </div>
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-[#38BDF8] mb-2">
                <Terminal size={16} className="hidden sm:block" />
                <span>{displayText}<span className="animate-pulse">_</span></span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="text-[#E5E7EB] mt-2"
              >
                <span className="text-[#9CA3AF]">&gt;</span> Raj Sharma
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="text-[#9CA3AF] mt-1"
              >
                <span className="text-[#9CA3AF]">&gt;</span> Software Engineer
              </motion.div>
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 mb-8"
          >
            <img
              src={profilePicUrl}
              alt="Profile Picture"
              className="w-32 h-32 sm:w-40 sm:h-40 flex flex-col sm:flex-row items-center justify-center gap-6 mb-8  rounded-full border-4 border-[#38BDF8]/50 shadow-lg"
            />

            <div className="text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 sm:mb-4 text-[#E5E7EB]">
                Raj Sharma
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl mb-2 text-[#38BDF8] font-mono">
                Software Engineer
              </div>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-[#9CA3AF] max-w-2xl leading-relaxed">
                I design and build scalable software products that are fast, maintainable, and user-friendly.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8"
          >
            <a
              href={resumeUrl}
              download
              className="px-5 sm:px-6 py-3 bg-[#38BDF8] text-[#0B0F19] rounded-md inline-flex items-center justify-center gap-2 hover:bg-[#38BDF8]/90 transition-all hover:scale-105 text-sm sm:text-base"
            >
              <Download size={18} className="sm:w-5 sm:h-5" />
              Resume
            </a>

            {/* <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-6 py-3 border border-[#38BDF8]/20 text-[#E5E7EB] hover:border-[#38BDF8] hover:text-[#38BDF8] rounded-md inline-flex items-center justify-center gap-2 transition-all hover:scale-105 text-sm sm:text-base"
            >
              View Resume
            </a> */}

            <div className="flex gap-3 justify-center sm:justify-start">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 border border-[#38BDF8]/20 text-[#E5E7EB] hover:border-[#38BDF8] hover:text-[#38BDF8] rounded-md transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-[#38BDF8]/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-[#38BDF8]/50 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}