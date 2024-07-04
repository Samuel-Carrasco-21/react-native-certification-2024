import { Pressable, StyleSheet, Text, View } from 'react-native';
import { styles } from './src/config/theme/app-theme';
import { colors } from './src/config/theme/app-theme';

const CButton = (props) => {  
  const { textButton, bgColor} = props;
  return (
    <Pressable style={ ({pressed}) => ({
      ...styles.button,
      backgroundColor: bgColor,
      opacity: pressed ? 0.5 : 1
    }) 
    }>
      <Text style={styles.buttonText}>{textButton}</Text>
    </Pressable>
  )
}
export default function App() {
  return (
    <View style={styles.background}>
      <View style={styles.containerResult} >
        <Text style={styles.mainResult}>0</Text>
        <Text style={styles.subResult}>1+2</Text>
      </View>
      <View style={styles.buttonsContainer} >
        <View style={styles.row}>
          <CButton textButton='AC' bgColor={colors.yellow}/>
          <CButton textButton='()' bgColor={colors.pink}/>
          <CButton textButton='%'  bgColor={colors.pink}/>
          <CButton textButton='÷'  bgColor={colors.pink}/>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>×</Text>
          </Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>−</Text>
          </Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>0</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>.</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>←</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>=</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}