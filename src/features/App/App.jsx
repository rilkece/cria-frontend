//React and Core Components
import { Routes, Route } from 'react-router-dom';

//Inbuilt Components
import Header from '../Header';
import Adm from '../../screens/Adm';
import Blog from '../../screens/Blog';
import Files from '../../screens/Files';
import Ideia from '../../screens/Ideia';
import Portfolio from '../../screens/Portfolio';
import Training from '../../screens/Training';
import Profile from '../../screens/Profile';

//Styles Components

//Third party components

//Contexts & Services

export default function App() {
  return (
    <div className="flex-container">
      <Header />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/arquivos" element={<Files />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/formacao" element={<Training />} />
        <Route path="/ideia" element={<Ideia />} />
        <Route path="/adm" element={<Adm />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </div>
  );
}
