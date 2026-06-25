import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/mockData';

const projectTypes = [
  'Chung cư / Căn hộ cao cấp',
  'Khách sạn / Resort 5 sao',
  'Tòa nhà văn phòng',
  'Bệnh viện quốc tế',
  'Trường học quốc tế',
  'Dự án khác',
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', projectType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-charcoal-900 text-white py-14">
        <div className="container-main">
          <span className="text-gold-400 font-semibold text-xs uppercase tracking-widest">Liên hệ</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Liên Hệ Với Lumi</h1>
          <p className="text-ivory-300 text-lg max-w-2xl leading-relaxed">
            Đội ngũ kỹ thuật và kinh doanh Lumi sẵn sàng tư vấn, báo giá và hỗ trợ mọi yêu cầu dự án của bạn.
          </p>
        </div>
      </section>

      <div className="container-main mt-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Info */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xl font-bold text-charcoal-900 mb-5">Thông Tin Liên Hệ</h2>
            {[
              { icon: Phone, title: 'Hotline 24/7', content: siteConfig.phone, sub: 'Hỗ trợ kỹ thuật và kinh doanh', href: `tel:${siteConfig.phone}` },
              { icon: Mail, title: 'Email', content: siteConfig.email, sub: 'Phản hồi trong vòng 2 giờ', href: `mailto:${siteConfig.email}` },
              { icon: MapPin, title: 'Địa chỉ', content: siteConfig.address, sub: 'Nhà máy sản xuất & Showroom', href: '#' },
              { icon: Clock, title: 'Giờ làm việc', content: 'Thứ 2 – Thứ 7: 8:00 – 18:00', sub: 'Hotline hỗ trợ 24/7', href: null },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 bg-ivory-100 rounded-sm border border-ivory-200">
                <div className="w-10 h-10 bg-gold-100 border border-gold-200 rounded flex items-center justify-center flex-shrink-0">
                  <item.icon size={17} className="text-espresso-700" />
                </div>
                <div>
                  <div className="text-xs text-charcoal-500 mb-0.5">{item.title}</div>
                  {item.href ? (
                    <a href={item.href} className="font-semibold text-charcoal-900 hover:text-espresso-700 transition-colors text-sm block">
                      {item.content}
                    </a>
                  ) : (
                    <div className="font-semibold text-charcoal-900 text-sm">{item.content}</div>
                  )}
                  <div className="text-xs text-charcoal-500 mt-0.5">{item.sub}</div>
                </div>
              </div>
            ))}

            <div className="bg-charcoal-900 rounded-sm p-5 text-white border-l-4 border-gold-500">
              <h3 className="font-bold mb-3 text-gold-400 text-sm uppercase tracking-wider">Lumi Cam Kết</h3>
              <div className="space-y-2.5">
                {[
                  'Phản hồi trong vòng 2 giờ làm việc',
                  'Báo giá miễn phí, chi tiết và minh bạch',
                  'Hỗ trợ kỹ thuật xuyên suốt dự án',
                  'Bảo hành sản phẩm rõ ràng',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-ivory-300">
                    <CheckCircle2 size={13} className="text-gold-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-ivory-200 rounded-sm p-8">
              {submitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-16 h-16 bg-gold-50 border-2 border-gold-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={30} className="text-gold-600" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-900 mb-2">Gửi yêu cầu thành công!</h3>
                  <p className="text-charcoal-600 text-sm max-w-sm mx-auto leading-relaxed">
                    Đội ngũ Lumi sẽ liên hệ với bạn trong vòng 2 giờ làm việc để tư vấn và báo giá chi tiết.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 btn-primary text-sm">
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-charcoal-900 mb-6">Nhận Báo Giá Miễn Phí</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-charcoal-700 mb-1.5 uppercase tracking-wide">
                          Họ và tên <span className="text-gold-600">*</span>
                        </label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required
                          placeholder="Nguyễn Văn A"
                          className="w-full border border-ivory-200 rounded-sm px-4 py-2.5 text-sm text-charcoal-900 placeholder-ivory-400 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-200 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-charcoal-700 mb-1.5 uppercase tracking-wide">
                          Số điện thoại <span className="text-gold-600">*</span>
                        </label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                          placeholder="0901 234 567"
                          className="w-full border border-ivory-200 rounded-sm px-4 py-2.5 text-sm text-charcoal-900 placeholder-ivory-400 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-200 transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1.5 uppercase tracking-wide">Email</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="email@congty.vn"
                        className="w-full border border-ivory-200 rounded-sm px-4 py-2.5 text-sm text-charcoal-900 placeholder-ivory-400 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-200 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1.5 uppercase tracking-wide">
                        Loại dự án <span className="text-gold-600">*</span>
                      </label>
                      <select name="projectType" value={form.projectType} onChange={handleChange} required
                        className="w-full border border-ivory-200 rounded-sm px-4 py-2.5 text-sm text-charcoal-900 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-200 transition-colors bg-white">
                        <option value="">Chọn loại dự án</option>
                        {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1.5 uppercase tracking-wide">
                        Mô tả yêu cầu
                      </label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                        placeholder="Mô tả ngắn về dự án: quy mô, số lượng cửa cần, tiến độ, yêu cầu đặc biệt..."
                        className="w-full border border-ivory-200 rounded-sm px-4 py-2.5 text-sm text-charcoal-900 placeholder-ivory-400 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-200 transition-colors resize-none" />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">
                      <Send size={15} />
                      Gửi yêu cầu báo giá
                    </button>
                    <p className="text-xs text-charcoal-500 text-center">
                      Thông tin của bạn được bảo mật tuyệt đối. Lumi cam kết không chia sẻ dữ liệu với bên thứ ba.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12 bg-ivory-100 border border-ivory-200 rounded-sm h-64 flex items-center justify-center">
          <div className="text-center text-charcoal-500">
            <MapPin size={30} className="mx-auto mb-2 text-charcoal-400" />
            <p className="text-sm font-medium text-charcoal-500">Bản đồ Google Maps</p>
            <p className="text-xs text-charcoal-500 mt-1">{siteConfig.address}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
