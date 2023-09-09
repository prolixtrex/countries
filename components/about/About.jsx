import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { A } from "@expo/html-elements";
import { Ionicons } from "@expo/vector-icons";

import style from "./about.style";

const ListItem = ({ children }) => {
    return (
        <View style={style.listView}>
            <Text style={style.bullet}>.</Text>
            <Text style={style.listItem}>{children}</Text>
        </View>
    );
};

const About = () => {
    const emailAdd = "anuabright@yahoo.com";
    const mailTo = `mailto:${emailAdd}`;
    const phone = `+2348064943360`;
    const call = `tel:${phone}`;
    const whatsapp = `whatsapp://send?phone=${phone}`;

    return (
        <View style={style.container}>
            <View style={style.card}>
                <Text style={style.title}>Countries App</Text>
                <Text style={style.text}>
                    Countries app was created by{" "}
                    <Text
                        style={{
                            textDecorationStyle: "solid",
                            textDecorationLine: "underline",
                        }}
                    >
                        Bright Anua
                    </Text>{" "}
                    as part of React Native learning.
                </Text>
                <View style={{ marginBottom: 5 }}></View>
                <Text style={style.text}>
                    This app may not contain much functionalities as you may
                    require as it was developed as part of learning.
                </Text>
                <View style={{ marginBottom: 5 }}></View>
                <Text style={style.text}>
                    If you encounter any bug, please close and reopen the app.
                </Text>
            </View>

            <View style={style.card}>
                <Text style={style.title}>Usage</Text>
                <Text style={style.text}>You can search for countries by:</Text>
                <ListItem>Name</ListItem>
                <ListItem>Capital</ListItem>
                <ListItem>
                    Region e.g Africa, Asia, Americas, Europe, Oceania
                </ListItem>
                <ListItem>Language</ListItem>
                <ListItem>Currency</ListItem>
            </View>

            <View style={style.card}>
                <Text style={style.title}>Repository Link</Text>
                <Text style={style.text}>
                    You can view the source code on{" "}
                    <Link
                        href="https://www.github.com/prolixtrex/countries"
                        style={style.link}
                    >
                        github
                    </Link>
                </Text>
            </View>

            <View style={style.card}>
                <Text style={style.title}>Contact Me</Text>
                <Text style={style.text}>Please contact me on </Text>
                <View style={style.listView}>
                    <Ionicons name="mail-outline" style={style.icon} />
                    <A href={mailTo} style={style.link}>
                        anuabright@yahoo.com
                    </A>
                </View>
                <View style={style.listView}>
                    <Ionicons name="call-outline" style={style.icon} />
                    <A href={call} style={style.link}>
                        +2348064943360
                    </A>
                </View>
                <View style={style.listView}>
                    <Ionicons name="logo-whatsapp" style={style.icon} />
                    <A href={whatsapp} style={style.link}>
                        +2348064943360
                    </A>
                </View>
            </View>

            <View>
                <Text style={style.text}>
                    Thanks for using this app. Your feedback will highly be
                    appreciated.
                </Text>
                <Text style={[style.text, { textAlign: "center" }]}>
                    &copy; 2023, Bright Anua
                </Text>
            </View>
        </View>
    );
};

export default About;
