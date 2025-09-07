import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2025-10-01T00:00:00"); // Целевая дата
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
      <h1 className="text-5xl font-bold">
        <span className="text-red-600">Сүйүүнү</span> биз менен бөлүшүңүз...
      </h1>

      <div className="flex justify-center space-x-8">
        {Object.keys(timeLeft).length > 0 ? (
          <>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{timeLeft.days}</span>
              <span className="text-3xl">күн</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{timeLeft.hours}</span>
              <span className="text-3xl">саат</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{timeLeft.minutes}</span>
              <span className="text-3xl">минут</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{timeLeft.seconds}</span>
              <span className="text-3xl">секунд</span>
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
