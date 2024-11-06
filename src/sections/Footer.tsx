import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

const footerLinks = [
  {
    icon: <FaYoutube className="text-2xl" />,
    href: "https://youtu.be/Z7I5uSRHMHg",
  },
  {
    icon: <FaInstagram className="text-2xl" />,
    href: 'https://www.instagram.com/',
  },
  {
    icon: <FaLinkedin className="text-2xl" />,
    href: 'https://www.linkedin.com/',
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,_black,_transparent)] -z-10"></div>

      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <div>
            <nav className="flex flex-row items-center gap-8">
              {footerLinks.map((link, index) => (
                <a href={link.href} key={index} className="inline-flex items-center gap-1.5">
                  <button>
                  <span className="font-semibold">{link.icon}</span>
                  </button>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
