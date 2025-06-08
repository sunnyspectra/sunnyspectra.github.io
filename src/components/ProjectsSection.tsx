
import React from 'react';
import { ExternalLink, Github, Shield, Terminal, Lock, Database } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "SecureVault",
      description: "Enterprise password manager with zero-knowledge encryption and biometric authentication.",
      tech: ["React", "Node.js", "PostgreSQL", "WebCrypto API"],
      icon: Lock,
      color: "volt",
      features: ["End-to-end encryption", "Biometric auth", "Secure sharing", "Audit logs"]
    },
    {
      title: "PenTest Suite",
      description: "Automated penetration testing framework for web applications and network scanning.",
      tech: ["Python", "Nmap", "SQLMap", "Custom Scripts"],
      icon: Terminal,
      color: "cobalt",
      features: ["Automated scanning", "Custom payloads", "Report generation", "Integration APIs"]
    },
    {
      title: "CyberShield",
      description: "Real-time threat detection system using machine learning and behavioral analysis.",
      tech: ["Python", "TensorFlow", "Redis", "Docker"],
      icon: Shield,
      color: "amethyst",
      features: ["ML detection", "Real-time alerts", "Threat intelligence", "Dashboard analytics"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'volt':
        return {
          text: 'text-cyber-volt',
          border: 'border-cyber-volt',
          bg: 'bg-cyber-volt',
          glow: 'hover:shadow-cyber-volt/50'
        };
      case 'cobalt':
        return {
          text: 'text-cyber-cobalt',
          border: 'border-cyber-cobalt',
          bg: 'bg-cyber-cobalt',
          glow: 'hover:shadow-cyber-cobalt/50'
        };
      case 'amethyst':
        return {
          text: 'text-cyber-amethyst',
          border: 'border-cyber-amethyst',
          bg: 'bg-cyber-amethyst',
          glow: 'hover:shadow-cyber-amethyst/50'
        };
      default:
        return {
          text: 'text-cyber-volt',
          border: 'border-cyber-volt',
          bg: 'bg-cyber-volt',
          glow: 'hover:shadow-cyber-volt/50'
        };
    }
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6"> {/* remove animate-glitch*/}
            <span className="text-cyber-chateau animate-flicker">PROJECTS.SYS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-volt via-cyber-chateau to-cyber-volt mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const Icon = project.icon;
            
            return (
              <div key={index} className={`cyber-border bg-cyber-gray/10 rounded-lg p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300 ${colors.glow} hover:shadow-lg group`}>
                <div className="flex items-center mb-4">
                  <Icon className={`w-8 h-8 ${colors.text} mr-3 animate-pulse group-hover:animate-spin`} />
                  <h3 className={`text-xl font-bold ${colors.text} animate-flicker`}>
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-4 animate-flicker">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className={`text-sm font-semibold ${colors.text} mb-2 animate-flicker`}>
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-2 py-1 text-xs ${colors.bg} text-cyber-black rounded font-mono animate-pulse`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className={`text-sm font-semibold ${colors.text} mb-2 animate-flicker`}>
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-center animate-flicker">
                        <span className={`w-1 h-1 ${colors.bg} rounded-full mr-2 animate-pulse`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <button className={`flex items-center space-x-2 px-3 py-2 border ${colors.border} ${colors.text} hover:${colors.bg} hover:text-cyber-black transition-all duration-300 rounded text-sm animate-flicker`}>
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                  <button className={`flex items-center space-x-2 px-3 py-2 ${colors.bg} text-cyber-black hover:${colors.text} hover:bg-transparent border ${colors.border} transition-all duration-300 rounded text-sm animate-pulse`}>
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-cyber-gray/20 border border-cyber-volt/30 px-6 py-3 rounded-lg">
            <Database className="w-6 h-6 text-cyber-volt animate-pulse" />
            <span className="text-cyber-volt animate-flicker font-mono">
              &gt; More projects available on GitHub_
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
