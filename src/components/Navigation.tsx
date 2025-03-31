import React from 'react';

const Navigation = () => {
  const links = [
    { name: 'Accueil', href: '#' },
    { name: 'Équipe', href: '#team' },
    { name: 'Portfolios', href: '#portfolios' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Navigation;