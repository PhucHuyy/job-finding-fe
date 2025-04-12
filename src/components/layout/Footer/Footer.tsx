import FooterMenu from './FooterMenu';
import FooterWidget from './FooterWidget';
export default function Footer() {
  return (
    <div className="bg-custom-gray w-full px-[15px]">
      <FooterMenu />
      <hr />
      <FooterWidget />
    </div>
  );
}
