import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2024-10-24T00:00:00"); // Целевая дата
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Разделите с нами</h1>
      <h2 className="mb-4 text-2xl italic text-gray-400">
        <span className="text-red-600">любовь</span> через...
      </h2>

      {/* Таймер */}
      <div className="flex justify-center space-x-8">
        {Object.keys(timeLeft).length > 0 ? (
          <>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{timeLeft.days}</span>
              <span className="text-lg">дней</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{timeLeft.hours}</span>
              <span className="text-lg">часов</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{timeLeft.minutes}</span>
              <span className="text-lg">минут</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{timeLeft.seconds}</span>
              <span className="text-lg">секунд</span>
            </div>
          </>
        ) : (
          <span className="text-4xl">Событие наступило!</span>
        )}
      </div>
    </div>
  );
};

export default Timer;
