import styles from "./ProjectsStyles.module.css";
import NikeStore from "../../assets/NikeStore.jpg";
import ProjectCard from "../../common/ProjectCard";
import weatherApp from "../../assets/weather.jpg";
import diceRoll from "../../assets/diceRoll.jpg";
import rentCar from "../../assets/carRent.png";

function projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={NikeStore}
          link="https://github.com/Rituraj27/Day-10-Nike-Store"
          h3="NikeStore"
          p="Clone of Nike store"
        />

        <ProjectCard
          src={weatherApp}
          link="https://github.com/Rituraj27/Day-4-Weather-App"
          h3="WeatherApp"
          p="Tempeture of any city"
        />

        <ProjectCard
          src={diceRoll}
          link="https://github.com/Rituraj27/Dice-Roll"
          h3="Dice Roll Game"
          p="Ludo played uniquely"
        />
        <ProjectCard
          src={rentCar}
          link="https://github.com/Rituraj27/Day-13-Car-Rental-Services"
          h3="Car Rental Service"
          p="Rent a Car"
        />
      </div>
    </section>
  );
}

export default projects;
