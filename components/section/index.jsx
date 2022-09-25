import React from "react";
import { View, Text } from "react-native";
import { Colors } from "..";
import Image from "next/image";

export const Section = ({
  isMobile,
  description,
  title,
  content,
  topSpace,
}) => {
  const containerStyle = {
    flexDirection: isMobile ? "column" : "row",
    marginBottom: isMobile ? 48 : 100,
    marginHorizontal: -36,
    marginTop: topSpace,
  };

  const contentStyle = {
    flex: isMobile ? "auto" : 1,
    marginHorizontal: 36,
    marginBottom: isMobile && 24,
  };

  const titleStyle = {
    fontSize: isMobile ? 20 : 28,
    lineHeight: "130%",
    fontWeight: isMobile ? 600 : 500,
    color: Colors.primary,
    fontFamily: "Poppins",
  };

  const subtitleStyle = {
    fontSize: isMobile ? 16 : 20,
    lineHeight: "130%",
    fontWeight: 500,
    color: Colors.primary,
    fontFamily: "Poppins",
  };

  const bodyStyle = {
    fontSize: isMobile ? 14 : 16,
    lineHeight: "130%",
    fontWeight: 300,
    color: Colors.primary,
    fontFamily: "Poppins",
  };

  const iconStyle = {
    marginTop: 4,
    marginBottom: 8,
    alignItems: "flex-start",
  };

  const listStyle = {
    flexDirection: "row",
    marginBottom: 10,
  };

  const listIconStyle = {
    marginEnd: 8,
    marginTop: 4,
  };

  const titleContainer = {
    marginBottom: isMobile ? 20 : 32,
  };

  const descriptionContainer = {
    paddingBottom: isMobile ? 16 : 32,
  };

  let imageWidth = isMobile ? 320 : 600;
  let imageHeight = isMobile ? 250 : 600;
  let mobileFlag = isMobile ? "-mobile" : "";

  return (
    <>
      {title && (
        <View style={titleContainer}>
          <Text style={titleStyle}>{title}</Text>
        </View>
      )}

      {description && (
        <View style={descriptionContainer}>
          <Text style={bodyStyle}>{description}</Text>
        </View>
      )}

      <View style={containerStyle}>
        {content?.map(({ subtitle, text, list, image, style }) => {
          const key = `${subtitle?.length}` + 1;
          const iconWidth = subtitle ? subtitle?.length * 13 : 100;
          let dynamicImageStyle;
          let dynamicContentStyle;

          switch (style) {
            case "center":
              dynamicContentStyle = { justifyContent: "center" };
              break;
            case "end":
              dynamicImageStyle = { alignSelf: "flex-end" };
              break;
            case "start":
              dynamicImageStyle = { alignSelf: "flex-start" };
              break;
            case "full":
              imageWidth = isMobile ? 370 : 1440;
              imageHeight = isMobile ? 250 : 1000;
              break;
          }

          return (
            <View style={[contentStyle, dynamicContentStyle]} key={key}>
              {subtitle && (
                <>
                  <Text style={subtitleStyle}>{subtitle}</Text>

                  <View style={iconStyle}>
                    <Image
                      src="/assets/underline.svg"
                      width={iconWidth}
                      height={6}
                    />
                  </View>
                </>
              )}

              {text && <Text style={bodyStyle}>{text}</Text>}

              {list &&
                list?.map(({ text, icon }) => {
                  const key = `${text?.length}` + 1;
                  return (
                    <View style={listStyle} key={key}>
                      <View style={listIconStyle}>
                        {icon && (
                          <Image
                            src={`/assets/${icon}`}
                            width={15}
                            height={12}
                          />
                        )}
                      </View>
                      <Text style={bodyStyle}>{text}</Text>
                    </View>
                  );
                })}

              {image && (
                <View
                  style={[
                    {
                      width: imageWidth,
                      height: imageHeight,
                      alignSelf: isMobile ? "center" : "auto",
                    },
                    dynamicImageStyle,
                  ]}
                >
                  <Image
                    src={`/assets/${image}${mobileFlag}.png`}
                    width={imageWidth}
                    height={imageHeight}
                  />
                </View>
              )}
            </View>
          );
        })}
      </View>
    </>
  );
};
