import React, { useEffect } from 'react';
import styles from './header.module.scss';

const Header: React.FC = () => {
    useEffect(() => {
        const smoothLinks = document.getElementsByClassName('smooth-link');
      
        const handleClick = (event: Event) => {
          const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
          const targetElement = document.getElementById(targetId || '');
      
          console.log('Link clicked! Scrolling to ' + targetId);
      
          if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        };
      
        for (let i = 0; i < smoothLinks.length; i++) {
          const link = smoothLinks[i] as HTMLAnchorElement;
          link.addEventListener('click', handleClick);
        }
      
        return () => {
          for (let i = 0; i < smoothLinks.length; i++) {
            const link = smoothLinks[i] as HTMLAnchorElement;
            link.removeEventListener('click', handleClick);
          }
        };
      }, []);      

  return (
    <nav className={styles.header}>
      <div className='container ml-auto mr-auto flex flex-row-reverse justify-between'>
        <a href="#contact" className="smooth-link">Contact</a>
        <a href="#home" className="smooth-link">Tahereh</a>
      </div>
    </nav>
  );
};

export default Header;
