
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Send, Terminal } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6"> {/*remove animate-glitch*/}
            <span className="text-cyber-chateau animate-flicker">CONTACT.LOG</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-volt via-cyber-chateau to-cyber-volt mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="border border-cyber-volt/30 bg-cyber-gray/20 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyber-volt mb-6 animate-flicker">
                Get In Touch
              </h3>
              <p className="text-gray-300 mb-6 animate-flicker">
                Ready to secure your digital infrastructure? Let's discuss how we can 
                protect your systems and build robust security solutions together.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-cyber-volt animate-pulse" />
                  <span className="text-gray-300 animate-flicker">lngsay1688@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-cyber-volt animate-pulse" />
                  <span className="text-gray-300 animate-flicker">Provided upon request</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-cyber-volt animate-pulse" />
                  <span className="text-gray-300 animate-flicker">Los Angeles, CA</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-cyber-volt mb-4 animate-flicker">
                  Connect Online
                </h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/sunnyspectra" className="p-3 border border-cyber-volt/30 rounded-lg hover:border-cyber-volt hover:bg-cyber-volt/10 transition-all duration-300 group">
                    <Github className="w-6 h-6 text-cyber-volt group-hover:animate-spin" />
                  </a>
                  <a href="https://www.linkedin.com/in/sunhengleng/" className="p-3 border border-cyber-volt/30 rounded-lg hover:border-cyber-volt hover:bg-cyber-volt/10 transition-all duration-300 group">
                    <Linkedin className="w-6 h-6 text-cyber-volt group-hover:animate-pulse" />
                  </a>
                  <a href="#" className="p-3 border border-cyber-volt/30 rounded-lg hover:border-cyber-volt hover:bg-cyber-volt/10 transition-all duration-300 group">
                    <Terminal className="w-6 h-6 text-cyber-volt group-hover:animate-bounce" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cyber-border bg-cyber-gray/10 p-6 rounded-lg backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-cyber-volt text-sm font-semibold mb-2 animate-flicker">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-cyber-black/50 border border-cyber-volt/30 rounded-lg px-4 py-3 text-cyber-volt focus:border-cyber-volt focus:outline-none transition-all duration-300 font-mono"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-cyber-volt text-sm font-semibold mb-2 animate-flicker">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-cyber-black/50 border border-cyber-volt/30 rounded-lg px-4 py-3 text-cyber-volt focus:border-cyber-volt focus:outline-none transition-all duration-300 font-mono"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-cyber-volt text-sm font-semibold mb-2 animate-flicker">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-cyber-black/50 border border-cyber-volt/30 rounded-lg px-4 py-3 text-cyber-volt focus:border-cyber-volt focus:outline-none transition-all duration-300 font-mono"
                  placeholder="Security consultation, project inquiry..."
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-cyber-volt text-sm font-semibold mb-2 animate-flicker">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-cyber-black/50 border border-cyber-volt/30 rounded-lg px-4 py-3 text-cyber-volt focus:border-cyber-volt focus:outline-none transition-all duration-300 font-mono resize-none"
                  placeholder="Describe your project or security needs..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyber-volt to-cyber-cobalt text-cyber-black font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-cyber-volt/50 transition-all duration-300 flex items-center justify-center space-x-2 animate-pulse-glow"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 text-cyber-volt/60 text-sm animate-flicker">
                <Terminal className="w-4 h-4" />
                <span className="font-mono">&gt; Encrypted communication enabled_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
