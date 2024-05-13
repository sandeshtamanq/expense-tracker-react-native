import { Link, Stack } from "expo-router";
import { Alert, Pressable, SafeAreaView, Text, View } from "react-native";
import { supabase } from "../../../lib/supabase.config";
import { useEffect, useState } from "react";
import TransactionList from "../../../components/TransactionList";
import { IExpense } from "../../../types/expense";
import SummaryCard from "../../../components/SummaryCard";

export default function HomeTab() {
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("expenses").select();

      if (error) {
        Alert.alert(error.message);
      }
      if (data) setExpenses(data);
    }

    fetchData();
  }, []);
  return (
    <View style={{ padding: 10 }}>
      <SummaryCard expenses={expenses} />
      <TransactionList expenses={expenses} />
    </View>
  );
}
