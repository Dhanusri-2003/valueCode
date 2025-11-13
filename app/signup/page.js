'use client'
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // const handleSignup = async () => {
  //   const { error } = await supabase.auth.signUp({ email, password });

  //   if (error) {
  //     setErrorMsg(error.message);
  //     return;
  //   }

  //   router.push("/login"); // ✅ After signup → go to login
  // };
 const baseURL = process.env.NEXT_PUBLIC_SITE_URL;

// const handleSignup = async () => {
  // const { data, error } = await supabase.auth.signUp({
  //   email,
  //   password,
  //   options: {
  //     emailRedirectTo: `${baseURL}/login`
  //   }
  // });
const handleSignup = async (e) => {
  e.preventDefault();

  const redirectUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://www.valuecode.in/login'
      : 'http://localhost:3001/login';

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: redirectUrl,
    },
  });

  if (error) {
    console.error('Signup error:', error.message);
    alert(error.message);
    return;
  }

  alert('Check your email for a confirmation link.');
};

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>

        {errorMsg && <p className="text-red-500 text-center mb-2">{errorMsg}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-[#8B7355] text-white py-2 rounded hover:bg-[#6D4C41]"
        >
          Sign Up
        </button>

        <p className="text-center mt-3 text-sm">
          Already have an account? <Link href="/login" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  );
}
