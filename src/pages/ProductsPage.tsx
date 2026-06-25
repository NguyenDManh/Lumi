import { useState } from 'react';
import { ArrowRight, CheckCircle2, Phone, Flame, Volume2, Shield } from 'lucide-react';
import { mockProducts } from '../data/mockData';

interface ProductsPageProps { onNavigate: (page: string) => void; }

const categories = [
  { id: 'all', label: 'Tất cả sản phẩm' },
  { id: 'cua-go-chong-chay', label: 'Cửa gỗ chống cháy' },
  { id: 'cua-go-cong-nghiep', label: 'Cửa gỗ công nghiệp' },
];

const surfaceOptions = [
  { id: 'veneer', name: 'Veneer Gỗ Tự Nhiên', desc: 'Bề mặt gỗ tự nhiên sang trọng, vân gỗ độc đáo, phù hợp khách sạn 5 sao và căn hộ cao cấp.', image: { url: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=600' } },
  { id: 'laminate', name: 'Laminate', desc: 'Bề mặt bền cao, chống trầy xước, dễ vệ sinh, đa dạng màu sắc và vân gỗ hiện đại.', image: { url: 'https://images.pexels.com/photos/6444258/pexels-photo-6444258.jpeg?auto=compress&cs=tinysrgb&w=600' } },
  { id: 'melamine', name: 'Melamine', desc: 'Tiết kiệm chi phí, bề mặt mịn đẹp, chống ẩm tốt, phù hợp dự án căn hộ tầm trung cao cấp.', image: { url: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=600' } },
  { id: 'son-pu', name: 'Sơn PU', desc: 'Màu sắc tùy chỉnh theo yêu cầu, bề mặt bóng mịn hoặc mờ, phù hợp concept thiết kế đặc biệt.', image: { url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600' } },
];

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<typeof mockProducts.docs[0] | null>(null);

  const filtered = mockProducts.docs.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-charcoal-900 text-white py-14">
        <div className="container-main">
          <span className="text-gold-400 font-semibold text-xs uppercase tracking-widest">Sản phẩm</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 leading-tight">Cửa Gỗ Chống Cháy Cao Cấp</h1>
          <p className="text-ivory-300 text-lg max-w-2xl leading-relaxed">
            Dòng cửa gỗ chống cháy EI60 Lumi – thẩm mỹ nội thất hoàn hảo kết hợp an toàn PCCC tuyệt đối, đạt tiêu chuẩn TCVN 9383:2012.
          </p>
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { icon: Flame, label: 'Chống cháy', value: 'EI60 – 60 phút' },
              { icon: Volume2, label: 'Cách âm', value: '30–40 dB' },
              { icon: Shield, label: 'Tiêu chuẩn', value: 'TCVN 9383:2012' },
            ].map((spec) => (
              <div key={spec.label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-500/15 rounded flex items-center justify-center">
                  <spec.icon size={18} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-xs text-ivory-400">{spec.label}</div>
                  <div className="text-sm font-bold text-white">{spec.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="bg-white border-b border-ivory-200 sticky top-16 z-20">
        <div className="container-main flex gap-0 overflow-x-auto">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                activeCategory === cat.id
                  ? 'border-gold-500 text-espresso-700'
                  : 'border-transparent text-charcoal-500 hover:text-charcoal-900'
              }`}>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="container-main mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div key={product.id}
              className="bg-white border border-ivory-200 rounded-sm overflow-hidden card-hover cursor-pointer group"
              onClick={() => setSelectedProduct(product)}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={product.image.url} alt={product.image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  {product.fireRating !== 'Không yêu cầu' && (
                    <span className="text-xs font-bold bg-charcoal-900 text-gold-400 px-2.5 py-1 rounded-full">
                      {product.fireRating}
                    </span>
                  )}
                  <span className="text-xs text-charcoal-500">{product.thickness}</span>
                </div>
                <h3 className="font-bold text-charcoal-900 mb-2 group-hover:text-espresso-700 transition-colors text-sm">
                  {product.name}
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed mb-4 line-clamp-2">{product.shortDescription}</p>
                <div className="space-y-1.5 mb-4 text-xs">
                  <div className="flex items-center gap-2 text-charcoal-500">
                    <span className="w-20 flex-shrink-0">Cách âm:</span>
                    <span className="font-medium text-charcoal-700">{product.soundInsulation}</span>
                  </div>
                  <div className="flex items-center gap-2 text-charcoal-500">
                    <span className="w-20 flex-shrink-0">Tiêu chuẩn:</span>
                    <span className="font-medium text-charcoal-700">{product.standard}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4 pb-4 border-b border-ivory-100">
                  {product.surfaces.slice(0, 3).map((s) => (
                    <span key={s} className="text-xs bg-ivory-100 text-ivory-600 px-2 py-0.5 rounded">{s}</span>
                  ))}
                  {product.surfaces.length > 3 && (
                    <span className="text-xs text-charcoal-500">+{product.surfaces.length - 3}</span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-gold-600 text-xs font-semibold group-hover:gap-3 transition-all">
                  Xem chi tiết <ArrowRight size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Surface options */}
      <section className="mt-20 bg-ivory-100 py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">Lựa chọn bề mặt</span>
            <h2 className="text-3xl font-bold text-charcoal-900 mt-2">Đa Dạng Bề Mặt Hoàn Thiện</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {surfaceOptions.map((surface) => (
              <div key={surface.id} className="bg-white rounded-sm overflow-hidden card-hover border border-ivory-200">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={surface.image.url} alt={surface.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-charcoal-900 mb-1.5 text-sm">{surface.name}</h4>
                  <p className="text-xs text-charcoal-600 leading-relaxed">{surface.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 container-main">
        <div className="text-center mb-12">
          <span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">Ứng dụng</span>
          <h2 className="text-3xl font-bold text-charcoal-900 mt-2">Phù Hợp Với Mọi Công Trình</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'Căn hộ cao cấp', img: 'https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Khách sạn 5 sao', img: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Văn phòng', img: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Bệnh viện', img: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Trường học', img: 'https://images.pexels.com/photos/8471834/pexels-photo-8471834.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Resort', img: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400' },
          ].map((app) => (
            <div key={app.name} className="group cursor-pointer">
              <div className="aspect-square rounded-sm overflow-hidden mb-2">
                <img src={app.img} alt={app.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="text-center text-xs font-semibold text-charcoal-700 group-hover:text-espresso-700 transition-colors">
                {app.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-main">
        <div className="bg-espresso-700 rounded-sm p-10 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Cần Tư Vấn Sản Phẩm?</h3>
          <p className="text-espresso-200 mb-6 max-w-lg mx-auto text-sm">
            Đội ngũ kỹ thuật Lumi sẵn sàng hỗ trợ lựa chọn sản phẩm phù hợp, báo giá chi tiết và hồ sơ kỹ thuật cho dự án của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-6 py-3 rounded-sm transition-colors">
              Nhận báo giá miễn phí <ArrowRight size={16} />
            </button>
            <a href="tel:1900xxxx"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-espresso-800 font-semibold px-6 py-3 rounded-sm transition-all">
              <Phone size={16} /> Gọi ngay tư vấn
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-charcoal-950/70 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}>
            <div className="grid md:grid-cols-2">
              <div className="aspect-square md:aspect-auto">
                <img src={selectedProduct.image.url} alt={selectedProduct.image.alt}
                  className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 mb-3">
                  {selectedProduct.fireRating !== 'Không yêu cầu' && (
                    <span className="text-xs font-bold bg-charcoal-900 text-gold-400 px-2.5 py-1 rounded-full">
                      {selectedProduct.fireRating}
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">{selectedProduct.name}</h2>
                <p className="text-sm text-charcoal-600 leading-relaxed mb-5">{selectedProduct.shortDescription}</p>
                <div className="space-y-3 mb-5">
                  {[['Độ dày', selectedProduct.thickness], ['Cách âm', selectedProduct.soundInsulation], ['Tiêu chuẩn', selectedProduct.standard]].map(([label, value]) => (
                    <div key={label} className="flex items-center gap-3 text-sm">
                      <span className="text-charcoal-500 w-28 flex-shrink-0">{label}:</span>
                      <span className="font-semibold text-charcoal-900">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mb-5">
                  <div className="text-sm font-semibold text-charcoal-900 mb-2">Bề mặt hoàn thiện:</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.surfaces.map((s) => (
                      <span key={s} className="text-xs bg-ivory-100 text-charcoal-700 px-2.5 py-1 rounded">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-sm font-semibold text-charcoal-900 mb-2">Ứng dụng:</div>
                  <div className="space-y-1.5">
                    {selectedProduct.applications.map((app) => (
                      <div key={app} className="flex items-center gap-2 text-sm text-charcoal-700">
                        <CheckCircle2 size={13} className="text-gold-600 flex-shrink-0" />
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
                <button onClick={() => { setSelectedProduct(null); onNavigate('contact'); }}
                  className="btn-primary w-full justify-center">
                  Nhận báo giá sản phẩm này <ArrowRight size={16} />
                </button>
              </div>
            </div>
            <button onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 w-8 h-8 bg-ivory-100 hover:bg-ivory-200 rounded-full flex items-center justify-center text-charcoal-600 transition-colors text-lg font-bold">
              ×
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
