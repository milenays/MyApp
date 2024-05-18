"use client";

import { useState } from 'react';
import { Switch, Navbar, NavbarBrand, NavbarContent, NavbarItem, Text } from "@nextui-org/react"; // Doğru bileşen adları
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
      <NavbarBrand>
        <Text h4 className="text-white">My App</Text>
      </NavbarBrand>
      <NavbarContent>
        <Switch 
          checked={isDark}
          iconOn={<MoonIcon />}
          iconOff={<SunIcon />}
          onChange={handleThemeChange}
        />
      </NavbarContent>
      <Navbar.Collapse>
        <NavbarItem>
          <Link href="/" className="text-white">Dashboard</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/orders" className="text-white">Orders</Link>
        </NavbarItem>
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
