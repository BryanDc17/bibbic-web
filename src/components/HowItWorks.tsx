export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-28 px-8 max-w-7xl mx-auto">

        <h2 className="text-5xl font-black text-center">
          How BIBBIC Works
        </h2>
        
        <p className="text-gray-400 text-center mt-5 max-w-2xl mx-auto">
          Whether you&apos;re a creator, promoter or fan, BIBBIC makes collaboration simple.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-20">
        
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer">
            <div className="text-5xl">🎥</div>
        
            <h3 className="text-2xl font-bold mt-6">
              Creators
            </h3>
        
            <p className="text-gray-400 mt-4">
              Upload campaigns, connect with promoters, grow your audience and earn more.
            </p>
          </div>
        
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer">
            <div className="text-5xl">🚀</div>
        
            <h3 className="text-2xl font-bold mt-6">
              Promoters
            </h3>
        
            <p className="text-gray-400 mt-4">
              Discover campaigns, promote content across your platforms and earn rewards.
            </p>
          </div>
        
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer">
            <div className="text-5xl">❤️</div>
        
            <h3 className="text-2xl font-bold mt-6">
              Fans
            </h3>
        
            <p className="text-gray-400 mt-4">
              Support creators, complete engagement tasks and unlock exclusive experiences.
            </p>
          </div>
        
        </div>
        
        </section>
    );
  }