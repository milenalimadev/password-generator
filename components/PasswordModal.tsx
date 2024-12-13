import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable
} from "react-native";
import * as clipboard from "expo-clipboard"
import useStorage from "@/hooks/useStorage";

interface PasswordModalProps {
  password: string,
  handleVisibleModal: () => void
}

export function PasswordModal({ password, handleVisibleModal }: PasswordModalProps) {
  const { saveItem, getItem } = useStorage()

  async function handleCopyPassword() {
    await clipboard.setStringAsync(password)
    alert("Senha copiada!")
    handleVisibleModal();
  }

  async function savePassword() {
    await saveItem("@pass", password)
    alert("Senha salva com sucesso!")
    handleVisibleModal();
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha gerada</Text>
        <Pressable style={styles.innerPressable} onLongPress={handleCopyPassword}>
          <Text style={styles.text}>{password}</Text>
        </Pressable>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleVisibleModal}>
            <Text style={styles.textButton}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={savePassword}>
            <Text style={[styles.textButton, styles.textSaveButton]}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24, 24, 24, 0.6)",
    flex: 1, 
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    backgroundColor: "#FFF",
    width: "90%",
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24
  }, 
  innerPressable: {
    backgroundColor: "#0e0e0e",
    width: "90%",
    padding: 14,
    borderRadius: 8
  },
  text: {
    color: "#FFF",
    fontSize: 15,
    textAlign: "center"
  },
  buttonArea: {
    width: "90%",
    marginVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8
  },
  button: {
    flex: 1,
    alignItems: "center", 
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#35cdce"
  }, 
  textButton: {
    fontSize: 15,
    color: "#FFF",
  }, 
  // backButton: {
  //   borderWidth: 1,
  //   borderColor: "#35cdce"
  // },
  // saveButton: {
  //   backgroundColor: "#35cdce"
  // },
  textSaveButton: {
    fontWeight: "bold"
  }
})
