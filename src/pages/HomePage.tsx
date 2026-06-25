import { useState, useEffect } from 'react';
import {
  Flame, Layers, Palette, Volume2, ShieldCheck, Truck,
  ArrowRight, Award, Factory, Building2, Headphones,
  ChevronLeft, ChevronRight, Phone
} from 'lucide-react';
import { mockProducts, mockProjects, mockNews, mockUSPs, mockStats } from '../data/mockData';

const iconMap: Record<string, React.ElementType> = {
  flame: Flame, layers: Layers, palette: Palette, volume2: Volume2,
  'shield-check': ShieldCheck, truck: Truck, award: Award,
  factory: Factory, building: Building2, headphones: Headphones,
};

const heroSlides = [
  {
    id: 'slide-1',
    title: 'Cửa Gỗ Chống Cháy\nCao Cấp EI60',
    subtitle: 'Thẩm mỹ hoàn hảo – An toàn tuyệt đối – Đạt chuẩn PCCC quốc gia',
    image: { url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920' },
    cta: 'Xem sản phẩm', ctaPage: 'products',
  },
  {
    id: 'slide-2',
    title: 'Giải Pháp Tổng Thể\nCho Dự Án Lớn',
    subtitle: 'Nhà máy công suất 150 bộ/ngày – Trọn gói từ sản xuất đến nghiệm thu',
    image: { url: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=1920' },
    cta: 'Nhận báo giá', ctaPage: 'contact',
  },
  {
    id: 'slide-3',
    title: 'Tiêu Chuẩn\nTCVN 9383:2012',
    subtitle: 'Kiểm định bởi tổ chức uy tín – Hồ sơ đầy đủ – Nghiệm thu thuận lợi',
    image: { url: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1920' },
    cta: 'Tải catalogue', ctaPage: 'catalogue',
  },
];

interface HomePageProps { onNavigate: (page: string) => void; }

export default function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % heroSlides.length), 5500);
    return () => clearInterval(timer);
  }, []);

  const fmtDate = (iso: string) =>
    new Date(iso).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });

  return (
    <main>
      {/* ── Hero Slider ── */}
      <section className="relative h-[90vh] min-h-[580px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide.image.url} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/85 via-charcoal-900/55 to-transparent" />
          </div>
        ))}

        <div className="relative z-10 h-full container-main flex items-center">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-gold-500/60 bg-gold-500/10 text-gold-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Flame size={12} className="text-gold-400" />
              Đạt chuẩn EI60 – TCVN 9383:2012
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-5 leading-tight whitespace-pre-line">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-lg text-ivory-200 mb-9 leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => onNavigate(heroSlides[currentSlide].ctaPage)} className="btn-primary">
                {heroSlides[currentSlide].cta}
                <ArrowRight size={16} />
              </button>
              <button onClick={() => onNavigate('contact')} className="btn-ghost">
                <Phone size={15} />
                Tư vấn miễn phí
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2.5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`transition-all duration-300 rounded-full ${
                i === currentSlide ? 'w-8 h-2 bg-gold-400' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <button onClick={() => setCurrentSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-charcoal-900/40 hover:bg-charcoal-900/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all">
          <ChevronLeft size={20} />
        </button>
        <button onClick={() => setCurrentSlide((p) => (p + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-charcoal-900/40 hover:bg-charcoal-900/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all">
          <ChevronRight size={20} />
        </button>
      </section>

      {/* ── Stats bar – Espresso Brown ── */}
      <section className="bg-espresso-700 text-white py-8">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mockStats.map((stat) => {
              const Icon = iconMap[stat.icon] || Award;
              return (
                <div key={stat.id} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-gold-300" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gold-300 leading-none">{stat.number}</div>
                    <div className="text-espresso-200 text-sm mt-1">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── USP Section ── */}
      <section className="py-20 bg-white">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">Tại sao chọn Lumi</span>
            <h2 className="section-title mt-2">Lợi Thế Vượt Trội</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Lumi mang đến giải pháp cửa gỗ chống cháy toàn diện – kết hợp thẩm mỹ cao cấp và an toàn tuyệt đối.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockUSPs.map((usp) => {
              const Icon = iconMap[usp.icon] || ShieldCheck;
              return (
                <div key={usp.id} className="group p-6 border border-ivory-200 rounded-sm hover:border-gold-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                  <div className="w-11 h-11 bg-ivory-100 group-hover:bg-espresso-700 rounded flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon size={20} className="text-espresso-700 group-hover:text-gold-300 transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-charcoal-900 mb-2 text-sm">{usp.title}</h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">{usp.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="py-20 bg-ivory-100">
        <div className="container-main">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">Sản phẩm</span>
              <h2 className="section-title mt-2">Dòng Sản Phẩm Nổi Bật</h2>
            </div>
            <button onClick={() => onNavigate('products')} className="hidden sm:flex items-center gap-2 text-espresso-700 font-semibold hover:text-gold-600 transition-colors text-sm">
              Xem tất cả <ArrowRight size={15} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.docs.map((product) => (
              <div key={product.id} className="bg-white rounded-sm overflow-hidden card-hover group cursor-pointer border border-ivory-200"
                onClick={() => onNavigate('products')}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={product.image.url} alt={product.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold bg-charcoal-900 text-gold-400 px-2.5 py-1 rounded-full">
                      {product.fireRating !== 'Không yêu cầu' ? product.fireRating : 'Công nghiệp'}
                    </span>
                    <span className="text-xs text-charcoal-500">{product.thickness}</span>
                  </div>
                  <h3 className="font-bold text-charcoal-900 mb-2 group-hover:text-espresso-700 transition-colors text-sm">
                    {product.name}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed mb-4 line-clamp-2">{product.shortDescription}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.applications.slice(0, 2).map((app) => (
                      <span key={app} className="text-xs bg-ivory-100 text-ivory-600 px-2 py-1 rounded">{app}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-gold-600 text-xs font-semibold group-hover:gap-3 transition-all">
                    Xem chi tiết <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <button onClick={() => onNavigate('products')} className="btn-primary">
              Xem tất cả sản phẩm <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Structure explainer ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">Cấu tạo sản phẩm</span>
              <h2 className="section-title mt-2 mb-5">Công Nghệ Chống Cháy Tiên Tiến</h2>
              <p className="text-charcoal-600 leading-relaxed mb-8 text-sm">
                Cửa gỗ chống cháy Lumi được thiết kế với cấu trúc đa lớp chuyên biệt, đảm bảo chỉ số EI60 – chống cháy và cách nhiệt trong 60 phút liên tục.
              </p>
              <div className="space-y-3">
                {[
                  { no: '01', title: 'Tấm bề mặt MDF', desc: 'Gỗ CN MDF 6mm, phủ Veneer/Laminate/Melamine/Sơn PU – sang trọng, chống trầy xước.' },
                  { no: '02', title: 'Lõi chống cháy MGO', desc: 'Tấm Magie oxit 8mm tỷ trọng 850–1050 kg/m³, ép keo cùng MDF – quyết định chỉ số EI60.' },
                  { no: '03', title: 'Bông khoáng Rockwool', desc: 'Lớp bông khoáng dày 25mm, tỷ trọng 80 kg/m³ – ngăn nhiệt và cách âm 30–40dB.' },
                  { no: '04', title: 'Khung xương Plywood', desc: 'Gỗ Plywood chịu lực, xử lý chống cong vênh – ổn định khi chịu nhiệt độ cao.' },
                ].map((layer) => (
                  <div key={layer.no} className="flex gap-4 p-4 bg-ivory-100 rounded-sm hover:bg-gold-50 transition-colors group">
                    <div className="w-10 h-10 bg-espresso-700 text-gold-300 rounded font-bold text-xs flex items-center justify-center flex-shrink-0 group-hover:bg-charcoal-900 transition-colors">
                      {layer.no}
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-900 text-sm mb-1">{layer.title}</div>
                      <div className="text-xs text-charcoal-600 leading-relaxed">{layer.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <img src="https://images.pexels.com/photos/6444258/pexels-photo-6444258.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Cấu tạo cửa gỗ chống cháy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-charcoal-900 text-white p-5 rounded-sm shadow-xl border-l-4 border-gold-500">
                <div className="text-2xl font-bold text-gold-400">EI60</div>
                <div className="text-ivory-400 text-xs mt-1">Chống cháy 60 phút</div>
                <div className="text-xs text-ivory-500 mt-0.5">TCVN 9383:2012</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="py-20 bg-ivory-100">
        <div className="container-main">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">Dự án</span>
              <h2 className="section-title mt-2">Công Trình Tiêu Biểu</h2>
            </div>
            <button onClick={() => onNavigate('about')} className="hidden sm:flex items-center gap-2 text-espresso-700 font-semibold hover:text-gold-600 transition-colors text-sm">
              Xem thêm <ArrowRight size={15} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockProjects.docs.map((project) => (
              <div key={project.id} className="group cursor-pointer" onClick={() => onNavigate('about')}>
                <div className="aspect-[3/2] rounded-sm overflow-hidden mb-4">
                  <img src={project.image.url} alt={project.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider">{project.category}</span>
                <h3 className="font-bold text-charcoal-900 mt-1 mb-1.5 group-hover:text-espresso-700 transition-colors text-sm">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-charcoal-500">
                  <span>{project.location}</span>
                  <span>{project.quantity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── News ── */}
      <section className="py-20 bg-white">
        <div className="container-main">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">Kiến thức</span>
              <h2 className="section-title mt-2">Chia Sẻ Kiến Thức</h2>
            </div>
            <button onClick={() => onNavigate('news')} className="hidden sm:flex items-center gap-2 text-espresso-700 font-semibold hover:text-gold-600 transition-colors text-sm">
              Xem tất cả <ArrowRight size={15} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockNews.docs.map((article) => (
              <div key={article.id} className="group cursor-pointer" onClick={() => onNavigate('news')}>
                <div className="aspect-[16/10] rounded-sm overflow-hidden mb-4">
                  <img src={article.image.url} alt={article.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-2 mb-2 text-xs text-charcoal-500">
                  <span>{fmtDate(article.createdAt)}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-semibold text-charcoal-900 text-xs leading-snug mb-2 line-clamp-2 group-hover:text-espresso-700 transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-charcoal-500 leading-relaxed line-clamp-2">{article.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner – Dark Walnut ── */}
      <section className="py-20 bg-walnut-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sẵn Sàng Tư Vấn Dự Án Của Bạn
          </h2>
          <p className="text-ivory-300 text-lg mb-8 max-w-2xl mx-auto">
            Đội ngũ kỹ thuật Lumi luôn sẵn sàng hỗ trợ tư vấn, lập phương án và báo giá chi tiết cho mọi quy mô dự án.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('contact')} className="btn-primary">
              Nhận báo giá ngay <ArrowRight size={16} />
            </button>
            <a href="tel:1900xxxx" className="btn-ghost">
              <Phone size={15} />
              Gọi ngay: 1900 xxxx
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
