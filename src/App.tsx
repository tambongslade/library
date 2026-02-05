import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { ScrollToTop } from './ScrollToTop';
import { Hero } from './Hero';
import { Services } from './Services';
import { Footer } from './Footer';
import { Shop } from './pages/Shop';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { ServiceDetail } from './pages/ServiceDetail';
import { Pricing } from './pages/Pricing';
import { HowItWorks } from './pages/HowItWorks';
import { BookReader } from './pages/BookReader';


const Home = () => (
  <>
    <Hero />
    <Services />

    {/* Newsletter Section */}
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded bg-white/10 text-white font-bold text-sm mb-4 tracking-wider uppercase backdrop-blur-sm">
          Restez Informé
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Abonnez-vous à notre Newsletter Stratégique
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
          Recevez les dernières analyses économiques, tendances de marché et actualités directement dans votre boîte mail.
        </p>

        <form className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 transition-all backdrop-blur-sm"
          />
          <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-xl shadow-primary/30 transition-all whitespace-nowrap">
            S'abonner
          </button>
        </form>
      </div>
    </section>
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/read/:bookId" element={<BookReader />} />
            <Route path="/read" element={<BookReader />} /> {/* Fallback for demo without ID */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback routes for demo links */}
            <Route path="*" element={<Home />} />
            <Route path="/services/*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
