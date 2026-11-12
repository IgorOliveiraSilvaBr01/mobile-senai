import { Image, View, Text } from "react-native";
import imageProduct from "../../assets/image/drink-image.png";
import OptionImage from "../../assets/image/option-image.png";
import { ButtonPrimary } from "../../components/ButtonPrimary";

import { styles } from "./style";

export const DetailsProduct = () => {
  return (
    <View style={styles.containerDetailsProducts}>
      <View style={styles.featureProducts}>
        <Image source={imageProduct} />
        <View style={styles.imagesProduct}>
          <Image source={OptionImage} />
          <Image source={OptionImage} />
          <Image source={OptionImage} />
          <Image source={OptionImage} />
        </View>
      </View>

      <View style={styles.detailsProducts}>
        <Text style={styles.volumeProduct}>269ml</Text>

        <View>
          <View>
            <Text style={styles.textTitle}>TNT Energy</Text>
            <Text style={styles.textHighlight}>Açai com Guaraná</Text>
          </View>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet orem ipsum dolor sit amet, lorem ipsum
            dolor sit amet
          </Text>
        </View>

        <ButtonPrimary title="Comprar"/>
      </View>
    </View>
  );
};
