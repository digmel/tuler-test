import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { textStyles } from "../config/textStyles";
import Image from "next/image";

export const Section = ({
  headline,
  description,
  content,
  fullImage,
  fullImageHeight,
  fullImageWidth,
  topSpace,
}) => {
  return (
    <View style={[styles.wrapper, { marginTop: topSpace }]}>
      {headline && <Text style={textStyles.h3}>{headline}</Text>}

      {description && (
        <View style={styles.description}>
          <Text style={textStyles.body}>{description}</Text>
        </View>
      )}

      <View style={styles.container}>
        {content &&
          content?.map(
            ({
              title,
              body,
              width,
              marginTop,
              list,
              listIcon,
              image,
              imageWidth,
              imageHeight,
            }) => {
              const _underlineWidth = title ? title.length * 15 : 100;
              const _underlineHeight = 6;
              return (
                <View style={[styles.content, { width, marginTop }]}>
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
                    list?.map((listItem) => (
                      <View style={styles.list}>
                        <View style={styles.icon}>
                          <Image
                            src={`/assets/${listIcon}`}
                            width={15}
                            height={12}
                          />
                        </View>
                        <Text style={textStyles.body}>{listItem}</Text>
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
        <Image
          src={`/assets/${fullImage}`}
          width={fullImageWidth}
          height={fullImageHeight}
        />
      )}
    </View>
  );
};
