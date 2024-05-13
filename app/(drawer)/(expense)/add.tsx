import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { supabase } from "../../../lib/supabase.config";

export default function HomeTab() {
  return (
    <View>
      <Text>This is home page</Text>
      <Pressable
        onPress={() => {
          supabase.auth.signOut();
        }}
      >
        <Text>Signout</Text>
      </Pressable>
    </View>
  );
}
