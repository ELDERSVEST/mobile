import { TouchableOpacity, Text, View } from "react-native"
import ScreenHeaderButton from "../ScreenHeaderButton"
import { icons } from "../../../../constants"

import styles from "./onboardscreenheader.style"

const OnboardScreenHeaderButton = ({text}) => {
  return (
    <View style={styles.container(text)}>
      {text && <Text style={styles.headerText}>Skip</Text>}
      
        
        
        <ScreenHeaderButton iconURL={icons.logo} />
    </View>
  )
}

export default OnboardScreenHeaderButton