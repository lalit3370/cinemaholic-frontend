import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import {
  Card, Title, Text, Subheading
} from "react-native-paper";

const moviedata = [
  {
    id: "1",
    title: "The Falcon and the Winter Soldier (2021)",
    url: "https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg"
  },
  {
    id: "2",
    title: "Marvel Studios: Legends",
    url: "https://www.themoviedb.org/t/p/w220_and_h330_face/EpDuYIK81YtCUT3gH2JDpyj8Qk.jpg"
  },
  {
    id: "3",
    title: "Game of Thrones",
    url: "https://www.themoviedb.org/t/p/w220_and_h330_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg"
  },
  {
    id: "3",
    title: "Game of Thrones",
    url: "https://www.themoviedb.org/t/p/w220_and_h330_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg"
  },
  {
    id: "3",
    title: "Game of Thrones",
    url: "https://www.themoviedb.org/t/p/w220_and_h330_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg"
  }
];

function MovieCard({ item }) {
  return (
    <Card style={styles.movieCard}>
      <View style={styles.cardContainer}>
        <Subheading style={{ fontSize: 15, fontWeight: "bold" }} numberOfLines={2}>{item.item.title}</Subheading>
        <Card.Cover
          resizeMode="cover"
          resizeMethod="scale"
          source={{
            uri: item.item.url
          }}
        />
      </View>
    </Card>
  )
}

export default function MovieScreen() {
  const { colors } = useTheme();
  function renderMovieCard(item) {
    return (
      <MovieCard item={item} />
    )
  }
  return (
    <View style={{ backgroundColor: colors.card, ...styles.container }}>
      <FlatList 
        data={moviedata}
        renderItem={renderMovieCard}
        keyExtractor={item => item.id}
        numColumns={2}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding:5,
    flex: 1,
    // flexDirection: "row",
    // flexWrap:"wrap",
    // justifyContent: "space-evenly",
    // alignContent: "space-around"
  },
  movieCard: {
    flexBasis: 150,
    borderColor:"black",
    borderStyle:"dotted",
    margin: 18
    // height:257,
  },
  cardContainer: {
    margin: 5,
    
  }
});


