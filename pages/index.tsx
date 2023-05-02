import Night from '@/components/Night'
import Day from '@/components/Day'
import ToggleTime from '@/components/ToggleTime';


const getTimeZoneByDay = (shouldHaveDay: boolean) => {
  const date = new Date();
  const current_hour = date.getHours();
  const is_day = (current_hour >= 6 && current_hour < 19);
  return shouldHaveDay || is_day;
}

const changeTheme = () => {
  getTimeZoneByDay(true);
}

export default function Home() {
  return (
  <main className={`flex min-h-screen flex-col items-center justify-between`}>
    <ToggleTime toggleToNight={getTimeZoneByDay(false)} onClick={() => changeTheme()}/>
    {getTimeZoneByDay(false) ? <Day /> : <Night />}
    <div className='introduction'>
      <h1>Tahereh Gholami</h1>
      <p>Front-End Developer</p>
    </div>
  </main>
  )
}
