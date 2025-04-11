// src/components/layout/Footer/FooterAbout.tsx
import { footerSocialLinks } from '../../../data/footerData';

export default function FooterAbout() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">About Job Stock</h3>
      <div className="text-gray-400 text-sm">
        <p className="mb-2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </p>
        <p className="mb-2">
          7860 North Park Place
          <br />
          San Francisco, CA 94120
        </p>
        <p className="mb-2">
          <strong>Email:</strong> Support@careerdesk
        </p>
        <p className="mb-4">
          <strong>Call:</strong>{' '}
          <a href="tel:+15555555555" className="hover:text-white">
            555-555-1234
          </a>
        </p>
        <div className="flex gap-3">
          {footerSocialLinks.map((link) => (
            <a
              key={link.icon}
              href={link.path}
              className="text-gray-400 hover:text-white"
            >
              <i className={`${link.icon} text-lg`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
