import { Screen, Section, SectionHero, SectionFinal } from "../components";

export default function FoodWasteApp({ isMobile, constants }) {
  return (
    <Screen isProject={true} isMobile={isMobile}>
      <SectionHero
        isMobile={isMobile}
        link={constants.links.FoodWasteApp}
        image="food-waste-hero-large.png"
        headline="Reduce Food Waste"
        label="App allows people to share unused Grocery Products & Foods to NGOs."
      />

      <Section
        isMobile={isMobile}
        title="Project Overview"
        content={[
          {
            subtitle: "Background",
            text: "With this app, people are connected to the nonprofit organization - Katarthis which cares about homeless people by offering them daily meals. They can visit Katarthis cafe and have breakfast or dinner there.",
          },
          {
            subtitle: "The Goal",
            text: "The goal was to design a solution for people who want to reduce their food waste and help others at the same time.",
          },
          {
            subtitle: "My Role & Project Duration",
            list: [
              {
                icon: "section-icon.svg",
                text: "Product Designer",
              },
              {
                icon: "section-icon.svg",
                text: "UX Researcher",
              },
              {
                text: "8 Weeks (Self-started project)",
              },
            ],
          },
        ]}
      />

      {/* 
      {!isMobile && (
        <>
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
                list: [
                  {
                    icon: "section-icon.svg",
                    text: "“What kind of food becomes wasted mostly in your house?”",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "“How much food do your throw away in a week?”",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "“What motivates or encourages you to reduce food waste?”",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "“What challenges do you face while trying to reduce your waste?”",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "“Have you ever encouraged others to reduce food waste? And how?”",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "“Have you ever given away extra food from your house?”",
                  },
                ],
              },
              {
                width: 399,
                title: "Received Insights",
                list: [
                  {
                    icon: "section-icon.svg",
                    text: "Both of the participants are worried about food waste.",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "Both of them are interested in teaching their children about that topic.",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "When everyone in the family eats different food, reducing waste becomes difficult.",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "Family members often buy products that become leftovers.",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "There are always some expired products in the fridge.",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "Throwing away rotten food makes them worried and ashamed.",
                  },
                ],
              },
            ]}
          />

          <Section
            headline="Usability Tests on Lo-Fi Prototype"
            description="After analyzing the insights from the interviews I started creating low-fidelity wireframes and created the first prototype in Axure that was used for usability testing."
            content={[
              {
                width: 464,
                title: "Scenarios for Usability Tests",
                list: [
                  {
                    icon: "section-icon.svg",
                    text: "What do we see here? Please walk me through your options. What kind of information does the app provide at this point?",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "Imagine you have some leftovers from the birthday party that you would like to share. Use our application to donate that food.",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "Let’s say you want to see what you have sent already. Where could you find it?",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "Imagine that you want to share some milk and yogurts. Use the app to submit your request.",
                  },
                ],
              },
              {
                width: 452,
                title: "Usability Test Findings",
                list: [
                  {
                    icon: "section-error-icon.svg",
                    text: "The participant mentioned that he’d skip the onboarding screens in real life.",
                  },
                  {
                    icon: "section-success-icon.svg",
                    text: "Need to explain the purpose of the app inside the application, not only on the onboarding screens.",
                  },
                  {
                    icon: "section-error-icon.svg",
                    text: "One of the participants was concerned whether products will be good for consumption by the time the courier comes to pick it up.",
                  },
                  {
                    icon: "section-success-icon.svg",
                    text: "Explain how the couriers work.",
                  },
                  {
                    icon: "section-error-icon.svg",
                    text: "Not sure about the meaning of “Start saving food” and “Overall impact”.",
                  },
                  {
                    icon: "section-success-icon.svg",
                    text: "Change the wording, for example to “Our community’s impact”",
                  },
                  {
                    icon: "section-error-icon.svg",
                    text: "Adding the expiration date of the product would be interesting.",
                  },
                  {
                    icon: "section-success-icon.svg",
                    text: "Add input for the expiration date.",
                  },
                ],
              },
              {
                image: "food-waste-usability.jpg",
                imageWidth: 261,
                imageHeight: 533,
              },
            ]}
          />

          <Section
            topSpace={32}
            headline="User Journey"
            content={[
              {
                width: 457,
                title: "Created the UJ",
                body: "After usability testing, I created the user journey for the scenario where the person is worried about her food waste and the friend suggests downloading this application.",
              },
              {
                image: "food-waste-user-journey.svg",
                imageWidth: 904,
                imageHeight: 366,
              },
            ]}
          />

          <Section
            topSpace={64}
            headline="Designing & Iterating Screens"
            content={[
              {
                width: 460,
                title: "Log In",
                list: [
                  {
                    text: "I shortened and simplified the registration process as much as possible and didn't include the number and address fields because:",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "Asking lots of info at the beginning bothers users.",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "They might lose interest/motivation to continue.",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "Asking that info while donating would be more relevant",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "After the first donation, those details would be saved to their profile and would be easy to use next time",
                  },
                ],
              },
              {
                image: "food-waste-login.jpeg",
                imageWidth: 622,
                imageHeight: 533,
              },
            ]}
          />

          <Section
            content={[
              {
                image: "food-waste-home.png",
                imageWidth: 720,
                imageHeight: 525,
              },
              {
                width: 606,
                title: "User Insights",
                list: [
                  {
                    text: "Using the nav bar helped in avoiding the cluttered design and made the navigation easier. From the nav bar:",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "users can navigate to ‘Your Donations’, where would be all their previous donations,",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "using the action button in the middle starts the donation flow,",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "users are able to click the community and see what others are donating.",
                  },
                  {
                    text: "In order to encourage first-time users to take action, I've added a microcopy with an arrow and instructions for them to start donating, that’s an empty state.",
                  },
                ],
              },
            ]}
          />

          <Section
            content={[
              {
                width: 482,
                title: "Ongoing Donation",
                listIcon: "section-icon.svg",
                list: [
                  {
                    text: "When the user has an ongoing donation along with the donation history, the ongoing donation should stand out to draw the users' attention. To make it more prominent I’ve:",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "created an extended version of the card where the most important info, such as courier details and arrival time is shown ",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "added notification indication on the nav bar ",
                  },
                ],
              },
              {
                image: "food-waste-ongoing-donation.jpg",
                imageWidth: 660,
                imageHeight: 558,
              },
            ]}
          />

          <Section
            content={[
              {
                image: "food-waste-donation-flow.jpeg",
                imageWidth: 261,
                imageHeight: 533,
              },
              {
                width: 420,
                title: "Goal of Donation",
                body: "Donating flow should be very simple and effortless otherwise people won't use it. Keeping that in mind, I tried to make the flow as easy as possible.",
              },
              {
                width: 420,
                title: "Donating Flow",
                body: "Users can choose different kinds of products from the categories after clicking on continue, they will be asked for different details depending on the chosen products (for ex, apple - quantity, yogurt - quantity & expiration date). Then if he/she is a first-time user they will need to fill in personal information such as phone number and address. Users might be interested in tracking the courier, so on the ‘Thank you’ screen is a secondary button ‘Follow Courier’ that opens the map.",
              },
            ]}
          />

          <Section
            headline="Next Steps"
            content={[
              {
                width: 458,
                title: "What's next?",
                body: "I believe that the overall mindset behind the intention of donation would need more exploration. Currently, there is an MVP of the community feature, where users can share their donations and see what others are sharing. If I'd continue working on this app, I would start with finding answers about the community feature, as well as conducting usability tests to discover how the existing design addresses users' pain points. There are some questions I’d consider first.",
              },
              {
                width: 458,
                title: "Research Questions",
                list: [
                  {
                    icon: "section-icon.svg",
                    text: "How would people use the community?",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "Is it the right motivational feature?",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "Would they be interested in sharing and seeing others' donations?",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "What would be the best way to create a community in such kind of application?",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "What way would they prefer to measure products? How can I make this flow less time-consuming for the users?",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "What would be the best way to show the users how their donations are spent, who receives those products, and when?",
                  },
                ],
              },
              {
                image: "food-waste-community.jpg",
                imageWidth: 261,
                imageHeight: 533,
              },
            ]}
            fullImage="food-waste-screens.jpg"
            fullImageWidth={1440}
            fullImageHeight={975}
          />

        </>
      )} */}
      <SectionFinal isMobile={isMobile} link={constants.links.FoodWasteApp} />
    </Screen>
  );
}
