import { ProjectHero, Screen, Section } from "../components";
import Image from "next/image";

export default function FoodWasteApp() {
  return (
    <Screen isProject={true}>
      <ProjectHero
        link="https://www.figma.com/proto/8TO0dOLUqk4w3P8vTMIrHK/Reduce-Food-Waste?node-id=523%3A8757&scaling=scale-down&page-id=519%3A6123&starting-point-node-id=523%3A8757&show-proto-sidebar=1"
        imagePath="/assets/food-waste-large.jpg"
        imageWidth={534}
        imageHeight={525}
        title="Reduce Food Waste by Sharing It"
        description="Using the app people reduce food waste while helping others as well."
      />

      <Section
        headline="Project Overview"
        content={[
          {
            width: 425,
            title: "Project Background",
            body: "With this app, people are connected to the nonprofit organization - Katarthis which cares about homeless people by offering them daily meals. They can visit Katarthis cafe and have breakfast or dinner there.",
          },
          {
            width: 363,
            title: "The Goal",
            body: "The goal was to design a solution for people who want to reduce their food waste and help others at the same time.",
          },
          {
            width: 139,
            title: "My Role",
            body: "Product Designer UX Researcher",
          },
          {
            width: 157,
            title: "Duration",
            body: "8 Weeks Self-started project",
          },
        ]}
      />

      <Section
        headline="Research"
        content={[
          {            
            width: 464,
            title: "Research Method",
            body: "In order to gather related information from other people and understand whether it’s a problem that needs to be solved, I’ve conducted 2 interviews. During the research, it became a lot more obvious that food waste is something my interviewees also think and worry about, I should mention that at that time I wasn’t really sure what would be the final product but those interviews helped me to get some insights and come up with the ideas.",
          },
          {
            width: 420,
            title: "Some interview questions",
            listIcon: "section-icon.svg",
            list: [
              "“What kind of food becomes wasted mostly in your house?”",
              "“How much food do your throw away in a week?”",
              "“What motivates or encourages you to reduce food waste?”",
              "“What challenges do you face while trying to reduce your waste?”",
              "“Have you ever encouraged others to reduce food waste? And how?”",
              "“Have you ever given away extra food from your house?”",
            ],
          },
          {
            width: 399,
            title: "Received Insights",
            listIcon: "section-icon.svg",
            list: [
              "Both of the participants are worried about food waste.",
              "Both of them are interested in teaching their children about that topic.",
              "When everyone in the family eats different food, reducing waste becomes difficult.",
              "Family members often buy products that become leftovers.",
              "There are always some expired products in the fridge.",
              "Throwing away rotten food makes them worried and ashamed.",
            ],
          },
        ]}
      />

      <Section
        headline="Usability Tests on Lo-Fi Prototype"
        content={[
          {
            width: 464,
            title: "Prototype with Axure",
            body: "After analyzing the insights from the interviews I started creating low-fidelity wireframes and created the first prototype in Axure that was used for usability testing.",
          },
// here goes list - 'Scenarios for Usability Tests' (below the 'Prototype with Axure')
          {
            width: 452,
            title: "Usability Test Findings",
            listIcon: "section-error-icon.svg",
            list: [
// ესენი იმიტომ გამოვყავი სფეისით რომ ორ-ორად უნდა დავაჯგუფოთ
              "The participant mentioned that he’d skip the onboarding screens in real life.",
              "Need to explain the purpose of the app inside the application, not only on the onboarding screens.",

              "One of the participants was concerned whether products will be good for consumption by the time the courier comes to pick it up.",
              "Explain how the couriers work.",

              "Not sure about the meaning of “Start saving food” and “Overall impact”.",
              "Change the wording, for example to “Our community’s impact”",

              "Adding the expiration date of the product would be interesting.",
              "Add input for the expiration date.",
            ],
          },
          {
            image: 'food-waste-usability.jpg',
            imageWidth: 261,
            imageHeight: 533,
          },
        ]}
      />

      <Section
        topSpace={64}
        headline="User Journey"
        content={[
          {
            width: 457,
            marginTop: 40,
            title: "Created the UJ",
            body: "After usability testing, I created the user journey for the scenario where the person is worried about her food waste and the friend suggests downloading this application.",
          },
          {
            image: "user-journey.svg",
            imageWidth: 904,
            imageHeight: 366,
          },
        ]}
      />

      <Section
        topSpace={64}
        headline="Designing & Iterating Screens"
        description="I shortened and simplified the registration process as much as possible and didn't include the number and address fields because:"
        content={[
          {
            width: 460,
            title: "Log In",
            listIcon: "section-icon.svg",
            list: [
              "“Asking lots of info at the beginning bothers users.”",
              "“They might lose interest/motivation to continue.”",
              "“Asking that info while donating would be more relevant”",
              "“After the first donation, those details would be saved to their profile and would be easy to use next time”",
            ],
          },
          {
            image: "food-waste-login.jpg",
            imageWidth: 622,
            imageHeight: 533,
          },
        ]}
      />
      <Section
      topSpace={64}
      content={[
        {
          image: "food-waste-homescreen.jpg",
          imageWidth: 720,
          imageHeight: 525,
        },
        {
          width: 606,
          title: "Homescreen",
          listIcon: "section-icon.svg",
          body="Using the nav bar helped in avoiding the cluttered design and made the navigation easier. From the nav bar:",
          list: [
            "“users can navigate to ‘Your Donations’, where would be all their previous donations,”",
            "“using the action button in the middle starts the donation flow,”",
            "“users are able to click the community and see what others are donating.”",
          ],
          body="In order to encourage first-time users to take action, I've added a microcopy with an arrow and instructions for them to start donating, that’s an empty state.",
        },
      ]}
      />
    </Screen>
  );
}
