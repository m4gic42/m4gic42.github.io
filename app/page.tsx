"use client";
import { useEffect, useState } from "react";
import { horizontalSeparator } from "./components/horizontal-separator";
import NavBar from "./components/navbar";
import { boldColoredText } from "./lib/textFormatter";
import { constants } from "./lib/constants";
import Footer from "./components/footer";

function personalImage() {
  const [asciiImage, setAsciiImage] = useState("");

  useEffect(() => {
    fetch("/personalImage.txt")
      .then((response) => response.text())
      .then((text) => {
        setAsciiImage(text);
      })
      .catch((error) => {
        console.error("Error fetching the ASCII image:", error);
        setAsciiImage("Error loading image");
      });
  }, []);

  return (
    <div className="about-me__image">
      <pre className="ascii-photo">
        {asciiImage ? (
          asciiImage
        ) : (
          <span className="loading">Loading image...</span>
        )}
      </pre>
    </div>
  );
}

function NewsSection() {
  return (
    <div className="news-section">
      <h3>News</h3>
      <div className="news-list">
        {constants.news.map((newsItem, index) => (
          <div key={index} className="news-item">
            <p>{newsItem}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}
    >
      <NavBar />
      <div className="main-container">
        <div className="about-me">
          <div className="welcome">
            <h2>Welcome!</h2>
            <p>
              You stumbled across my fairly unnecessary website. If you are
              interested in{" "}
              {boldColoredText("physics and scientific outreach", "--main2")},
              or you are into{" "}
              {boldColoredText("sci-fi and fantastic stories", "--main1")}, this
              might be the perfect place where you will find things you{" "}
              {boldColoredText("didn't know", "--main2")} you{" "}
              {boldColoredText("didn't need", "--main1")}.
            </p>
          </div>

          {horizontalSeparator()}

          <div className="about-me__top">
            {personalImage()}
            <div className="about-me__bio">
              <h3>Just a bit about me</h3>
              <p>
                I am a researcher in theoretical physics, with main interests in
                quantum information theory, quantum foundations, and quantum
                gravity. I like to keep my approach as pragmatic and clear as
                possible, with the ultimate goal of always learning something
                new. I’m a huge consumer of books, movies, music, and basically
                anything with an interesting story behind it. My main hobby, by
                far, is criticizing, but sometimes I also come up with some
                silly stories to write myself. If you REALLY want to know more
                details,
                <a href="/CV.pdf" target="_blank" className="cv-link">
                  {" "}
                  here is my updated CV
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <NewsSection />
      </div>

      <Footer />
    </div>
  );
}
