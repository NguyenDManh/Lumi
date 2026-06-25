import { Download, FileText, BookOpen, Palette, ArrowRight } from 'lucide-react';
import { mockCatalogues } from '../data/mockData';

interface CataloguePageProps { onNavigate: (page: string) => void; }

const iconMap: Record<string, React.ElementType> = {
  'cat-001': BookOpen,
  'cat-002': FileText,
  'cat-003': Palette,
};

export default function CataloguePage({ onNavigate }: CataloguePageProps) {
  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-charcoal-900 text-white py-14">
        <div className="container-main">
          <span className="text-gold-400 font-semibold text-xs uppercase tracking-widest">Tài liệu</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-white">Catalogue & Tài Liệu</h1>
          <p className="text-ivory-300 text-lg max-w-2xl leading-relaxed">
            Tải xuống catalogue sản phẩm, hồ sơ năng lực và bảng màu bề mặt để có đầy đủ thông tin phục vụ dự án.
          </p>
        </div>
      </section>

      <section className="container-main mt-12">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {mockCatalogues.docs.map((catalogue) => {
            const Icon = iconMap[catalogue.id] || FileText;
            return (
              <div key={catalogue.id} className="bg-white border border-ivory-200 rounded-sm overflow-hidden card-hover group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={catalogue.image.url} alt={catalogue.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-charcoal-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-gold-500 rounded-full flex items-center justify-center">
                      <Download size={22} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold bg-charcoal-900 text-gold-400 px-2.5 py-1 rounded-full">
                      {catalogue.year}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-ivory-100 rounded flex items-center justify-center">
                      <Icon size={14} className="text-espresso-700" />
                    </div>
                    <div className="text-xs text-charcoal-500">{catalogue.pages} trang · {catalogue.fileSize}</div>
                  </div>
                  <h3 className="font-bold text-charcoal-900 mb-2 leading-snug text-sm">{catalogue.title}</h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed mb-5">{catalogue.description}</p>
                  <a href={catalogue.downloadUrl}
                    className="flex items-center gap-2 text-gold-600 font-semibold text-sm hover:text-gold-700 transition-colors group-hover:gap-3">
                    <Download size={15} />
                    Tải xuống miễn phí
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* How to use */}
        <div className="bg-ivory-100 rounded-sm p-10 mb-12 border border-ivory-200">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">Hướng dẫn</span>
              <h2 className="text-2xl font-bold text-charcoal-900 mt-2 mb-4">Sử Dụng Tài Liệu Kỹ Thuật</h2>
              <p className="text-charcoal-600 text-sm leading-relaxed mb-6">
                Tài liệu kỹ thuật Lumi được thiết kế để hỗ trợ kiến trúc sư, nhà thầu và chủ đầu tư trong mọi giai đoạn dự án.
              </p>
              <div className="space-y-3">
                {[
                  'Thư viện bản vẽ CAD cho kiến trúc sư',
                  'Thông số kỹ thuật chi tiết cho nhà thầu',
                  'Bảng màu và mẫu bề mặt đầy đủ',
                  'Hồ sơ chứng nhận EI60, CO/CQ đầy đủ',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-charcoal-700">
                    <div className="w-5 h-5 bg-espresso-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gold-300 text-xs font-bold">✓</span>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: FileText, title: 'Kiến trúc sư & Thiết kế', desc: 'Thư viện CAD đầy đủ, catalogue bề mặt và thông số kích thước để tích hợp vào hồ sơ thiết kế.' },
                { icon: BookOpen, title: 'Nhà thầu & Chủ đầu tư', desc: 'Hồ sơ năng lực, chứng nhận chất lượng và tài liệu nghiệm thu PCCC đầy đủ cho dự án.' },
              ].map((item) => (
                <div key={item.title} className="bg-white p-5 rounded-sm border border-ivory-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 bg-gold-50 border border-gold-200 rounded flex items-center justify-center">
                      <item.icon size={15} className="text-espresso-700" />
                    </div>
                    <span className="font-semibold text-charcoal-900 text-sm">{item.title}</span>
                  </div>
                  <p className="text-xs text-charcoal-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-walnut-800 rounded-sm p-10 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Cần Tài Liệu Kỹ Thuật Đặc Biệt?</h3>
          <p className="text-ivory-300 mb-6 max-w-lg mx-auto text-sm">
            Liên hệ với đội ngũ kỹ thuật Lumi để nhận tài liệu chuyên sâu, bản vẽ CAD theo yêu cầu dự án.
          </p>
          <button onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-6 py-3 rounded-sm transition-colors">
            Liên hệ nhận tài liệu <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}
