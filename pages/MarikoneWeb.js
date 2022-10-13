import { Screen, Section, SectionHero, SectionFinal } from "../components";

export default function Page({ isMobile, constants }) {
  return (
    <Screen isProject={true} isMobile={isMobile}>
      <SectionHero
        isMobile={isMobile}
        link={constants.links.FirstAidApp}
        // image="marikone-hero"
        headline="Fashion Designer’s Portfolio"
        label="App allows people to refresh their First Aid knowledge with simple illustrated fun Exams"
      />
      <Section
        title="Project Overview"
        isMobile={isMobile}
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
      <Section
        title="Understanding the User"
        isMobile={isMobile}
        content={[
          {
            subtitle: "Research",
            text: "I've conducted user interviews and got lots of insights. Most interview participants reported that they don't have enough information about first aid, and never had the opportunity to learn. The feedback received through research made it clear, that users are willing to get basic information on how to behave during an emergency if they had an easy-to-use tool to help them.",
          },
          {
            subtitle: "Problem Statement #1",
            text: "Based on the research insights I’ve created 2 personas and problem statements:Stella is a part-time graphic designer and mom, who needs to find a platform that she will use in teaching her kid first aid.",
          },
          {
            subtitle: "Problem Statement #2",
            text: "Based on the research insights I’ve created 2 personas and problem statements: Jennifer is a full-time student who needs an app that teaches her how to handle emergencies to get used to living alone.",
          },
        ]}
      />

      <Section
        isMobile={isMobile}
        content={[
          {
            subtitle: "Persona #1",
            image: "first-aid-persona1",
            style: "full",
          },
        ]}
      />

      <Section
        isMobile={isMobile}
        topSpace={isMobile ? -200 : -500}
        content={[
          {
            subtitle: "Persona #2",
            image: "first-aid-persona2",
            style: "full",
          },
        ]}
      />

      <Section
        isMobile={isMobile}
        topSpace={isMobile ? -180 : -420}
        title="Usability Tests"
        content={[
          {
            subtitle: "Digital Wireframes",
            text: "After ideating and drafting digital wireframes, I created the initial designs for the First aid app. These designs focus on delivering personalized guidance to users to help them learn to handle emergencies.",
          },
          {
            subtitle: "Usability Study Findings",
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
            subtitle: "Insights-based Changes",
            text: "Based on the insights from the usability studies, I applied some changes, I’ve added tests section because of the users’ needs. Illustrations make the article interesting and visually appealing. Texts are simplified and easy to read even for the children.",
          },
        ]}
      />

      <Section
        isMobile={isMobile}
        topSpace={-20}
        content={[
          {
            image: "first-aid-usability",
            style: "full",
          },
        ]}
      />

      <Section
        isMobile={isMobile}
        topSpace={isMobile ? -80 : -500}
        content={[
          {
            subtitle: "Test Feature",
            text: "Research made clear that just reading the articles won't be enough to learn about first aid. That's why I have incorporated tests on the app, users can learn easily by doing quizzes. There are 10 random questions in the test and after answering them explanation will appear, if they give the wrong answer there will be a hint, and questions won't go to the next until the correct answer is selected.",
            style: "center",
          },
          {
            image: "first-aid-test",
            style: "end",
          },
        ]}
      />

      <Section
        isMobile={isMobile}
        variant="isMobile-reverse"
        topSpace={isMobile ? -80 : -100}
        content={[
          {
            image: "first-aid-articles",
          },
          {
            subtitle: "Articles",
            text: "Users of the First Aid App can access lots of useful articles about ways to handle dangerous situations, including floods, earthquakes, and other natural disasters. The second important topic is Injuries, where people will be introduced to different kinds of emergencies such as Anaphylaxis, Asthma or Heart attacks, Fractures, and Diabetes.",
            style: "center",
          },
        ]}
      />

      <Section
        isMobile={isMobile}
        title="Result & Next Steps"
        content={[
          {
            subtitle: "Accessibility Consideration",
            list: [
              {
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
            subtitle: "Next Steps",
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
          {
            image: "first-aid-next-steps",
          },
        ]}
      />

      <Section
        isMobile={isMobile}
        content={[
          {
            subtitle: "First Aid App Screens",
            image: "first-aid-screens",
            style: "full",
          },
        ]}
      />

      <SectionFinal isMobile={isMobile} link={constants.links.FirstAidApp} />
    </Screen>
  );
}
