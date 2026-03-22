import { Award, ExternalLink, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export function Certificates() {
  const certificates = [
    {
      title: 'Flutter & Dart - The Complete Guide',
      issuer: 'Udemy',
      date: '12 Aprit 2024',
      credentialId: 'UC-84370b02-8f29-4d6c-8f86-4b44a7de17a',
      verifyUrl: 'https://www.udemy.com/certificate/UC-84370b02-8f29-4d6c-8f86-4b44a7de17ab/',
      description: '',
    },
    {
      title: 'Data Networks and TCP/IP',
      issuer: 'Udemy',
      date: 'Jan 2025',
      credentialId: 'UC-4e6b411b-5907-4286-82d8-e6dcd078bd30',
      verifyUrl: 'https://www.udemy.com/certificate/UC-4e6b411b-5907-4286-82d8-e6dcd078bd30/',
      description: '',
    },
  ];

  return (
    <section id="certificates" className="py-16 sm:py-20 bg-[#0B0F19]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#E5E7EB]">Certificates</h2>
          <div className="w-16 sm:w-20 h-1 bg-[#38BDF8]" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid gap-5 sm:gap-6 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(56, 189, 248, 0.5)' }}
              className="bg-[#111827] border border-[#38BDF8]/10 rounded-lg p-5 sm:p-6 hover:border-[#38BDF8]/30 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0B0F19] border border-[#38BDF8]/20 rounded-lg flex items-center justify-center text-[#38BDF8] flex-shrink-0">
                  <Award size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl text-[#E5E7EB] mb-1">{cert.title}</h3>
                  <p className="text-[#38BDF8] text-sm sm:text-base mb-1">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-[#9CA3AF] text-xs sm:text-sm">
                    <Calendar size={14} className="sm:w-4 sm:h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="flex flex-col gap-2 pt-4 border-t border-[#38BDF8]/10">
                <div className="text-xs text-[#9CA3AF] font-mono">
                  ID: {cert.credentialId}
                </div>
                <motion.a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                  className="flex items-center gap-2 text-[#38BDF8] hover:text-[#38BDF8]/80 transition-colors text-sm w-fit"
                >
                  <ExternalLink size={16} />
                  <span>Verify Certificate</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
