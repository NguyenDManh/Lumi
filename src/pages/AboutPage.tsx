import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Award, Factory, Users, Clock } from 'lucide-react';
import { mockProjects, mockPressArticles, mockTeam } from '../data/mockData';

interface AboutPageProps { onNavigate: (page: string) => void; }

const tabs = [
  { id: 'intro', slug: '/gioi-thieu', label: 'Giới thiệu' },
  { id: 'capacity', slug: '/gioi-thieu/ho-so-nang-luc', label: 'Hồ sơ năng lực' },
  { id: 'projects', slug: '/gioi-thieu/du-an-tieu-bieu', label: 'Dự án tiêu biểu' },
  { id: 'press', slug: '/gioi-thieu/bao-chi-noi-ve-lumi', label: 'Báo chí nói về Lumi' },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const [activeTab, setActiveTab] = useState('intro');

  useEffect(() => {
    const handleLocationChange = () => {
      const currentPath = window.location.pathname; // Lấy ra ví dụ chính xác: "/gioi-thieu/ho-so-nang-luc"
      
      // Tìm tab có slug trùng hoàn toàn với URL hiện tại
      const matchedTab = tabs.find((tab) => tab.slug === currentPath);
      
      if (matchedTab) {
        setActiveTab(matchedTab.id);
        
        // Cuộn mượt lên đầu nội dung
        const mainElement = document.querySelector('main');
        if (mainElement) {
          mainElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (currentPath === '/gioi-thieu') {
        // Mặc định nếu chỉ vào /gioi-thieu thì mở tab intro
        setActiveTab('intro');
      }
    };

    // Chạy khi load trang
    handleLocationChange();

    // Lắng nghe sự kiện thay đổi URL (bấm từ Navbar hoặc bấm Back/Forward của trình duyệt)
    window.addEventListener('popstate', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Hàm xử lý khi click trực tiếp vào tab button trên trang giới thiệu
  const handleTabClick = (tabId: string, slug: string) => {
    setActiveTab(tabId);
    // Đẩy slug sạch lên URL (Ví dụ: /gioi-thieu/ho-so-nang-luc)
    window.history.pushState({}, '', slug);
  };
  
  const fmtDate = (iso: string) =>
    new Date(iso).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });

  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-charcoal-900 text-white py-16">
        <div className="container-main">
          <span className="text-gold-400 font-semibold text-xs uppercase tracking-widest">Về chúng tôi</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5 leading-tight text-white">
            Lumi – Thương Hiệu Cửa Gỗ Chống Cháy Cao Cấp
          </h1>
          <p className="text-ivory-300 text-lg leading-relaxed">
            Được phát triển bởi Bách Khoa Việt Nam (BKVN), Lumi tập trung phục vụ phân khúc cao cấp với sản phẩm cửa gỗ chống cháy đạt tiêu chuẩn EI60, thẩm mỹ hoàn hảo và dịch vụ trọn gói từ sản xuất đến nghiệm thu.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="bg-white border-b border-ivory-200 sticky top-16 z-30">
        <div className="container-main flex gap-0 overflow-x-auto">
          {tabs.map((tab) => (
            <button 
              key={tab.id} 
              onClick={() => handleTabClick(tab.id, tab.slug)} // <-- SỬA TẠI ĐÂY: Thay đổi hàm click để cập nhật URL sạch
              className={`px-6 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-gold-500 text-espresso-700'
                  : 'border-transparent text-charcoal-500 hover:text-charcoal-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container-main mt-12">
        {/* ── Intro ── */}
        {activeTab === 'intro' && (
          <div className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-14 items-start mb-16">
              <div>
                <span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">Câu chuyện thương hiệu</span>
                <h2 className="text-3xl font-bold text-charcoal-900 mt-2 mb-5">
                  Lumi – Định Hướng Cao Cấp, Thẩm Mỹ Hoàn Hảo
                </h2>
                <div className="space-y-4 text-charcoal-600 leading-relaxed text-sm">
                  <p>Lumi là thương hiệu cửa gỗ cao cấp thuộc hệ sinh thái Bách Khoa Việt Nam (BKVN), được định hướng tập trung vào phân khúc cao cấp – nơi yêu cầu sự kết hợp hoàn hảo giữa thẩm mỹ nội thất và tiêu chuẩn an toàn PCCC.</p>
                  <p>Khác với cửa thép chống cháy thông thường, cửa gỗ Lumi mang vẻ đẹp của nội thất cao cấp với bề mặt Veneer gỗ tự nhiên, Laminate hoặc Melamine, đồng thời đáp ứng đầy đủ tiêu chuẩn chống cháy EI60 theo TCVN 9383:2012.</p>
                  <p>Lumi phục vụ các dự án: căn hộ cao cấp, khách sạn 5 sao, resort, tòa nhà văn phòng, bệnh viện quốc tế và trường học quốc tế.</p>
                </div>
                <div className="mt-8 space-y-3">
                  {[
                    'Phân khúc cao cấp – thẩm mỹ nội thất hoàn hảo',
                    'Đạt chuẩn chống cháy EI60, TCVN 9383:2012',
                    'Đa dạng bề mặt: Veneer, Laminate, Melamine, Sơn PU',
                    'Cách âm 30–40dB, không chứa formaldehyde',
                    'Trọn gói từ sản xuất đến nghiệm thu PCCC',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-gold-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-charcoal-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {mockTeam.docs.map((item) => (
                  <div key={item.id} className="rounded-sm overflow-hidden border border-ivory-200">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={item.image.url} alt={item.image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="bg-ivory-100 p-3">
                      <div className="font-semibold text-sm text-charcoal-900">{item.name}</div>
                      <div className="text-xs text-charcoal-500 mt-1 leading-relaxed">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission bar */}
            <div className="bg-charcoal-900 rounded-sm p-10 text-white">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Award, title: 'Sứ mệnh', desc: 'Cung cấp giải pháp cửa gỗ chống cháy cao cấp, đồng bộ thẩm mỹ và an toàn cho mọi công trình.' },
                  { icon: Users, title: 'Đối tượng phục vụ', desc: 'Chủ đầu tư dự án cao cấp, kiến trúc sư, nhà thầu xây dựng và các chuỗi khách sạn 5 sao.' },
                  { icon: Clock, title: 'Cam kết', desc: 'Tiến độ nhanh, chất lượng cao, hỗ trợ kỹ thuật 24/7 và bảo hành minh bạch.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-gold-500/20 rounded flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-gold-400" />
                    </div>
                    <div>
                      <div className="font-bold mb-1.5 text-gold-300">{item.title}</div>
                      <div className="text-ivory-400 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Capacity ── */}
        {activeTab === 'capacity' && (
          <div className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-14 mb-16">
              <div>
                <span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">Hồ sơ năng lực</span>
                <h2 className="text-3xl font-bold text-charcoal-900 mt-2 mb-6">Năng Lực Sản Xuất & Dịch Vụ</h2>
                <div className="space-y-5">
                  {[
                    { icon: Factory, title: 'Nhà máy hiện đại', desc: 'Công suất sản xuất lên đến 150 bộ cửa/ngày. Chủ động từ sản xuất đến giao hàng, không phụ thuộc nguồn cung bên ngoài.' },
                    { icon: CheckCircle2, title: 'Quy trình kiểm soát chất lượng', desc: 'Kiểm tra nghiêm ngặt từng công đoạn sản xuất. Mỗi sản phẩm đều được kiểm định trước khi xuất xưởng.' },
                    { icon: Award, title: 'Chứng nhận & tiêu chuẩn', desc: 'Đạt tiêu chuẩn TCVN 9383:2012. Sản phẩm đã thực nghiệm và có báo cáo đốt mẫu đạt EI60.' },
                    { icon: Users, title: 'Đội ngũ kỹ thuật', desc: 'Chuyên gia kỹ thuật giàu kinh nghiệm, hỗ trợ trực tiếp từ thiết kế, thi công đến nghiệm thu PCCC.' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-4 bg-ivory-100 rounded-sm">
                      <div className="w-10 h-10 bg-gold-100 rounded flex items-center justify-center flex-shrink-0">
                        <item.icon size={17} className="text-espresso-700" />
                      </div>
                      <div>
                        <div className="font-semibold text-charcoal-900 mb-1 text-sm">{item.title}</div>
                        <div className="text-xs text-charcoal-600 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-6">Quy Trình Phục Vụ Trọn Gói</h3>
                <div className="space-y-3">
                  {[
                    { step: '01', title: 'Tiếp nhận yêu cầu', desc: 'Tư vấn kỹ thuật, khảo sát dự án, lập phương án và báo giá chi tiết.' },
                    { step: '02', title: 'Thiết kế & ký kết', desc: 'Cung cấp hồ sơ kỹ thuật, bản vẽ CAD, ký hợp đồng và chốt tiến độ.' },
                    { step: '03', title: 'Sản xuất tại nhà máy', desc: 'Sản xuất theo đúng thông số kỹ thuật, kiểm tra chất lượng từng lô hàng.' },
                    { step: '04', title: 'Vận chuyển & thi công', desc: 'Vận chuyển đến công trình, lắp đặt bởi đội ngũ thi công chuyên nghiệp.' },
                    { step: '05', title: 'Nghiệm thu PCCC', desc: 'Hỗ trợ toàn bộ hồ sơ, đồng hành cùng khách hàng trong quá trình nghiệm thu.' },
                    { step: '06', title: 'Bảo hành & bảo trì', desc: 'Chính sách bảo hành rõ ràng, phản hồi nhanh, hỗ trợ kỹ thuật 24/7.' },
                  ].map((item, i) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <div className="relative flex-shrink-0">
                        <div className="w-9 h-9 bg-espresso-700 text-gold-300 rounded-full flex items-center justify-center font-bold text-xs">
                          {item.step}
                        </div>
                        {i < 5 && <div className="absolute top-9 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gold-200" />}
                      </div>
                      <div className="pb-4">
                        <div className="font-semibold text-charcoal-900 text-sm">{item.title}</div>
                        <div className="text-xs text-charcoal-600 mt-1 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <button onClick={() => onNavigate('catalogue')} className="btn-primary">
                Tải hồ sơ năng lực <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ── Projects ── */}
        {activeTab === 'projects' && (
          <div className="animate-fade-in">
            <div className="mb-10">
              <span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">Dự án tiêu biểu</span>
              <h2 className="text-3xl font-bold text-charcoal-900 mt-2">Công Trình Đã Thực Hiện</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockProjects.docs.map((project) => (
                <div key={project.id} className="bg-white border border-ivory-200 rounded-sm overflow-hidden card-hover">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={project.image.url} alt={project.image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider">{project.category}</span>
                    <h3 className="font-bold text-charcoal-900 mt-2 mb-2 text-sm">{project.title}</h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed mb-4">{project.description}</p>
                    <div className="flex items-center justify-between text-xs text-charcoal-500 pt-3 border-t border-ivory-100">
                      <span>{project.location}</span>
                      <span className="font-semibold text-charcoal-700">{project.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Press ── */}
        {activeTab === 'press' && (
          <div className="animate-fade-in">
            <div className="mb-10">
              <span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">Báo chí</span>
              <h2 className="text-3xl font-bold text-charcoal-900 mt-2">Báo Chí Nói Về Lumi</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockPressArticles.docs.map((article) => (
                <div key={article.id} className="bg-white border border-ivory-200 rounded-sm overflow-hidden card-hover">
                  <div className="aspect-[2/1] overflow-hidden">
                    <img src={article.image.url} alt={article.image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-espresso-700 bg-gold-50 px-2.5 py-1 rounded-full border border-gold-200">
                        {article.publisher}
                      </span>
                      <span className="text-xs text-charcoal-500">{fmtDate(article.publishedAt)}</span>
                    </div>
                    <h3 className="font-bold text-charcoal-900 mb-2 leading-snug text-sm">{article.title}</h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed">{article.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}