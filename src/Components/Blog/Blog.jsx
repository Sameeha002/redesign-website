import React from "react";
import "./Blog.css";
import Card from "../Card/Card";
import certificate from "../../Assets/certificate.jpeg";
import mentor from "../../Assets/mentor.jpeg";
import comunity from "../../Assets/comunity.jpeg";
import claim from "../../Assets/claim.PNG";

const Blog = () => {
  return (
    <div className="blog-container">
      <p>OUR BLOG</p>
      <h2>Recent Blog</h2>
      <div className="cards-grid">
        <Card
          props={{
            image: certificate,
            title: "Complete all of the task but didn't get certification yet? 😓🤦‍♀️",
            text: "Drop us a quick email at issues@internee.pk with the subject Didn't get certification yet. Our team will swiftly resolve the matter, ensuring you get your recognition promptly.",
          }}
        />

        <Card
          props={{
            image: mentor,
            title: "Looking to make a meaningful impact in the community?🌟🎉",
            text: "Our goal is to make Pakistan as an IT Hub. For this, we need more hands-on developers and tech enthusiast who will lift the Pakistan's IT export into the top👨‍💻. Your guidance and help may create a significant impact on some one's career. 🚀",
          }}
        />

        <Card
          props={{
            image: comunity,
            title: "🚀Calling communities to Empower Students with Internee.pk!✌",
            text: "Our goal is to make Pakistan as an IT Hub. For this, we need more hands-on developers and tech enthusiast who will lift the Pakistan's IT export into the top👨‍💻. Your guidance and help may create a significant impact on some one's career. 🚀",
          }}
        />

        <Card
          props={{
            image: claim,
            title: "Ready to Showcase Your Expertise? Follow These Simple Steps! 🌟",
            text: "We'd love to discuss how a collaboration with Internee.pk can benefit your universites , socities, institutes and educational institutions and specially with students.",
          }}
        />
      </div>
    </div>
  );
};

export default Blog;
