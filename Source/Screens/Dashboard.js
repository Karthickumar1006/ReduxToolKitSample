import React from "react";
import { View, Text } from 'react-native'
import { UseDispatch, useSelector } from "react-redux";

const Dashboard = () => {
    const homeScreenData = useSelector((state) => state.HomeScreen.homeScreen)


    return (
        <View>
            <Text>
                {homeScreenData}
            </Text>
        </View>
    )
}

export default Dashboard;