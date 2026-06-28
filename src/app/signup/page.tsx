"use client";

"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
  if (!username || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });

  if (error) {
    alert(error.message);
    return;
  }

  alert("🎉 Account created successfully!");

  console.log(data);
};

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <h1 className="text-4xl font-bold text-center">
          Create Account
        </h1>

        <p className="mt-2 text-center text-gray-400">
          Join the BIBBIC community.
        </p>

        <div className="mt-8 space-y-5">

          <input
  type="text"
  placeholder="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-purple-500"
/>

          <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-purple-500"
/>

         <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-purple-500"
/>

          <button
  onClick={handleSignUp}
  className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 py-4 font-bold transition hover:scale-105"
>
  Continue
</button>
        </div>

      </div>

    </main>
  );
}