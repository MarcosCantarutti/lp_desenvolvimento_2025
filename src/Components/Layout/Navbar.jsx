import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logomain.png';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Mendefinisikan komponen Navbar yang mencakup tautan navigasi dan responsif untuk perangkat mobile.
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  const INSTAGRAM_URL = 'https://www.instagram.com/paulocantaruttioficial/';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/paulocantarutti/';
  const WHATSAPP_URL = 'https://wa.me/5534999457198';

  // Menggunakan efek untuk mengubah status navbar ketika pengguna menggulir halaman
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: 'Inicio', path: '/' },
    { title: 'Serviços', path: '#services' },
  ];

  const scrollToHash = (hash) => {
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const linkBaseClass = 'text-base font-medium transition-colors duration-300';
  const activeLinkClass = 'text-primary';
  const inactiveLinkClass = 'text-gray-800 hover:text-primary';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? 'bg-white/50 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <NavLink
            to="/"
            className="flex-shrink-0"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                scrollToTop();
              }
            }}
          >
            <div className="flex items-center gap-3">
              <img
                className="h-20 w-auto mt-6"
                src={logo}
                alt="HIMTI Learning Group"
              />

              {/* <span className="font-semibold text-gray-600 sm:text-lg">
                LP Desenvolvimento
              </span> */}
            </div>
          </NavLink>

          <div className="hidden md:flex md:items-center md:space-x-10">
            {navLinks.map((link) => (
              link.path.startsWith('#') ? (
                <button
                  key={link.title}
                  onClick={() => scrollToHash(link.path)}
                  className={`${linkBaseClass} ${inactiveLinkClass}`}
                >
                  {link.title}
                </button>
              ) : (
                <NavLink
                  key={link.title}
                  to={link.path}
                  className={({ isActive }) =>
                    `${linkBaseClass} ${inactiveLinkClass}`
                  }
                  onClick={(e) => {
                    if (link.path === '/' && location.pathname === '/') {
                      e.preventDefault();
                      scrollToTop();
                    }
                  }}
                >
                  {link.title}
                </NavLink>
              )
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={25} />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Whatsapp"
            >
              <FaWhatsapp size={25} />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.path.startsWith('#') ? (
                <button
                  key={link.title}
                  onClick={() => { scrollToHash(link.path); setIsOpen(false); }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base ${linkBaseClass} ${inactiveLinkClass}`}
                >
                  {link.title}
                </button>
              ) : (
                <NavLink
                  key={link.title}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base ${linkBaseClass} ${
                      isActive ? activeLinkClass : inactiveLinkClass
                    }`
                  }
                  onClick={(e) => {
                    if (link.path === '/' && location.pathname === '/') {
                      e.preventDefault();
                      scrollToTop();
                    }
                    setIsOpen(false);
                  }}
                >
                  {link.title}
                </NavLink>
              )
            ))}
            <div className="border-t  border-gray-200 my-2 pt-2"></div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={25} />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Whatsapp"
            >
              <FaWhatsapp size={25} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
