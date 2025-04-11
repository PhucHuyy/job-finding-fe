import FooterAbout from '../Footer/FooterAbout';
import FooterNavigation from '../Footer/FooterNavigation';
import FooterConnect from '../Footer/FooterConnect';

export default function FooterWidget() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white">
          <FooterAbout />
          <FooterNavigation title="All Navigation" />
          <FooterNavigation title="All Categories" />
          <FooterConnect />
        </div>
      </div>
    </div>
  );
}
