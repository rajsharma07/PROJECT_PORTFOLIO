import { Mail, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rajrsharma2004@gmail.com',
      link: 'mailto:rajrsharma2004@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, India',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/rajsharma07', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/raj-r-sharma/', label: 'LinkedIn' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo, so the form is not actually submitted.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#0B0F19]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#E5E7EB]">Get In Touch</h2>
          <div className="w-16 sm:w-20 h-1 bg-[#38BDF8]" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-8 sm:gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#9CA3AF] mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out!
            </p>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#111827] border border-[#38BDF8]/20 rounded-lg flex items-center justify-center text-[#38BDF8] flex-shrink-0">
                    <info.icon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-[#9CA3AF]">{info.label}</div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-sm sm:text-base text-[#E5E7EB] hover:text-[#38BDF8] transition-colors break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-sm sm:text-base text-[#E5E7EB]">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="text-base sm:text-lg mb-4 text-[#E5E7EB]">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[#111827] border border-[#38BDF8]/20 rounded-lg flex items-center justify-center text-[#9CA3AF] hover:border-[#38BDF8] hover:text-[#38BDF8] transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon size={18} className="sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label htmlFor="name" className="block text-[#E5E7EB] mb-2 text-sm sm:text-base">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#111827] border border-[#38BDF8]/20 text-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#38BDF8] placeholder-[#9CA3AF] transition-all text-sm sm:text-base"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label htmlFor="email" className="block text-[#E5E7EB] mb-2 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#111827] border border-[#38BDF8]/20 text-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#38BDF8] placeholder-[#9CA3AF] transition-all text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-[#E5E7EB] mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#111827] border border-[#38BDF8]/20 text-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#38BDF8] resize-none placeholder-[#9CA3AF] transition-all text-sm sm:text-base"
                  placeholder="Your message..."
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-5 sm:px-6 py-2.5 sm:py-3 bg-[#38BDF8] text-[#0B0F19] rounded-md hover:bg-[#38BDF8]/90 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send size={18} className="sm:w-5 sm:h-5" />
                Send Message
              </motion.button>
            </form> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}