import { FlatList, ListRenderItem, View } from "react-native";
import { IExpense } from "../types/expense";
import TransactionItem from "./TransactionItem";

type Props = {
  expenses: IExpense[];
};

export default function TransactionList({ expenses }: Props) {
  const renderItem: ListRenderItem<IExpense> = ({ item }) => {
    return <TransactionItem expense={item} />;
  };
  return (
    <View style={{ height: "100%" }}>
      <FlatList data={expenses} renderItem={renderItem} />
    </View>
  );
}
