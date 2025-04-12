import { Button } from 'primereact/button';
import '../../../App.css';
import logoWhite from '../../../assets/img/logo-white.png';
import HeaderMenuItem from './HeaderMenuItem';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-custom-gray w-full h-20 flex justify-between items-center px-[15px] sticky top-0">
        <div className="pl-16">
          <img
            src={logoWhite}
            alt="icon-job-stock"
            className="w-[200px] cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>

        <div className="flex items-center space-x-4">
          <HeaderMenuItem />

          <div className="text-3xl text-green-300">|</div>
          <Button label="Sign in now" severity="success" />
        </div>
      </div>
    </>
  );
}
