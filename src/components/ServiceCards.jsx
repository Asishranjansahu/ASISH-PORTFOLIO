import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, ShoppingBag, LayoutDashboard, Radio, Database, Smartphone } from 'lucide-react';

const ServiceCards = () => {
  const services = [
    {
      title: "News & Media Portals",
      desc: "High-traffic content platforms with live updates, CMS integration, and ad-tech support.",
      icon: Newspaper,
      color: "red",
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "E-Commerce Stores",
      desc: "Full-stack shopping experiences with secure payments, inventory management, and analytics.",
      icon: ShoppingBag,
      color: "purple",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "SaaS Applications",
      desc: "Scalable B2B/B2C dashboards with complex data visualization and user management.",
      icon: LayoutDashboard,
      color: "cyan",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "IoT Solutions",
      desc: "Real-time device monitoring, control systems, and hardware-software integration.",
      icon: Radio,
      color: "emerald",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      title: "Backend Infrastructure",
      desc: "Robust API development, database architecture, and cloud deployment (AWS/Firebase).",
      icon: Database,
      color: "yellow",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      title: "Mobile Apps",
      desc: "Cross-platform mobile applications using React Native or Flutter for iOS and Android.",
      icon: Smartphone,
      color: "indigo",
      gradient: "from-indigo-500 to-violet-500"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
            Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Coding</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            I don't just write code; I build complete digital businesses. Here's what else I can create for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-white/20 transition-colors"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`}></div>
              
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <service.icon className={`w-7 h-7 text-${service.color}-400`} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
