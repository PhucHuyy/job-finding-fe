import React from 'react';
import { Link } from 'react-router-dom';
import { MegaMenuItem } from '../../../data/headerData';

interface Props {
  sections: NonNullable<MegaMenuItem['dropdown']>['sections'];
}

const DropdownMenu: React.FC<Props> = ({ sections }) => {
  return (
    <div className="grid grid-cols-2 gap-6 min-w-[320px] p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      {sections.map((section) => (
        <div key={section.title}>
          <p className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
            {section.title}
          </p>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href || '#'}
                  className="text-gray-700 hover:text-green-400 dark:text-gray-300 dark:hover:text-green-400 text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
