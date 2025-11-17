// 'use client'
// import { useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";

// export default function Dashboard() {
//   const router = useRouter();
//   const [activeTab, setActiveTab] = useState("EMAIL");
//   const [activeEmailSubmenu, setActiveEmailSubmenu] = useState("Bulk Email");
//   const [sheetName, setSheetName] = useState("Sheet name here");
//   const [subject, setSubject] = useState("SUBJECT HERE");
//   const [prompt, setPrompt] = useState("PROMPT HERE");
//   const [llmOutput, setLlmOutput] = useState("LLM OUTPUT HERE");

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     router.push("/login");
//   };

//   const emailSubmenuItems = [
//     "Bulk Email",
//     "Reminders / Followup",
//     "Business proposals",
//     "News letter", 
//     "Send Invoice"
//   ];

//   const mainTabs = ["EMAIL", "WHATSAPP", "SOCIAL", "LEADS", "DASHBOARD", "RESEARCH"];

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-lg">
//         <div className="p-6 border-b border-gray-200">
//           <h1 className="text-xl font-bold text-gray-800">Email Dashboard</h1>
//         </div>

//         <nav className="p-4 space-y-2">
//           {mainTabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
//                 activeTab === tab
//                   ? "bg-[#A1887F] text-white"
//                   : "text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </nav>

//         {activeTab === "EMAIL" && (
//           <div className="px-4 py-2">
//             <div className="space-y-1">
//               {emailSubmenuItems.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => setActiveEmailSubmenu(item)}
//                   className={`w-full text-left px-4 py-2 rounded transition-colors ${
//                     activeEmailSubmenu === item
//                       ? "bg-gray-200 text-gray-900 font-medium"
//                       : "text-gray-600 hover:bg-gray-100"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
//           <button
//             onClick={handleLogout}
//             className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
//           >
//             LOGOUT
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         <header className="bg-white shadow-sm border-b border-gray-200 p-4">
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-semibold text-gray-800">{activeTab}</h2>
//             <div className="flex items-center space-x-4">
//               <span className="text-sm text-gray-600">Welcome back!</span>
//             </div>
//           </div>
//         </header>

//         <div className="flex-1 p-6 space-y-6">
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               DATA SHEET
//             </label>
//             <input
//               type="text"
//               value={sheetName}
//               onChange={(e) => setSheetName(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A1887F] focus:border-transparent"
//             />
//           </div>

//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               SUBJECT
//             </label>
//             <input
//               type="text"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A1887F] focus:border-transparent"
//             />
//           </div>

//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               PROMPT
//             </label>
//             <textarea
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               rows={4}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A1887F] focus:border-transparent resize-vertical"
//             />
//           </div>

//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               LLM OUTPUT
//             </label>
//             <div className="border border-gray-300 rounded-md p-4 min-h-[200px] bg-gray-50">
//               <pre className="whitespace-pre-wrap font-sans text-gray-700">
//                 {llmOutput}
//               </pre>
//             </div>
//           </div>

//           <div className="flex space-x-4">
//             <button className="px-6 py-3 bg-[#A1887F] text-white rounded-lg hover:bg-[#8B7355] transition-colors font-medium">
//               Generate Email
//             </button>
//             <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium">
//               Send Test Email
//             </button>
//             <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
//               Send Bulk Emails
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client'
// import { useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";

// export default function Dashboard() {
//   const router = useRouter();
//   const [activeTab, setActiveTab] = useState("EMAIL");
//   const [activeEmailSubmenu, setActiveEmailSubmenu] = useState("Bulk Email");
//   const [sheetName, setSheetName] = useState("Sheet name here");
//   const [subject, setSubject] = useState("SUBJECT HERE");
//   const [prompt, setPrompt] = useState("PROMPT HERE");
//   const [llmOutput, setLlmOutput] = useState("LLM OUTPUT HERE");

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     router.push("/login");
//   };

//   const emailSubmenuItems = [
//     "Bulk Email",
//     "Reminders / Followup",
//     "Business proposals",
//     "News letter", 
//     "Send Invoice"
//   ];

