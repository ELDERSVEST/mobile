import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderButton = ({ iconURL, dimension, handlePress }) => {
    return (
        <TouchableOpacity>
            <Image 
                source={iconURL}

            />
        </TouchableOpacity>
    )
}

export default ScreenHeaderButton