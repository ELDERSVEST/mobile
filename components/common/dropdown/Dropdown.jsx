import { View, Text, TouchableOpacity, Image, FlatList } from "react-native"
import styles from "./dropdown.styles"
import { icons } from "../../../constants"

const Dropdown = ({ label, value, placeholder, iconURL, items, setValue, dropdownVisible, setDropdownVisible}) => {
    const onItemPress = (gender) => {
        setValue(gender)
        setDropdownVisible(false)
    } 

    const DropdownItem = ({option, isLast}) => (
        <TouchableOpacity onPress={() => onItemPress(option)} style={styles.dropdownItem(isLast)}><Text style={value === option ? styles.dropdownItemText(true) : styles.dropdownItemText()}>{option}</Text></TouchableOpacity>
    ) 
  return (
    <>
    <Text style={styles.inputLabel}>{label}</Text>
    <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
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
    </TouchableOpacity>
    { dropdownVisible && <View dropdownVisible={dropdownVisible} style={styles.dropdownContainer}>
        <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
            <View style={styles.dropdownHeader}>
                <Image 
                    source={icons.whiteTick}
                />
                <Text style={styles.dropdownHeaderText}>Select Channel</Text>
            </View>
            <View style={styles.dropdownBody}>
                <FlatList 
                    data={items}
                    renderItem={({item, index}) => (<DropdownItem option={item} isLast={index === items.length - 1} />)}
                    keyExtractor={item => item}
                />
            </View>
        </TouchableOpacity>
    </View> }
    </>
  )
}

export default Dropdown