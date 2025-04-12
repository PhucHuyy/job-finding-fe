import { Link, useNavigate } from 'react-router-dom';
import logoWhite from '../../../assets/img/logo-white.png';

import { footerMenuItems } from '../../../data/footerData';

export default function FooterMenu() {
  const navigate = useNavigate();
  return (
    <div className="py-6 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0 max-w-[140px]">
            <img
              src={logoWhite}
              alt="Footer Logo"
              className="w-32 cursor-pointer"
              onClick={() => {
                navigate('/');
              }}
            />
          </div>
          <div className="flex flex-wrap gap-6 text-sm font-semibold text-gray-300 bg-custom-gray rounded-lg p-4">
            {footerMenuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-gray-300 hover:text-green-500 transition-colors duration-300 text-sm font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
