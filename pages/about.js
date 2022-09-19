import { StyleSheet, View } from "react-native";
import { Screen, Section } from "../components";
import Image from "next/image";

export default function About() {
  return (
    <Screen isAbout={true}>
      <View style={styles.container}>
        <View style={styles.contentStart}>
          <Section
            content={[
              {
                width: 967,
                title: "Who is Elene",
                body: "I'm Elene, UX/UI Designer interested in designing meaningful experiences that shape how we interact with various products or services. Ever since childhood, I’ve wondered why people make the decisions they do, and find it exciting to guess others' emotions, thoughts, or motivations. Furthermore, I've always loved putting myself in someone else's shoes but later realized that it’s a great skill named empathy. That's one of the reasons why UX design is so enjoyable to me.",
              },
            ]}
          />

          <Section
            content={[
              {
                width: 967,
                title: "Background & BA Degree",
                body: "The skills and views I’ve gained during my BA (Engineering and Computer Science) are essential to UX design. After graduating, I became interested in graphic design and worked on freelance projects, which led me to UX Design and took the best courses of Google, Idxf, and DesignLab. Completing those comprehensive courses helped me become a confident UX designer.",
              },
            ]}
          />

          <Section
            content={[
              {
                width: 967,
                title: "Elene in UX Field",
                body: "I continued my career in UX research, took some courses, did several research projects, and worked as a UX Researcher in the biggest bank of Georgia.\n\nI truly enjoyed being UX Researcher and gained remarkable experience that makes me very comfortable working with other researchers. During that time I realized that I wanted the whole package of UX, and wanted to use my other design skills too. That's how I moved to a design agency as a Product Designer.",
              },
            ]}
          />

          <Section
            content={[
              {
                width: 967,
                title: "Outside the Work",
                body: "Outside work, you can find me roller skating! 🛼",
              },
            ]}
          />

          <Section
            title="Outside the Work"
            text="Actually, I am never outside the work, as I love thinking and observing the design of the universe, but if I am you can find me roller skating! 🛼"
          />
        </View>

        <View style={styles.contentEnd}>
          <Image
            src="/assets/about-cover.jpeg"
            width={404}
            height={390}
            alt="Author Image"
            style={{ borderRadius: 8 }}
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
    borderRadius: 4,
  },
});
