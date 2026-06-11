import React, { useState } from "react";
import "./App.css";
import lorealLogo from "./assets/Loreal-logo-1.png";
import garnierLogo from "./assets/Garnier.png";

function App() {
  const [companyName, setCompanyName] = useState("");
  const [dropbox1, setDropbox1] = useState("");
  const [dropbox2, setDropbox2] = useState("");

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

  const companyGroups = {
    "CPD-MUM-CENTRAL": [
      "A G ENTERPRISES",
      "AG ENTERPRISES",
      "ARIHANT AGENCIES",
      "CHHEDA BROTHERS",
      "KANHAIYA AGENCIES PRIVATE LIMITED",
      "KESARIYAJEE MARKETING",
      "LAXMAN TRADERS",
      "M/S SHREE SWASTIK ENTERPRISES",
      "MANN ENTERPRISES",
      "SAI TRADERS",
      "SHREE AGENCIES",
      "SHREE SAI ENTERPRISES",
      "SWASTIK AGENCIES",
    ],
    "CPD-MUM-WESTERN": [
      "KRUPESH ENTERPRISES",
      "KEYUR SALES",
      "LIBERTY MARKETING",
      "SAPHALA CONSUMERS",
      "SHRADDHA AGENCIES",
      "SHREE HARI ENTERPRISES",
      "SIDDHI SALES CORPORATION",
      "SWASTIK AGENCIES",
      "TALHA MARKETING",
      "VIMAL AGENCIES",
    ],
  };

  const handleDropbox1Change = (value) => {
    setDropbox1(value);
    setDropbox2("");
  };

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
      <div className="header">
        <img src={lorealLogo} alt="L'Oréal" className="logo" />
        <h1>L'Oréal & Garnier</h1>
        <img src={garnierLogo} alt="Garnier" className="logo" />
      </div>

      <h2 className="section-title">Quarterly Performance Tracker</h2>
      <div className="card">

        {/* Mumbai Region Label */}
        <div className="region-label">Mumbai Region</div>

        {/* Dropbox 1 - Group Selector */}
        <div className="company-input-wrapper">
          <label htmlFor="dropbox1">Select Group</label>
          <div className="select-wrapper">
            <select
              id="dropbox1"
              className="company-input"
              value={dropbox1}
              onChange={(e) => handleDropbox1Change(e.target.value)}
            >
              <option value="">Select group...</option>
              <option value="CPD-MUM-CENTRAL">CPD-MUM-CENTRAL</option>
              <option value="CPD-MUM-WESTERN">CPD-MUM-WESTERN</option>
            </select>
          </div>
        </div>

        {/* Dropbox 2 - Company Selector */}
        <div className="company-input-wrapper">
          <label htmlFor="dropbox2">Select Company</label>
          <div className="select-wrapper">
            <select
              id="dropbox2"
              className="company-input"
              value={dropbox2}
              onChange={(e) => setDropbox2(e.target.value)}
              disabled={!dropbox1}
            >
              <option value="">
                {dropbox1 ? "Select company..." : "Select group first..."}
              </option>
              {dropbox1 &&
                companyGroups[dropbox1].map((company) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Outlet Name */}
        <div className="company-input-wrapper">
          <label htmlFor="companyName">Outlet Name</label>
          <input
            type="text"
            id="companyName"
            className="company-input"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter text..."
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
                      : (Number(target[month]) || 0) -
                        (Number(achievement[month]) || 0)}
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