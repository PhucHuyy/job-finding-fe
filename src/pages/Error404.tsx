import { Button } from 'primereact/button';

export default function Error404() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-3">
          <div className="text-center">
            <h1 className="text-[250px] font-bold text-gray-800 mb-4">
              4<span className="text-green-500">0</span>4
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              Oops...looks like we got lost
            </p>
            <Button
              label="Let's Go Home"
              className="p-button-lg"
              severity="success"
              rounded
              onClick={() => (window.location.href = '/')}
            />
          </div>
        </div>
      </div>
    </>
  );
}
