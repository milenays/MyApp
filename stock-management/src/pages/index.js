import { NextUIProvider } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Button auto shadow>
          NextUI Button
        </Button>
      </div>
    </NextUIProvider>
  );
}
