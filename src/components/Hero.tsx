"use client";

import { useState } from "react";
export default function Hero() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const joinWaitlist = async () => {
  if (!email) {
    setMessage("Please enter your email.");
    return;
  }

  setLoading(true);
  setMessage("");

  try {
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage("🎉 You're on the waitlist!");
      setEmail("");
    } else {
      setMessage(data.error || "Something went wrong.");
    }
  } catch {
    setMessage("Network error. Please try again.");
  } finally {
    setLoading(false);
  }
};
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 pt-44 pb-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full"></div>

      <div className="absolute top-40 right-20 w-[350px] h-[350px] bg-pink-500/20 blur-[120px] rounded-full"></div>

      {/* Badge */}
      <div className="mb-6 inline-flex items-center rounded-full border border-purple-500/40 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
        🚀 The Home of Creatoor Growth
      </div>

      {/* Logo */}
      <h1 className="text-7xl md:text-[120px] font-black tracking-tight">
        BIBBIC
      </h1>

      {/* Headline */}
     <p className="mt-6 text-3xl md:text-5xl font-extrabold">
  <span className="bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent">
    Where Creators, Fans & Promoters Grow Together
  </span>
</p>

      {/* Description */}
      <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-300">
        Connect creators, promoters and fans in one powerful ecosystem.
        Promote content, reward engagement and grow communities across Africa and beyond.
      </p>

      {/* Buttons */}
  <div className="mt-12 flex w-full max-w-2xl flex-col items-center gap-5">

  <div className="flex w-full flex-col gap-4 md:flex-row">

    <input
      type="email"
      placeholder="Enter your email..."
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-purple-500"
    />

    <button
      onClick={joinWaitlist}
      disabled={loading}
      className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Joining..." : "Join Waitlist 🚀"}
    </button>

  </div>

  {message && (
    <p className="text-sm text-purple-300">
      {message}
    </p>
  )}

  <button className="text-gray-400 transition hover:text-white">
    See How It Works →
  </button>

</div>
</section>
  );
}