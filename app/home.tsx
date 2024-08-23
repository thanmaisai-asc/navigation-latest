import { useEffect } from "react";
import { Text, View, StyleSheet, Platform, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        backgroundColor: "red",
      },
      android: {
        backgroundColor: "green",
      },
      default: {
        // other platforms, web for example
        backgroundColor: "white",
      },
    }),
  },
});

export default function Home({ navigation, route }) {
  useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params?.post]);

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>

      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: "anything you want here",
          })
        }
      />
      <Button
        title="Create post"
        onPress={() =>
          navigation.navigate("CreatePost", { title: "Custom createpost" })
        }
      />

      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate("Profile", { name: "Welcome abdul" })
        }
      />
    </View>
  );
}