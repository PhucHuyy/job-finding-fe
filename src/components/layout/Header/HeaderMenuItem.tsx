import { useState } from 'react';
import { menuItems } from '../../../data/headerData';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const MegaMenu = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuClick = (label: string) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  return (
    <div className="bg-[#38444c] border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-8 text-base font-semibold text-white relative">
          {menuItems.map((item) => (
            <div key={item.label} className="relative cursor-pointer">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => handleMenuClick(item.label)}
                    className="flex items-center gap-1 hover:text-green-400 transition cusor-pointer"
                  >
                    {item.label}
                  </button>

                  {openMenu === item.label && (
                    <div
                      onMouseLeave={() => setOpenMenu(null)}
                      className="absolute top-full left-0 mt-2 z-50"
                    >
                      <DropdownMenu sections={item.dropdown.sections} />
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href || '#'}
                  className="hover:text-green-400 transition"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
