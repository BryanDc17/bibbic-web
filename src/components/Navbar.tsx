export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          BIBBIC
        </h1>

{/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>

          <a href="#how-it-works" className="transition hover:text-white">
            How It Works
          </a>

          <a href="#stats" className="transition hover:text-white">
            Community
          </a>
        </nav>

          {/* CTA */}
          <a href="#waitlist"
          className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40"
          >
              Join Waitlist 🚀
          </a>
        </div>
    </header>
  );
}