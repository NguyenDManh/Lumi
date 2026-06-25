import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { siteConfig } from '../data/mockData';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Trang chủ', href: '/' },
  {
    label: 'Về chúng tôi',
    href: '/gioi-thieu',
    children: [
      { label: 'Giới thiệu', href: '/gioi-thieu' },
      { label: 'Hồ sơ năng lực', href: '/gioi-thieu/ho-so-nang-luc' },
      { label: 'Báo chí nói về Lumi', href: '/gioi-thieu/bao-chi-noi-ve-lumi' },
    ],
  },
  {
    label: 'Sản phẩm',
    href: '/san-pham',
    children: [
      { label: 'Cửa gỗ chống cháy', href: '/san-pham/cua-go-chong-chay' },
      { label: 'Cửa gỗ công nghiệp', href: '/san-pham/cua-go-cong-nghiep' },
    ],
  },
  { label: 'Catalogue', href: '/catalogue' },
  { label: 'Chia sẻ kiến thức', href: '/chia-se-kien-thuc' },
  { label: 'Liên hệ', href: '/lien-he' },
];

const pageMap: Record<string, string> = {
  '/': 'home', '/gioi-thieu': 'about', '/gioi-thieu/ho-so-nang-luc': 'about',
  '/gioi-thieu/bao-chi-noi-ve-lumi': 'about', '/san-pham': 'products', '/san-pham/cua-go-chong-chay': 'products',
  '/san-pham/cua-go-cong-nghiep': 'products', '/catalogue': 'catalogue',
  '/chia-se-kien-thuc': 'news', '/lien-he': 'contact',
};


interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ activePage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // CHỈ SỬA ĐỔI TẠI ĐÂY: Logic kiểm tra trang chủ và xử lý sự kiện cuộn
  useEffect(() => {
    if (activePage !== 'home') {
      setIsScrolled(true); // Nếu không phải trang chủ, luôn mặc định là đã scroll
      return;
    }

    // Nếu là trang chủ, tính toán theo vị trí cuộn
    const fn = () => setIsScrolled(window.scrollY > 20);
    fn(); // Chạy kiểm tra ngay khi vừa chuyển về trang chủ
    
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, [activePage]); // Thêm activePage để chạy lại khi chuyển trang

  const handleNav = (href: string) => {
    const page = pageMap[href] || 'home';
    
    // ĐẨY URL SẠCH LÊN THANH ĐỊA CHỈ (Bỏ hoàn toàn dấu #)
    window.history.pushState({}, '', href);
    
    // Tạo một Event tùy chỉnh để thông báo cho trang AboutPage biết URL vừa thay đổi
    window.dispatchEvent(new Event('popstate'));
    
    onNavigate(page);
    setIsMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/97 backdrop-blur-sm'
    }`}>
      {/* Top bar – Luxury Charcoal */}
      <div className="bg-charcoal-900 py-2 hidden md:block">
        <div className="container-main flex items-center justify-between text-xs">
          <span className="text-ivory-300 tracking-wide">
            Cửa gỗ chống cháy cao cấp &nbsp;·&nbsp; Tiêu chuẩn EI60 &nbsp;·&nbsp; TCVN 9383:2012
          </span>
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-1.5 text-gold-400 hover:text-gold-300 transition-colors font-semibold"
          >
            <Phone size={13} />
            Hotline: {siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-main">
        <div className="flex items-center justify-between h-16">
          {/* Logo – image only, no text */}
          <button onClick={() => onNavigate('home')} className="flex items-center group" aria-label="Về trang chủ Lumi">
            <img
              src="/Thêm tiêu đề phụ (13).png"
              alt="Lumi – Cửa Gỗ Chống Cháy"
              className="h-8 w-auto object-contain"
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => handleNav(item.href)}
                  className={`flex items-center gap-1 px-1 py-2 text-sm font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                    activePage === (pageMap[item.href] || 'home')
                      ? isScrolled ? 'text-espresso-700 after:w-full after:bg-espresso-700' : 'text-white after:w-full after:bg-gold-400'
                      : isScrolled ? 'text-charcoal-700 hover:text-espresso-700 after:bg-espresso-700' : 'text-white after:bg-gold-400'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown size={13} className={`transition-transform ${openDropdown === item.href ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {item.children && openDropdown === item.href && (
                  <div className="absolute top-full left-0 min-w-[210px] bg-white shadow-xl border border-ivory-200 rounded-sm py-2 animate-slide-down z-50">
                    {item.children.map((child) => (
                      <button
                        key={child.href}
                        onClick={() => handleNav(child.href)}
                        className="w-full text-left px-4 py-2.5 text-sm text-charcoal-700 hover:text-espresso-700 hover:bg-ivory-100 transition-colors"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="hidden sm:flex btn-primary text-sm py-2 px-5"
            >
              Nhận báo giá
            </button>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded transition-colors ${
                isScrolled ? 'text-charcoal-700 hover:text-espresso-700 hover:bg-ivory-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-ivory-200 animate-slide-down shadow-lg">
          <div className="container-main py-3">
            {navItems.map((item) => (
              <div key={item.href}>
                <button
                  onClick={() => handleNav(item.href)}
                  className={`w-full text-left px-3 py-3 text-sm font-medium border-b border-ivory-100 transition-colors ${
                    activePage === (pageMap[item.href] || 'home')
                      ? 'text-espresso-700'
                      : 'text-charcoal-800 hover:text-espresso-700'
                  }`}
                >
                  {item.label}
                </button>
                {item.children && (
                  <div className="bg-ivory-100 pl-4">
                    {item.children.map((child) => (
                      <button
                        key={child.href}
                        onClick={() => handleNav(child.href)}
                        className="w-full text-left px-3 py-2.5 text-sm text-charcoal-600 hover:text-espresso-700 border-b border-ivory-200 transition-colors"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 pb-1">
              <button onClick={() => onNavigate('contact')} className="btn-primary w-full justify-center text-sm">
                Nhận báo giá miễn phí
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}