import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItem,
} from "@react-navigation/drawer";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../providers/auth-provider";
import Button from "../../components/Button";
import { supabase } from "../../lib/supabase.config";
import { router } from "expo-router";
import { useState } from "react";

function CustomDrawerContent({ ...props }: DrawerContentComponentProps) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  async function logout() {
    setLoading(true);
    const { error } = await supabase.auth.signOut();

    if (error) Alert.alert(error.message);

    setLoading(false);
    router.replace("/(auth)/login");
  }
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.profileImage}
            height={80}
            width={80}
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            }}
          />
          <View>
            <Text>{user?.email?.split("@")[0]}</Text>
          </View>
        </View>
        <View style={{ marginTop: 550 }}>
          <Button onPress={logout} text={loading ? "loading..." : "Logout"} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    />
  );
}
//

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    padding: 10,
    justifyContent: "space-between",
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  profileImage: {
    borderRadius: 50,
  },
});
