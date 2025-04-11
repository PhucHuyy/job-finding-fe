import { footerNavigationItems } from '../../../data/footerData';

interface FooterNavigationProps {
  title: string;
}

export default function FooterNavigation({ title }: FooterNavigationProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="text-gray-400 text-sm space-y-2">
        {footerNavigationItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.path}
              className="hover:text-green-500 transition-colors duration-300"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
