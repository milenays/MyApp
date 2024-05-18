"use client";

import { Navbar, Button, Link } from "@nextui-org/react"; // Doğru bileşen adları
import '../src/styles/globals.css'; // Doğru yolu kontrol ettim
import React from 'react';

const Sidebar = () => {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  const menuItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Orders', path: '/orders' },
    {
      name: 'Products',
      subItems: [
        { name: 'Products List', path: '/products' },
        { name: 'Category', path: '/products/category' },
        { name: 'Brand', path: '/products/brand' },
        { name: 'Tax', path: '/products/tax' },
        { name: 'Tag', path: '/products/tag' }
      ]
    },
    {
      name: 'Settings',
      subItems: [
        { name: 'Integrations', path: '/settings/integrations' },
        { name: 'Templates', path: '/settings/templates' }
      ]
    }
  ];

  return (
    <div className="sidebar">
      <Navbar variant="static">
        <Navbar.Brand>
          <div className="text-white">My App</div>
        </Navbar.Brand>
        <Navbar.Content>
          {menuItems.map((item) => (
            <Navbar.Item key={item.name}>
              {item.subItems ? (
                <div className="dropdown">
                  <Button className={currentPath.startsWith(item.subItems[0].path) ? 'active' : ''}>
                    {item.name}
                  </Button>
                  <div className="dropdown-content">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.path}
                        className={currentPath === subItem.path ? 'active' : 'text-white'}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.path}
                  className={currentPath === item.path ? 'active' : 'text-white'}
                >
                  {item.name}
                </Link>
              )}
            </Navbar.Item>
          ))}
        </Navbar.Content>
      </Navbar>
    </div>
  );
};

export default Sidebar;
