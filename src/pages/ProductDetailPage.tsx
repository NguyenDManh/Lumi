import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { mockProducts } from '../data/mockData';

type Product = (typeof mockProducts.docs)[number];

interface ProductDetailPageProps {
  product: Product;
  relatedProducts: Product[];
  onNavigate: (page: string, path?: string) => void;
}

const productDetails = (product: Product) => {
  return [
    ['Khả năng chống cháy', product.fireRating],
    ['Lõi cửa', product.fireRating !== 'Không yêu cầu' ? 'Khoáng chống cháy tỷ trọng cao' : 'Gỗ công nghiệp chất lượng cao'],
    ['Bề mặt', product.surfaces.join(', ')],
    ['Phụ kiện', product.fireRating !== 'Không yêu cầu' ? 'Bản lề & khóa chịu nhiệt, gioăng chịu nhiệt' : 'Bản lề & khóa tiêu chuẩn'],
    ['Kiểm định', product.fireRating !== 'Không yêu cầu' ? 'Đạt QCVN 06-2022/BXD' : 'Tiêu chuẩn nội thất'],
    ['MOQ dự án', 'Từ 20 bộ'],
    ['Bảo hành', '10 năm'],
  ] as const;
};

export default function ProductDetailPage({ product, relatedProducts, onNavigate }: ProductDetailPageProps) {
  return (
    <main className="pt-24 pb-20">
      <section className="bg-ivory-100 py-12">
        <div className="container-main">
          <div className="flex flex-wrap gap-4 text-sm text-charcoal-600 mb-8">
            <button onClick={() => onNavigate('products')} className="text-gold-600 font-semibold hover:text-gold-500 transition-colors">
              Sản phẩm
            </button>
            <span> / </span>
            <span className="font-semibold text-charcoal-900">{product.name}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
            <div className="rounded-sm overflow-hidden shadow-lg bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={product.image.url} alt={product.image.alt} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="space-y-6">
              
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {product.fireRating !== 'Không yêu cầu' && (
                    <span className="text-xs font-bold bg-charcoal-900 text-gold-400 px-3 py-1 rounded-full">
                      {product.fireRating}
                    </span>
                  )}
                  <span className="text-xs uppercase tracking-[0.16em] text-ivory-500">Cửa gỗ chống cháy cao cấp</span>
                </div>
                <h1 className="text-4xl font-bold text-charcoal-900 leading-tight mb-4">{product.name}</h1>
                <p className="text-base text-charcoal-700 leading-relaxed mb-6">{product.shortDescription}</p>

                <div className="grid gap-3 sm:grid-cols-2 mb-6">
                  <div className="rounded-sm bg-ivory-50 p-4">
                    <div className="text-sm text-charcoal-500 mb-2">Độ dày</div>
                    <div className="text-lg font-semibold text-charcoal-900">{product.thickness}</div>
                  </div>
                  <div className="rounded-sm bg-ivory-50 p-4">
                    <div className="text-sm text-charcoal-500 mb-2">Cách âm</div>
                    <div className="text-lg font-semibold text-charcoal-900">{product.soundInsulation}</div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="text-sm font-semibold text-charcoal-900">Ưu điểm nổi bật</div>
                  <div className="space-y-2 text-sm text-charcoal-700">
                    <p>• Thiết kế và hoàn thiện phù hợp công trình cao cấp, mang lại mặt đứng sang trọng và kháng cháy vượt trội.</p>
                    <p>• Kết cấu lõi khoáng giúp duy trì chất lượng chống cháy EI60, đồng thời đảm bảo cách âm và cách nhiệt tốt.</p>
                    <p>• Dễ dàng phối bộ với nội thất hiện đại nhờ nhiều lựa chọn bề mặt hoàn thiện.</p>
                  </div>
                </div>

                <div className="rounded-sm bg-ivory-50 p-6">
                  <div className="grid gap-3">
                    {productDetails(product).map(([label, value]) => (
                      <div key={label} className="flex items-start justify-between gap-4 text-sm text-charcoal-700">
                        <span className="text-charcoal-500">{label}</span>
                        <span className="font-semibold text-charcoal-900 text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  onClick={() => onNavigate('contact', '/lien-he')}
                  className="btn-primary w-full justify-center text-sm flex items-center gap-2"
                >
                  Nhận báo giá & hồ sơ kiểm định
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => onNavigate('products')}
                  className="w-full rounded-sm border border-ivory-200 bg-white text-charcoal-900 font-semibold px-5 py-3 hover:bg-ivory-100 transition-colors"
                >
                  Về bộ sưu tập sản phẩm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-main py-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">Gợi ý</span>
            <h2 className="text-3xl font-bold text-charcoal-900 mt-3">Mẫu cửa chống cháy khác</h2>
          </div>
          <p className="max-w-2xl text-sm text-charcoal-600">
            Xem thêm các mẫu cửa đang được khách hàng lựa chọn, vẫn giữ màu sắc thương hiệu tối tăm và độ sang trọng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {relatedProducts.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate('productDetail', `/san-pham/${item.slug}`)}
              className="group text-left rounded-sm overflow-hidden border border-ivory-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image.url}
                  alt={item.image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3 text-xs text-charcoal-500">
                  {item.fireRating !== 'Không yêu cầu' && (
                    <span className="bg-charcoal-900 text-gold-400 px-2 py-1 rounded-full font-semibold">{item.fireRating}</span>
                  )}
                  <span>{item.thickness}</span>
                </div>
                <h3 className="text-lg font-semibold text-charcoal-900 mb-2">{item.name}</h3>
                <p className="text-sm text-charcoal-600 leading-relaxed line-clamp-3">{item.shortDescription}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-600">
                  Chi tiết <ArrowRight size={14} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
