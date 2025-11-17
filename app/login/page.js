// 'use client'
// import { useState} from "react";
// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";
// import Link from "next/link";


// export default function Login() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");




//   const handleLogin = async () => {
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password
//     });

//     if (error) {
//       setErrorMsg(error.message);
//       return;
//     }

//     router.push("/"); // ✅ After login → go home
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
//       <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

//         {errorMsg && <p className="text-red-500 text-center mb-2">{errorMsg}</p>}

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border p-2 rounded mb-3"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full border p-2 rounded mb-3"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           onClick={handleLogin}
//           className="w-full bg-[#A1887F] text-white py-2 rounded hover:bg-[#8B7355]"
//         >
//           Login
//         </button>

//         <p className="text-center mt-3 text-sm">
//           Don’t have an account? <Link href="/signup" className="text-blue-600">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

'use client'
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
   const pathname = usePathname(); // import { usePathname } from "next/navigation";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setErrorMsg(error.message);
      return;
    }
    router.push("/dashboard"); // redirect to home
  };

  return (
    <div key={pathname} className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {errorMsg && <p className="text-red-500 text-center mb-2">{errorMsg}</p>}

        <input
          type="email"
          value={email}
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="Password"
          className="w-full border p-2 rounded mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-[#A1887F] text-white py-2 rounded hover:bg-[#8B7355]"
        >
          Login
        </button>

        <p className="text-center mt-3 text-sm">
          Don’t have an account? <Link href="/signup" className="text-blue-600">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
