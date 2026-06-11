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

  const companyGroups = [
    {
      group: "CPD-MUM-CENTRAL",
      companies: [
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
    },
    {
      group: "CPD-MUM-WESTERN",
      companies: [
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
    },
  ];

  return (
    <div className="container">
      <div className="header">
        <img src={lorealLogo} alt="L'Oréal" className="logo" />
        <h1>L'Oréal & Garnier</h1>
        <img src={garnierLogo} alt="Garnier" className="logo" />
      </div>

      <h2 className="section-title">Quarterly Performance Tracker</h2>
      <div className="card">
        <div className="company-input-wrapper">
          <label htmlFor="companyName">Company Name</label>
          <select
            id="companyName"
            className="company-input"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          >
            {/* ✅ Default placeholder option */}
            <option value="">Select a company...</option>

            {/* ✅ Grouped options by region */}
            {companyGroups.map(({ group, companies }) => (
              <optgroup key={group} label={group}>
                {companies.map((company) => (
                  <option key={`${group}-${company}`} value={company}>
                    {company}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
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

