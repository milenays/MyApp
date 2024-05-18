"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"; // Doğru bileşen adları

export default function Sidebar() {
  return (
    <Navbar isBordered variant="floating">
      <NavbarBrand>
        <div className="text-white">My App</div>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <a href="/" className="text-white">Dashboard</a>
        </NavbarItem>
        <NavbarItem>
          <a href="/orders" className="text-white">Orders</a>
        </NavbarItem>
        <NavbarItem>
          <a href="/products" className="text-white">Products List</a>
        </NavbarItem>
        <NavbarItem>
          <a href="/products/category" className="text-white">Category</a>
        </NavbarItem>
        <NavbarItem>
          <a href="/products/brand" className="text-white">Brand</a>
        </NavbarItem>
        <NavbarItem>
          <a href="/products/tax" className="text-white">Tax</a>
        </NavbarItem>
        <NavbarItem>
          <a href="/products/tag" className="text-white">Tag</a>
        </NavbarItem>
        <NavbarItem>
          <a href="/settings/integrations" className="text-white">Integrations</a>
        </NavbarItem>
        <NavbarItem>
          <a href="/settings/templates" className="text-white">Templates</a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
