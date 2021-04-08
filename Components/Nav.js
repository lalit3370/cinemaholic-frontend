import React from 'react';
import { View, Text } from "react-native";
import { Appbar } from "react-native-paper";
import theme from "../CustomProperties/Theme"
import { AntDesign } from '@expo/vector-icons';
// import theme from "../CustomProperties/Theme"
export default function Nav(prop) {
    return (

        < Appbar >
            <AntDesign name={prop.icon} size={24} color={theme.colors.accent} />
            <Text style={{ color: theme.colors.accent }}>Movie Name</Text>
        </Appbar >

    );
}