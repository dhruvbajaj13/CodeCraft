import Link from "next/link";
import { Github, Twitter, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#0b0b11] text-gray-400 border-t border-gray-800 pt-5 pb-6 px-6 mt-">
      {/* Gradient Ring Glow */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left - Branding */}
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-purple-500 shadow-md">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-white text-xl font-bold">CodeCraft</h1>
            <p className="text-sm text-gray-500">Build. Run. Share.</p>
          </div>
        </div>

        {/* Center - Command style nav */}
        <div className="flex flex-wrap justify-center gap-6 text-lg font-medium">
          <Link href="/snippets" className="hover:text-white  cursor-pointer hover:underline transition">Snippets</Link>
          <Link href="/docs" className="hover:text-white cursor-pointer hover:underline  transition">Docs</Link>
          <Link href="/changelog" className="hover:text-white  cursor-pointer hover:underline transition">Changelog</Link>
          <Link href="/pricing" className="hover:text-white  cursor-pointer hover:underline transition">Pricing</Link>
        </div>

        {/* Right - Socials */}
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" className="hover:text-white transition">
            <Github size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-white transition">
            <Twitter size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-4 text-center text-md text-gray-600">
        © {new Date().getFullYear()} CodeCraft 
      </div>
    </footer>
  );
};

export default Footer;

