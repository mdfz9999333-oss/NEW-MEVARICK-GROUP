import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { PartnersPage } from './pages/PartnersPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route
              path="/services/porta-cabins"
              element={<ServiceDetailPage slug="porta-cabins" />}
            />
            <Route
              path="/services/factory-services"
              element={<ServiceDetailPage slug="factory-services" />}
            />
            <Route
              path="/services/consumables-tools"
              element={<ServiceDetailPage slug="consumables-tools" />}
            />
            <Route
              path="/services/safety"
              element={<ServiceDetailPage slug="safety" />}
            />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}
