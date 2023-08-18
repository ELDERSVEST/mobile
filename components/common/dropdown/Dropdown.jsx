import { View, Text, TouchableOpacity, Image, FlatList } from "react-native"
import styles from "./dropdown.styles"

const Dropdown = ({ value, placeholder, iconURL, data, genderDropdownVisible, setGenderDropdownVisible}) => {
    const DropdownItem = ({value}) => (
        <TouchableOpacity onPress={() => onItemPress(value)} style={styles.dropdownItem}><Text>{value}</Text></TouchableOpacity>
    ) 
  return (
    <>
    <View style={styles.dropdownInput}>
        <Text 
            style={ value === '' ? styles.placeholder : [styles.inputSelectText, ]}
        >
            {value==="" ? placeholder : value}
        </Text>
        <View style={styles.divider} />
        <Image 
            source={iconURL}
        />
    </View>
    <View genderDropdownVisible={genderDropdownVisible} style={styles.dropdownConainer}>
        <TouchableOpacity onPress={() => setGenderDropdownVisible(false)}>
            <View>
                <FlatList 
                    data={data}
                    renderItem={({item}) => (<DropdownItem gender={item} />)}
                    keyExtractor={item => item}
                />
            </View>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default Dropdown