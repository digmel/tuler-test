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
            text: "App allows people to share Food & Grocery products to NGO communities.",
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

      <SectionCard
        isMobile={isMobile}
        content={[
          {
            title: "Fashion Designer’s Portfolio",
            text: "People can find Marikone’s collections and contact information on the website.",
            // image: "marikone-hero",
            link: "/MarikoneWeb", // <--- this is for navigation to project Page when user clicks the card. It should be exact file name as it is in under "pages" folder.
            visibility: false, // <--- change this to "true" to make it visible, or just delete this line, since the default is "true" anyways.
          },
          {
            title: "Headline of the project",
            text: "description",
            // image: "project-main-cover-hero",
            link: "/PageName",
            visibility: false,
          },
          {
            title: "Headline of the project",
            text: "description",
            // image: "project-main-cover-hero",
            link: "/PageName",
            visibility: false,
          },
        ]}
      />
    </Screen>
  );
}
