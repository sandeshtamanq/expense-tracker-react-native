import { FontAwesome6, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: "rgba(170, 79, 229, 0.62)",
          },
          headerTintColor: "white",
          tabBarStyle: {
            backgroundColor: "#F4F4F4",
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#999",
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen name="index" options={{ href: null }} />
        <Tabs.Screen
          options={{
            title: "Budget Buddy",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={28} color={color} />
            ),
          }}
          name="home"
        />
        <Tabs.Screen
          options={{
            title: "Add new record",
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  height: 50,
                }}
              >
                <Ionicons name="add-circle-outline" size={50} color={color} />
              </View>
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate("modal");
            },
          })}
          name="add"
        />
        <Tabs.Screen
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="user-large" size={28} color={color} />
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.openDrawer();
            },
          })}
          name="detail"
        />
      </Tabs>
    </>
  );
}
