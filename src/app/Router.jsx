import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardOverview from './dashboard/DashboardOverview';
import ProjectList from './projecten/ProjectList';
import ProjectDetail from './projecten/ProjectDetail';
import ParticipatieOverview from './participatie/ParticipatieOverview';
import BezwaarschriftList from './bezwaren/BezwaarschriftList';
import BezwaarschriftDetail from './bezwaren/BezwaarschriftDetail';
import VergunningList from './vergunningen/VergunningList';
import OpenNormScore from './openNorm/OpenNormScore';

import Navbar from '../components/Navbar';
import Bio2Overview from './bio2/Bio2Overview';
import Bio2Detail from './bio2/Bio2Detail';

import SlmOverview from '../theme/slm/SlmOverview';
import SlmDetail from '../theme/slm/SlmDetail';

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardOverview />} />
        <Route path="/projecten" element={<ProjectList />} />
        <Route path="/projecten/:id" element={<ProjectDetail />} />
        <Route path="/participatie" element={<ParticipatieOverview />} />
        <Route path="/bezwaren" element={<BezwaarschriftList />} />
        <Route path="/bezwaren/:id" element={<BezwaarschriftDetail />} />
        <Route path="/vergunningen" element={<VergunningList />} />
        <Route path="/opennorm" element={<OpenNormScore />} />
        <Route path="/slm" element={<SlmOverview />} />
        <Route path="/slm/:id" element={<SlmDetail />} />

        <Route path="/bio2" element={<Bio2Overview />} />
        <Route path="/bio2/:id" element={<Bio2Detail />} />
      </Routes>
    </Router>
  );
}
