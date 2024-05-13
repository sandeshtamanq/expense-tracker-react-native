import { Platform, StyleSheet, Text, View } from "react-native";
import { Category, IExpense } from "../types/expense";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  expense: IExpense;
};

export default function TransactionItem({ expense }: Props) {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View>
        <View style={styles.header}>
          {expense.category === Category.Expense ? (
            <Ionicons
              name="arrow-down-circle-outline"
              size={28}
              style={{ color: "red" }}
            />
          ) : (
            <Ionicons
              name="arrow-up-circle-outline"
              size={28}
              style={{ color: "green" }}
            />
          )}
          <Text style={styles.amountText}>Rs.{expense.amount}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={[
              { flexDirection: "row", gap: 2, alignItems: "center" },
              styles.titleText,
            ]}
          >
            {expense.category === Category.Expense ? (
              <Ionicons name="trending-down-sharp" color={"red"} />
            ) : (
              <Ionicons name="trending-up-sharp" color={"green"} />
            )}
            <Text
              style={{
                color: `${
                  expense.category === Category.Expense ? "red" : "green"
                }`,
                fontSize: 12,
              }}
            >
              {new Date(expense.created_at).toDateString()}
            </Text>
            {/* <Text style={styles.titleText}>{expense.title}</Text> */}
          </View>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 15, fontWeight: "600" }}>{expense.title}</Text>
        <Text>Transaction Id: {expense.id}</Text>
        <Text style={{ color: "gray", fontSize: 12 }}>
          {expense.description}
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
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  category: {
    paddingHorizontal: 7,
    backgroundColor: "red",
    borderRadius: 80,
    color: "white",
  },
  amountText: {
    width: 150,
    fontSize: 25,
    fontWeight: "700",
  },
  titleText: {
    paddingHorizontal: 5,
    fontWeight: "300",
    fontSize: 12,
    paddingVertical: 1,
    borderRadius: 10,
    // backgroundColor: "rgba(75, 75, 75, 0.3)",
    color: "rgba(71, 74, 74, 1)",
    overflow: Platform.OS === "ios" ? "hidden" : "visible",
  },
});
