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
      </NavbarContent>
    </Navbar>
  );
}
