import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import { I18nProvider, useI18n } from './lib/i18n';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductsPage from './pages/ProductsPage';
import StartPage from './pages/StartPage';
import { Language } from './types';

function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#111424]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

/** Keeps the previous site's /en, /fr and /ar links working. */
function LanguageRedirect({ lang }: { lang: Language }) {
  const { setLanguage } = useI18n();
  useEffect(() => {
    setLanguage(lang);
  }, [lang]);
  return <Navigate to="/" replace />;
}

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/start" element={<StartPage />} />
            <Route path="/tshirts" element={<Navigate to="/products/t-shirts" replace />} />
            <Route path="/en" element={<LanguageRedirect lang="en" />} />
            <Route path="/fr" element={<LanguageRedirect lang="fr" />} />
            <Route path="/ar" element={<LanguageRedirect lang="ar" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  );
}
