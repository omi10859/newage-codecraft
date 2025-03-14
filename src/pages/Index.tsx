import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Rocket, Server, Shield, ArrowRight, Infinity, Diamond, Star, Quote } from "lucide-react";
import FuturisticBackground from "@/components/FuturisticBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <FuturisticBackground />

      {/* Navigation */}
      <nav className="fixed w-full bg-black/20 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">NewAge CodeCraft</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block animate-fade-in">
            <span className="px-4 py-1.5 text-sm font-medium bg-blue-950/50 text-blue-300 rounded-full border border-blue-800/50 backdrop-blur-sm">
              Innovation Meets Excellence
            </span>
          </div>
          <h1 className="mt-8 text-6xl md:text-7xl font-bold text-white tracking-tight animate-fade-up">
            We Write Code That <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Matters</span>
          </h1>
          <p className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto animate-fade-up">
            New age developers crafting scalable solutions for tomorrow's challenges. We turn your vision into reality with clean, efficient code.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-up">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group z-10">
              Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 z-10">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500/50 transition-colors group">
              <Code className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3 text-white">Custom Development</h3>
              <p className="text-gray-400">Tailored solutions built with cutting-edge technology</p>
            </Card>
            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500/50 transition-colors group">
              <Infinity className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3 text-white">Scalable Solutions</h3>
              <p className="text-gray-400">Architecture that grows with your business</p>
            </Card>
            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500/50 transition-colors group">
              <Server className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3 text-white">Cloud Services</h3>
              <p className="text-gray-400">Modern cloud infrastructure and deployment</p>
            </Card>
            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500/50 transition-colors group">
              <Diamond className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3 text-white">Security First</h3>
              <p className="text-gray-400">Protected and compliant solutions</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500/50 transition-all group">
              <div className="h-48 mb-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform">
                <Code className="w-16 h-16 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">E-Commerce Platform</h3>
              <p className="text-gray-400 mb-4">Built a scalable e-commerce solution with real-time inventory management</p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">React</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Node.js</span>
              </div>
            </Card>
            <Card className="p-6 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500/50 transition-all group">
              <div className="h-48 mb-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform">
                <Shield className="w-16 h-16 text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">FinTech Security</h3>
              <p className="text-gray-400 mb-4">Implemented robust security systems for financial transactions</p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">TypeScript</span>
                <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">AWS</span>
              </div>
            </Card>
            <Card className="p-6 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500/50 transition-all group">
              <div className="h-48 mb-4 rounded-lg bg-gradient-to-br from-pink-500/20 to-red-500/20 flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform">
                <Rocket className="w-16 h-16 text-pink-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">AI Integration</h3>
              <p className="text-gray-400 mb-4">Developed smart automation solutions using cutting-edge AI</p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-pink-500/20 text-pink-300">Python</span>
                <span className="text-xs px-2 py-1 rounded-full bg-pink-500/20 text-pink-300">TensorFlow</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section id="testimonials" className="py-24 px-6 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500/50 transition-all">
              <Quote className="w-10 h-10 text-blue-400 mb-6" />
              <p className="text-gray-300 mb-6">"NewAge CodeCraft transformed our business with their innovative solutions. Their expertise in scalable architecture is unmatched."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                <div>
                  <h4 className="text-white font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-400 text-sm">CEO, TechVision</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500/50 transition-all">
              <Quote className="w-10 h-10 text-purple-400 mb-6" />
              <p className="text-gray-300 mb-6">"The team's attention to detail and commitment to excellence made our project a huge success. Highly recommended!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                <div>
                  <h4 className="text-white font-semibold">Michael Chen</h4>
                  <p className="text-gray-400 text-sm">CTO, InnovateX</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500/50 transition-all">
              <Quote className="w-10 h-10 text-pink-400 mb-6" />
              <p className="text-gray-300 mb-6">"Working with NewAge CodeCraft was a game-changer. They delivered beyond our expectations and on time."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-red-500" />
                <div>
                  <h4 className="text-white font-semibold">Emily Davis</h4>
                  <p className="text-gray-400 text-sm">Product Lead, FutureFlow</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto relative">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all">
              <div className="text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="p-8 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all">
              <div className="text-5xl font-bold text-white mb-2">99%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="p-8 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all">
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-gray-400">Ready to start your next project? We'd love to hear from you.</p>
          </div>
          <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border-gray-800">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-white"></textarea>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer - Updated to be seamless */}
      <footer className="py-12 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">NewAge CodeCraft</h3>
              <p className="text-gray-400">Building tomorrow's solutions today with innovative technology and expert craftsmanship.</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a>
                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <div className="space-y-2">
                <p className="text-gray-400">info@newagecodecraft.com</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
                <p className="text-gray-400">123 Tech Plaza, Innovation District</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500">&copy; {new Date().getFullYear()} NewAge CodeCraft. All rights reserved.</div>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Terms of Service</a>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
