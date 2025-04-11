import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

export default function FooterConnect() {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold mb-4">Connect Us</h3>
      <div className="space-y-4">
        <InputText
          placeholder="Your Name"
          className="w-full space-y-2 p-2 rounded-md bg-gray-700 text-white border-none focus:ring-2 focus:ring-green-500"
        />
        <InputText
          placeholder="Email"
          className="w-full p-2 rounded-md bg-gray-700 text-white border-none focus:ring-2 focus:ring-green-500"
        />
        <InputTextarea
          placeholder="Message"
          rows={2}
          className="w-full p-2 rounded-md bg-gray-700 text-white border-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <Button
        label="Login"
        severity="success"
        className="p-button-primary border-none"
      />
    </div>
  );
}
