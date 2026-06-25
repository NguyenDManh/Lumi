import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CataloguePage from './pages/CataloguePage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';

type Page = 'home' | 'about' | 'products' | 'catalogue' | 'news' | 'contact';

// Bổ sung bảng map ngược từ URL sang Page tương ứng (giống bên Header) để check khi F5
const pageMap: Record<string, Page> = {
  '/': 'home', 
  '/gioi-thieu': 'about', 
  '/gioi-thieu/ho-so-nang-luc': 'about',
  '/gioi-thieu/bao-chi-noi-ve-lumi': 'about', 
  '/san-pham': 'products', 
  '/san-pham/cua-go-chong-chay': 'products',
  '/san-pham/cua-go-cong-nghiep': 'products', 
  '/catalogue': 'catalogue',
  '/chia-se-kien-thuc': 'news', 
  '/lien-he': 'contact',
};

function App() {
  // SỬA TẠI ĐÂY: Thay vì viết cứng 'home', ta đọc từ pathname hiện tại của trình duyệt
  const [activePage, setActivePage] = useState<Page>(() => {
    const currentPath = window.location.pathname;
    return pageMap[currentPath] || 'home';
  });

  const handleNavigate = (page: string) => {
    setActivePage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SỬA TẠI ĐÂY: Lắng nghe sự kiện URL thay đổi (khi bấm nút Back/Forward của trình duyệt hoặc khi Header phát popstate)
  useEffect(() => {
    const handleUrlChange = () => {
      const currentPath = window.location.pathname;
      setActivePage(pageMap[currentPath] || 'home');
    };

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'products':
        return <ProductsPage onNavigate={handleNavigate} />;
      case 'catalogue':
        return <CataloguePage onNavigate={handleNavigate} />;
      case 'news':
        return <NewsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header activePage={activePage} onNavigate={handleNavigate} />
      <div className="flex-1">
        {renderPage()}
      </div>
      <div className="bg-espresso-900 text-white">
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}

export default App;