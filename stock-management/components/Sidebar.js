"use client";

import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Switch, Text } from "@nextui-org/react"; // Doğru bileşen adları
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
        <Text b className="text-white">My App</Text>
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
          <a href="/" className="text-white">Dashboard</a>
        </NavbarItem>
        <NavbarItem>
          <a href="/orders" className="text-white">Orders</a>
        </NavbarItem>
        <Navbar.CollapseItem title="Products">
          <a href="/products" className="text-white">Products List</a>
          <a href="/products/category" className="text-white">Category</a>
          <a href="/products/brand" className="text-white">Brand</a>
          <a href="/products/tax" className="text-white">Tax</a>
          <a href="/products/tag" className="text-white">Tag</a>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem title="Settings">
          <a href="/settings/integrations" className="text-white">Integrations</a>
          <a href="/settings/templates" className="text-white">Templates</a>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
}
