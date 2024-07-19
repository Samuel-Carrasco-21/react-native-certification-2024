import { ScrollView, Text } from "react-native";
import Portada from "./Portada";
const CarouselImage = ({ images = [] }) => {
  console.log("🚀 ~ CarouselImage ~ images:", images);

  return (
    <ScrollView horizontal>
      {images &&
        images.map((image, index) => 
        <Portada key={index} image={image.uri} />)}
    </ScrollView>
  );
};

export default CarouselImage;
