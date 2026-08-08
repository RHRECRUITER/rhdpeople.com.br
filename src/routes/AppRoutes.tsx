import { BrowserRouter, Route, Routes } from 'react-router';
import { LandingLayout } from '../layouts/LandingLayout';
import { Home } from '../modules/landing/pages/Home';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* rotas públicas que usam layout Landing */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
