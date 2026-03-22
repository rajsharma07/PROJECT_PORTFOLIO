import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      title: 'Software Intern',
      company: 'Concentric AI',
      location: 'Pune, India',
      period: 'Jan 2026 - Present',
      description: '',
      achievements: [
        'Enhanced system observability by implementing custom application metrics in a Java Spring Boot service',
        'Designed and optimized Grafana dashboards to visualize key service metrics such as latency, error rates, and system health.',
        ' Collaborated with engineers to analyze production metrics and assist in debugging performance bottlenecks.',
      ],
    },
   
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-[#0B0F19]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#E5E7EB]">Experience</h2>
          <div className="w-16 sm:w-20 h-1 bg-[#38BDF8]" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-6 sm:pl-8 pb-10 sm:pb-12 border-l-2 border-[#38BDF8]/20 last:pb-0"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                className="absolute left-0 top-0 transform -translate-x-[9px] w-4 h-4 bg-[#38BDF8] rounded-full"
              />

              <motion.div
                whileHover={{ x: 5, borderColor: 'rgba(56, 189, 248, 0.5)' }}
                transition={{ duration: 0.2 }}
                className="bg-[#111827] border border-[#38BDF8]/10 p-4 sm:p-6 rounded-lg hover:border-[#38BDF8]/30 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl text-[#E5E7EB] mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-[#38BDF8] text-sm sm:text-base">
                      <Briefcase size={16} className="sm:w-[18px] sm:h-[18px]" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#9CA3AF] text-sm sm:text-base">
                    <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-[#9CA3AF] mb-1 text-sm sm:text-base">{exp.location}</p>
                <p className="text-[#E5E7EB] mb-4 text-sm sm:text-base">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.3, delay: index * 0.15 + 0.3 + i * 0.1 }}
                      className="flex gap-2 text-[#9CA3AF] text-sm sm:text-base"
                    >
                      <span className="text-[#38BDF8] mt-0.5">▹</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}