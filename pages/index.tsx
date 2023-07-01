import React, { useState, useEffect, FC } from 'react';
import Introduction from '@/components/Introduction';


const Home: FC = () =>{
  const [skyTheme, setSkyTheme] = useState<boolean>(false)

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
    <Introduction status={skyTheme}/>
  </main>
  )
}

export default Home;
