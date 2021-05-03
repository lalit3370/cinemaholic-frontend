import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, ActivityIndicator } from "react-native-paper";
import SelectedMovieContext from "../Contexts/SelectedMovieContext";

function Unfetched(props) {
  const { colors } = useTheme();
  const { seletedMovieList } = React.useContext(SelectedMovieContext);
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <View style={{ backgroundColor: colors.card, ...styles.container }}>
      <Text>Click Below For Recommendation</Text>
      <Button
        onPress={() => {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            props.item.setFetchedAPI(true);
          }, 5000);
        }}
      >
        click me
      </Button>
      <ActivityIndicator animating={isLoading} />
    </View>
  );
}
function Fetched() {
  return <Text>API Fetched</Text>;
}
export default function RecommendationScreen({ navigation }) {
  const [fetchedAPI, setFetchedAPI] = React.useState(false);

  return fetchedAPI === false ? (
    <Unfetched item={{ setFetchedAPI }} />
  ) : (
    <Fetched />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // fontSize: 40,
    // color: theme.colors.text
    color: "black",
  },
});
