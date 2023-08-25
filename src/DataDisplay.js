import React, { useState, useEffect } from "react";
import './DataDisplay.css'; 
function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const API_URL =
        "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";
      const response = await fetch(API_URL);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="data-container">
      <h1 className="title">Fetched Data</h1>
      <ul className="list">
        {data.map((item) => (
          <li key={item.id} className="list-item">
            <div className="card">
              <img
                className="item-thumbnail"
                src={item.thumbnail.small}
                alt={item.title}
              />
              <div className="card-content">
                <h2 className="item-title">{item.title}</h2>
                <p className="item-content">{item.content}</p>
                <div className="card-footer">
                  <p className="item-author">{item.author.name}</p>
                  <p className="item-date">
                    {new Date(item.date * 1000).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
