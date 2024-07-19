import { FlatList, ScrollView, Text } from "react-native";
import Portada from "./Portada";
const CarouselMovies = ({ movies = [], getMoreMovies}) => {
  console.log("🚀 ~ CarouselImage ~ images:", movies);

  return (
    <FlatList
      horizontal
      data={movies}
      renderItem={({ item }) => (
        <Portada
          image={item.uri}
          stylesPortada={{
            height: 120,
            width: 172,
          }}
        />
      )}
      onEndReached={()=>getMoreMovies()}
      onEndReachedThreshold={0.2}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default CarouselMovies;
