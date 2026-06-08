import React, { useState } from "react";
import "./App.css";
import lorealLogo from "./assets/Loreal-logo-1.png";
import garnierLogo from "./assets/Garnier.png";

function App() {
  const [target, setTarget] = useState({
    april: "",
    may: "",
    june: "",
  });

  const [achievement, setAchievement] = useState({
    april: "",
    may: "",
    june: "",
  });

  const handleTargetChange = (month, value) => {
    setTarget((prev) => ({ ...prev, [month]: Number(value) }));
  };

  const handleAchievementChange = (month, value) => {
    setAchievement((prev) => ({ ...prev, [month]: Number(value) }));
  };

  const quarterlyTarget = target.april + target.may + target.june;
  const quarterlyAchievement = achievement.april + achievement.may + achievement.june;
  const quarterlyBalance = quarterlyTarget - quarterlyAchievement;

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <img src={lorealLogo} alt="L'Oréal" className="logo" />
        <h1>L'Oréal & Garnier</h1>
        <img src={garnierLogo} alt="Garnier" className="logo" />
      </div>

      <h2 className="section-title">Quarterly Performance Tracker</h2>

      {/* Card with table-wrapper INSIDE */}
      <div className="card">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Target</th>
                <th>Achievement</th>
                <th>Balance</th>
              </tr>
            </thead>

            <tbody>
              {["april", "may", "june"].map((month) => (
                <tr key={month}>
                  <td>{month.toUpperCase()}</td>

                  <td>
                    <input
                      type="number"
                      value={target[month]}
                      onChange={(e) => handleTargetChange(month, e.target.value)}
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      value={achievement[month]}
                      onChange={(e) => handleAchievementChange(month, e.target.value)}
                    />
                  </td>

                  <td>{target[month] - achievement[month]}</td>
                </tr>
              ))}

              <tr className="quarterly">
                <td>Quarterly</td>
                <td>{quarterlyTarget}</td>
                <td>{quarterlyAchievement}</td>
                <td>{quarterlyBalance}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

