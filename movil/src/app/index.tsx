import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Registro = {
  id: string;
  numero: number;
  hora: string;
};

export default function App() {
  const [contador, setContador] = useState(0);
  const [registros, setRegistros] = useState<Registro[]>([]);

  const incrementarContador = () => {
    const nuevoContador = contador + 1;
    const ahora = new Date();
    const horaFormateada = ahora.toLocaleTimeString();

    // Actualizamos el contador
    setContador(nuevoContador);

    // Creamos el nuevo registro y lo anteponemos (equivalente a insertBefore)
    const nuevoRegistro: Registro = {
      id: Date.now().toString(),
      numero: nuevoContador,
      hora: horaFormateada,
    };

    setRegistros([nuevoRegistro, ...registros]);
  };

  // Reto 1a: restar like (no baja de 0)
  const restarContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
      setRegistros(registros.slice(1));
    }
  };

  // Reto 1b: reiniciar a cero
  const reiniciarContador = () => {
    setContador(0);
    setRegistros([]);
  };

  // Reto 2: cambia de color al superar 10 (reactividad por estado)
  const superaLimite = contador > 10;

  return (
    <View style={[estilos.body, superaLimite && estilos.bodyAlto]}>
      <View style={estilos.container}>
        {/* Título y descripción */}
        <Text style={estilos.h1}>Interactividad con el DOM</Text>
        <Text style={estilos.description}>
          Haz clic en el botón para incrementar el contador y registrar la hora
          exacta del evento en la tabla.
        </Text>

        {/* Contador dinámico */}
        <Text style={[estilos.counterBox, superaLimite && estilos.counterAlto]}>
          {contador}
        </Text>

        {/* Botones disparadores de eventos */}
        <View style={estilos.botones}>
          <TouchableOpacity style={estilos.btnClick} onPress={incrementarContador}>
            <Text style={estilos.btnText}>¡Haz Clic Aquí!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.btnRestar} onPress={restarContador}>
            <Text style={estilos.btnText}>Restar Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.btnReiniciar} onPress={reiniciarContador}>
            <Text style={estilos.btnText}>Reiniciar</Text>
          </TouchableOpacity>
        </View>

        {/* Tabla de registros */}
        <View style={estilos.tableContainer}>
          {/* Cabecera de la tabla */}
          <View style={estilos.tableHeader}>
            <Text style={[estilos.th, estilos.cellNumero]}>Nº Clic</Text>
            <Text style={[estilos.th, estilos.cellHora]}>Hora</Text>
          </View>

          {/* Cuerpo de la tabla con scroll */}
          <ScrollView style={estilos.tableBody}>
            {registros.map((item, index) => (
              <View
                key={item.id}
                style={[estilos.tr, index % 2 === 0 ? estilos.trEven : null]}
              >
                <Text style={[estilos.td, estilos.cellNumero]}>{item.numero}</Text>
                <Text style={[estilos.td, estilos.cellHora]}>{item.hora}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#f4f7f6",
    justifyContent: "center",
    padding: 16,
  },
  bodyAlto: {
    backgroundColor: "#fdecea",
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    maxHeight: "92%",
  },
  h1: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2c3e50",
    textAlign: "center",
  },
  description: {
    fontSize: 13,
    color: "#7f8c8d",
    textAlign: "center",
    marginTop: 6,
  },
  counterBox: {
    fontSize: 64,
    fontWeight: "800",
    color: "#3498db",
    marginVertical: 12,
  },
  counterAlto: {
    color: "#e74c3c",
  },
  botones: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginBottom: 16,
  },
  btnClick: {
    backgroundColor: "#2ecc71",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    elevation: 3,
  },
  btnRestar: {
    backgroundColor: "#f39c12",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    elevation: 3,
  },
  btnReiniciar: {
    backgroundColor: "#95a5a6",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    elevation: 3,
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 15,
  },
  tableContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e3e8ea",
    borderRadius: 8,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f6f8f9",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e8ea",
  },
  tableBody: {
    maxHeight: 220,
  },
  tr: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e8ea",
  },
  trEven: {
    backgroundColor: "#fafbfb",
  },
  th: {
    paddingVertical: 12,
    color: "#7f8c8d",
    fontWeight: "600",
    textAlign: "center",
  },
  td: {
    paddingVertical: 12,
    color: "#2c3e50",
    textAlign: "center",
  },
  cellNumero: {
    flex: 1,
  },
  cellHora: {
    flex: 1,
  },
});
