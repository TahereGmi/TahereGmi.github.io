import React, { FC } from 'react';
// import Introduction from '@/src/components/Introduction';
// import Header from '@/src/components/Header';
import styles from './home.module.scss';
// import Avatar from '@/src/components/Avatar';
// import ContactMe from '@/src/components/ContactMe';
// import useSequentialLoader from '../hooks/useSequentialLoader';

// const loadFirstThing = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   return <Header />;
// };

// const loadSecondThing = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return <Introduction />;
// };

// const loadThirdThing = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   return <ContactMe />;
// };


const Home: FC = () =>{
  // const { loadedData: Header } = useSequentialLoader([loadFirstThing]);
  // const { loadedData: Introduction } = useSequentialLoader([loadSecondThing]);
  // const { loadedData: ContactMe } = useSequentialLoader([loadThirdThing]);

  return (
  <main className={`min-h-screen`}>
    {/* {Header} */}
    <div id="home" className={styles.home}>
      <div className='container ml-auto mr-auto flex align-middle flex items-center justify-between mt-24 '>
        {/* {Introduction} */}
        {/* <Avatar /> */}
      </div>
    </div>
    <div id="contact" className={styles.contact}>
      {/* {ContactMe} */}
    </div>
  </main>
  )
}

export default Home;
