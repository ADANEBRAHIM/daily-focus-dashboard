import React, { useState, useEffect } from "react";

function DailyFocus() {
  const [goal, setGoal] = useState("");
  const [savedGoal, setSavedGoal] = useState(() => {
    return localStorage.getItem("dailyGoal") || "";
  });

  const handleSubmit = (e) => {
    if (e.key === "Enter" && goal.trim() !== "") {
      setSavedGoal(goal);
      localStorage.setItem("dailyGoal", goal);
      setGoal("");
    }
  };

  const handleClear = () => {
    setSavedGoal("");
    localStorage.removeItem("dailyGoal");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {savedGoal ? (
        <div>
          <h2>Today’s Focus: {savedGoal}</h2>
          <button 
            onClick={handleClear} 
            style={{ marginTop: "1rem", padding: "0.5rem 1rem", cursor: "pointer" }}
          >
            Clear
          </button>
        </div>
      ) : (
        <input
          type="text"
          placeholder="What is your main focus today?"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          onKeyDown={handleSubmit}
          style={{
            fontSize: "1.2rem",
            padding: "0.5rem",
            width: "300px",
            textAlign: "center",
          }}
        />
      )}
    </div>
  );
}

export default DailyFocus;
