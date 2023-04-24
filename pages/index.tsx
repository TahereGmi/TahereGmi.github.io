import Night from '@/components/Night'
import Day from '@/components/Day'
import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

const getTimeZoneByDay = () => {
  const date = new Date();
  const current_hour = date.getHours();
  const is_day = (current_hour >= 6 && current_hour < 19);
  return is_day;
}

export default function Home() {
  return (
    <>
      {getTimeZoneByDay() ? <Day /> : <Night />}
    </>
  )
}
