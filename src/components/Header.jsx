import React, { useState, useEffect } from "react";

function Header() {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer); // cleanup
  }, []);

    // Get greeting based on hour
  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  // Format time like "14:23:01"
  const formatTime = (date) => date.toLocaleTimeString();

  return (
    <header style={{ padding: "1rem", textAlign: "center" }}>
      <h1>
        {getGreeting()}, Adan!
      </h1>
      <p>{formatTime(time)}</p>
    </header>
  );
}

export default Header;