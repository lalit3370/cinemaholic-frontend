import React from "react";
import MovieScreen from "./MovieScreen";
import RecommendationScreen from "./RecommendationScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
import DataContext from "../Contexts/DataContext";
import SelectedMovieContext from "../Contexts/SelectedMovieContext";
export default function HomeScreen() {
  const [selectedMovieList, setSelectedMovieList] = React.useState([]);
  return (
    <DataContext.Provider value={data1}>
      <SelectedMovieContext.Provider
        value={{ selectedMovieList, setSelectedMovieList }}
      >
        <Tab.Navigator swipeEnabled={true}>
          <Tab.Screen name="Movies" component={MovieScreen} />
          <Tab.Screen name="Recommendations" component={RecommendationScreen} />
        </Tab.Navigator>
      </SelectedMovieContext.Provider>
    </DataContext.Provider>
  );
}
