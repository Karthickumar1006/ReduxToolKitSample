import React, { useState } from "react";
import { View, Text,FlatList } from 'react-native'
import { UseDispatch, useSelector } from "react-redux";

const Dashboard = () => {

    const homeScreenData = useSelector((state) => state.HomeScreen.homeScreen)

  const renderItem = ({ item }) => (
    <View>
      <Text>User ID: {item.id}</Text>
    </View>
  );

    return (
        <View>
      {homeScreenData.length ? (
        <FlatList
          data={homeScreenData.slice(0, 10)} // Display only the first 10 items
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
    )
}

export default Dashboard;