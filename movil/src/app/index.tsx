import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "800" }}>Interactividad con el DOM</Text>
      <Text style={{ fontSize: 64, color: "#3498db" }}>{contador}</Text>
      <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <Text>¡Haz Clic Aquí!</Text>
      </TouchableOpacity>
    </View>
  );
}
