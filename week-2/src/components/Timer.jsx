import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return <div className="text-end pe-4 text-muted mt-2">⏱ Time on site: {seconds}s</div>;
};

export default Timer;
