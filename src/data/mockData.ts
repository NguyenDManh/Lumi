// Mock Data structured to mirror Payload CMS API response shape
// { docs: [...] } with id, createdAt, image: { url }

export const mockProducts = {
  docs: [
    {
      id: 'prod-001',
      createdAt: '2024-01-15T08:00:00.000Z',
      slug: 'cua-go-chong-chay-ei60-1-canh',
      category: 'cua-go-chong-chay',
      name: 'Cửa Gỗ Chống Cháy EI60 – 1 Cánh',
      shortDescription: 'Cửa gỗ chống cháy cao cấp đạt tiêu chuẩn EI60, phù hợp cho cửa chính căn hộ, cửa phòng khách sạn.',
      fireRating: 'EI60',
      thickness: '50mm',
      soundInsulation: '30–40 dB',
      standard: 'TCVN 9383:2012',
      surfaces: ['Veneer gỗ tự nhiên', 'Laminate', 'Melamine', 'Sơn PU'],
      image: {
        url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Cửa gỗ chống cháy EI60 1 cánh',
      },
      applications: ['Cửa chính căn hộ', 'Cửa phòng khách sạn', 'Cửa văn phòng'],
      featured: true,
    },
    {
      id: 'prod-002',
      createdAt: '2024-01-20T08:00:00.000Z',
      slug: 'cua-go-chong-chay-ei60-2-canh',
      category: 'cua-go-chong-chay',
      name: 'Cửa Gỗ Chống Cháy EI60 – 2 Cánh',
      shortDescription: 'Cửa gỗ chống cháy 2 cánh sang trọng, đạt chuẩn EI60, lý tưởng cho sảnh căn hộ, cửa phòng hội nghị.',
      fireRating: 'EI60',
      thickness: '50mm',
      soundInsulation: '30–40 dB',
      standard: 'TCVN 9383:2012',
      surfaces: ['Veneer gỗ tự nhiên', 'Laminate', 'Melamine'],
      image: {
        url: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Cửa gỗ chống cháy EI60 2 cánh',
      },
      applications: ['Sảnh căn hộ cao cấp', 'Phòng hội nghị', 'Cửa thông phòng'],
      featured: true,
    },
    {
      id: 'prod-003',
      createdAt: '2024-02-01T08:00:00.000Z',
      slug: 'cua-go-cong-nghiep-thong-phong',
      category: 'cua-go-cong-nghiep',
      name: 'Cửa Gỗ Công Nghiệp – Cửa Thông Phòng',
      shortDescription: 'Cửa gỗ công nghiệp cao cấp cho không gian nội thất hiện đại, đa dạng bề mặt và màu sắc.',
      fireRating: 'Không yêu cầu',
      thickness: '45mm',
      soundInsulation: '25–35 dB',
      standard: 'Tiêu chuẩn nội thất',
      surfaces: ['Veneer gỗ tự nhiên', 'Laminate', 'Melamine', 'Sơn PU'],
      image: {
        url: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Cửa gỗ công nghiệp thông phòng',
      },
      applications: ['Cửa phòng ngủ', 'Cửa nhà vệ sinh', 'Cửa thông phòng'],
      featured: false,
    },
  ],
};

export const mockProjects = {
  docs: [
    {
      id: 'proj-001',
      createdAt: '2024-03-10T08:00:00.000Z',
      slug: 'du-an-chung-cu-cao-cap-vinhomes',
      title: 'Chung Cư Cao Cấp Vinhomes',
      location: 'Hà Nội',
      category: 'Chung cư cao cấp',
      description: 'Cung cấp và lắp đặt toàn bộ hệ thống cửa gỗ chống cháy EI60 cho 500 căn hộ cao cấp. Đáp ứng đầy đủ yêu cầu nghiệm thu PCCC và thẩm mỹ kiến trúc.',
      quantity: '500 bộ cửa',
      completedAt: '2024-01-15T00:00:00.000Z',
      image: {
        url: 'https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Dự án Vinhomes',
      },
    },
    {
      id: 'proj-002',
      createdAt: '2024-02-20T08:00:00.000Z',
      slug: 'du-an-khach-san-5-sao',
      title: 'Khách Sạn 5 Sao The Reverie',
      location: 'TP. Hồ Chí Minh',
      category: 'Khách sạn 5 sao',
      description: 'Lắp đặt cửa gỗ chống cháy cao cấp cho 350 phòng khách sạn, đảm bảo tiêu chí thẩm mỹ 5 sao kết hợp an toàn PCCC tuyệt đối.',
      quantity: '350 bộ cửa',
      completedAt: '2023-11-20T00:00:00.000Z',
      image: {
        url: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Dự án khách sạn 5 sao',
      },
    },
    {
      id: 'proj-003',
      createdAt: '2024-01-05T08:00:00.000Z',
      slug: 'du-an-benh-vien-quoc-te',
      title: 'Bệnh Viện Quốc Tế FV',
      location: 'TP. Hồ Chí Minh',
      category: 'Bệnh viện quốc tế',
      description: 'Cung cấp cửa gỗ chống cháy không chứa formaldehyde cho bệnh viện quốc tế, đáp ứng yêu cầu vệ sinh y tế và an toàn PCCC.',
      quantity: '280 bộ cửa',
      completedAt: '2023-09-10T00:00:00.000Z',
      image: {
        url: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Dự án bệnh viện quốc tế',
      },
    },
  ],
};

