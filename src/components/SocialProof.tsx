export default function SocialProof() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">

        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold uppercase tracking-widest">
            COMMUNITY
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Built for Real Engagement
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            BIBBIC helps creators, promoters and fans build genuine engagement
            instead of chasing unpredictable algorithms.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition">
            <h3 className="text-5xl font-black text-purple-400">1M+</h3>
            <p className="mt-3 text-gray-300">
              Monthly Engagement Goal
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition">
            <h3 className="text-5xl font-black text-pink-400">50K+</h3>
            <p className="mt-3 text-gray-300">
              Early Creator Target
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition">
            <h3 className="text-5xl font-black text-blue-400">24/7</h3>
            <p className="mt-3 text-gray-300">
              Active Community
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition">
            <h3 className="text-5xl font-black text-green-400">100%</h3>
            <p className="mt-3 text-gray-300">
              Creator Focused
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}