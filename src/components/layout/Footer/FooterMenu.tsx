import logoWhite from '../../../assets/img/logo-white.png';

import { footerMenuItems } from '../../../data/footerData';

export default function FooterMenu() {
  return (
    <div className="py-6 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src={logoWhite} alt="Footer Logo" className="w-32" />
          </div>
          <div className="flex flex-wrap gap-6">
            {footerMenuItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="text-gray-300 hover:text-green-500 transition-colors duration-300 text-sm font-semibold"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
