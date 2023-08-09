import { Text, View } from "react-native"
import { icons } from "../../../constants"
import ScreenHeaderButton from "./screenHeaderButton/ScreenHeaderButton"

import styles from "./header.styles"

const Header = ({ text='image', leftIcon=true, iconUrl = icons.back, logo= icons.logo }) => {
    const LeftComponent = () => {
        return text === 'image' ? <ScreenHeaderButton iconURL={iconUrl} /> 
                        : <Text style={styles.headerText}>{text}</Text>
    }
  return (
    <View style={styles.container(leftIcon)}>
      {leftIcon &&  <LeftComponent />}
      
        
        
        <ScreenHeaderButton iconURL={logo} />
    </View>
  )
}

export default Header