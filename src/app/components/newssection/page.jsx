"use client";

import React, {useState, useEffect } from "react";

export default function Newsection( {api}) {
  const [allnews, setAllnews] = useState([]);

  useEffect(() => {
    // const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${api}`;
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=general&pageSize=80&apiKey=${api}`;


    async function fetchData() {
      try {
        const response = await fetch(url);
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        const data = await response.json();
        setAllnews(data.articles);
        console.log(data);
      } catch (error) {
        console.log("You have an error: ", error);
      }
    }

    fetchData();
  }, [api]);
  

  return (
    <div>
      <h1 className="font-bold text-blue-500">Hello, Next.js!</h1>
      {allnews.map((article) => (
        <div key={article.title}>
          <h2 className="font-bold">{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}