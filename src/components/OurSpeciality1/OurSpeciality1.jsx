import Specialcuisines from "../Specialcuisines/Specialcuisines";
import Styles from "./OurSpeciality1.module.css";

export default function Ourspeciality1() {
  const ourSpecialty = [
    {
      imageUrl:
        "https://caterernearme.netlify.app/assets/images/experts/expert1.png",
      name: "North Indian",
    },
    {
      imageUrl:
        "https://caterernearme.netlify.app/assets/images/experts/expert2.png",
      name: "South Indian",
    },
    {
      imageUrl:
        "https://caterernearme.netlify.app/assets/images/experts/expert3.png",
      name: "Maharashtrian",
    },
    {
      imageUrl:
        "https://caterernearme.netlify.app/assets/images/experts/expert4.png",
      name: "Chinese",
    },
    {
      imageUrl:
        "https://caterernearme.netlify.app/assets/images/experts/expert5.png",
      name: "Gujarati",
    },
    {
      imageUrl:
        "https://caterernearme.netlify.app/assets/images/experts/expert6.png",
      name: "Italian",
    },
    {
      imageUrl:
        "https://caterernearme.netlify.app/assets/images/experts/expert7.png",
      name: "Mexican",
    },
    {
      imageUrl:
        "https://caterernearme.netlify.app/assets/images/experts/expert8.png",
      name: "Lebanese",
    },
  ];

  return (
    <main className={Styles.container}>
      <h2>Our Specialty Cuisines</h2>
      <div className={Styles.dishContainer}>
        {ourSpecialty.map((dish, index) => (
          <Specialcuisines
            key={index}
            imageUrl={dish.imageUrl}
            name={dish.name}
          />
        ))}
      </div>
    </main>
  );
}
