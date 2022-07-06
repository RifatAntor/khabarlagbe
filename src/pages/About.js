import React from "react";
import MultiplePizzas from "../assets/masala.jpg";
import "../css_files/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Bengali cuisine (Bengali: বাঙ্গালী রন্ধনপ্রণালী) is the culinary style of Bengal, a region in the eastern part of the Indian subcontinent encompassing Bangladesh and Indian states of West Bengal, Tripura and Assam's Barak Valley. The cuisine has been shaped by the region's diverse history and climate. It is known for its varied use of flavours, as well as the spread of its confectioneries and desserts. Bengali cuisine has the only traditionally developed multi-course custom in the South Asia that is analogous in structure to the modern service à la russe style of French cuisine, with food served in courses rather than all at once. There is a strong emphasis on rice as a staple, served with fish, meat, vegetables, and lentils. Many Bengali food traditions draw from social activities, such as adda, or the Mezban.
        </p>
      </div>
    </div>
  );
}

export default About;
