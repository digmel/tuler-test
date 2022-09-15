import { ProjectHero, Screen, Section } from "../components";
import Image from "next/image";

export default function GlutenFreeApp() {
  return (
    <Screen isProject={true}>
      <ProjectHero
        link="https://www.figma.com/proto/xei0Knh7PfE4V0X4m92J33/First-Aid-App?node-id=21%3A452&scaling=scale-down&page-id=0%3A1&starting-point-node-id=21%3A452"
        imagePath="/assets/first-aid-hero-large.jpg"
        imageWidth={826}
        imageHeight={525}
        title="First Aid App"
        description="Learn how to handle yourself and casualties during an emergency."
      />

      <Section
        headline="Project Overview"
        content={[
          {
            width: 466,
            title: "Project Background",
            body: "The app is designed for people who are interested in first-aid. The First Aid app will teach you how to handle yourself and injured people and how to behave during floods, earthquakes, and other natural disasters. The app aims to provide useful information and make the learning process easier and pleasurable.",
          },
          {
            width: 363,
            title: "The Goal",
            body: "Develop a solution that helps people learn how to handle injuries or natural disasters.",
          },
          {
            width: 363,
            title: "Duration",
            body: "6 Weeks",
          },
          {
            width: 354,
            title: "My Role & Responsibilities",
            listIcon: "section-icon.svg",
            list: [
              "Product Designer & UX Researcher",
              "Conducting interviews & usability studies,",
              "Digital wireframing,",
              "Accounting for accessibility,",
              "Iterating on designs,",
              "Information architecture.",
            ],
          },
        ]}
      />

      <Section
        headline="Understanding the User"
        content={[
          {
            width: 466,
            title: "Research",
            body: "I've conducted user interviews and got lots of insights. Most interview participants reported that they don't have enough information about first aid, and never had the opportunity to learn. The feedback received through research made it clear, that users are willing to get basic information on how to behave during an emergency if they had an easy-to-use tool to help them.",
          },
          {
            width: 395,
            title: "Problem Statement #1",
            body: "Based on the research insights I’ve created 2 personas and problem statements:Stella is a part-time graphic designer and mom, who needs to find a platform that she will use in teaching her kid first aid.",
          },
          {
            width: 395,
            title: "Problem Statement #2",
            body: "Based on the research insights I’ve created 2 personas and problem statements: Jennifer is a full-time student who needs an app that teaches her how to handle emergencies to get used to living alone.",
          },
        ]}
      />

      <Section
        headline="Design and Reasoning"
        content={[
          {
            width: 650,
            title: "Introduction Screens",
            body: "I think for a better experience, every app should have some introduction page to communicate with the users what the app is about before they ask to create an account or log in. So I added 3 introduction screens.",
          },
          {
            width: 650,
            title: "Log In options",
            body: "Then I decided to add different login options, with all popular social accounts as well as just email sign-ups, to make sure all users can sign in. I also added the forgot password screen in case someone needs to reset their account password.",
          },
        ]}
        fullImage="gluten-free-intro.jpg"
        fullImageWidth={1140}
        fullImageHeight={533}
      />

      <Section
        topSpace={64}
        content={[
          {
            width: 355,
            marginTop: 40,
            title: "Home",
            body: "After the user is logged in, the app should be easy to navigate so I chose a taskbar for navigation, they can just scroll up or down list view on the map easily.",
          },
          {
            image: "gluten-free-home.jpg",
            imageWidth: 1047,
            imageHeight: 533,
          },
        ]}
      />
      <Section
        topSpace={64}
        content={[
          {
            image: "gluten-free-profile.jpg",
            imageWidth: 566,
            imageHeight: 664,
          },
          {
            width: 650,
            marginTop: 80,
            title: "Profile",
            body: "From the Task Bar user are able to navigate to the profile screen where they can choose the language or theme of the app, log out and get help.",
          },
        ]}
      />
      <Section
        topSpace={64}
        content={[
          {
            width: 628,
            marginTop: 80,
            title: "Favorites & Share",
            body: "From the Task Bar users can navigate to the favorites list where all the saved restaurants are. Users can read more about them, remove restaurants from the list, or share the entire list.",
          },
          {
            image: "gluten-free-favorites.jpg",
            imageWidth: 571,
            imageHeight: 664,
          },
        ]}
      />
       <Section
        topSpace={64}
        content={[
          {
            image: "gluten-free-filter.png",
            imageWidth: 622,
            imageHeight: 533,
          },
          {
            width: 544,
            marginTop: 80,
            title: "Filter",
            body: "Using the filter users are able to easily find a restaurant with their specifications. For eg, they can filter by food category, restaurant type, opening hours etc. That feature makes the app much more convenient and easy to use.",
          },
        ]}
      />
      <Section
        topSpace={64}
        content={[
          {
            width: 622,
            marginTop: 80,
            title: "Reviews & Price indicators",
            body: "Gluten-free bakeries and restaurants are often overly expensive. So, before visiting the place would be great to have an overall idea of how pricey it is. Price indicators and customer reviews would be helpful for this. Hence, there is a restaurant info page where users can read their descriptions and reviews, make a call to reserve, get restaurants' locations to navigate, write reviews after visiting and add them to their favorite list.",
          },
          {
            image: "gluten-free-reviews.png",
            imageWidth: 622,
            imageHeight: 533,
          },
        ]}
        fullImage="gluten-free-screens.jpg"
        fullImageWidth={1140}
        fullImageHeight={533}
      />
      <Section
        headline="Design System"
        content={[
          {
            width: 650,
            title: "Colors",
            body: "I chose a white background and metallic silver as a primary color. There is a lot of reading in the app, so I needed color which would not be annoying for users' eyes, which would be solid and clean. Also, the white and silver color is kind of kitchen colors, like a white dining table with white dishes, silver spoons, and forks, a white chef's uniform with silver pots and pans. So that is how I got the idea.",
          },
          {
            width: 650,
            title: "Typeface & Icons",
            body: "Used typeface - Cera Pro is very clean and easy to read. The letters are based on pure geometry, and it has almost all language support so when the app is multilingual it will be easy to read for everyone around the world. Also, chosen tiny icons because of the minimalistic design approach.",
          },
        ]}
        fullImage="gluten-free-ds.svg"
        fullImageWidth={1140}
        fullImageHeight={963}
      />
    </Screen>
  );
}
