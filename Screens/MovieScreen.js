import { useTheme } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";
import { ActivityIndicator, Card, Text } from "react-native-paper";
import DataContext from "../Contexts/DataContext";
import SelectedMovieContext from "../Contexts/SelectedMovieContext";
// import data1 from "../assets/movie data/data1";

const MovieCard = React.memo(function MovieCard(props) {
  const { colors } = useTheme();
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Pressable
      onLongPress={() => {
        console.log(props.item.item.title);
        setIsSelected(true);
        let updatedSML = props.ML.selectedMovieList;
        if (!updatedSML.includes(props.item.item.mlId)) {
          updatedSML.push(props.item.item.mlId);
          props.ML.setSelectedMovieList(updatedSML);
        }
      }}
      onPress={() => {
        if (isSelected) {
          setIsSelected(false);
          let arrindex = props.ML.selectedMovieList.indexOf(
            props.item.item.mlId
          );
          let updatedSML = props.ML.selectedMovieList;
          updatedSML.splice(arrindex, 1);
          props.ML.setSelectedMovieList(updatedSML);
        }
      }}
    >
      <Card
        style={{
          ...styles.movieCard,
          borderColor: isSelected === true ? colors.primary : colors.surface,
        }}
      >
        <Image
          source={{ uri: props.item.item.imgurl }}
          style={{
            height: 231,
            width: 140,
          }}
          PlaceholderContent={<ActivityIndicator color="red" />}
          placeholderStyle={{ backgroundColor: colors.card }}
          containerStyle={{ margin: 0 }}
        />
      </Card>
    </Pressable>
  );
});

function MovieScreen() {
  const { selectedMovieList, setSelectedMovieList } = useContext(
    SelectedMovieContext
  );

  const { colors } = useTheme();
  const fullMovieData = React.useContext(DataContext);
  function renderMovieCard(item) {
    return (
      <MovieCard item={item} ML={{ selectedMovieList, setSelectedMovieList }} />
    );
  }
  return (
    <View
      style={{ backgroundColor: colors.backgroundColor, ...styles.container }}
    >
      <FlatList
        data={fullMovieData}
        renderItem={renderMovieCard}
        keyExtractor={(item) => item.mlId}
        numColumns={2}
      />
      {/* <Text>hello</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  movieCard: {
    margin: 16,
    padding: 1,
    borderStyle: "solid",
    borderWidth: 6,
  },
});
export default MovieScreen;
