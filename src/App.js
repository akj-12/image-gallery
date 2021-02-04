import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";

import "./App.css";
import Spinner from "./components/Spinner";
import Search from "./components/Search";
import NoResultFound from "./components/NoResultFound";

function App() {
  // states
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  // useEffect
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const resp = await axios.get("https://pixabay.com/api/", {
          params: {
            key: `${process.env.REACT_APP_PIXABAY_API_KEY}`,
            q: `${term}`,
            image_type: "all",
          },
        });
        setLoading(false);
        // console.log(resp.data.hits);
        return resp.data.hits;
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    const timeOutToSearch = setTimeout(() => {
      sendRequest().then((res) => setImages(res));
    }, 1000);

    return () => {
      clearInterval(timeOutToSearch);
    };
  }, [term]);

  return (
    <div className="ui container">
      <div style={{ margin: "20px" }}>
        <Search term={term} onTermChange={setTerm} />
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="ui four column doubling stackable grid container">
          {images.length !== 0 ? (
            images.map((image, index) => (
              <div className="column" key={`${index}`}>
                <Card image={image} />
              </div>
            ))
          ) : (
            <NoResultFound />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
