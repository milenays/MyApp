"use client";

import { useState } from 'react';
import { Link, Switch, Navbar, Text } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

export default function Sidebar() {
  const { setTheme } = useNextTheme();
  const [isDark, setIsDark] = useState(true);

  const handleThemeChange = () => {
    setIsDark(!isDark);
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Text h4 className="text-white">My App</Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Switch 
          checked={isDark}
          iconOn={<MoonIcon />}
          iconOff={<SunIcon />}
          onChange={handleThemeChange}
        />
      </Navbar.Content>
      <Navbar.Collapse>
        <Navbar.CollapseItem>
          <Link href="/" className="text-white">Dashboard</Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href="/orders" className="text-white">Orders</Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem title="Products">
          <Link href="/products" className="text-white">Products List</Link>
          <Link href="/products/category" className="text-white">Category</Link>
          <Link href="/products/brand" className="text-white">Brand</Link>
          <Link href="/products/tax" className="text-white">Tax</Link>
          <Link href="/products/tag" className="text-white">Tag</Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem title="Settings">
          <Link href="/settings/integrations" className="text-white">Integrations</Link>
          <Link href="/settings/templates" className="text-white">Templates</Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
}
