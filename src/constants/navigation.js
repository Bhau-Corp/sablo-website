export const navLinks = [
  { name: 'Home', hasDropdown: false },
  { name: 'About', hasDropdown: true },
  { name: 'Products', hasDropdown: true },
  { name: 'Warranty Certificate', hasDropdown: false },
  { name: 'Contact Us', hasDropdown: false },
];

export const getNavLinkHref = (name) => {
  return `#${name.toLowerCase().replace(' ', '-')}`;
};

