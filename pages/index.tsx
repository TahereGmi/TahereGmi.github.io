import React, { useState, useEffect, FC } from 'react';
import Night from '@/components/Night'
import Day from '@/components/Day'
import ToggleTime from '@/components/ToggleTime';
import Introduction from '@/components/Introduction';
import Icon from '@/public/img/smart-logo.svg';


const Home: FC = () =>{
  const [skyTheme, setSkyTheme] = useState<boolean>(false)

  // momoize
  useEffect(() => {
    setSkyTheme(getTimeZoneByDay())
  }, [])

  const getTimeZoneByDay = () => {
    const date = new Date();
    const current_hour = date.getHours();
    const is_day = (current_hour >= 6 && current_hour < 19);
    return is_day;
  }

  const changeTheme = () => {
    setSkyTheme(!skyTheme)
  }

  return (
  <main className={`flex min-h-screen flex-col items-center justify-between`}>
    <ToggleTime toggleToNight={skyTheme} onClick={() => changeTheme()}/>
    <Icon />
    {skyTheme === null ? <div>Loading</div> : skyTheme ? <Day /> : <Night />}
    <Introduction />
  </main>
  )
}

export default Home;
