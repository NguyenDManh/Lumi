import { ArrowRight, Clock } from 'lucide-react';
import { mockNews } from '../data/mockData';

interface NewsPageProps { onNavigate: (page: string) => void; }

export default function NewsPage({ onNavigate }: NewsPageProps) {
  const [featured, ...rest] = mockNews.docs;

  const fmtDate = (iso: string) =>
    new Date(iso).toLocaleDateString('vi-VN', { day: '2-digit', month: 'long', year: 'numeric' });

  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-charcoal-900 text-white py-14">
        <div className="container-main">
          <span className="text-gold-400 font-semibold text-xs uppercase tracking-widest">Kiến thức</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Chia Sẻ Kiến Thức</h1>
          <p className="text-ivory-300 text-lg max-w-2xl leading-relaxed">
            Cập nhật kiến thức về cửa chống cháy, tiêu chuẩn PCCC và giải pháp an toàn cho công trình xây dựng.
          </p>
        </div>
      </section>

      <div className="container-main mt-12">
        {/* Featured */}
        <div className="group cursor-pointer grid md:grid-cols-2 gap-0 items-stretch bg-white border border-ivory-200 rounded-sm overflow-hidden mb-12 card-hover">
          <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
            <img src={featured.image.url} alt={featured.image.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className="inline-block text-xs font-bold text-espresso-700 bg-gold-50 border border-gold-200 px-3 py-1 rounded-full mb-4">
              Nổi bật
            </span>
            <h2 className="text-2xl font-bold text-charcoal-900 mb-3 leading-snug group-hover:text-espresso-700 transition-colors">
              {featured.title}
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-6 text-sm">{featured.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-charcoal-500">
                <span>{fmtDate(featured.createdAt)}</span>
                <span className="flex items-center gap-1"><Clock size={11} />{featured.readTime}</span>
              </div>
              <div className="flex items-center gap-2 text-gold-600 text-sm font-semibold group-hover:gap-3 transition-all">
                Đọc thêm <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <h2 className="text-xl font-bold text-charcoal-900 mb-6">Bài Viết Mới Nhất</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {rest.map((article) => (
            <div key={article.id}
              className="group cursor-pointer bg-white border border-ivory-200 rounded-sm overflow-hidden card-hover">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={article.image.url} alt={article.image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3 text-xs text-charcoal-500">
                  <span>{fmtDate(article.createdAt)}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{article.readTime}</span>
                </div>
                <h3 className="font-bold text-charcoal-900 mb-2 leading-snug group-hover:text-espresso-700 transition-colors line-clamp-2 text-sm">
                  {article.title}
                </h3>
                <p className="text-xs text-charcoal-500 leading-relaxed line-clamp-3 mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-1.5 text-gold-600 text-xs font-semibold group-hover:gap-2.5 transition-all">
                  Đọc thêm <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Topics */}
        <div className="bg-ivory-100 rounded-sm p-8 border border-ivory-200 mb-12">
          <h3 className="text-base font-bold text-charcoal-900 mb-4">Chủ Đề Phổ Biến</h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              'Cửa chống cháy EI60', 'Tiêu chuẩn TCVN 9383:2012', 'Nghiệm thu PCCC',
              'Bông khoáng Rockwool', 'Tấm MGO', 'Veneer gỗ tự nhiên',
              'Cách âm 30-40dB', 'Dự án chung cư', 'Khách sạn 5 sao', 'Bệnh viện quốc tế',
            ].map((topic) => (
              <button key={topic}
                className="text-xs bg-white text-charcoal-700 hover:text-espresso-700 hover:border-gold-400 border border-ivory-300 px-3.5 py-2 rounded-full transition-all duration-200">
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-espresso-700 rounded-sm p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Cần Tư Vấn Kỹ Thuật?</h3>
          <p className="text-espresso-200 text-sm mb-5">
            Đội ngũ chuyên gia Lumi sẵn sàng giải đáp mọi thắc mắc về cửa chống cháy và yêu cầu PCCC.
          </p>
          <button onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-5 py-2.5 rounded-sm transition-colors text-sm">
            Liên hệ chuyên gia <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </main>
  );
}
