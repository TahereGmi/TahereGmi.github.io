import React, { FC } from 'react';
import Introduction from '@/components/Introduction';
import Header from '@/components/Header';
import styles from './home.module.scss';


const Home: FC = () =>{
  // const [skyTheme, setSkyTheme] = useState<boolean>(false)

  // useEffect(() => {
  //   setSkyTheme(getTimeZoneByDay())
  // }, [])

  // const getTimeZoneByDay = () => {
  //   const date = new Date();
  //   const current_hour = date.getHours();
  //   const is_day = (current_hour >= 6 && current_hour < 19);
  //   return is_day;
  // }

  // const changeTheme = () => {
  //   setSkyTheme(!skyTheme)
  // }

  return (
  <main className={`flex min-h-screen flex-col items-center justify-between`}>
    <Header />
    <div id="home" className={styles.home}>Home</div>
    <div id="about" className={styles.about}>about</div>
    <div id="contact" className={styles.contact}>Contact</div>
    <Introduction />
  </main>
  )
}

export default Home;
