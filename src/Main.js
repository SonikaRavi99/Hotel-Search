import React, { useState } from "react";
import Card from "./Card.js";
import axios from "axios";
import { useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Main() {
  const [Data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/4775a500-cf31-4bee-8a65-0c849b6e4d0c")
      .then((res) => {
        console.log(res);
        setData(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const filterData = Data?.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredData(filterData);
  };

  const handlePrice = () => {
    const sortedData = Data?.sort((a, b) => a.price - b.price);
    setFilteredData(sortedData);
  };
  const handleFavChange = () => {
    const favoriteData = Data.filter((item) => item.favorite === true);
    setFilteredData(favoriteData);
  };

  return (
    <div
      style={{
        width: 390,
        height: '335em',
        padding: 50,
        backgroundColor:"#F8FAE5"
      }}
    >
      <input
        onChange={handleChange}
        style={{ padding: 10, width: 320, position: "fixed",}}
        placeholder="Search"></input>

      <div style={{  paddingTop: 65 }}>
        <label
          onClick={handleFavChange}
          style={{
            border: "1px solid",
            borderRadius: 20,
            padding: 10,
            marginRight: 10,
          }}
        >
          Favorite
        </label>
        <label
          onClick={handlePrice}
          style={{
            border: "1px solid",
            borderRadius: 20,
            padding: 10,
            marginRight: 10,
          }}
        >
          Price
        </label>
        <Card data={filteredData.length !== 0 ? filteredData : Data} />
      </div>
    </div>
    );
}

export default Main;
