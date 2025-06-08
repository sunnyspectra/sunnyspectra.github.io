
import React from 'react';
import { Shield, Code, Database, Network, Lock, Terminal } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Technology & Tools",
      icon: Shield,
      color: "chateau",
      skills: [
        { name: "GitHub", level: 90 },
        { name: "VSCode", level: 90 },
        { name: "Eclipse IDE", level: 92 },
        { name: "Microsoft Office", level: 95 },
        { name: "Git & Terminal", level: 88 }
      ]
    },
    {
      title: "Programming",
      icon: Code,
      color: "chateau",
      skills: [
        { name: "Java", level: 92 },
        { name: "Python", level: 88 },
        { name: "C++", level: 90 },
        { name: "SQL", level: 92 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Frameworks",
      icon: Database,
      color: "chateau",
      skills: [
        { name: "React (Lucide)", level: 80 },
        { name: "Node.js", level: 80 },
        { name: "Django", level: 82 },
        { name: "Bootstrap", level: 80 },
        { name: "Tailwind CSS", level: 80 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'volt':
        return {
          text: 'text-cyber-volt',
          border: 'border-cyber-volt',
          bg: 'bg-cyber-volt'
        };
      case 'cobalt':
        return {
          text: 'text-cyber-cobalt',
          border: 'border-cyber-cobalt',
          bg: 'bg-cyber-cobalt'
        };
      case 'amethyst':
        return {
          text: 'text-cyber-amethyst',
          border: 'border-cyber-amethyst',
          bg: 'bg-cyber-amethyst'
        };
      case 'chateau':
        return{
          text: 'text-cyber-chateau',
          border: 'border-cyber-volt',
          bg: 'bg-cyber-cobalt'
        }
      default:
        return {
          text: 'text-cyber-volt',
          border: 'border-cyber-volt',
          bg: 'bg-cyber-volt'
        };
    }
  };

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6"> {/*remove animate-glitch*/}
            <span className="text-cyber-chateau">SKILLS.DB</span> {/*remove animate-flicker*/}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-volt via-cyber-chateau to-cyber-volt mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;
            
            return (
              <div key={index} className={`border ${colors.border}/30 bg-cyber-gray/20 p-6 rounded-lg backdrop-blur-sm hover:border-${category.color}/60 transition-all duration-300`}>
                <div className="flex items-center mb-6">
                  <Icon className={`w-8 h-8 ${colors.text} mr-3 animate-pulse`} />
                  <h3 className={`text-xl font-semibold ${colors.text} animate-flicker`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`${colors.text}/80 animate-flicker`}>{skill.name}</span>
                        <span className={`${colors.text} text-sm font-mono animate-flicker`}>{skill.level}%</span>
                      </div>
                      <div className={`w-full bg-cyber-gray h-2 rounded-full border ${colors.border}/20`}>
                        <div 
                          className={`${colors.bg} h-full rounded-full transition-all duration-1000 ease-out`} //remove animate-pulse-glow
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-cyber-gray/20 border border-cyber-volt/30 px-6 py-3 rounded-lg">
            <Terminal className="w-6 h-6 text-cyber-chateau animate-pulse" />
            <span className="text-cyber-chateau animate-flicker font-mono">
              &gt; Constantly learning and adapting to new technologies_
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
