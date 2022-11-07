import { Screen, Section, SectionHero, SectionFinal } from "../components";

export default function Page({ isMobile, constants }) {
  return (
    <Screen isProject={true} isMobile={isMobile}>
      <SectionHero
        isMobile={isMobile}
        link={constants.links.FirstAidApp}
        image="marikone-large-hero"
        headline="Fashion Designer’s Portfolio"
        label="Fashion designer's Responsive website, where people can find her collection and contact details."
      />
      <Section
        title="Project Overview"
        isMobile={isMobile}
        content={[
          {
            subtitle: "Background",
            text: "Marikone is a creative fashion designer from Tbilisi, Georgia who has designed lots of different kinds of clothes and accessories. She wanted to have a simple, one-page website where people would be able to see her contact information and collections.",
          },
          {
            subtitle: "The Goal",
            text: "The goal was to design a simple and easy-to-scan responsive website for the fashion designer, that she would use to introduce her work to the customers.",
          },
          {
            subtitle: "My Role & Project Duration",
            list: [

              {
                icon: "section-icon.svg",
                text: "UX/UI Designer",
              },
              {
                // icon: "section-icon.svg",
                text: "1 Week",
              },

            ],
          },
        ]}
      />
           <Section
        title="Wireframing"
        isMobile={isMobile}
        content={[
          {
            subtitle: "Basic Wireframes",
            text: "During the wireframing, I created multiple sketches and iterations in order to define the best possible layout for the website. The goal was to design a simple page with the most important details in mind, such as, people should immediately recognize that this is a fashion designer’s portfolio website and show the latest designs of Marikone, little information about the author, popular products, and contact form. Here you can see the best option that I chose.",
          },
          {
            image: "marikone-basic-wireframes",
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
            image: "marikone-upgrading-wireframes",
          },
          {
            subtitle: "Upgrading Wireframes",
            text: "The brand Marikone has already had its own custom logo created and has been using light pink as a brand color for years. It was essential to keep the same tone and style as its customers already were familiar with. I’ve decided to use that pink as an accent color, but to make it accent there was the necessity of a darker background, additionally, the dark background would also be suitable to present colorful product images.",
            style: "center",
          },
        ]}
      />
           <Section
        title="Design and Reasoning"
        isMobile={isMobile}
        content={[
          {
            subtitle: "Introduction",
            text: "For a portfolio website, it's essential to immediately let the people know what kind of website are they visiting. I choose to keep it simple and do it with a minimalistic title and make users interested by showing Marikone's latest collections. The collection section will always be updated with her recent work and people will be able to browse what kind of clothes Marikone creates.",
          },
          {
            image: "marikone-introduction",
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
            image: "marikone-popular",
          },
          {
            subtitle: "The Most Popular",
            text: "Marikone's niche product is a corset, which is her most popular product. For that reason, I decided that those products deserve to have a special section and offered her that idea. We ended up placing three corsets on that section.",
            style: "center",
          },
        ]}
      />
      <Section
        isMobile={isMobile}
        content={[
          {
            subtitle: "Contact & Locations",
            text: "At the end of the page, there is provided a contact form and Marikone's store locations.",
          },
          {
            image: "marikone-contact",
            style: "end",
          },
        ]}
      />
      <Section
        isMobile={isMobile}
        content={[
          {
            subtitle: "Responsive Website",
            image: "marikone-responsive",
            style: "full",
          },
        ]}
      />

      <SectionFinal isMobile={isMobile} link={constants.links.FirstAidApp} />
    </Screen>
  );
}
