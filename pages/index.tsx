import { useState, useEffect } from 'react';
import Night from '@/components/Night'
import Day from '@/components/Day'
import ToggleTime from '@/components/ToggleTime';
import Introduction from '@/components/Introduction';


const Home: React.FunctionComponent = () =>{
  const [skyTheme, setSkyTheme] = useState<boolean>(false)

  const getTimeZoneByDay = () => {
    const date = new Date();
    const current_hour = date.getHours();
    const is_day = (current_hour >= 6 && current_hour < 19);
    return is_day;
  }
  
  useEffect(() => {
    setSkyTheme(getTimeZoneByDay())
  }, [])

  const changeTheme = () => {
    setSkyTheme(!skyTheme)
  }

  return (
  <main className={`flex min-h-screen flex-col items-center justify-between`}>
    <ToggleTime toggleToNight={skyTheme} onClick={() => changeTheme()}/>
    {skyTheme === null ? <div>Loading</div> : skyTheme ? <Day /> : <Night />}
    <Introduction />
  </main>
  )
}

export default Home;
