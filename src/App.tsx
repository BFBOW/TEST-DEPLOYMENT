import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './lib/scroll-to-top';
import HomePage from './components/pages/HomePage';
import WhoWeArePage from './components/pages/WhoWeArePage';
import EventsPage from './components/pages/EventsPage';
import DonatePage from './components/pages/DonatePage';
import SpiritPage from './components/pages/SpiritPage';
import FindSupportPage from './components/pages/FindSupportPage';
import JoinMissionPage from './components/pages/JoinMissionPage';
import HolisticCarePage from './components/pages/HolisticCarePage';
import EvangelismPage from './components/pages/EvangelismPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/spirit" element={<SpiritPage />} />
            <Route path="/find-support" element={<FindSupportPage />} />
            <Route path="/find-support/holistic-care" element={<HolisticCarePage />} />
            <Route path="/who-we-are" element={<WhoWeArePage />} />
            <Route path="/join-mission" element={<JoinMissionPage />} />
            <Route path="/join-mission/evangelism" element={<EvangelismPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
