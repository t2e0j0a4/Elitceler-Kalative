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

  const [deliveryMsg, setDeliveryMsg] = useState("");
  const [showDeliveryMsg, setShowDeliveryMsg] = useState(false);

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

      // Logic for downloading a magazine. Pending...

      setDeliveryMsg(response.data.message);
    
    } else {
      setDeliveryMsg("Empty Input Fields!");
    }

    setShowDeliveryMsg(true);
    setTimeout(() => {
      setShowDeliveryMsg(false);
    }, 5000);
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
        popupFormSubmit,
        deliveryMsg,
        showDeliveryMsg
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
