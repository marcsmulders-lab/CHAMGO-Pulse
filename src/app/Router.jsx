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
      </Routes>
    </Router>
  );
}
