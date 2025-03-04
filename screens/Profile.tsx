import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icon, ProfileItem } from "../components";
import {data} from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";

const Profile = () => {
  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    firstDate,
    description,
    location,
    match,
    name,
  } = data[7];

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}
        imageStyle={{borderRadius:150}}>
          <View style={[styles.top, {marginHorizontal:-50}]}>
            <TouchableOpacity>
              <Icon
                name="chevron-back"
                size={20}
                color={WHITE}
                style={styles.topIconLeft}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon
                name="ellipsis-vertical"
                size={20}
                color={WHITE}
                style={styles.topIconRight}
              />
            </TouchableOpacity>
          </View>
        
        </ImageBackground>
        <ProfileItem
          matches={match}
          name={name}
          age={age}
          location={location}
          description={description}
          firstDate={firstDate}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
          
        />

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton}>
            <Icon name="ellipsis-horizontal" size={20} color={WHITE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton}>
            <Icon name="chatbubble" size={20} color={WHITE} />
            <Text style={styles.textButton}>Chat Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
