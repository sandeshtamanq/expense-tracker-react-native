import { Link, Stack } from "expo-router";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Button from "../../components/Button";
import Colors from "../../constants/Colors";
import { supabase } from "../../lib/supabase.config";
import { useState } from "react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleLogin() {
    setIsLoading(true);
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
    setIsLoading(false);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <View>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          placeholderTextColor={"gray"}
          value={email}
        />
      </View>
      <Text>Password</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={"gray"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <Button
        disabled={isLoading}
        text={isLoading ? "loading..." : "Sign In"}
        onPress={handleLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    flex: 1,
  },
  loginText: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});
