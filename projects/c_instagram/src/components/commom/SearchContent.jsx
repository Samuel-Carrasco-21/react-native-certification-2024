import { View, Image, TouchableOpacity } from "react-native";

const SearchContent = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image 
            source={{uri:'https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*'}}
            style={{width: 100, height: 100}}
            />
      </TouchableOpacity>
    </View>
  );
};

export default SearchContent;
