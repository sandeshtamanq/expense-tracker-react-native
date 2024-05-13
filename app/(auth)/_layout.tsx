import { Redirect, Stack } from "expo-router";
import { useAuth } from "../../providers/auth-provider";

export default function AuthLayout() {
  const { session } = useAuth();

  if (session) {
    return <Redirect href={"/(expense)/home"} />;
  }
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          title: "Sign In",
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: "Sign Up",
        }}
      />
    </Stack>
  );
}
