import React, { FC } from 'react';
import Introduction from '@/components/Introduction';
import Header from '@/components/Header';
import styles from './home.module.scss';
import Avatar from '@/components/Avatar';
import ContactMe from '@/components/ContactMe';


const Home: FC = () =>{

  return (
  <main className={`flex min-h-screen flex-col items-center justify-between`}>
    <Header />
    <div id="home" className={styles.home}>
      <div className='container ml-auto mr-auto mt-24 flex align-middle'>
        <Avatar />
        <Introduction />
      </div>
    </div>
    <div id="contact" className={styles.contact}>
      <ContactMe />
    </div>
  </main>
  )
}

export default Home;
