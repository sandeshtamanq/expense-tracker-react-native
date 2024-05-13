import { Alert, TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { useState } from "react";
import { supabase } from "../lib/supabase.config";
import { router } from "expo-router";
import { SelectList } from "react-native-dropdown-select-list";
import { StatusBar } from "expo-status-bar";

export default function ModalScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  const data = [
    { key: "2", value: "Expense" },
    { key: "3", value: "Income" },
  ];

  async function createNewExpense() {
    setLoading(true);
    const { data, error, status, statusText } = await supabase
      .from("expenses")
      .insert([{ title, description, amount, category }]);

    if (error) Alert.alert(error.message);
    router.back();
    setLoading(false);
  }
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Title"
            placeholderTextColor={"gray"}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View>
          <Text>Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Description"
            placeholderTextColor={"gray"}
            value={description}
            onChangeText={setDescription}
          />
        </View>
        <View>
          <Text>Amount</Text>
          <TextInput
            style={styles.input}
            placeholder="Amount"
            placeholderTextColor={"gray"}
            value={amount}
            onChangeText={setAmount}
          />
        </View>
        <View>
          <Text>Select Option</Text>

          <SelectList
            dropdownTextStyles={{ color: "gray" }}
            inputStyles={{ color: "gray" }}
            boxStyles={{ backgroundColor: "white" }}
            setSelected={(val: any) => setCategory(val)}
            data={data}
            save="value"
          />
        </View>
      </View>
      <View>
        <View>
          <Button
            onPress={createNewExpense}
            text={loading ? "Adding..." : "Add Record"}
          />
        </View>
      </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
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
});
