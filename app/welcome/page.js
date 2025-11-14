// export default function WelcomePage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0A0E17]">
//       <div className="max-w-md w-full text-center p-8 bg-[#111826] rounded-2xl shadow-xl border border-[#00AFFF]/20">
        
//         <h1 className="text-3xl font-bold text-[#00FFF7] mb-4">
//           Welcome to Your AI Workspace
//         </h1>

//         <p className="text-[#E6F1FF]/80 mb-8">
//           You are all set. Continue to start exploring your dashboard.
//         </p>

//         <a
//           href="/dashboard"
//           className="block w-full bg-[#00AFFF] hover:bg-[#00FFF7] text-[#0A0E17] font-semibold py-3 rounded-xl transition-all"
//         >
//           Next →
//         </a>
//       </div>
//     </div>
//   );
// }


'use client'
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-[#F3EDE7] px-4">
      <div className="bg-white max-w-md w-full p-8 rounded-xl shadow-lg text-center border border-[#D7CCC8]">
        
        <h1 className="text-3xl font-bold text-[#5D4037] mb-4">
          Welcome to Your AI Workspace
        </h1>

        <p className="text-[#6D4C41] mb-6">
          You are all set. Continue to start exploring your dashboard.
        </p>

        <button
          onClick={() => router.push("/")}
          className="w-full py-3 rounded-lg bg-[#A1887F] text-white font-semibold hover:bg-[#8B7355] transition"
        >
          Next →
        </button>

      </div>
    </div>
  );
}
