import React, { FC } from 'react';
import Introduction from '@/components/Introduction';
import Header from '@/components/Header';


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
    <Introduction />
  </main>
  )
}

export default Home;
