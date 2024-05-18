"use client";

import { useState } from 'react';
import { Collapse, Text, Link, Switch } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export default function Sidebar() {
  const { setTheme } = useNextTheme();
  const [isDark, setIsDark] = useState(true);

  const handleThemeChange = () => {
    setIsDark(!isDark);
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-between px-6 py-4">
        <Text h4 className="text-white">My App</Text>
        <Switch 
          checked={isDark}
          iconOn={<MoonIcon />}
          iconOff={<SunIcon />}
          onChange={handleThemeChange}
        />
      </div>
      <Collapse.Group>
        <Collapse title="Dashboard">
          <Link href="/" className="text-white">Dashboard</Link>
        </Collapse>
        <Collapse title="Orders">
          <Link href="/orders" className="text-white">Orders</Link>
        </Collapse>
        <Collapse title="Products">
          <Link href="/products" className="text-white">Products List</Link>
          <Link href="/products/category" className="text-white">Category</Link>
          <Link href="/products/brand" className="text-white">Brand</Link>
          <Link href="/products/tax" className="text-white">Tax</Link>
          <Link href="/products/tag" className="text-white">Tag</Link>
        </Collapse>
        <Collapse title="Settings">
          <Link href="/settings/integrations" className="text-white">Integrations</Link>
          <Link href="/settings/templates" className="text-white">Templates</Link>
        </Collapse>
      </Collapse.Group>
    </div>
  );
}
