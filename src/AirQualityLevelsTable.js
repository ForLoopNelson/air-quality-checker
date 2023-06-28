import React from "react"

const AirQualityLevelsTable = () => {
  const levels = [
    { range: "0 - 50", level: "Good", color: "bg-success" },
    { range: "51 - 100", level: "Moderate", color: "bg-warning" },
    {
      range: "101 - 150",
      level: "Unhealthy for Sensitive Groups",
      color: "bg-orange",
    },
    { range: "151 - 200", level: "Unhealthy", color: "bg-danger" },
    { range: "201 - 300", level: "Very Unhealthy", color: "bg-very-unhealthy" },
    { range: "301 and higher", level: "Hazardous", color: "bg-hazardous" },
  ]

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Air Quality Levels</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">AQI Range</th>
              <th scope="col">Level of Health Concern</th>
            </tr>
          </thead>
          <tbody>
            {levels.map(({ range, level, color }, index) => (
              <tr key={index}>
                <td>
                  <div className={`color-box ${color}`}></div>
                </td>
                <td>{range}</td>
                <td>{level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AirQualityLevelsTable
