import React from "react";
import { Text, TouchableOpacity, Modal,View, ImageBackground,FlatList,Image,TextInput} from "react-native";
import Icon from "./Icon";
import styles, { DIMENSION_HEIGHT ,WHITE,SECONDARY_COLOR, PRIMARY_COLOR,YELLOW} from "../assets/styles";

import {ChatData} from "../assets/data/demo";

const ChatPop = () => (

    <Modal transparent={true}  animationType="fade" visible={false} >
        <ImageBackground source={require("../assets/images/bg.png")} style={[styles.bg,{marginTop:35,}]}>
            <View style={styles.ChatContainer}>
                <FlatList style={styles.ChatList}
                    data={ChatData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(message) => {
                        
                        const item = message.item;
                        let inMessage = item.type === 'in';
                        let itemStyle = inMessage ? styles.chatItemIn : styles.chatItemOut;
                        return (
                        <View style={[styles.chatItem, itemStyle]}>
                            {!inMessage }
                            <View style={[styles.chatBalloon]}>
                            <Text>{item.message}</Text>
                            </View>
                            {inMessage}
                        </View>
                        )
                    }}
                />
                <View style={[styles.chatFooter]}>
                    <View style={styles.chatInputContainer}>
                        <TextInput style={styles.chatInputs}
                            placeholder="Write a message..."
                            underlineColorAndroid='transparent'
                            />
                    </View>

                    <TouchableOpacity style={styles.circledButton}>
                        <Icon name="send" size={20} color={WHITE} />
                    </TouchableOpacity>
                </View>
      </View>
           
        </ImageBackground>
      </Modal>
  

);

export default ChatPop;
