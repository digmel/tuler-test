import { Screen, Hero, SectionCard } from "../components";

export default function App({ isMobile }) {
  return (
    <Screen isHome={true} isMobile={isMobile}>
      <Hero isMobile={isMobile} title="Overview" />

      <SectionCard
        isMobile={isMobile}
        title="Projects"
        content={[
          {
            title: "Gluten Free Finder",
            text: "App guides people to Find & Save Gluten-Free restaurants worldwide.",
            image: "gluten-free-hero",
            link: "/GlutenFreeApp",
          },
          {
            title: "Reduce Food Waste",
            text: "App allows people to share Food & Grocery products with NGO communities.",
            image: "food-waste-hero",
            link: "/FoodWasteApp",
          },
          {
            title: "Learn First Aid",
            text: "App allows people to refresh their First Aid knowledge with simple illustrated fun Exams.",
            image: "first-aid-hero",
            link: "/FirstAidApp",
          },
        ]}
      />

      {/* <SectionCard
        isMobile={isMobile}
        content={[
          {
            title: "Fashion Designer’s Portfolio",
            text: "People can find Marikone’s collections and contact information on the website.",
            // image: "gluten-hero.png",
            link: "/GlutenFreeApp",
          },
          {
            title: "Startup Info Website",
            text: "Hand4help is an organization that produces high-tech hand prostheses.",
            // image: "gluten-hero.png",
            link: "/GlutenFreeApp",
          },
          {
            title: "Startup Info Website",
            text: "Hand4help is an organization that produces high-tech hand prostheses.",
            // image: "gluten-hero.png",
            link: "/GlutenFreeApp",
          },
        ]}
      /> */}
    </Screen>
  );
}
