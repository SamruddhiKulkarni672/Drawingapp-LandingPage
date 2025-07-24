// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Play, Brush, Palette, Layers, Download, Share2, Sparkles } from "lucide-react";

// const HowToUse = () => {
//   const steps = [
//     {
//       step: 1,
//       title: "Choose Your Brush",
//       description: "Select from our collection of professional brushes - pencil, pen, watercolor, and more. Adjust size and opacity to match your vision.",
//       icon: Brush,
//       color: "text-primary"
//     },
//     {
//       step: 2,
//       title: "Pick Perfect Colors",
//       description: "Use our advanced color picker with HSB controls. Save favorite colors to your palette for easy access during your creative process.",
//       icon: Palette,
//       color: "text-accent"
//     },
//     {
//       step: 3,
//       title: "Work with Layers",
//       description: "Create complex artwork using multiple layers. Blend modes, opacity controls, and layer management make professional art achievable.",
//       icon: Layers,
//       color: "text-creative"
//     },
//     {
//       step: 4,
//       title: "Generate AI SVGs",
//       description: "Use our AI-powered SVG generation to create stunning vector artwork. Just describe what you want and watch the magic happen.",
//       icon: Sparkles,
//       color: "text-accent",
//       special: true
//     },
//     {
//       step: 5,
//       title: "Auto Record Process",
//       description: "Your drawing process is automatically recorded as a time-lapse video. Perfect for sharing tutorials or showcasing your technique.",
//       icon: Play,
//       color: "text-creative",
//       special: true
//     },
//     {
//       step: 6,
//       title: "Export & Share",
//       description: "Export your masterpiece in multiple formats (PNG, JPG, SVG) or share directly to social media platforms with one click.",
//       icon: Share2,
//       color: "text-primary"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       {/* Hero Section */}
//       <section className="py-16 bg-gradient-hero">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//             How to Use
//             <span className="bg-gradient-creative bg-clip-text text-transparent"> ArtCanvas</span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
//             Master digital art creation with our comprehensive guide. From basic sketches to professional illustrations, 
//             learn how to unlock the full potential of our drawing webapp.
//           </p>
//           <Button size="lg" className="bg-gradient-creative hover:shadow-glow">
//             <Play className="w-5 h-5 mr-2" />
//             Watch Tutorial Video
//           </Button>
//         </div>
//       </section>

//       {/* Steps Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//               Simple Steps to
//               <span className="bg-gradient-creative bg-clip-text text-transparent"> Digital Mastery</span>
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Follow these easy steps to create stunning digital artwork like a professional artist.
//             </p>
//           </div>

//           <div className="grid gap-8 max-w-4xl mx-auto">
//             {steps.map((step, index) => (
//               <Card 
//                 key={step.step} 
//                 className={`group border-0 bg-gradient-card hover:shadow-neon transition-all duration-500 ${
//                   index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//                 } flex flex-col md:flex-row items-center overflow-hidden`}
//               >
//                 <CardContent className="p-8 flex-1">
//                   <div className="flex items-center mb-4">
//                     <div className={`w-12 h-12 rounded-full ${
//                       step.special ? 'bg-gradient-creative' : 'bg-muted'
//                     } flex items-center justify-center mr-4 text-lg font-bold ${
//                       step.special ? 'text-white shadow-glow' : 'text-foreground'
//                     }`}>
//                       {step.step}
//                     </div>
//                     <div className={`w-10 h-10 rounded-lg ${
//                       step.special ? 'bg-gradient-creative' : 'bg-muted'
//                     } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
//                       <step.icon className={`w-5 h-5 ${step.special ? 'text-white' : step.color}`} />
//                     </div>
//                   </div>
                  
//                   <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
//                     {step.title}
//                     {step.special && (
//                       <span className="ml-2 text-xs bg-gradient-creative text-white px-2 py-1 rounded-full">
//                         AI POWERED
//                       </span>
//                     )}
//                   </h3>
                  
//                   <p className="text-muted-foreground leading-relaxed">
//                     {step.description}
//                   </p>
//                 </CardContent>

//                 <div className="w-full md:w-48 h-32 md:h-40 bg-muted/20 flex items-center justify-center relative overflow-hidden">
//                   <div className={`w-16 h-16 ${
//                     step.special ? 'bg-gradient-creative animate-pulse' : 'bg-muted'
//                   } rounded-2xl flex items-center justify-center`}>
//                     <step.icon className={`w-8 h-8 ${step.special ? 'text-white' : step.color}`} />
//                   </div>
                  
//                   {step.special && (
//                     <div className="absolute inset-0 bg-gradient-creative/10">
//                       <div className="absolute top-2 left-2 w-2 h-2 bg-accent rounded-full animate-ping"></div>
//                       <div className="absolute bottom-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse delay-300"></div>
//                       <div className="absolute top-8 right-8 w-1 h-1 bg-creative rounded-full animate-bounce delay-500"></div>
//                     </div>
//                   )}
//                 </div>
//               </Card>
//             ))}
//           </div>

//           {/* CTA Section */}
//           <div className="text-center mt-16">
//             <Card className="max-w-2xl mx-auto border-0 bg-gradient-creative p-8">
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Ready to Start Creating?
//               </h3>
//               <p className="text-white/80 mb-6">
//                 Jump into our drawing webapp and bring your artistic vision to life with professional tools and AI assistance.
//               </p>
//               <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
//                 Launch Drawing App
//               </Button>
//             </Card>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default HowToUse;

import React from 'react'

function HowToUse() {
  return (
    <div>
      
    </div>
  )
}

export default HowToUse
