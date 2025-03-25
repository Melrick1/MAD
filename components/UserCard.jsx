import { StyleSheet, View, Text, Image } from "react-native";

function UserCard({item}) {
  return (
    <View style={styles.userCard}>
        <View style={styles.profileImageContainer}>
            <Image source={{ uri: `${item.avatar}` }} style={styles.profileImage} />
        </View>
        <View style={styles.profileDetails}>
            <View style={styles.userName}>
                <Text style={styles.lastName}>{item.last_name} </Text>
                <Text style={styles.firstName}>{item.first_name}</Text>
            </View>
            <Text style={styles.userEmail}>{item.email}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    userCard :{
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginTop : 24,
        gap: 16,
    },
    profileImageContainer :{
        width: 100, 
        height: 100, 
    },
    profileImage :{
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    profileDetails :{
        flexDirection: "column",
        justifyContent: "center",
        gap: 0,
    },
    userName :{
        flexDirection: "row",
    },
    lastName :{
        fontSize: 16,
        fontWeight: "bold",
    },
    firstName :{
        fontSize: 16,
    },
    userEmail :{
        fontSize: 14,
    },
});

export default UserCard