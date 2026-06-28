export default function EngagementLoop() {
  const steps = [
    {
      title: "🎥 Creator",
      text: "Launch a campaign or publish content to your audience.",
    },
    {
      title: "❤️ Fans",
      text: "Like, comment, share and complete engagement tasks.",
    },
    {
      title: "📢 Promoter",
      text: "Reward engagement and reach real, active communities.",
    },
    {
      title: "📈 Growth",
      text: "Everyone benefits as engagement and visibility increase.",
    },
  ];

  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="text-center mb-20">
          <p className="text-purple-400 font-bold tracking-[0.3em] uppercase">
            How BIBBIC Works
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-black">
            The Engagement Loop
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-8">
            Instead of relying on unpredictable algorithms, BIBBIC creates a
            cycle where creators, fans and promoters all grow together.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-2xl font-bold">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {step.text}
              </p>

              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-5 text-4xl text-purple-500">
                  →
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}