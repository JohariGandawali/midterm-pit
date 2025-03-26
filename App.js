import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import mylogo from "./assets/mylogo.png";
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={mylogo} style={styles.logo} />
      <Text style={{color: "white"}}>Sample</Text>
      <TextInput
        style={styles.input}
        placeholder="Email address or Username"
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        accessible={true}
        accessibilityLabel="Log in Button"
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.linkText}>Create an Account</Text>
      </TouchableOpacity>
      <Text style={styles.linkText_One}>
        All Right Received @Gandawali.Johari {new Date().getFullYear()}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 300,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "black",
  },
  title: {
    fontSize: 32,
    color: "#1db954",
    marginBottom: 25,
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    color: "#000",
    fontSize: 16,
  },
  button: {
    backgroundColor: "orange",
    padding: 15,
    width: "90%",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    color: "orange",
    fontStyle: "italic",
    marginTop: 10,
    fontSize: 14,
  },
  linkText_One: {
    color: "white",
    marginTop: 10,
    fontSize: 12,
    fontStyle: "italic",
    fontWeight: "bold",
    position: "absolute",
    alignSelf: "center",
    bottom: 10,
  },
});
