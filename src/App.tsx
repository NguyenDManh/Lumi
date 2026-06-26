import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CataloguePage from './pages/CataloguePage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import { mockProducts } from './data/mockData';

type Page = 'home' | 'about' | 'products' | 'productDetail' | 'catalogue' | 'news' | 'contact';

const categoryPaths = ['/san-pham/cua-go-chong-chay', '/san-pham/cua-go-cong-nghiep'];
const productSlugSet = new Set(mockProducts.docs.map((product) => product.slug));

const routeMap: Record<string, Page> = {
  '/': 'home',
  '/gioi-thieu': 'about',
  '/gioi-thieu/ho-so-nang-luc': 'about',
  '/gioi-thieu/bao-chi-noi-ve-lumi': 'about',
  '/san-pham': 'products',
  '/catalogue': 'catalogue',
  '/chia-se-kien-thuc': 'news',
  '/lien-he': 'contact',
};

const pagePath: Record<Exclude<Page, 'productDetail'>, string> = {
  home: '/',
  about: '/gioi-thieu',
  products: '/san-pham',
  catalogue: '/catalogue',
  news: '/chia-se-kien-thuc',
  contact: '/lien-he',
};

const getRouteFromPath = (pathname: string): { page: Page; slug?: string | null } => {
  if (routeMap[pathname]) {
    return { page: routeMap[pathname], slug: null };
  }

  if (pathname === '/san-pham' || categoryPaths.includes(pathname)) {
    return { page: 'products', slug: null };
  }

  if (pathname.startsWith('/san-pham/')) {
    const slug = pathname.replace('/san-pham/', '');
    if (productSlugSet.has(slug)) {
      return { page: 'productDetail', slug };
    }
    return { page: 'products', slug: null };
  }

  return { page: 'home', slug: null };
};

function App() {
  const initialRoute = getRouteFromPath(window.location.pathname);
  const [activePage, setActivePage] = useState<Page>(initialRoute.page);
  const [activeProductSlug, setActiveProductSlug] = useState<string | null>(initialRoute.slug || null);

  const handleNavigate = (page: string, path?: string) => {
    const targetPath = path || pagePath[page as Exclude<Page, 'productDetail'>] || '/';
    window.history.pushState({}, '', targetPath);

    const nextRoute = getRouteFromPath(targetPath);
    setActivePage(nextRoute.page);
    setActiveProductSlug(nextRoute.slug || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleUrlChange = () => {
      const route = getRouteFromPath(window.location.pathname);
      setActivePage(route.page);
      setActiveProductSlug(route.slug || null);
    };

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activePage, activeProductSlug]);

  const selectedProduct = activeProductSlug
    ? mockProducts.docs.find((product) => product.slug === activeProductSlug)
    : null;

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'products':
        return <ProductsPage onNavigate={handleNavigate} />;
      case 'productDetail':
        return selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            relatedProducts={mockProducts.docs.filter((product) => product.id !== selectedProduct.id)}
            onNavigate={handleNavigate}
          />
        ) : (
          <ProductsPage onNavigate={handleNavigate} />
        );
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