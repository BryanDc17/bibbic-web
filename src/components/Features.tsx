export default function Features() {
    return (
      <section id="features" className="px-8 py-24 max-w-7xl mx-auto">
  
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Why BIBBIC?
        </h2>
  
        <p className="text-gray-400 text-center mt-6 max-w-2xl mx-auto">
          A complete ecosystem for creators, promoters and brands to grow through real engagement.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
  
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="text-5xl mb-5">🎥</div>
  
            <h3 className="text-2xl font-bold mb-3">
              For Creators
            </h3>
  
            <p className="text-gray-400 leading-7">
              Promote your content, reach real audiences, and build a loyal fanbase that actually engages.
            </p>
          </div>
  
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="text-5xl mb-5">📢</div>
  
            <h3 className="text-2xl font-bold mb-3">
              For Promoters
            </h3>
  
            <p className="text-gray-400 leading-7">
              Earn money by helping creators grow through real engagement and campaign participation.
            </p>
          </div>
  
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="text-5xl mb-5">🚀</div>
  
            <h3 className="text-2xl font-bold mb-3">
              For Brands
            </h3>
  
            <p className="text-gray-400 leading-7">
              Launch campaigns, track engagement, and reach targeted audiences with measurable results.
            </p>
          </div>
  
        </div>
  
      </section>
    );
  }