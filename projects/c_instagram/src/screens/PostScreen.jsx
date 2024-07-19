import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CarouselImage from "../components/commom/CarouselImage";
import { movies } from "../data/movies";
import CarouselMovies from "../components/commom/CarouselMovies";
const PostScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const [currentMovies, setCurrentMovies] = useState(movies.slice(0, 5));
  const [allMovies, setAllMovies] = useState(movies.slice(0,4));
  const getMoreMovies = (pagination, limit) => {
    console.log('getMoreMovies');
    setAllMovies([...allMovies, ...movies.slice(4, 6)]);
  }

  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      <View>
        <CarouselImage images={currentMovies} getMoreMovies={getMoreMovies}/>
      </View>
      <View>
        <CarouselMovies movies={allMovies} getMoreMovies={getMoreMovies}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default PostScreen;
