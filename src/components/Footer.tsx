import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/mockData';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-charcoal-900 text-ivory-300">
      <div className="container-main">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-charcoal-700">
          {/* Brand */}
          <div>
            {/* Logo inverted for dark background */}
            <button onClick={() => onNavigate('home')} className="mb-5 block" aria-label="Về trang chủ Lumi">
              <img
                src="/Thêm tiêu đề phụ (13).png"
                alt="Lumi – Cửa Gỗ Chống Cháy"
                className="h-10 w-auto object-contain opacity-90"
              />
            </button>
            <p className="text-sm leading-relaxed mb-6 text-ivory-400">
              Thương hiệu cửa gỗ chống cháy cao cấp phân khúc premium. Đạt tiêu chuẩn EI60, TCVN 9383:2012.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2.5 hover:text-gold-400 transition-colors">
                <Phone size={14} className="text-gold-500 flex-shrink-0" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-gold-400 transition-colors">
                <Mail size={14} className="text-gold-500 flex-shrink-0" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-ivory-100 font-semibold text-xs uppercase tracking-widest mb-4">Sản phẩm</h4>
            <ul className="space-y-2.5">
              {['Cửa gỗ chống cháy EI60', 'Cửa gỗ công nghiệp', 'Cửa 1 cánh', 'Cửa 2 cánh', 'Phụ kiện cửa'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate('products')}
                    className="text-sm flex items-center gap-1.5 text-ivory-400 hover:text-gold-400 transition-colors group"
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-500" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-ivory-100 font-semibold text-xs uppercase tracking-widest mb-4">Công ty</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Giới thiệu về Lumi', page: 'about' },
                { label: 'Hồ sơ năng lực', page: 'about' },
                { label: 'Dự án tiêu biểu', page: 'about' },
                { label: 'Báo chí nói về Lumi', page: 'about' },
                { label: 'Tuyển dụng', page: 'contact' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-sm flex items-center gap-1.5 text-ivory-400 hover:text-gold-400 transition-colors group"
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-500" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-ivory-100 font-semibold text-xs uppercase tracking-widest mb-4">Hỗ trợ</h4>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: 'Chia sẻ kiến thức', page: 'news' },
                { label: 'Catalogue sản phẩm', page: 'catalogue' },
                { label: 'Tiêu chuẩn PCCC', page: 'news' },
                { label: 'Liên hệ tư vấn', page: 'contact' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-sm flex items-center gap-1.5 text-ivory-400 hover:text-gold-400 transition-colors group"
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-500" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-charcoal-800 border border-charcoal-700 rounded-sm">
              <p className="text-xs text-ivory-400 mb-1.5">Hotline hỗ trợ 24/7</p>
              <a href={`tel:${siteConfig.phone}`} className="text-gold-400 font-bold text-lg hover:text-gold-300 transition-colors">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory-400">
          <p>© 2024 Lumi – Cửa Gỗ Chống Cháy Cao Cấp. Thuộc Bách Khoa Việt Nam (BKVN).</p>
          <div className="flex items-center gap-4">
            <button className="hover:text-ivory-300 transition-colors">Chính sách bảo mật</button>
            <button className="hover:text-ivory-300 transition-colors">Điều khoản sử dụng</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
