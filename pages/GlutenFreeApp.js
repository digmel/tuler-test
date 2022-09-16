import { Screen, Section, ProjectHero, ProjectFinal } from "../components";

const prototypeLink =
  "https://www.figma.com/proto/RMGOoiFKZlpysEcjEb6BFu/Gluten-Free-Restaurant-Finder-(Copy)?node-id=103%3A8632&scaling=scale-down&page-id=0%3A1&starting-point-node-id=103%3A8632&show-proto-sidebar=1";

export default function GlutenFreeApp() {
  return (
    <Screen isProject={true}>
      <ProjectHero
        link={prototypeLink}
        image="gluten-hero-large.jpg"
        imageWidth={662}
        imageHeight={525}
        title="Gluten-Free Restaurant Finder"
        description="The app allows users to find restaurant based on their preferences."
      />

      <Section
        headline="Project Overview"
        content={[
          {
            width: 486,
            title: "Project Background",
            body: "The research was initially done for this project and I was given essential insights from the user interviews. With that information in hand, I came up with solutions and created UI designs that were user-focused.",
          },
          {
            width: 415,
            title: "The Goal",
            body: "The goal was to create a user-friendly application to help them find gluten-free restaurants anywhere.",
          },
          {
            width: 118,
            title: "My Role",
            body: "UX/UI Designer",
          },
          {
            width: 191,
            title: "Duration",
            body: "1-Week UX/UI Challenge",
          },
        ]}
      />

      <Section
        headline="Understanding the User"
        description="To better understand and empathize with consumers, I began researching gluten intolerance and celiac disease. Then, I came up with some desirable features according to my findings and the given insights:"
        content={[
          {
            width: 650,
            title: "User Insights",
            list: [
              {
                icon: "section-icon.svg",
                text: "“Finding gluten-free places during my travels is very painful. If I’m lucky I can find a dedicated gluten-free restaurant, otherwise it’s very hard for me to trust a place. The risk of cross-contamination in a regular kitchen is just too high.”",
              },
              {
                icon: "section-icon.svg",
                text: "“Most people don’t know the difference between celiac disease and gluten intolerance. I have the former, which means when I digest gluten, my immune system will attack against my own body tissue. So I really have to be wary about where to eat.”",
              },
              {
                icon: "section-icon.svg",
                text: "“It’s not just about being gluten-free, but the culinary experience. Just because I’m sensitive to gluten it doesn’t mean I don’t want to have a romantic dinner during my holidays with my partner.”",
              },
              {
                icon: "section-icon.svg",
                text: "“Gluten-free bakeries and restaurants can be overly expensive, it would be great to discover those within a reasonable price range close to me.”",
              },
              {
                icon: "section-icon.svg",
                text: "“I usually revisit the gluten-free places where I had a good impression, but I tried so many, that it is hard to keep track of them.”",
              },
            ],
          },
          {
            width: 650,
            title: "Solutions",
            list: [
              {
                icon: "section-icon.svg",
                text: "The users should be able to easily find a new restaurant with their specifications.",
              },
              {
                icon: "section-icon.svg",
                text: "The users find it useful to read about restaurant reviews.",
              },
              {
                icon: "section-icon.svg",
                text: "They’d love to save favorite restaurants in a list and share the list with others.",
              },
              {
                icon: "section-icon.svg",
                text: "Customers would like to know how pricey the place is, so in the descriptions should be price indicators.",
              },
              {
                icon: "section-icon.svg",
                text: "A big part of the users would be travelers, they might be tired and hungry, and most likely they are using the app with a low phone battery after taking lots of photos, so I thought the app should have a dark mode as well to save the battery.",
              },
              {
                icon: "section-icon.svg",
                text: "The app should support several languages to be useful for travelers.",
              },
            ],
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
            width: 450,
            title: "Profile",
            body: "From the Task Bar user are able to navigate to the profile screen where they can choose the language or theme of the app, log out and get help.",
          },
        ]}
      />
      <Section
        topSpace={32}
        content={[
          {
            width: 628,
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
            title: "Reviews & Price indicators",
            body: "Gluten-free bakeries and restaurants are often overly expensive. So, before visiting the place would be great to have an overall idea of how pricey it is. Price indicators and customer reviews would be helpful for this. Hence, there is a restaurant info page where users can read their descriptions and reviews, make a call to reserve, get restaurants' locations to navigate, write reviews after visiting and add them to their favorite list.",
          },
          {
            image: "gluten-free-reviews.png",
            imageWidth: 622,
            imageHeight: 533,
          },
        ]}
      />

      <Section
        content={[{ title: "Light and Dark Themes" }]}
        fullImage="gluten-free-screens.jpg"
        fullImageWidth={1140}
        fullImageHeight={957}
      />

      <Section
        topSpace={100}
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

      <ProjectFinal link={prototypeLink} />
    </Screen>
  );
}
