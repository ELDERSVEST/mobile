import { Text, View } from "react-native"
import { icons } from "../../../constants"
import ScreenHeaderButton from "./screenHeaderButton/ScreenHeaderButton"

import styles from "./header.styles"

const Header = ({ text='image', title="", leftIcon=true, rightIcon=true, iconUrl = icons.back, logo= icons.logo }) => {
    const LeftComponent = () => {
        return text === 'image' ? <ScreenHeaderButton iconURL={iconUrl} /> 
                        : <Text style={styles.headerText}>{text}</Text>
    }
  return (
    <View style={styles.container(leftIcon)}>
      {leftIcon &&  <LeftComponent />}
      {title === "" ? "" : <View style={styles.headerTitleBox}><Text style={styles.headerTitle}>{title}</Text></View>}
        
        
      {rightIcon && <ScreenHeaderButton iconURL={logo} />}
    </View>
  )
}

export default Header