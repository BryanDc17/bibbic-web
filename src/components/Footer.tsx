export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              BIBBIC
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              The platform where creators, fans and promoters grow together.
              Built for meaningful engagement—not unpredictable algorithms.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-bold mb-4">Platform</h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
              <li><a href="#stats" className="hover:text-white">Community</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Coming Soon */}
          <div>
            <h3 className="font-bold mb-4">Coming Soon</h3>

            <p className="text-gray-400 leading-7">
              Creator Dashboard<br />
              Promoter Portal<br />
              Fan Rewards<br />
              Mobile App
            </p>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

          <p>© 2026 BIBBIC. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">X</a>
            <a href="#" className="hover:text-white">TikTok</a>
            <a href="#" className="hover:text-white">FaceBook</a>
          </div>

        </div>

      </div>
    </footer>
  );
}