export const mockNews = {
  docs: [
    {
      id: 'news-001',
      createdAt: '2024-05-10T08:00:00.000Z',
      slug: 'cua-go-chong-chay-ei60-la-gi',
      category: 'tin-tuc',
      title: 'Cửa Gỗ Chống Cháy EI60 Là Gì? Tại Sao Quan Trọng Với Công Trình Cao Cấp?',
      excerpt: 'Tiêu chuẩn EI60 yêu cầu cửa phải chịu được lửa và nhiệt trong 60 phút. Tìm hiểu vì sao đây là lựa chọn bắt buộc cho các dự án cao cấp.',
      readTime: '5 phút đọc',
      image: {
        url: 'https://images.pexels.com/photos/5691544/pexels-photo-5691544.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Cửa gỗ chống cháy EI60',
      },
    },
    {
      id: 'news-002',
      createdAt: '2024-04-22T08:00:00.000Z',
      slug: 'tieu-chuan-tcvn-9383-2012',
      category: 'tin-tuc',
      title: 'Tiêu Chuẩn TCVN 9383:2012 – Quy Định Về Cửa Ngăn Cháy Tại Việt Nam',
      excerpt: 'TCVN 9383:2012 là tiêu chuẩn quốc gia về cửa ngăn cháy. Hiểu đúng tiêu chuẩn giúp chủ đầu tư lựa chọn sản phẩm phù hợp và thuận lợi nghiệm thu.',
      readTime: '7 phút đọc',
      image: {
        url: 'https://images.pexels.com/photos/8941949/pexels-photo-8941949.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Tiêu chuẩn TCVN',
      },
    },
    {
      id: 'news-003',
      createdAt: '2024-04-05T08:00:00.000Z',
      slug: 'cua-go-chong-chay-vs-cua-thep',
      category: 'tin-tuc',
      title: 'Cửa Gỗ Chống Cháy Vs. Cửa Thép Chống Cháy – Nên Chọn Loại Nào?',
      excerpt: 'So sánh toàn diện giữa hai loại cửa chống cháy phổ biến nhất: ưu nhược điểm, ứng dụng phù hợp và chi phí đầu tư.',
      readTime: '8 phút đọc',
      image: {
        url: 'https://images.pexels.com/photos/7674867/pexels-photo-7674867.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'So sánh cửa gỗ và cửa thép',
      },
    },
    {
      id: 'news-004',
      createdAt: '2024-03-18T08:00:00.000Z',
      slug: 'bong-khoang-rookwool-trong-cua-chong-chay',
      category: 'tin-tuc',
      title: 'Vai Trò Của Bông Khoáng Rockwool Trong Cấu Tạo Cửa Chống Cháy',
      excerpt: 'Bông khoáng Rockwool tỷ trọng 80kg/m³ là vật liệu cốt lõi quyết định khả năng ngăn nhiệt. Tìm hiểu tại sao vật liệu này không thể thay thế.',
      readTime: '6 phút đọc',
      image: {
        url: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Bông khoáng Rockwool',
      },
    },
  ],
};

export const mockPressArticles = {
  docs: [
    {
      id: 'press-001',
      createdAt: '2024-05-15T08:00:00.000Z',
      slug: 'vnexpress-lumi-cua-go-chong-chay',
      publisher: 'VnExpress',
      publisherLogo: {
        url: 'https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=400',
        alt: 'VnExpress logo',
      },
      title: 'Lumi – Thương Hiệu Cửa Gỗ Chống Cháy Đáp Ứng Tiêu Chuẩn Quốc Tế',
      excerpt: 'Lumi đang khẳng định vị thế trong phân khúc cửa gỗ chống cháy cao cấp với tiêu chuẩn EI60 và cam kết thẩm mỹ hoàn hảo.',
      publishedAt: '2024-05-10T00:00:00.000Z',
      image: {
        url: 'https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'VnExpress bài viết',
      },
    },
    {
      id: 'press-002',
      createdAt: '2024-04-28T08:00:00.000Z',
      slug: 'cafef-lumi-giai-phap-tong-the',
      publisher: 'CafeF',
      publisherLogo: {
        url: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
        alt: 'CafeF logo',
      },
      title: 'Giải Pháp Tổng Thể Cửa Chống Cháy Cho Dự Án Bất Động Sản Cao Cấp',
      excerpt: 'Với năng lực sản xuất 150 bộ cửa/ngày, Lumi đang trở thành đối tác tin cậy của các chủ đầu tư lớn tại Việt Nam.',
      publishedAt: '2024-04-20T00:00:00.000Z',
      image: {
        url: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'CafeF bài viết',
      },
    },
  ],
};

