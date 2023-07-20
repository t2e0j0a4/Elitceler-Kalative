import React, { useState } from "react";
import Context from "./createContext";
import axios from "axios";

const State = (props) => {
  const HOST = "http://localhost:5000";
  const [dataLoad, setDataLoad] = useState(false);

  // 1. Fetch all Blogs/News

  const [allData, setAllData] = useState([]);

  const fetchData = async (pageBy = "Blogs") => {
    setDataLoad(true);
    const response = await axios.get(
      `${HOST}/api/${pageBy === "Blogs" ? "blogs" : "news"}`
    );
    setAllData(response.data[pageBy]);
    setDataLoad(false);
  };

  // 2. Fetch Single Blog/News By ID.

  const [singleItem, setSingleItem] = useState({});

  const fetchSingleItem = async (itemID, pageBy) => {
    setDataLoad(true);
    const response = await axios.get(`${HOST}/api/${pageBy === 'Blog' ? 'blogs' : 'news'}/${itemID}`);
    setSingleItem(response.data[pageBy]);
    setDataLoad(false);
  }

  return (
    <Context.Provider value={{ dataLoad, allData, fetchData, singleItem, fetchSingleItem }}>
      {props.children}
    </Context.Provider>
  );
};

export default State;
