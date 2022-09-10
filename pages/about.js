import { StyleSheet, View } from "react-native";
import { Screen, Section } from "../components";
import Image from "next/image";

export default function About() {
  return (
    <Screen isAbout={true}>
      <View style={styles.container}>
        <View style={styles.contentStart}>
          <Section
            title="Who is Elene"
            text="I'm Elene, UX/UI Designer interested in designing meaningful experiences that shape how we interact with various products or services. 
            Ever since childhood, I’ve wondered why people make the decisions they do, and find it exciting to guess others' emotions, thoughts, or motivations. Furthermore, I've always loved putting myself in someone else's shoes but later realized that it’s a great skill named empathy. That's one of the reasons why UX design is so enjoyable to me."
          />

          <Section
            title="Background & BA Degree"
            text="The skills and views I’ve gained during my BA (Engineering and Computer Science) are essential to UX design. After graduating, I got interested in graphic design and worked on freelance projects, which led me to UX Design and took the best courses of Google, Idxf, and DesignLab. Completing those comprehensive courses helped me become a confident UX designer."
          />

          <Section
            title="Elene in UX Field"
            text="I continued my career with UX research, took courses about it, done several research projects, and worked as a UX Researcher in the biggest bank in Georgia. 
            I truly enjoyed being UX Researcher and gained remarkable experience that right now as a designer makes me very comfortable working with other researchers. During that time I realized that I wanted the full package of UX, wanted to use my other design skills too, and admitted that UX/UI design excites me more. That is how I moved to a design agency as a Product Designer. And that was the best decision of mine!"
          />

          <Section
            title="Outside the Work"
            text="Actually, I am never outside the work, as I love thinking and observing the design of the universe, but if I am you can find me roller skating! 🛼"
          />
        </View>

        <View style={styles.contentEnd}>
          <Image
            src="/assets/about-cover.png"
            width={574}
            height={381}
            alt="Author Image"
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  contentStart: {
    flex: 1,
  },
  contentEnd: {
    marginLeft: 90,
    marginTop: 20,
  },
});
