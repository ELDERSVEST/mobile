import { View, Text } from 'react-native'

import styles from './progress.style'

const Progress = () => {
  return (
    <View style={styles.conatiner}>
        <View style={styles.progressCircleContainer}>
            <View style={styles.activeCircle} >
                <Text style={styles.activeCircleText}>1</Text>
            </View>
            <Text style={styles.progressText}>Create password</Text>
        </View>
        
        <View style={styles.line} />
        <View style={styles.progressCircleContainer}>
            <View style={styles.normalCircle} >
            <Text style={styles.CircleText}>2</Text>
            </View>
            <Text style={styles.progressText}>Secure wallet</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.progressCircleContainer}>
            <View style={styles.normalCircle} ><Text style={styles.CircleText}>3</Text></View>
            <Text style={styles.progressText}>Confirm Seed Phrase</Text>
        </View>
    </View>
  )
}

export default Progress