/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/moving-background.jpg";

const imageAltText = "black and white abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm Thabang, a Computer Science student at the University of Zululand, passionate about machine learning, software engineering, data science, cybersecurity, and AI. I thrive on building innovative solution. My career goal is to develop secure, impactful technologies that address real-world challenges, while advancing my expertise in AI and cybersecurity. When not coding, I explore cutting-edge tech and contribute to the developer community.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Artificial Intelligence",
  "Cybersecurity",
  "Cloud Computing",
  "Internet of Things",
  "Machine Learning",
  "Software Engineering",
  "Data Science",
  "Web Development",
  "Tech Exploration",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "The best way to predict the future is to create it.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
