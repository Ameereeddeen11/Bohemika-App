import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Badge = ({number}) => {
    if (number > 0 && number < 9) {
        return (
            <>
                <Icon name="local-post-office" size={30} color="white" />
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{number}</Text>
                </View>
            </>
        )
    } else if (number > 9) {
        return (
            <>
                <Icon name="local-post-office" size={30} color="white" />
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>9+</Text>
                </View>
            </>
        )
    } else {
        return (
            <Icon name="local-post-office" size={30} color="white" />
        )
    }
}
const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        right: -5,
        top: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});
export default Badge;