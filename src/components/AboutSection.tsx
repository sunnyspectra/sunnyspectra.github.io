import React from 'react';
import { User, Shield, Code, Database, Lock, Terminal } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6"> {/* remove animate-glitch */}
            <span className="text-cyber-chateau">ABOUT.TXT</span> {/* remove animate-flicker */}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-volt via-cyber-chateau to-cyber-volt mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="border border-cyber-volt/30 bg-cyber-gray/20 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-cyber-volt mr-2 animate-flicker" />
                <h3 className="text-xl font-semibold text-cyber-chateau">About Me</h3>
              </div>
              <p className="text-cyber-volt/80 leading-relaxed animate-flicker">
                Hi! My name is Sunheng, but I am also known as Sunny to some people. I just graduated recently with a Bachelor's Degree 
                in computer science at Cal State LA. I have a passion for cybersecurity and am looking for a career in this specific branch.
                I am currently in the process of earning certificates as well as coding. Feel free to contact me!
              </p>
            </div>

            <div className="border border-cyber-cobalt/30 bg-cyber-gray/20 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-cyber-volt mr-2 animate-pulse" />
                <h3 className="text-xl font-semibold text-cyber-chateau">Experience</h3>
              </div>
              <p className="text-cyber-volt/80 leading-relaxed animate-flicker">
                My experience has ranged in various branches of computer science from my time as
                a student. This varies from doing work in virtual reality, data science, and robotics.
                My most promiment experience was being a student researcher from the summer of 2024 to late
                spring 2025, working in the intersection of virtual reality and drug discovery under Dr. Negin 
                Forouzesh.
                
              </p>
            </div>

            <div className="border border-cyber-amethyst/30 bg-cyber-gray/20 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-cyber-volt mr-2 animate-pulse" />
                <h3 className="text-xl font-semibold text-cyber-chateau">Development Skills</h3>
              </div>
              <p className="text-cyber-volt/80 leading-relaxed animate-flicker">
                I am proficient in the programming languages Python, Java, and C++.
                Additionally, I have familiarity with VSCode, PyCharm, CLion, IntelliJ, Eclipse,
                Git, and web development. Robotics is my speciality, and I have coded with
                Arduinos.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="border border-cyber-volt bg-cyber-gray/10 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyber-volt via-cyber-cobalt to-cyber-amethyst p-1 animate-pulse-glow">
                  <div className="w-full h-full rounded-full bg-cyber-black flex items-center justify-center">
                    <Terminal className="w-16 h-16 text-cyber-volt animate-flicker" />
                      <img
                        src="/lovable-uploads/a9955dff-d3d4-4c32-83e8-bf971951b76c.png"
                        alt="Sunheng Profile"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.log("Image failed to load, using fallback"); 
                          e.currentTarget.src ='/placeholder.svg'
                        }}
                      />
                    
                  </div>
                </div>
              </div>

              {/*<div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 border border-cyber-volt/20 rounded-lg">
                  <Database className="w-8 h-8 text-cyber-volt mx-auto mb-2 animate-pulse" />
                  <h4 className="font-semibold text-cyber-volt animate-flicker">Data Security</h4>
                  <p className="text-sm text-cyber-volt/60">Encryption & Privacy</p>
                </div>
                <div className="p-4 border border-cyber-cobalt/20 rounded-lg">
                  <Lock className="w-8 h-8 text-cyber-cobalt mx-auto mb-2 animate-pulse" />
                  <h4 className="font-semibold text-cyber-cobalt animate-flicker">Access Control</h4>
                  <p className="text-sm text-cyber-cobalt/60">Authentication</p>
                </div>
                <div className="p-4 border border-cyber-amethyst/20 rounded-lg">
                  <Shield className="w-8 h-8 text-cyber-amethyst mx-auto mb-2 animate-pulse" />
                  <h4 className="font-semibold text-cyber-amethyst animate-flicker">Threat Analysis</h4>
                  <p className="text-sm text-cyber-amethyst/60">Risk Assessment</p>
                </div>
                <div className="p-4 border border-cyber-volt/20 rounded-lg">
                  <Terminal className="w-8 h-8 text-cyber-volt mx-auto mb-2 animate-pulse" />
                  <h4 className="font-semibold text-cyber-volt animate-flicker">Pentesting</h4>
                  <p className="text-sm text-cyber-volt/60">Vulnerability Discovery</p>
                  
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
