import { View, Text } from 'react-native'

import styles from './progress.style'




const Progress = ({ progress = 1}) => {
    const circleStyle = (progress, circleNumber) => {
        return circleNumber <= progress 
    }
  return (
    <View style={styles.conatiner}>
        <View style={styles.progressCircleContainer}>
            <View style={styles.activeCircle} >
                <Text style={styles.activeCircleText}>1</Text>
            </View>
            <View style={styles.progressTextBox}>
            <Text style={styles.progressText()}>Create password</Text>
            </View>
        </View>
        <View style={styles.progressCircleContainer}>
            <View style={circleStyle(progress, 2) ? styles.activeCircle : styles.normalCircle} >
            <Text style={circleStyle(progress, 2) ? styles.activeCircleText : styles.CircleText}>2</Text>
            </View>
            <View style={styles.progressTextBox}>
            <Text style={styles.progressText()}>Secure wallet</Text></View>
        </View>
        <View style={styles.progressCircleContainer}>
            <View style={circleStyle(progress, 3) ? styles.activeCircle : styles.normalCircle} ><Text style={circleStyle(progress, 3) ? styles.activeCircleText : styles.CircleText}>3</Text></View>
            <View style={styles.progressTextBox}>
                <Text style={styles.progressText()}>Confirm Seed</Text><Text style={[ styles.progressText(false), { textAlign: 'center'}]}>Phrase</Text>
            </View>
            
        </View>
    </View>
  )
}

export default Progress