"use client";

import { useRouter } from 'next/router';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react"; // Doğru bileşen adları

const Sidebar = () => {
  const router = useRouter();

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
    <Navbar isBordered variant="floating">
      <NavbarBrand>
        <div className="text-white">My App</div>
      </NavbarBrand>
      <NavbarContent>
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            {item.subItems ? (
              <div>
                <div className={router.pathname.startsWith(item.subItems[0].path) ? 'active' : ''}>
                  {item.name}
                </div>
                <div>
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.path}
                      className={router.pathname === subItem.path ? 'active' : 'text-white'}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={item.path}
                className={router.pathname === item.path ? 'active' : 'text-white'}
              >
                {item.name}
              </Link>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default Sidebar;
