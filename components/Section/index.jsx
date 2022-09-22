import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { textStyles } from "../config/textStyles";
import Image from "next/image";
import { usePlatform } from "../../hooks";

export const Section = ({
  headline,
  description,
  content,
  fullImage,
  fullImageHeight,
  fullImageWidth,
  fullImageTopSpace,
  fullImageBottomSpace,
  topSpace,
}) => {
  const { isMobile } = usePlatform();

  const containerStyle = {
    flexDirection: isMobile ? "column" : "row",
    alignItems: "flex-start",
    justifyContent: "space-start",
    marginBottom: 32,
  };

  const contentStyle = {
    marginTop: isMobile ? 16 : 0,
  };

  const headlineStyle = {
    marginTop: isMobile ? 0 : 4,
    marginBottom: isMobile ? 20 : 32,
  };
  return (
    <View style={[styles.wrapper, { marginTop: topSpace }]}>
      {headline && (
        <View style={headlineStyle}>
          <Text style={textStyles.h3}>{headline}</Text>
        </View>
      )}

      {description && (
        <View style={styles.description}>
          <Text style={textStyles.body}>{description}</Text>
        </View>
      )}

      <View style={containerStyle}>
        {content &&
          content?.map(
            ({ title, body, width, list, image, imageWidth, imageHeight }) => {
              const _underlineWidth = title ? title.length * 15 : 100;
              const _underlineHeight = 6;
              const key = `${title}` + 1;
              return (
                <View
                  style={[styles.content, { width }, contentStyle]}
                  key={key}
                >
                  {title && (
                    <>
                      <Text style={textStyles.title}>{title}</Text>

                      <View style={styles.underline}>
                        <Image
                          src="/assets/underline.svg"
                          width={_underlineWidth}
                          height={_underlineHeight}
                        />
                      </View>
                    </>
                  )}

                  {body && <Text style={textStyles.body}>{body}</Text>}

                  {list &&
                    list?.map(({ text, icon }) => (
                      <View style={styles.list}>
                        <View style={styles.icon}>
                          {icon && (
                            <Image
                              src={`/assets/${icon}`}
                              width={15}
                              height={12}
                            />
                          )}
                        </View>
                        <Text style={textStyles.body}>{text}</Text>
                      </View>
                    ))}

                  {image && (
                    <Image
                      src={`/assets/${image}`}
                      width={imageWidth}
                      height={imageHeight}
                    />
                  )}
                </View>
              );
            }
          )}
      </View>

      {fullImage && (
        <View
          style={{
            marginTop: fullImageTopSpace,
            marginBottom: fullImageBottomSpace,
          }}
        >
          <Image
            src={`/assets/${fullImage}`}
            width={fullImageWidth}
            height={fullImageHeight}
          />
        </View>
      )}
    </View>
  );
};
