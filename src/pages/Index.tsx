
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Rocket, Server, Shield, ArrowRight, Infinity, Diamond } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/20 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">NewAge CodeCraft</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,97,238,0.15),transparent_50%)]" />
        <div className="container mx-auto text-center relative">
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
              Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-black/20 backdrop-blur-sm">
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

      {/* Stats Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,97,238,0.1),transparent_50%)]" />
        <div className="container mx-auto relative">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800">
              <div className="text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="p-8 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800">
              <div className="text-5xl font-bold text-white mb-2">99%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="p-8 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800">
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-black/20 backdrop-blur-sm">
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

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">NewAge CodeCraft</h3>
            <p className="mb-6 text-gray-400">Building tomorrow's solutions today</p>
            <div className="text-sm text-gray-500">&copy; {new Date().getFullYear()} NewAge CodeCraft. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
