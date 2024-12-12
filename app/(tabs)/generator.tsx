import { useState } from "react";
import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  Modal
} from "react-native";
import Slider from "@react-native-community/slider";
import { PasswordModal } from "@/components/PasswordModal";

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export default function Generator() {
  const [passwordSize, setPasswordSize] = useState(6);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

   function generatePassword(): void {
    let password = ""
    for(let i = 0; i < passwordSize; i++) {
      password += charset.charAt(
        Math.floor(Math.random() * charset.length)
      )
    }
    setPasswordValue(password)
    setModalVisible(true)
  }

  return (
    <View
      style={styles.container}
    >
      <Image 
        source={require("@/assets/images/robo.svg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>{passwordSize} caracteres</Text>

      <View style={styles.area}>
        <Slider 
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#35cdce"
          maximumTrackTintColor="#2A245E80"
          thumbTintColor="#35cdce"
          value={passwordSize}
          onValueChange={(value) => setPasswordSize(
            Number(value.toFixed(0))
          )}
        />
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={generatePassword}
      >
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <PasswordModal 
          password={passwordValue} 
          handleVisibleModal={() => setModalVisible(!modalVisible)}
          savePassword={() => {}}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: "70%",
    height: window.innerWidth * 0.7,
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  area: {
    marginVertical: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#35cdce",
    width: "80%",
    height: 40,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  buttonText: {
    color: "#FFF",
    fontSize: 15
  }
})
