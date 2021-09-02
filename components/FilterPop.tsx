import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, Modal, View, ImageBackground, Slider, Picker } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY, WHITE, SECONDARY_COLOR, PRIMARY_COLOR, YELLOW } from "../assets/styles";


const FilterPop = () => (

    <Modal transparent={true} animationType="fade" visible={false} >
        <ImageBackground source={require("../assets/images/bg.png")} style={[styles.bg, { marginTop: 35, }]}>
            <View style={[styles.containerHome]}>
                <View style={{ flexDirection: 'row', paddingBottom: 50 }}>

                    <Text style={[{ left: 28, fontWeight: 'bold' }]}>Search Preference</Text>
                </View>
                <View style={[styles.info]}>
                    <Text style={styles.iconProfile}>
                        Age:
                    </Text>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                        <Slider
                            style={{ width: 300 }}
                            step={1}
                            minimumValue={18}
                            maximumValue={71}
                            value={18}
                            thumbTintColor={SECONDARY_COLOR}
                            minimumTrackTintColor={SECONDARY_COLOR}
                            maximumTrackTintColor={PRIMARY_COLOR}
                        />
                        <Text style={styles.iconProfile}>
                            18
                        </Text>


                    </View>
                </View>

                <View style={styles.info}>
                    <Text style={styles.iconProfile}>
                        Height(cm):
                    </Text>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                        <Slider
                            style={{ width: 300 }}
                            step={1}
                            minimumValue={140}
                            maximumValue={250}
                            value={140}
                            thumbTintColor={SECONDARY_COLOR}
                            minimumTrackTintColor={SECONDARY_COLOR}
                            maximumTrackTintColor={PRIMARY_COLOR}
                        />
                        <Text style={styles.iconProfile}>
                            160
                        </Text>


                    </View>

                </View>



                <View style={styles.info}>
                    <Text style={styles.iconProfile}>
                        Gender:
                    </Text>
                    <View style={styles.actionsProfile}>
                        <TouchableOpacity style={styles.roundedButton}>
                            <Icon name="md-man" size={20} color={YELLOW} />
                            <Text style={[styles.textButton, { color: YELLOW }]}>Male</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.roundedButton}>
                            <Icon name="md-woman" size={20} color={WHITE} />
                            <Text style={styles.textButton}>Female</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={[styles.info,]}>
                    <Text style={styles.iconProfile}>
                        Location:
                    </Text>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: SECONDARY_COLOR }}>
                        <Picker
                            // itemStyle={styles.itemStyle}
                            mode="dropdown"
                            style={[styles.pickerStyle, { color: SECONDARY_COLOR }]}
                        // selectedValue={this.state.selectedcat}
                        // onValueChange={this.onValueChangeCat.bind(this)}
                        >

                            <Picker.Item color={DARK_GRAY} label="Kuala Lumpur" value="KL" />
                            <Picker.Item color={DARK_GRAY} label="Pahang" value="PH" />
                            <Picker.Item color={DARK_GRAY} label="Penang" value="PN" />

                        </Picker>


                    </View>

                </View>

                <View style={[styles.info]}>
                    <Text style={styles.iconProfile}>
                        Status:
                    </Text>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: SECONDARY_COLOR }}>
                        <Picker
                            // itemStyle={styles.itemStyle}
                            mode="dropdown"
                            style={[styles.pickerStyle, { color: SECONDARY_COLOR }]}
                        // selectedValue={this.state.selectedcat}
                        // onValueChange={this.onValueChangeCat.bind(this)}
                        >

                            <Picker.Item color={DARK_GRAY} label="Single" value="single" />
                            <Picker.Item color={DARK_GRAY} label="Married" value="married" />


                        </Picker>


                    </View>

                </View>

                <View style={[styles.info]}>
                    <Text style={styles.iconProfile}>
                        Education Level:
                    </Text>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: SECONDARY_COLOR }}>
                        <Picker
                            // itemStyle={styles.itemStyle}
                            mode="dropdown"
                            style={[styles.pickerStyle, { color: SECONDARY_COLOR }]}
                        // selectedValue={this.state.selectedcat}
                        // onValueChange={this.onValueChangeCat.bind(this)}
                        >

                            <Picker.Item color={DARK_GRAY} label="College" value="college" />
                            <Picker.Item color={DARK_GRAY} label="Undergraduate" value="undergraduate" />
                            <Picker.Item color={DARK_GRAY} label="Master" value="master" />
                            <Picker.Item color={DARK_GRAY} label="Doctorate" value="doctorate" />
                        </Picker>


                    </View>

                </View>

                <View style={[styles.info]}>
                    <Text style={styles.iconProfile}>
                        Industry:
                    </Text>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: SECONDARY_COLOR }}>
                        <Picker
                            // itemStyle={styles.itemStyle}
                            mode="dropdown"
                            style={[styles.pickerStyle, { color: SECONDARY_COLOR }]}
                        // selectedValue={this.state.selectedcat}
                        // onValueChange={this.onValueChangeCat.bind(this)}
                        >

                            <Picker.Item color={DARK_GRAY} label="Engineering" value="engineering" />
                            <Picker.Item color={DARK_GRAY} label="Business" value="business" />
                            <Picker.Item color={DARK_GRAY} label="Law" value="law" />
                            <Picker.Item color={DARK_GRAY} label="Management" value="management" />
                            <Picker.Item color={DARK_GRAY} label="Food & Beverage" value="fnb" />
                        </Picker>


                    </View>

                </View>

                <View style={[styles.info]}>
                    <Text style={styles.iconProfile}>
                        Hobby:
                    </Text>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: SECONDARY_COLOR }}>
                        <Picker
                            // itemStyle={styles.itemStyle}
                            mode="dropdown"
                            style={[styles.pickerStyle, { color: SECONDARY_COLOR }]}
                        // selectedValue={this.state.selectedcat}
                        // onValueChange={this.onValueChangeCat.bind(this)}
                        >

                            <Picker.Item color={DARK_GRAY} label="Sport" value="sport" />
                            <Picker.Item color={DARK_GRAY} label="Watch Drama" value="drama" />
                            <Picker.Item color={DARK_GRAY} label="Writing" value="write" />
                            <Picker.Item color={DARK_GRAY} label="Reading" value="read" />
                            <Picker.Item color={DARK_GRAY} label="Eating" value="eat" />
                        </Picker>


                    </View>

                </View>

                <View style={[styles.info]}>
                    <Text style={styles.iconProfile}>
                        Interest:
                    </Text>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: SECONDARY_COLOR }}>
                        <Picker
                            // itemStyle={styles.itemStyle}
                            mode="dropdown"
                            style={[styles.pickerStyle, { color: SECONDARY_COLOR }]}
                        // selectedValue={this.state.selectedcat}
                        // onValueChange={this.onValueChangeCat.bind(this)}
                        >

                            <Picker.Item color={DARK_GRAY} label="Dedicated Relationship" value="dedicated" />
                            <Picker.Item color={DARK_GRAY} label="Hookups" value="hookups" />
                            <Picker.Item color={DARK_GRAY} label="Long Distance Relationship" value="ldr" />
                            <Picker.Item color={DARK_GRAY} label="Short Relationship" value="short" />
                        </Picker>


                    </View>

                </View>



                <View style={styles.actionsProfile}>
                    <TouchableOpacity style={styles.roundedButton}>
                        <Icon name="md-search" size={20} color={WHITE} />
                        <Text style={styles.textButton}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ImageBackground>
    </Modal>


);

export default FilterPop;
