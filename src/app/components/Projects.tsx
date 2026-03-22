import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';

export function Projects() {
  const projects = [
    {
      title: 'RFID-Based Attendance Monitoring System',
      description: 'Real time RFID based attendance monitoring system for schools',
      technologies: ['Flutter', 'Node.js', 'MySQL', 'FCM', 'RC522', 'ESP32'],
      // githubUrl: 'https://github.com/rajsharma/ecommerce-platform',
      // liveUrl: 'https://ecommerce-demo.example.com',
    },
    {
      title: 'AI-Powered SQL Query Generator',
      description: 'SQL assistant that converts natural language query into SQL query, considering users database schema',
      technologies: ['React js', 'Node JS', 'MongoDB', 'Groq', 'llama', 'Fast API'],
      githubUrl: 'https://github.com/vidhikoul/TechOptimizers',
      // liveUrl: 'https://task-manager-demo.example.com',
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#111827]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#E5E7EB]">Projects</h2>
          <div className="w-16 sm:w-20 h-1 bg-[#38BDF8]" />
        </motion.div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, borderColor: 'rgba(56, 189, 248, 0.5)' }}
              className="bg-[#0B0F19] border border-[#38BDF8]/10 rounded-lg p-5 sm:p-6 hover:border-[#38BDF8]/30 transition-colors flex flex-col"
            >
              <h3 className="text-lg sm:text-xl text-[#E5E7EB] mb-3">{project.title}</h3>
              <p className="text-[#9CA3AF] mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                    className="px-2 py-1 bg-[#111827] text-[#38BDF8] text-xs rounded border border-[#38BDF8]/20 font-mono"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-[#38BDF8]/10">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                  className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#38BDF8] transition-colors text-sm"
                >
                  <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                  className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#38BDF8] transition-colors text-sm"
                >
                  <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}