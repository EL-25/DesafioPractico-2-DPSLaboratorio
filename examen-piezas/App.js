import React, { useState } from 'react';
import { 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity, 
  Button, 
  Alert,
  SafeAreaView,
  StatusBar
} from 'react-native';

// 1. IMPORTACIÓN DE ESTILOS EXTERNOS
// Importamos el objeto 'styles' desde la ruta donde lo creaste.
import { styles } from './src/styles/globalStyles';

export default function App() {
  
  // 2. ESTADO INICIAL (Hooks)
  // 'piezas' es el array de datos y 'setPiezas' es la función para actualizarlo.
  const [piezas, setPiezas] = useState([
    { 
      id: '1', 
      tipo: 'Bujía', 
      marca: 'Bosch', 
      serie: 'S013523', 
      precio: '15.50', 
      fecha: '2023-09-29' 
    },
    { 
      id: '2', 
      tipo: 'Filtro de Aceite', 
      marca: 'Fram', 
      serie: 'F9902', 
      precio: '10.00', 
      fecha: '2024-01-15' 
    },
  ]);

  // 3. LÓGICA DE ELIMINACIÓN
  // Usamos Alert (componente nativo) para confirmar la acción.
  const eliminarPieza = (id) => {
    Alert.alert(
      "Confirmar Eliminación",
      "¿Estás seguro de que deseas borrar este registro?",
      [
        { text: "No, cancelar", style: "cancel" },
        { 
          text: "Sí, eliminar", 
          style: "destructive", 
          onPress: () => {
            // El método .filter crea un nuevo array EXCLUYENDO el id seleccionado.
            // Esto es programación funcional, no mutamos el estado directamente.
            setPiezas(piezas.filter(p => p.id !== id));
          } 
        }
      ]
    );
  };

  // 4. RENDERIZADO DE CADA ITEM (La tarjeta)
  const renderItem = ({ item }) => (
    /* TouchableOpacity: Componente interactivo que da feedback visual al tocar */
    <TouchableOpacity 
      style={styles.card} 
      activeOpacity={0.7}
      onPress={() => Alert.alert("Detalle", `Ver toda la info de: ${item.tipo}`)}
    >
      <View style={styles.info}>
        <Text style={styles.tipoText}>{item.tipo}</Text>
        <Text style={styles.fechaText}>Fecha de cambio: {item.fecha}</Text>
      </View>

      {/* Botón de eliminar (Componente interactivo dentro de otro) */}
      <TouchableOpacity 
        style={styles.btnEliminar} 
        onPress={() => eliminarPieza(item.id)}
      >
        <Text style={styles.btnEliminarText}>Eliminar</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar: Controla la barra de batería/hora del iPhone */}
      <StatusBar barStyle="dark-content" />

      {/* HEADER (Componente Básico) */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gestión de Piezas SV</Text>
      </View>

      {/* BOTÓN PRINCIPAL (Uso de componentes básicos) */}
      <View style={styles.botonContainer}>
        <Button 
          title="Agregar Pieza Nueva" 
          color="#1a73e8" 
          onPress={() => alert('Próximo paso: Crear el Modal')} 
        />
      </View>

      {/* LISTADO (Componente interactivo de alto rendimiento) */}
      <FlatList
        data={piezas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // Mensaje cuando la lista queda vacía (Rúbrica: Manejo de estados)
        ListEmptyComponent={
          <Text style={styles.empty}>No hay registros. ¡Agrega el primero!</Text>
        }
      />
    </SafeAreaView>
  );
}
