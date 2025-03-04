import React from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import { ProfileItemT } from "../types";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";

const ProfileItem = ({
  age,
  info1,
  info2,
  info3,
  info4,
  firstDate,
  description,
  location,
  matches,
  name,
}: ProfileItemT) => (
  <View style={styles.containerProfileItem}>
    <View style={styles.matchesProfileItem}>
      <Text style={styles.matchesTextProfileItem}>
        <Icon name="heart" size={13} color={WHITE} /> {matches}% Similarity
      </Text>
    </View>

    <Text style={styles.name}>{name}</Text>

    <Text style={styles.descriptionProfileItem}>
      {age} - {location}
    </Text>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="person" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{description}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="ios-image-sharp" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info1}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="ios-information" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info3}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="ios-game-controller" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info2}</Text>
    </View>

    

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="location-sharp" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{firstDate}</Text>
    </View>

  </View>
);

export default ProfileItem;
