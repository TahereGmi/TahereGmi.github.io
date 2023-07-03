import React, { useEffect } from 'react';
import Bird from '@/public/img/bird.svg';
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
      <a href="#home" className="smooth-link isFixedLink">
        <span className={styles.textIcon}>
            <Bird className={styles.svgWrap}/>
            <span className={styles.text}>Tahereh</span>
        </span>
      </a>
      <a href="#contact" className="smooth-link">Contact</a>
    </nav>
  );
};

export default Header;
