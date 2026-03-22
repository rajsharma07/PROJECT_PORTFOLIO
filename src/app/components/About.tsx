import { Code, Rocket, Users, Award } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const highlights = [
    // {
    //   icon: Code,
    //   title: '5+ Years',
    //   description: 'Experience',
    // },
    // {
    //   icon: Rocket,
    //   title: '50+ Projects',
    //   description: 'Delivered',
    // },
    // {
    //   icon: Users,
    //   title: '20+ Clients',
    //   description: 'Worldwide',
    // },
    // {
    //   icon: Award,
    //   title: '15+ Awards',
    //   description: 'Recognition',
    // },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#0B0F19]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#E5E7EB]">About Me</h2>
          <div className="w-16 sm:w-20 h-1 bg-[#38BDF8]" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-[#9CA3AF] mb-4 text-base sm:text-lg leading-relaxed">
              I am a passionate software engineer who builds scalable and maintainable software products. I am driven by curiosity and a constant desire to learn and improve. I have proficiency in programming languages such as Java, C++, and Dart, along with frameworks and tools like Flutter, Spring Boot, git,MySQL, and MongoDB. When I am not coding, I enjoy exploring new technologies and expanding my skill set.
            </p>
            
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(56, 189, 248, 0.5)' }}
                className="p-4 sm:p-6 bg-[#111827] border border-[#38BDF8]/10 rounded-lg hover:border-[#38BDF8]/30 transition-colors"
              >
                <item.icon className="text-[#38BDF8] mb-2 sm:mb-3" size={24} />
                <div className="text-lg sm:text-2xl text-[#E5E7EB] mb-1">{item.title}</div>
                <div className="text-xs sm:text-sm text-[#9CA3AF]">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}