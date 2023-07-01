import React, { useEffect } from 'react';
import styles from './header.module.scss';

const Header: React.FC = () => {
  useEffect(() => {
    const smoothLinks = document.getElementsByClassName('smooth-link');

    const handleClick = (event: Event) => {
      event.preventDefault();

      const targetId = (event.target as HTMLAnchorElement).getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId || '');

      console.log('Link clicked! Scrolling to ' + targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    for (let i = 0; i < smoothLinks.length; i++) {
      smoothLinks[i].addEventListener('click', handleClick);
    }

    return () => {
      for (let i = 0; i < smoothLinks.length; i++) {
        smoothLinks[i].removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <nav className={styles.header}>
      <a href="#home" className="smooth-link">Home</a>
      <a href="#about" className="smooth-link">About</a>
      <a href="#contact" className="smooth-link">Contact</a>
    </nav>
  );
};

export default Header;
