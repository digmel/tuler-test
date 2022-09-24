import { Screen, Section, SectionHero, SectionFinal } from "../components";

export default function FirstAidApp({ isMobile, constants }) {
  return (
    <Screen isProject={true} isMobile={isMobile}>
      <SectionHero
        isMobile={isMobile}
        link={constants.links.FirstAidApp}
        image="first-aid-hero-large.png"
        headline="Learn First Aid"
        label="App allows people to refresh their First Aid knowledge with simple illustrated fun Exams"
      />

      <Section
        isMobile={isMobile}
        title="Project Overview"
        content={[
          {
            subtitle: "Background",
            text: "The app is designed for people who are interested in first-aid. The First Aid app will teach you how to handle yourself and injured people and how to behave during floods, earthquakes, and other natural disasters. The app aims to provide useful information and make the learning process easier and pleasurable.",
          },
          {
            subtitle: "The Goal",
            text: "Develop a solution that helps people learn how to handle injuries or natural disasters.",
          },
          {
            subtitle: "My Role & Responsibilities",
            list: [
              {
                text: "Product Designer & UX Researcher",
              },
              {
                icon: "section-icon.svg",
                text: "Conducting interviews & usability studies,",
              },
              { icon: "section-icon.svg", text: "Digital wireframing," },
              {
                icon: "section-icon.svg",
                text: "Accounting for accessibility,",
              },
              { icon: "section-icon.svg", text: "Iterating on designs," },
              { icon: "section-icon.svg", text: "Information architecture." },
            ],
          },
        ]}
      />

      {/* 
      {!isMobile && (
        <>
          <Section
            topSpace={64}
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
            content={[
              {
                title: "Persona #1",
              },
            ]}
            fullImage="first-aid-persona1.svg"
            fullImageWidth={1292}
            fullImageHeight={549}
            fullImageTopSpace={-50}
          />

          <Section
            content={[
              {
                title: "Persona #2",
              },
            ]}
            fullImage="first-aid-persona2.svg"
            fullImageWidth={1292}
            fullImageHeight={549}
            fullImageTopSpace={-50}
          />

          <Section
            topSpace={64}
            headline="Usability Tests on Lo-Fi Prototype"
            content={[
              {
                width: 458,
                title: "Digital Wireframes",
                body: "After ideating and drafting digital wireframes, I created the initial designs for the First aid app. These designs focus on delivering personalized guidance to users to help them learn to handle emergencies.",
              },
              {
                width: 395,
                title: "Usability Study Findings",

                list: [
                  {
                    text: "Low-fidelity prototype were used for moderated usability study. Main findings:",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "People would like to read illustrated articles,",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "Just reading topics won't be interesting,",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "Users need the motivation to use this application.",
                  },
                ],
              },
              {
                width: 412,
                title: "Insights-based Changes",
                body: "Based on the insights from the usability studies, I applied some changes, I’ve added tests section because of the users’ needs. Illustrations make the article interesting and visually appealing. Texts are simplified and easy to read even for the children.",
              },
            ]}
            fullImage="first-aid-usability.jpg"
            fullImageWidth={1140}
            fullImageHeight={533}
          />

          <Section
            topSpace={64}
            content={[
              {
                width: 568,
                marginTop: 40,
                title: "Test Feature",
                body: "Research made clear that just reading the articles won't be enough to learn about first aid. That's why I have incorporated tests on the app, users can learn easily by doing quizzes. There are 10 random questions in the test and after answering them explanation will appear, if they give the wrong answer there will be a hint, and questions won't go to the next until the correct answer is selected.",
              },
              {
                image: "first-aid-test.jpg",
                imageWidth: 728,
                imageHeight: 525,
              },
            ]}
          />

          <Section
            topSpace={64}
            content={[
              {
                image: "first-aid-articles.jpg",
                imageWidth: 576,
                imageHeight: 629,
              },
              {
                width: 580,
                marginTop: 80,
                title: "Articles",
                body: "Users of the First Aid App can access lots of useful articles about ways to handle dangerous situations, including floods, earthquakes, and other natural disasters. The second important topic is Injuries, where people will be introduced to different kinds of emergencies such as Anaphylaxis, Asthma or Heart attacks, Fractures, and Diabetes.",
              },
            ]}
          />

          <Section
            headline="Result & Next Steps"
            content={[
              {
                width: 466,
                title: "Accessibility Consideration",
                list: [
                  {
                    icon: "section-icon.svg",
                    text: "This app is designed to be accessible to everyone using:",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "Clear labels for interactive elements that can be read by screen readers,",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "The colors that are specially selected, and the contrast is checked,",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "Headings with different sized text for clear visual hierarchy.",
                  },
                ],
              },
              {
                width: 395,
                title: "Next Steps",
                listIcon: "section-icon.svg",
                list: [
                  {
                    icon: "section-icon.svg",
                    text: "Conduct another round of usability studies to get how successful it is,",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "Add more educational resources for users to learn about first aid,",
                  },
                  {
                    icon: "section-icon.svg",
                    text: "Conduct more research to integrate new useful features.",
                  },
                ],
              },
            ]}
          />
          <Section
            fullImage="first-aid-screens.jpg"
            fullImageWidth={1440}
            fullImageHeight={969}
          />

        </>
      )} */}

      <SectionFinal isMobile={isMobile} link={constants.links.FirstAidApp} />
    </Screen>
  );
}
