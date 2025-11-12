// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import Link from 'next/link';

// export default function HeroCycle() {
//   const messages = [
//     {
//       main: "Work Smarter with Your Own AI Team",
//       tagline: "Designed for your business. Powered by Value(ode)."
//     },
//     {
//       main: "Turn Daily Chaos into Smart Growth", 
//       tagline: "Automate emails, posts & follow-ups — effortlessly."
//     },
//     {
//       main: "Build Your AI Team in Hours",
//       tagline: "Automate. Grow. Outperform — Without Hiring."
//     }
//   ];
  
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % messages.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, [messages.length]);

//   return (
//     <section className="bg-gradient-to-br from-[#F5F0ED] to-[#f0e6df] py-16 md:py-24">
//       <div className="container mx-auto px-4 text-center">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 1.2 }}
//           >
//             {/* Main Heading */}
//             <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#8B7355] to-[#D7A86E] bg-clip-text text-transparent leading-tight">
//               {messages[index].main}
//             </h1>
            
//             {/* Tagline */}
//             <p className="text-lg md:text-xl lg:text-2xl text-[#5D4037] max-w-3xl mx-auto mb-8 leading-relaxed">
//               {messages[index].tagline}
//             </p>
//           </motion.div>
//         </AnimatePresence>

//         {/* Static CTA Button */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-16">
//           <Link 
//             href="/blueprint"
//             className="bg-[#8B7355] text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4 inline-block rounded-md hover:bg-[#6D4C41] transition-colors duration-300 font-semibold"
//           >
//             Generate Your free Blueprint ›
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from 'next/link';

export default function HeroCycle() {
  const messages = [
    {
      main: "Work Smarter with Your Own AI Team",
      tagline: "Designed for your business. Powered by Value(ode)."
    },
    {
      main: "Turn Daily Chaos into Smart Growth", 
      tagline: "Automate emails, posts & follow-ups — effortlessly."
    },
    {
      main: "Build Your AI Team in Minutes",
      tagline: "Automate. Grow. Outperform — Without Hiring."
    }
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <section 
      className="bg-gradient-to-br from-[#F5F0ED] to-[#f0e6df] py-16 md:py-10 relative bg-cover bg-center bg-no-repeat"
      // style={{
      //   // 🚨 Change 'BG_Hero.png' to your new file name:
      //   backgroundImage: "url('/images/Hero_img.png')", 
      //   backgroundBlendMode: "overlay"
      // }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-white/20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.2 }}
          >
            {/* Main Heading */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#8B7355] to-[#D7A86E] bg-clip-text text-transparent leading-tight">
              {messages[index].main}
            </h1>
            
            {/* Tagline */}
            <p className="text-lg md:text-xl lg:text-2xl text-[#5D4037] max-w-3xl mx-auto mb-8 leading-relaxed">
              {messages[index].tagline}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Static CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-16">
          <Link 
            href="/blueprint"
            className="bg-[#8B7355] text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4 inline-block rounded-md hover:bg-[#6D4C41] transition-colors duration-300 font-semibold"
          >
            Generate Your free Blueprint ›
          </Link>
        </div>
      </div>
    </section>
  );
}
