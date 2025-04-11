import './App.css';
import LoadingWrapper from './common/Spinner/LoadingWrapper';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';

import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
function App() {
  return (
    <>
      <PrimeReactProvider>
        <LoadingWrapper>
          <Header />
          <Footer />
        </LoadingWrapper>
      </PrimeReactProvider>
    </>
  );
}

export default App;
