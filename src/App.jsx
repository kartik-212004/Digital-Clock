import { useEffect, useState } from 'react';
import wallpaper from './assets/wallpaper.jpg';

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let hour = time.getHours();
  let minute = time.getMinutes();
  let seconds = time.getSeconds();
  let meridiem = hour >= 12 ? "PM" : "AM";
  let day = days[time.getDay()];

  // Format the time with leading zeros
  const formattedHour = String(hour % 12 || 12).padStart(2, '0');
  const formattedMinute = String(minute).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
    <>
      <div style={{ backgroundImage: `url(${wallpaper})` }} className="box w-full h-screen">
        <div className="flex flex-col justify-center items-center time w-full h-[40%] bg-red-300">
          <div className="time flex flex-col items-center justify-center">
            <span className="time-text">
              {formattedHour}:{formattedMinute}:{formattedSeconds}
              <span className="meridiem ">{meridiem}</span>
            </span>
            <span className="day-text">{day}</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .time-text {
          font-family: 'Courier New', Courier, monospace;
          font-size: 100px;
          font-weight: bold;
          color: #620f0f;
        }
        .meridiem {
          margin-left: 10px;
          font-size: 50px;
        }
        .day-text {
         font-family: 'Courier New', Courier, monospace;
          font-size: 50px;
          font-weight:bold;
        }
      `}</style>
    </>
  );
}