export const mockCatalogues = {
  docs: [
    {
      id: 'cat-001',
      createdAt: '2024-01-10T08:00:00.000Z',
      title: 'Catalogue Cửa Gỗ Chống Cháy Lumi 2024',
      description: 'Bộ catalogue đầy đủ về cửa gỗ chống cháy EI60, bao gồm thông số kỹ thuật, mẫu mã và bảng màu bề mặt.',
      pages: 32,
      fileSize: '8.5 MB',
      year: '2024',
      image: {
        url: 'https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Catalogue Lumi 2024',
      },
      downloadUrl: '#',
    },
    {
      id: 'cat-002',
      createdAt: '2024-01-10T08:00:00.000Z',
      title: 'Hồ Sơ Năng Lực Lumi 2024',
      description: 'Tổng quan về năng lực sản xuất, dự án tiêu biểu, chứng nhận chất lượng và chính sách bảo hành của Lumi.',
      pages: 24,
      fileSize: '6.2 MB',
      year: '2024',
      image: {
        url: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Hồ sơ năng lực Lumi',
      },
      downloadUrl: '#',
    },
    {
      id: 'cat-003',
      createdAt: '2023-12-01T08:00:00.000Z',
      title: 'Bảng Màu Bề Mặt Cửa Lumi',
      description: 'Bộ mẫu màu đầy đủ bao gồm Veneer gỗ tự nhiên, Laminate, Melamine và các màu sơn PU hiện đại.',
      pages: 16,
      fileSize: '12.1 MB',
      year: '2024',
      image: {
        url: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Bảng màu Lumi',
      },
      downloadUrl: '#',
    },
  ],
};

export const mockStats = [
  { id: 'stat-1', number: '10+', label: 'Năm kinh nghiệm', icon: 'award' },
  { id: 'stat-2', number: '150', label: 'Bộ cửa/ngày', icon: 'factory' },
  { id: 'stat-3', number: '500+', label: 'Dự án hoàn thành', icon: 'building' },
  { id: 'stat-4', number: '24/7', label: 'Hỗ trợ kỹ thuật', icon: 'headphones' },
];

export const mockUSPs = [
  {
    id: 'usp-1',
    icon: 'flame',
    title: 'Chống Cháy EI60',
    description: 'Đạt tiêu chuẩn TCVN 9383:2012, chống cháy và cách nhiệt 60 phút, được kiểm định bởi tổ chức uy tín.',
  },
  {
    id: 'usp-2',
    icon: 'layers',
    title: 'Vật Liệu Cao Cấp',
    description: 'Lõi MGO 8mm kết hợp bông khoáng Rockwool 80kg/m³, gỗ MDF và Plywood xử lý chống cong vênh.',
  },
  {
    id: 'usp-3',
    icon: 'palette',
    title: 'Đa Dạng Bề Mặt',
    description: 'Veneer gỗ tự nhiên, Laminate, Melamine chống trầy xước, Sơn PU – tùy chỉnh theo yêu cầu dự án.',
  },
  {
    id: 'usp-4',
    icon: 'volume2',
    title: 'Cách Âm 30–40dB',
    description: 'Cấu tạo nhiều lớp với lõi tỷ trọng cao mang lại khả năng cách âm vượt trội, phù hợp khách sạn, bệnh viện.',
  },
  {
    id: 'usp-5',
    icon: 'shield-check',
    title: 'Nghiệm Thu PCCC',
    description: 'Hồ sơ đầy đủ, hỗ trợ toàn bộ quy trình nghiệm thu PCCC, CO/CQ đảm bảo thuận lợi cho chủ đầu tư.',
  },
  {
    id: 'usp-6',
    icon: 'truck',
    title: 'Trọn Gói Dịch Vụ',
    description: 'Sản xuất → vận chuyển → thi công → nghiệm thu → bảo hành. Nhà máy công suất 150 bộ/ngày.',
  },
];

export const mockTeam = {
  docs: [
    {
      id: 'team-1',
      name: 'Đội Ngũ Kỹ Thuật',
      description: 'Đội kỹ thuật giàu kinh nghiệm, hỗ trợ trực tiếp từ tư vấn đến lắp đặt và bảo hành.',
      image: {
        url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Đội ngũ kỹ thuật',
      },
    },
    {
      id: 'team-2',
      name: 'Xưởng Sản Xuất',
      description: 'Nhà máy hiện đại với công suất 150 bộ cửa/ngày, kiểm soát chất lượng nghiêm ngặt từng công đoạn.',
      image: {
        url: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Xưởng sản xuất',
      },
    },
  ],
};

export const siteConfig = {
  brandName: 'Lumi',
  tagline: 'Cửa Gỗ Chống Cháy Cao Cấp',
  description: 'Giải pháp cửa gỗ chống cháy EI60 toàn diện cho dự án căn hộ, khách sạn, bệnh viện và trường học.',
  phone: '1900 xxxx',
  email: 'info@lumi.bkvietnam.vn',
  address: 'Hà Nội, Việt Nam',
  facebook: '#',
  youtube: '#',
};
