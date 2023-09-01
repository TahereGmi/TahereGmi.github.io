import React, { FC } from 'react';
import Introduction from '@/src/components/Introduction';
import Header from '@/src/components/Header';
import styles from './home.module.scss';
import Avatar from '@/src/components/Avatar';
import ContactMe from '@/src/components/ContactMe';


const Home: FC = () =>{

  return (
  <main className={`min-h-screen`}>
    <Header />
    <div id="home" className={styles.home}>
      <div className='container ml-auto mr-auto flex align-middle flex items-center justify-between mt-24 '>
        <Introduction />
        <Avatar />
      </div>
    </div>
    <div id="contact" className={styles.contact}>
      <ContactMe />
    </div>
  </main>
  )
}

export default Home;
