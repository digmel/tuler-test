import { colors } from "./colors";

export const textStyles = {
  headline: {
    fontSize: 80,
    fontWeight: 600,
  },
  h1: {
    regular: {
      fontSize: 64,
      fontWeight: 400,
    },
    bold: {
      fontSize: 64,
      fontWeight: 700,
    },
  },
  h2: {
    fontSize: 42,
    fontWeight: 600,
  },
  subtitle: {
    fontSize: 36,
    fontWeight: 300,
  },
  link: {
    fontSize: 32,
    fontWeight: 700,
    color: colors.link,
  },
  button: {
    fontSize: 32,
    fontWeight: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: "1%",
  },
  body: {
    fontSize: 20,
    fontWeight: 300,
    letterSpacing: "1%",
  },
  label: {
    fontSize: 20,
    fontWeight: 300,
    letterSpacing: "1%",
    color: colors.dark,
  },
};
