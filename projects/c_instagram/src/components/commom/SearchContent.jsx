import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { getCats } from "../../services/catsService";
import { useEffect, useState } from "react";

const SearchContent = () => {
  const [cats, setCats] = useState([]);
  const [secondCats, setSecondCats] = useState([]);
  const [ thirdCats, setThirdCats] = useState([]);
  const fetchCat = async () => {
    const response = await getCats({ limit: 12 });
    
    setCats(response.data.slice(0, 6));
    console.log(response.data.slice(10, 12));
    setSecondCats(response.data.slice(6, 10));
    setThirdCats(response.data.slice(10, 11));
    console.log(secondCats[0]);
  };
  useEffect(() => {
    fetchCat();
  }, []);
  return (
    <View>
      <View style={styles.container}>
        {cats.length > 0 &&
          cats.map((cat) => (
            <TouchableOpacity>
              <Image
                key={cat.id}
                source={{ uri: cat.url }}
                style={{ width: 130, height: 130, marginTop: 2 }}
              />
            </TouchableOpacity>
          ))}
      </View>
      <View style={styles.secondContainer}>
       <View style={styles.grid}>
       {secondCats.length > 0 &&
          secondCats.map((cat) => (
            <TouchableOpacity>
              <Image
                key={cat.id}
                source={{ uri: cat.url }}
                style={{ width: 128, height: 128, marginTop: 2 }}
              />
            </TouchableOpacity>
          ))}
       </View>
       <View style={styles.vertical}>
        {thirdCats.length > 0 &&
            thirdCats.map((cat) => (
              <TouchableOpacity>
                <Image
                  key={cat.id}
                  source={{ uri: cat.url }}
                  style={{ width: 128, height: 256, marginTop: 2 }}
                />
              </TouchableOpacity>
            ))}
       </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  secondContainer: {
    flexDirection: "row",
    flex:1,   
  },
  grid: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  vertical: {
    flex: 1,
  },
});
export default SearchContent;
