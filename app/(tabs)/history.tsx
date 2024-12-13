import PasswordItem from "@/components/PasswordItem";
import useStorage from "@/hooks/useStorage";
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function History() {
  const [listPasswords, setListPasswords] = useState([])
  const focused = useIsFocused()
  const { getItem, removeItem } = useStorage()

  useEffect(() => {
    loadPasswords()
  }, [focused === true])

  async function loadPasswords() {
    const passwords = await getItem()
    setListPasswords(passwords)
  }
  
  return (
    <View style={styles.container}>
      <FlatList 
        data={listPasswords}
        keyExtractor={ (item) => String(item) }
        renderItem={ ({ item }) => <PasswordItem data={item} removePassword={() => removeItem("@pass", item)}/> }
        style={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 20
  },
  list: {
    width: "95%",
    marginVertical: 14
  }
})