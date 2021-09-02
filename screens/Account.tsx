import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icon,AccItem } from "../components";

import {Accountdata} from "../assets/data/demo";
import styles, { BLACK, WHITE } from "../assets/styles";

const Account = () => {
  const {
 name,
  description,
  firstDate,
  age,
  image,
  interest,
  background,
  hobby,
  location,
  } = Accountdata;

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
          <View style={[styles.top,{marginHorizontal:-50}]}>
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

        <AccItem
          
            name={name}
            description={description}
            firstDate={firstDate}
            age={age}
            interest={interest}
            background={background}
            hobby={hobby}
            location={location}
            

          
          
        />

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.roundedButton}>
            <Icon name="save" size={20} color={WHITE} />
            <Text style={styles.textButton}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton}>
            <Icon name="md-color-wand-sharp" size={20} color={WHITE} />
            <Text style={styles.textButton}>Edit</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </ImageBackground>
  );
};

export default Account;
