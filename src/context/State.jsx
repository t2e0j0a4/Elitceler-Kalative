import React, { useState } from "react";
import Context from "./createContext";
import axios from "axios";
import { saveAs } from "file-saver";

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
    const response = await axios.get(
      `${HOST}/api/${pageBy === "Blog" ? "blogs" : "news"}/${itemID}`
    );
    setSingleItem(response.data[pageBy]);
    setDataLoad(false);
  };

  // Download Brochure Popup Form

  const [downloadInputs, setDownloadInputs] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const updateInputs = (e) => {
    setDownloadInputs({ ...downloadInputs, [e.target.name]: e.target.value });
  };

  const popupFormSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobile } = downloadInputs;

    if (name && email && mobile) {

      const response = await axios.post(`${HOST}/api/details`, 
        { name, email, mobile }, 
        {
          headers : {
            'Content-Type' : 'application/json'
          }
        }
      );

      // Download Brochure.
      if (response.data) {
        const brochureUrl = process.env.PUBLIC_URL + "/downloads/Project कला Aarth.pdf";
        saveAs(brochureUrl, "कला Aarth.pdf");
        window.alert(response.data.message);
      }

    } else {
      window.alert('Make sure all fields are filled!');
    }

    setDownloadInputs({ name: "", email: "", mobile: "" });
  };

  return (
    <Context.Provider
      value={{
        dataLoad,
        allData,
        fetchData,
        singleItem,
        fetchSingleItem,
        downloadInputs,
        updateInputs,
        popupFormSubmit
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