//   const mainTabs = [
//     { name: "EMAIL", icon: "✉️" },
//     { name: "WHATSAPP", icon: "📱" },
//     { name: "SOCIAL", icon: "🔗" },
//     { name: "LEADS", icon: "💎" },
//     { name: "DASHBOARD", icon: "📊" },
//     { name: "RESEARCH", icon: "📄" }
//   ];

//   // SVG Icons with theme colors
//   const EmailIcon = () => (
//     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
//       <path d="M12 15L20 22L28 15M12 15V25H28V15M12 15H28" stroke="currentColor" strokeWidth="2" fill="none"/>
//     </svg>
//   );

//   const WhatsAppIcon = () => (
//     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
//       <path d="M15 25C15 25 16 24 17 23C16 22.5 15 21 15 19C15 16 17 14 20 14C23 14 25 16 25 19C25 22 23 24 20 24C19 24 18 23.5 17.5 23L15 25Z" stroke="currentColor" strokeWidth="2" fill="none"/>
//     </svg>
//   );

//   const SocialIcon = () => (
//     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
//       <path d="M16 20L24 14M16 20L24 26M16 20C16 20 14 20 12 20M24 14C24 14 26 14 28 14M24 26C24 26 26 26 28 26" stroke="currentColor" strokeWidth="2"/>
//     </svg>
//   );

//   const LeadsIcon = () => (
//     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
//       <path d="M20 12L23 18H17L20 12ZM20 12V18M17 22L20 28L23 22M20 22V28M13 20H27" stroke="currentColor" strokeWidth="2"/>
//     </svg>
//   );

//   const DashboardIcon = () => (
//     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
//       <path d="M14 24V20M20 24V16M26 24V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     </svg>
//   );

//   const ResearchIcon = () => (
//     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
//       <path d="M15 14H25M15 18H25M15 22H22M15 26H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     </svg>
//   );

//   const LogoutIcon = () => (
//     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="20" cy="20" r="18" fill="#5D4037" stroke="#3E2723" strokeWidth="2"/>
//       <path d="M18 14V12H26V28H18V26M14 20H24M21 17L24 20L21 23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   );

//   const tabIcons = {
//     "EMAIL": <EmailIcon />,
//     "WHATSAPP": <WhatsAppIcon />,
//     "SOCIAL": <SocialIcon />,
//     "LEADS": <LeadsIcon />,
//     "DASHBOARD": <DashboardIcon />,
//     "RESEARCH": <ResearchIcon />
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gradient-to-br from-[#F5F0ED] to-[#f0e6df]">
//       {/* Top Navigation Bar */}
//       <header className="bg-white border-b-2 border-[#D7CCC8] shadow-sm">
//         <div className="flex items-center justify-between px-6 py-2">
//           {/* Tab Navigation */}
//           <div className="flex items-center space-x-1">
//             {mainTabs.map((tab) => (
//               <button
//                 key={tab.name}
//                 onClick={() => setActiveTab(tab.name)}
//                 className={`flex flex-col items-center justify-center px-6 py-2 rounded-t-lg border-2 transition-all ${
//                   activeTab === tab.name
//                     ? "bg-white border-[#8B7355] border-b-0 -mb-1 text-[#3E2723]"
//                     : "bg-[#F5F0ED] border-[#D7CCC8] hover:bg-[#f0e6df] text-[#5D4037]"
//                 }`}
//               >
//                 <div className={activeTab === tab.name ? "text-[#8B7355]" : "text-[#A1887F]"}>
//                   {tabIcons[tab.name]}
//                 </div>
//                 <span className={`text-[10px] font-bold mt-1 ${
//                   activeTab === tab.name ? "text-[#3E2723]" : "text-[#5D4037]"
//                 }`}>
//                   {tab.name}
//                 </span>
//                 {activeTab === tab.name && (
//                   <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#D7A86E] transform rotate-45 translate-y-1/2" style={{clipPath: "polygon(0 0, 100% 0, 100% 100%)"}}></div>
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* Logout Button */}
//           <button
//             onClick={handleLogout}
//             className="flex flex-col items-center justify-center px-6 py-2 hover:opacity-80 transition-opacity"
//           >
//             <LogoutIcon />
//             <span className="text-[10px] font-bold text-[#3E2723] mt-1">LOGOUT</span>
//           </button>
//         </div>
//       </header>

