import React from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import { AccountT } from "../types";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";
import { TextInput } from "react-native-gesture-handler";

const AccItem = ({
  name,
  description,
  firstDate,
  age,
  interest,
  background,
  hobby,
  location,
}: AccountT) => (
  <View style={styles.containerProfileItem}>
    <View style={styles.titleAccItem}>
      <Text style={styles.matchesTextProfileItem}>
        <Icon name="ios-eye" size={13} color={WHITE} /> Personal Profile
      </Text>
    </View>

    <Text style={styles.name}>{name}</Text>

    <TextInput style={styles.descriptionProfileItem}>
      {age} - {location}
    </TextInput>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="person" size={12} color={DARK_GRAY} />
      </Text>
      <TextInput  multiline
       style={styles.infoContent}>{description}</TextInput>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="ios-image-sharp" size={12} color={DARK_GRAY} />
      </Text>
      <TextInput style={styles.infoContent}>{background}</TextInput>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="ios-information" size={12} color={DARK_GRAY} />
      </Text>
      <TextInput style={styles.infoContent}>{interest}</TextInput>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="ios-game-controller" size={12} color={DARK_GRAY} />
      </Text>
      <TextInput style={styles.infoContent}>{hobby}</TextInput>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="location-sharp" size={12} color={DARK_GRAY} />
      </Text>
      <TextInput style={styles.infoContent}>{firstDate}</TextInput>
    </View>

  </View>
);

export default AccItem;
