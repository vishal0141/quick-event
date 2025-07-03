// import React from 'react';
// import { MessageCircle, CheckCircle, X, Calendar, MapPin, Users, Settings } from 'lucide-react';

// const EventTechLanding = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Header Section */}
//       <div className="relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 opacity-5"></div>
        
//         {/* Main Content Container */}
//         <div className="relative px-6 py-16 max-w-7xl mx-auto">
//           {/* Title Section */}
//           <div className="text-center mb-16">
//             <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
//               Your Complete Event Tech
//             </h1>
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-8">
//               Solution — Everything You Need
//             </h2>
//           </div>

//           {/* Main Content Grid */}
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Left Content */}
//             <div className="relative">
//               {/* Curved Background */}
//               <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl transform -skew-y-2 shadow-2xl"></div>
              
//               <div className="relative z-10 p-12 text-white">
//                 <h3 className="text-3xl font-bold mb-6 leading-tight">
//                   Tailored Event Technology Built Around Organizers for Seamless Execution
//                 </h3>
//                 <p className="text-lg leading-relaxed opacity-90">
//                   We provide end-to-end event technology that supports every stage—from planning to post-event marketing and 
//                   networking. Whether it's a corporate gathering or industry expo, our all-in-one platform empowers you to host any 
//                   type of event with ease and impact. Experience unmatched reliability and performance.
//                 </p>
//               </div>
//             </div>

//             {/* Right Illustration */}
//             <div className="relative">
//               {/* Main Character */}
//               <div className="relative z-10 flex justify-center">
//                 <div className="relative">
//                   {/* Person Figure */}
//                   <div className="w-32 h-48 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full relative mx-auto">
//                     {/* Head */}
//                     <div className="w-16 h-16 bg-gradient-to-b from-amber-200 to-amber-300 rounded-full mx-auto mb-4 relative">
//                       {/* Hair */}
//                       <div className="w-12 h-8 bg-amber-800 rounded-full absolute -top-2 left-2"></div>
//                       {/* Eyes */}
//                       <div className="flex space-x-2 absolute top-6 left-4">
//                         <div className="w-1 h-1 bg-black rounded-full"></div>
//                         <div className="w-1 h-1 bg-black rounded-full"></div>
//                       </div>
//                     </div>
                    
//                     {/* Body */}
//                     <div className="w-20 h-32 bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg mx-auto relative">
//                       {/* Tie */}
//                       <div className="w-3 h-12 bg-red-500 mx-auto"></div>
//                       {/* Arms */}
//                       <div className="absolute -left-6 top-8 w-12 h-4 bg-amber-300 rounded-full transform -rotate-12"></div>
//                       <div className="absolute -right-6 top-8 w-12 h-4 bg-amber-300 rounded-full transform rotate-12"></div>
//                     </div>
                    
//                     {/* Legs */}
//                     <div className="flex space-x-2 justify-center mt-2">
//                       <div className="w-6 h-16 bg-gray-600 rounded-lg"></div>
//                       <div className="w-6 h-16 bg-gray-600 rounded-lg"></div>
//                     </div>
                    
//                     {/* Shoes */}
//                     <div className="flex space-x-2 justify-center mt-1">
//                       <div className="w-8 h-4 bg-green-500 rounded-full"></div>
//                       <div className="w-8 h-4 bg-green-500 rounded-full"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating UI Elements */}
//               <div className="absolute inset-0 pointer-events-none">
//                 {/* Green circular flow */}
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-4 border-green-400 rounded-full opacity-60 animate-spin" style={{animationDuration: '20s'}}></div>
                
//                 {/* UI Cards */}
//                 <div className="absolute top-8 right-8 bg-white rounded-lg shadow-lg p-3 border-2 border-green-400 animate-bounce">
//                   <div className="flex items-center space-x-2">
//                     <CheckCircle className="w-5 h-5 text-green-500" />
//                     <div className="w-16 h-2 bg-green-200 rounded"></div>
//                   </div>
//                   <div className="w-20 h-1 bg-gray-200 rounded mt-2"></div>
//                 </div>

//                 <div className="absolute top-20 left-4 bg-white rounded-lg shadow-lg p-3 border-2 border-green-400 animate-pulse">
//                   <div className="flex items-center space-x-2">
//                     <X className="w-5 h-5 text-red-500" />
//                     <div className="w-12 h-2 bg-red-200 rounded"></div>
//                   </div>
//                   <div className="w-16 h-1 bg-gray-200 rounded mt-2"></div>
//                 </div>

//                 <div className="absolute bottom-20 right-4 bg-white rounded-lg shadow-lg p-3 border-2 border-green-400 animate-bounce" style={{animationDelay: '1s'}}>
//                   <div className="flex items-center space-x-2">
//                     <Calendar className="w-5 h-5 text-blue-500" />
//                     <div className="w-14 h-2 bg-blue-200 rounded"></div>
//                   </div>
//                   <div className="w-18 h-1 bg-gray-200 rounded mt-2"></div>
//                 </div>

//                 <div className="absolute bottom-8 left-8 bg-white rounded-lg shadow-lg p-3 border-2 border-green-400 animate-pulse" style={{animationDelay: '2s'}}>
//                   <div className="flex items-center space-x-2">
//                     <MapPin className="w-5 h-5 text-green-500" />
//                     <div className="w-10 h-2 bg-green-200 rounded"></div>
//                   </div>
//                 </div>

//                 <div className="absolute top-32 right-20 bg-white rounded-lg shadow-lg p-3 border-2 border-green-400 animate-bounce" style={{animationDelay: '0.5s'}}>
//                   <div className="flex items-center space-x-2">
//                     <Users className="w-5 h-5 text-purple-500" />
//                     <div className="w-8 h-2 bg-purple-200 rounded"></div>
//                   </div>
//                 </div>

//                 <div className="absolute bottom-32 right-16 bg-white rounded-lg shadow-lg p-3 border-2 border-green-400 animate-pulse" style={{animationDelay: '1.5s'}}>
//                   <div className="flex items-center space-x-2">
//                     <Settings className="w-5 h-5 text-orange-500" />
//                     <div className="w-6 h-2 bg-orange-200 rounded"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* WhatsApp Float Button */}
//       <div className="fixed bottom-8 right-8 z-50">
//         <button className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
//           <MessageCircle className="w-7 h-7 text-white" />
//         </button>
//       </div>

//       {/* Background Decorative Elements */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
//         <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
//         <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
//         <div className="absolute bottom-32 left-16 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
//       </div>
//     </div>
//   );
// };

// export default EventTechLanding;