//       {/* Main Content Area */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* Left Sidebar - Email Submenu */}
//         <aside className="bg-transparent p-6 relative">
//           <div className="space-y-3 pr-6">
//             {emailSubmenuItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => setActiveEmailSubmenu(item)}
//                 className={`block text-left text-sm transition-colors w-full px-3 py-2 rounded-lg ${
//                   activeEmailSubmenu === item
//                     ? "font-bold text-[#3E2723] bg-white shadow-sm border border-[#D7CCC8]"
//                     : "text-[#5D4037] hover:text-[#3E2723] hover:bg-white/50"
//                 }`}
//               >
//                 <span className="mr-2">-</span>
//                 {item}
//               </button>
//             ))}
//           </div>
          
//           {/* Dotted vertical separator */}
//           <div className="absolute right-0 top-0 bottom-0 w-px border-r-2 border-dotted border-[#D7CCC8]"></div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 overflow-y-auto px-8 py-6">
//           <div className="space-y-6 max-w-5xl">
//             {/* Data Sheet Label */}
//             <div className="text-sm font-medium text-[#5D4037] bg-white/50 px-4 py-2 rounded-lg inline-block">
//               DATA SHEET : <span className="text-[#3E2723] font-bold">{sheetName}</span>
//             </div>

//             {/* Subject Input */}
//             <div className="bg-white rounded-lg border-2 border-[#D7CCC8] shadow-sm hover:border-[#A1887F] transition-colors">
//               <input
//                 type="text"
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//                 className="w-full px-4 py-3 text-[#3E2723] bg-transparent focus:outline-none font-medium rounded-lg placeholder-[#A1887F]"
//                 placeholder="SUBJECT HERE"
//               />
//             </div>

//             {/* Prompt Input with Arrow */}
//             <div className="bg-white rounded-lg border-2 border-[#D7CCC8] shadow-sm hover:border-[#A1887F] transition-colors relative">
//               <textarea
//                 value={prompt}
//                 onChange={(e) => setPrompt(e.target.value)}
//                 rows={3}
//                 className="w-full px-4 py-3 text-[#3E2723] bg-transparent focus:outline-none resize-none font-medium rounded-lg pr-16 placeholder-[#A1887F]"
//                 placeholder="PROMPT HERE"
//               />
//               <button className="absolute bottom-3 right-3 w-10 h-10 flex items-center justify-center hover:bg-[#F5F0ED] rounded-lg transition-colors group">
//                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M24 16H8M8 16L14 10M8 16L14 22" stroke="#8B7355" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#5D4037]"/>
//                 </svg>
//               </button>
//             </div>

//             {/* LLM Output Box */}
//             <div className="bg-white rounded-lg border-2 border-[#D7CCC8] shadow-sm hover:border-[#A1887F] transition-colors relative" style={{ minHeight: "420px" }}>
//               <div className="px-4 py-3 text-[#5D4037] whitespace-pre-wrap font-medium min-h-[420px]">
//                 {llmOutput}
//               </div>
              
//               {/* Bottom Action Icons */}
//               <div className="absolute bottom-4 right-4 flex space-x-3">
//                 <button className="w-12 h-12 flex items-center justify-center hover:bg-[#F5F0ED] rounded-lg transition-colors group" title="Attach File">
//                   <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M20 10L10 20C8.5 21.5 8.5 24 10 25.5C11.5 27 14 27 15.5 25.5L26 15C27 14 27 12.5 26 11.5C25 10.5 23.5 10.5 22.5 11.5L13 21" stroke="#8B7355" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#5D4037]"/>
//                   </svg>
//                 </button>
//                 <button className="w-12 h-12 flex items-center justify-center hover:bg-[#F5F0ED] rounded-lg transition-colors group" title="Send Email">
//                   <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M6 10L18 18L30 10M6 10V26H30V10M6 10H30" stroke="#8B7355" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#5D4037]"/>
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             {/* <div className="flex space-x-4 pt-4">
//               <button className="px-8 py-3 bg-[#8B7355] text-white rounded-lg hover:bg-[#5D4037] transition-colors font-medium shadow-sm">
//                 Generate Email
//               </button>
//               <button className="px-8 py-3 bg-[#A1887F] text-white rounded-lg hover:bg-[#8B7355] transition-colors font-medium shadow-sm">
//                 Send Test Email
//               </button>
//               <button className="px-8 py-3 bg-[#D7A86E] text-[#3E2723] rounded-lg hover:bg-[#c9975a] transition-colors font-medium shadow-sm">
//                 Send Bulk Emails
//               </button>
//             </div> */}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

