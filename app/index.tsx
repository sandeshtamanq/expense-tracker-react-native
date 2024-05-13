import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import Button from "../components/Button";
import { Link, Redirect } from "expo-router";
import { useAuth } from "../providers/auth-provider";
import { SplashScreen } from "expo-router";

const index = () => {
  const { session, loading } = useAuth();

  if (loading) return <ActivityIndicator />;
  if (session) return <Redirect href={"/(drawer)/(expense)"} />;

  return <Redirect href={"/(auth)/login"} />;
};

export default index;
