import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Category, IExpense } from "../types/expense";

type Props = {
  expenses: IExpense[];
};

export default function SummaryCard({ expenses }: Props) {
  const [expense, setExpenseSum] = useState(0);
  const [income, setIncomeSum] = useState(0);

  useEffect(() => {
    const expenseSum =
      expenses
        .filter((item) => item.category === Category.Expense)
        .reduce((acc, curr) => acc + +curr.amount, 0) || 0;
    const incomeSum =
      expenses
        .filter((item) => item.category === Category.Income)
        .reduce((acc, curr) => acc + curr.amount, 0) || 0;

    setExpenseSum(expenseSum);
    setIncomeSum(incomeSum);
  }, [expenses]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction Summary</Text>
      <View style={{ gap: 10 }}>
        <Text style={{ color: "red" }}>Expense: Rs.{expense}</Text>
        <Text style={{ color: "green" }}>Income: Rs.{income}</Text>
        <Text style={{ color: `${income - expense > 0 ? "green" : "red"}` }}>
          Saving: Rs.{income - expense}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 13,
    marginBottom: 10,
    gap: 15,
  },
  header: {
    fontWeight: "700",
    fontSize: 20,
  },
});