// -----------------------------------------------------
// SVG ICON COMPONENTS WITH YOUR THEME COLORS
// -----------------------------------------------------

const EmailIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 15L20 22L28 15M12 15V25H28V15M12 15H28"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
    <path
      d="M15 25C15 25 16 24 17 23C16 22.5 15 21 15 19C15 16 17 14 20 14C23 14 25 16 25 19C25 22 23 24 20 24C19 24 18 23.5 17.5 23L15 25Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const SocialIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
    <path
      d="M16 20L24 14M16 20L24 26M16 20C16 20 14 20 12 20M24 14C24 14 26 14 28 14M24 26C24 26 26 26 28 26"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const LeadsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
    <path
      d="M20 12L23 18H17L20 12ZM20 12V18M17 22L20 28L23 22M20 22V28M13 20H27"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const DashboardIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
    <path
      d="M14 24V20M20 24V16M26 24V18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ResearchIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
    <path
      d="M15 14H25M15 18H25M15 22H22M15 26H20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const LogoutIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" fill="#5D4037" stroke="#3E2723" strokeWidth="2" />
    <path
      d="M18 14V12H26V28H18V26M14 20H24M21 17L24 20L21 23"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// -----------------------------------------------------
// MAIN COMPONENT
// -----------------------------------------------------

export default function Dashboard() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("EMAIL");
  const [activeEmailSubmenu, setActiveEmailSubmenu] = useState("Bulk Email");
  const [sheetName, setSheetName] = useState("Sheet name here");
  const [subject, setSubject] = useState("SUBJECT HERE");
  const [prompt, setPrompt] = useState("PROMPT HERE");
  const [llmOutput, setLlmOutput] = useState("LLM OUTPUT HERE");

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  const emailSubmenuItems = [
    "Bulk Email",
    "Reminders / Followup",
    "Business proposals",
    "News letter",
    "Send Invoice",
  ];

  const mainTabs = [
    { name: "EMAIL", icon: <EmailIcon /> },
    { name: "WHATSAPP", icon: <WhatsAppIcon /> },
    { name: "SOCIAL", icon: <SocialIcon /> },
    { name: "LEADS", icon: <LeadsIcon /> },
    { name: "DASHBOARD", icon: <DashboardIcon /> },
    { name: "RESEARCH", icon: <ResearchIcon /> },
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-[#F5F0ED] to-[#f0e6df]">

      {/* ------------------ TOP NAVIGATION BAR ------------------ */}
      <header className="bg-white border-b-2 border-[#D7CCC8] shadow-sm">
        <div className="flex items-center justify-between px-6 py-2">

          {/* Tabs */}
          <div className="flex items-center space-x-1">
            {mainTabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`relative flex flex-col items-center justify-center px-6 py-2 rounded-t-lg border-2 transition-all ${
                  activeTab === tab.name
                    ? "bg-white border-[#8B7355] border-b-0 -mb-1 text-[#3E2723]"
                    : "bg-[#F5F0ED] border-[#D7CCC8] hover:bg-[#f0e6df] text-[#5D4037]"
                }`}
              >
                <div
                  className={
                    activeTab === tab.name ? "text-[#8B7355]" : "text-[#A1887F]"
                  }
                >
                  {tab.icon}
                </div>
                <span
                  className={`text-[10px] font-bold mt-1 ${
                    activeTab === tab.name ? "text-[#3E2723]" : "text-[#5D4037]"
                  }`}
                >
                  {tab.name}
                </span>

                {activeTab === tab.name && (
                  <div
                    className="absolute bottom-0 left-0 w-4 h-4 bg-[#D7A86E] transform rotate-45 translate-y-1/2"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                    }}
                  ></div>
                )}
              </button>
            ))}
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex flex-col items-center justify-center px-6 py-2 hover:opacity-80 transition-opacity"
          >
            <LogoutIcon />
            <span className="text-[10px] font-bold text-[#3E2723] mt-1">
              LOGOUT
            </span>
          </button>
        </div>
      </header>

      {/* ------------------ MAIN CONTENT AREA ------------------ */}
      <div className="flex flex-1 overflow-hidden">

        {/* Left Sidebar */}
        <aside className="bg-transparent p-6 relative">
          <div className="space-y-3 pr-6">
            {emailSubmenuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveEmailSubmenu(item)}
                className={`block text-left text-sm transition-colors w-full px-3 py-2 rounded-lg ${
                  activeEmailSubmenu === item
                    ? "font-bold text-[#3E2723] bg-white shadow-sm border border-[#D7CCC8]"
                    : "text-[#5D4037] hover:text-[#3E2723] hover:bg-white/50"
                }`}
              >
                <span className="mr-2">-</span>
                {item}
              </button>
            ))}
          </div>

          {/* dotted line */}
          <div className="absolute right-0 top-0 bottom-0 w-px border-r-2 border-dotted border-[#D7CCC8]"></div>
        </aside>

        {/* ---------------- MAIN PANEL ---------------- */}
        <main className="flex-1 overflow-y-auto px-8 py-6">
          <div className="space-y-6 max-w-5xl">

            {/* Data Sheet Label */}
            <div className="text-sm font-medium text-[#5D4037] bg-white/50 px-4 py-2 rounded-lg inline-block">
              DATA SHEET :
              <span className="text-[#3E2723] font-bold ml-1">{sheetName}</span>
            </div>

            {/* Subject Input */}
            <div className="bg-white rounded-lg border-2 border-[#D7CCC8] shadow-sm hover:border-[#A1887F] transition-colors">
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 text-[#3E2723] bg-transparent focus:outline-none font-medium rounded-lg placeholder-[#A1887F]"
                placeholder="SUBJECT HERE"
              />
            </div>

            {/* Prompt */}
            <div className="bg-white rounded-lg border-2 border-[#D7CCC8] shadow-sm hover:border-[#A1887F] transition-colors relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 text-[#3E2723] bg-transparent focus:outline-none resize-none font-medium rounded-lg pr-16 placeholder-[#A1887F]"
                placeholder="PROMPT HERE"
              />

              <button className="absolute bottom-3 right-3 w-10 h-10 flex items-center justify-center hover:bg-[#F5F0ED] rounded-lg transition-colors group">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M24 16H8M8 16L14 10M8 16L14 22"
                    stroke="#8B7355"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-[#5D4037]"
                  />
                </svg>
              </button>
            </div>

            {/* LLM Output Box */}
            <div
              className="bg-white rounded-lg border-2 border-[#D7CCC8] shadow-sm hover:border-[#A1887F] transition-colors relative"
              style={{ minHeight: "420px" }}
            >
              <div className="px-4 py-3 text-[#5D4037] whitespace-pre-wrap font-medium min-h-[420px]">
                {llmOutput}
              </div>

              <div className="absolute bottom-4 right-4 flex space-x-3">

                {/* Attachment */}
                <button
                  className="w-12 h-12 flex items-center justify-center hover:bg-[#F5F0ED] rounded-lg transition-colors group"
                  title="Attach File"
                >
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path
                      d="M20 10L10 20C8.5 21.5 8.5 24 10 25.5C11.5 27 14 27 15.5 25.5L26 15C27 14 27 12.5 26 11.5C25 10.5 23.5 10.5 22.5 11.5L13 21"
                      stroke="#8B7355"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-[#5D4037]"
                    />
                  </svg>
                </button>

                {/* Send */}
                <button
                  className="w-12 h-12 flex items-center justify-center hover:bg-[#F5F0ED] rounded-lg transition-colors group"
                  title="Send Email"
                >
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path
                      d="M6 10L18 18L30 10M6 10V26H30V10M6 10H30"
                      stroke="#8B7355"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-[#5D4037]"
                    />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
