import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoadingWrapper from './common/Spinner/LoadingWrapper';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import './custom-theme.css';

import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { publicRoutes } from './routes/publicRoutes';
function App() {
  return (
    <>
      <PrimeReactProvider>
        <LoadingWrapper>
          <Header />
          <Routes>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>

          <Footer />
        </LoadingWrapper>
      </PrimeReactProvider>
    </>
  );
}

export default App;
