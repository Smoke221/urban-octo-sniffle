import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import JoinCommunityModal from './components/modals/JoinCommunityModal';
import RaiseTicketModal from './components/modals/RaiseTicketModal';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function AnimatedRoutes({
  onJoinClick,
  onTicketClick,
}: {
  onJoinClick: () => void;
  onTicketClick: () => void;
}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route
            path="/"
            element={<Home onJoinClick={onJoinClick} onTicketClick={onTicketClick} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [joinOpen, setJoinOpen] = useState(false);
  const [ticketOpen, setTicketOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar onJoinClick={() => setJoinOpen(true)} />
        <main className="flex-1">
          <AnimatedRoutes
            onJoinClick={() => setJoinOpen(true)}
            onTicketClick={() => setTicketOpen(true)}
          />
        </main>
        <Footer />
      </div>

      <JoinCommunityModal open={joinOpen} onClose={() => setJoinOpen(false)} />
      <RaiseTicketModal open={ticketOpen} onClose={() => setTicketOpen(false)} />
    </BrowserRouter>
  );
}
