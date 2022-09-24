import React from "react";
import { View, Text } from "react-native";
import { Colors, Card } from "..";

export const SectionCard = ({ isMobile, title, content }) => {
  const containerStyle = {
    flexDirection: isMobile ? "column" : "row",
    marginBottom: isMobile ? 16 : 32,
    marginHorizontal: -16,
  };

  const contentStyle = {
    flex: isMobile ? "auto" : 1,
    marginHorizontal: 16,
    marginBottom: isMobile && 16,
  };

  const titleStyle = {
    fontSize: isMobile ? 20 : 28,
    lineHeight: "130%",
    fontWeight: isMobile ? 600 : 500,
    color: Colors.primary,
    fontFamily: "Poppins",
  };

  const titleContainer = {
    marginBottom: isMobile ? 12 : 16,
  };

  return (
    <>
      {title && (
        <View style={titleContainer}>
          <Text style={titleStyle}>{title}</Text>
        </View>
      )}

      <View style={containerStyle}>
        {content?.map(({ title, text, image, link }) => {
          const key = `${title?.length}` + 1;
          return (
            <View style={contentStyle} key={key}>
              <Card
                title={title}
                text={text}
                image={image}
                link={link}
                isMobile={isMobile}
              />
            </View>
          );
        })}
      </View>
    </>
  );
};
