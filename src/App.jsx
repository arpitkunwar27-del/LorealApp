import React, { useState } from "react";
import "./App.css";
import lorealLogo from "./assets/Loreal-logo-1.png";
import garnierLogo from "./assets/Garnier.png";

function App() {
  const [companyName, setCompanyName] = useState("");

  const [achievement, setAchievement] = useState({
    april: "",
    may: "",
    june: "",
  });

  const [target, setTarget] = useState({
    april: "",
    may: "",
    june: "",
  });

  const handleAchievementChange = (month, value) => {
    setAchievement((prev) => ({ ...prev, [month]: value }));
  };

  const handleTargetChange = (month, value) => {
    setTarget((prev) => ({ ...prev, [month]: value }));
  };

  const quarterlyAchievement =
    (Number(achievement.april) || 0) +
    (Number(achievement.may) || 0) +
    (Number(achievement.june) || 0);

  const quarterlyTarget =
    (Number(target.april) || 0) +
    (Number(target.may) || 0) +
    (Number(target.june) || 0);

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

        {/* Company Name Input */}
        <div className="company-input-wrapper">
          <label htmlFor="companyName">Company Name</label>
          <input
            id="companyName"
            type="text"
            className="company-input"
            placeholder="Enter company name..."
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Achievement</th>
                <th>Target</th>
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
                      value={achievement[month]}
                      onChange={(e) =>
                        handleAchievementChange(month, e.target.value)
                      }
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      value={target[month]}
                      onChange={(e) =>
                        handleTargetChange(month, e.target.value)
                      }
                    />
                  </td>

                  <td>
                    {target[month] === "" && achievement[month] === ""
                      ? ""
                      : (Number(target[month]) || 0) - (Number(achievement[month]) || 0)}
                  </td>
                </tr>
              ))}

              <tr className="quarterly">
                <td>Quarterly</td>
                <td>{quarterlyAchievement || ""}</td>
                <td>{quarterlyTarget || ""}</td>
                <td>{quarterlyBalance || ""}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
