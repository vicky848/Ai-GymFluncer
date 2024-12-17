import React from "react";
import "./index.css";

const WorkoutGallery = () => {
  const images = [
    {
      src: "https://img.freepik.com/free-photo/top-view-weights-with-headphones_23-2148523295.jpg?t=st=1734330727~exp=1734334327~hmac=47ac08daff1ce624694fc07c70bf8aa122449db687d3acb4ed78facbcf522842&w=360",
      alt: "Weights with Headphones",
      heading: "Weights with Headphones",
      content: "Enhance your workouts with music and weights for better focus and performance.",
    },
    {
      src: "https://img.freepik.com/free-photo/3d-render-dumbbells-set-realistic-detailed-close-up-view-isolated-sport-element-fitness-dumbbell-design_460848-10403.jpg?t=st=1734330811~exp=1734334411~hmac=6cd3d2e4e2868031157dfa81b5dc4c58febeb1b7945593370fbb5f8b7506f98d&w=740",
      alt: "3D Dumbbell Set",
      heading: "3D Dumbbell Set",
      content: "A perfect set of dumbbells for building strength and toning muscles.",
    },
    {
      src: "https://img.freepik.com/free-photo/dumbbells-flat-lay-pink-background_1220-3860.jpg?t=st=1734330977~exp=1734334577~hmac=88e1eff4c4da20f77d430386bfec12201855dc865a5ffe4551180450d2ceab16&w=740",
      alt: "Dumbbells on Pink Background",
      heading: "Flat Lay Dumbbells",
      content: "Stylish yet functional, these dumbbells are perfect for at-home workouts.",
    },
    {
      src: "https://img.freepik.com/premium-photo/cartoon-yoga-mat-yoga-ball-sports-fitness-concept-3d-rendering_778569-5642.jpg?w=740",
      alt: "Yoga Mat and Ball",
      heading: "Yoga Mat & Ball",
      content: "Ideal for yoga and stretching routines, promoting flexibility and balance.",
    },
    {
      src: "https://img.freepik.com/premium-photo/static-bike-sports-fitness-gym-equipment-3d-rendering_265427-3648.jpg?w=740",
      alt: "Static Bike",
      heading: "Static Bike",
      content: "A stationary bike for an intense cardio workout at the comfort of your home.",
    },
    {
      src: "https://img.freepik.com/free-photo/top-view-perfectly-ordered-fitness-items_23-2150321784.jpg?t=st=1734331281~exp=1734334881~hmac=81c7fcbd364a5a24181bb8f592c97eb082847d0f3b5a550d6bdd24b792dff834&w=740",
      alt: "Ordered Fitness Items",
      heading: "Fitness Essentials",
      content: "Organized fitness items for your daily workout needs.",
    },
    {
      src: "https://img.freepik.com/premium-photo/fitness-3d-illustration-gym-3d-illustration_77235-271.jpg?w=740",
      alt: "3D Fitness Equipment",
      heading: "3D Fitness Gear",
      content: "Advanced 3D gear for modern workout routines.",
    },
    {
      src: "https://img.freepik.com/free-photo/abstract-3d-art-man-lat-pulldown-machinexa_183364-118290.jpg?t=st=1734331395~exp=1734334995~hmac=4f99ba6bd09744f36db589ce813d62ba179bd41911faf73d00dfcab4cdc6ae65&w=826",
      alt: "Lat Pulldown Machine",
      heading: "Lat Pulldown",
      content: "Effective back and arm workout with a lat pulldown machine.",
    },
  ];

  return (
    <div className="workout-gallery">
      <h1 className="gallery-heading">Workout Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <h2 className="gallery-item-heading">{image.heading}</h2>
            <p className="gallery-item-content">{image.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutGallery;
