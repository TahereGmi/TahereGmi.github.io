import Night from '@/components/Night'
import Day from '@/components/Day'

const getTimeZoneByDay = () => {
  const date = new Date();
  const current_hour = date.getHours();
  const is_day = (current_hour >= 6 && current_hour < 19);
  return is_day;
}

export default function Home() {
  return (
  <main className={`flex min-h-screen flex-col items-center justify-between`}>
    {getTimeZoneByDay() ? <Day /> : <Night />}
    <div className='introduction'>
      <h3>Comming sooooon...</h3>
    </div>
  </main>
  )
}
