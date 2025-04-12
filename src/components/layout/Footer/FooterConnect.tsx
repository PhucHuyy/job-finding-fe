import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

export default function FooterConnect() {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold mb-4">Connect Us</h3>
      <div className="space-y-2">
        <div>
          <InputText
            placeholder="Your Name"
            className="w-full space-y-2 p-2 rounded-md bg-gray-700 text-white border-none focus:ring-2 "
          />
        </div>
        <div>
          <InputText
            placeholder="Email"
            className="w-full p-2 rounded-md bg-gray-700 text-white border-none focus:ring-2 "
          />
        </div>
        <div>
          <InputTextarea
            placeholder="Message"
            rows={2}
            className="w-full p-2 rounded-md bg-gray-700 text-white border-none focus:ring-2 "
          />
        </div>
      </div>
      <Button
        label="Login"
        severity="success"
        className="p-button-primary border-none w-[150px] rounded-md"
      />
    </div>
  );
}
