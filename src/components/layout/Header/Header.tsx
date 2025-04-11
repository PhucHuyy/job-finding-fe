import { Button } from 'primereact/button';
import '../../../App.css';
import logoWhite from '../../../assets/img/logo-white.png';
import HeaderMenuItem from './HeaderMenuItem';

export default function Header() {
  return (
    <>
      <div className="bg-custom-gray w-full h-20 fixed top-0 flex justify-between items-center px-[15px]">
        <div className="pl-16">
          <img src={logoWhite} alt="icon-job-stock" className="w-[200px]" />
        </div>

        <div className="flex items-center space-x-4">
          <HeaderMenuItem />

          <span className="text-white">|</span>
          <Button label="Sign in now" severity="success" />
        </div>
      </div>
    </>
  );
}
