import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      category : 'Programming language',
      skills : ['Java', 'Cpp', 'C', 'Python']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Flutter', 'Tailwind CSS', 'Vue.js'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'Express.js', 'Fast API', 'REST APIs', 'SpringBoot'],
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'Redis', 'MySQL'],
    },
    {
      category: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'CI/CD', 'Kubernetes', 'Grafana', 'Prometheus'],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#111827]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#E5E7EB]">Skills</h2>
          <div className="w-16 sm:w-20 h-1 bg-[#38BDF8]" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid gap-6 sm:gap-8 md:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-[#0B0F19] border border-[#38BDF8]/10 p-5 sm:p-6 rounded-lg"
            >
              <h3 className="text-lg sm:text-xl text-[#E5E7EB] mb-4 font-mono">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(56, 189, 248, 1)' }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#111827] border border-[#38BDF8]/20 text-[#9CA3AF] rounded-md hover:border-[#38BDF8] hover:text-[#38BDF8] transition-colors text-xs sm:text-sm cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}