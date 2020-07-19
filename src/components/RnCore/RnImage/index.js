import React, { useEffect, useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { Images } from "../../../static/Theme";

const IMAGE_URL =
  "https://i.pinimg.com/originals/88/19/00/881900abeaea27e70c00d78c5d43cee1.jpg";

function RnImage(props) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setUrl(IMAGE_URL);
    }, 1000);
  }, []);

  Image.getSize(
    IMAGE_URL,
    (width, height) => console.log({ width, height }),
    (e) => console.error(e)
  );

  return (
    <View>
      <ScrollView>
        <Image
          style={{ width: 150, height: 150 }}
          source={{ uri: IMAGE_URL }}
        />
        <Image
          style={{ width: 150, height: 150 }}
          source={{ uri: IMAGE_URL }}
          blurRadius={10}
        />
        <Image style={{ width: 150, height: 150 }} source={{ uri: url }} />
        <Image
          style={{ width: 150, height: 150 }}
          source={{ uri: IMAGE_URL }}
        />
        <Image
          style={{ width: 150, height: 150 }}
          source={{ uri: IMAGE_URL }}
        />
      </ScrollView>
    </View>
  );
}

export default RnImage;
