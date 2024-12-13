import { Pressable, Text, StyleSheet } from "react-native";

interface PasswordItemProps {
  data: string,
  removePassword: () => void
}

export default function PasswordItem({ data, removePassword }: PasswordItemProps) {
  return (
    <Pressable style={styles.container} onLongPress={removePassword} >
      <Text style={styles.text} >{data}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    marginBottom: 6,
    width: "100%",
    borderRadius: 8,
    flexDirection: "row",
  },
  text: {
    color: "#FFF"
  }
})