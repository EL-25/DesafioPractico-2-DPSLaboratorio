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

import PiezaFormModal from './src/components/PiezaFormModal';
import DetallePiezaModal from './src/components/DetallePiezaModal';

// 1. IMPORTACIÓN DE ESTILOS EXTERNOS
import { styles } from './src/styles/globalStyles';

export default function App() {
  
  // 2. ESTADO INICIAL (Hooks)
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

  // Estados para controlar la visibilidad de los modales y la pieza seleccionada
  const [modalFormularioVisible, setModalFormularioVisible] = useState(false);
  const [modalDetalleVisible, setModalDetalleVisible] = useState(false);
  const [piezaSeleccionada, setPiezaSeleccionada] = useState(null);

  // 3. LÓGICA DE ELIMINACIÓN
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
            setPiezas(piezas.filter(p => p.id !== id));
          } 
        }
      ]
    );
  };

  // 4. RENDERIZADO DE CADA ITEM (La tarjeta)
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      activeOpacity={0.7}
      onPress={() => {
        setPiezaSeleccionada(item);
        setModalDetalleVisible(true);
      }}
    >
      <View style={styles.info}>
        <Text style={styles.tipoText}>{item.tipo}</Text>
        <Text style={styles.fechaText}>Fecha de cambio: {item.fecha}</Text>
      </View>

      <TouchableOpacity 
        style={styles.btnEliminar} 
        onPress={() => eliminarPieza(item.id)}
      >
        <Text style={styles.btnEliminarText}>Eliminar</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  // Lógica para agregar y ordenar automáticamente
  const agregarNuevaPieza = (nuevaPieza) => {
    const listaActualizada = [...piezas, nuevaPieza];
    
    listaActualizada.sort((a, b) => {
      return new Date(b.fecha) - new Date(a.fecha);
    });

    setPiezas(listaActualizada);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER (Componente Básico) */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gestión de Piezas SV</Text>
      </View>

      {/* BOTÓN PRINCIPAL */}
      <View style={styles.botonContainer}>
        <Button 
          title="Agregar Pieza Nueva" 
          color="#1a73e8" 
          onPress={() => setModalFormularioVisible(true)} 
        />
      </View>

      {/* LISTADO (Componente interactivo de alto rendimiento) */}
      <FlatList
        data={piezas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>No hay registros. ¡Agrega el primero!</Text>
        }
      />

      {/* Modales de la aplicación */}
      <PiezaFormModal 
        visible={modalFormularioVisible}
        cerrarModal={() => setModalFormularioVisible(false)}
        agregarNuevaPieza={agregarNuevaPieza}
      />

      <DetallePiezaModal 
        visible={modalDetalleVisible}
        pieza={piezaSeleccionada}
        cerrarModal={() => setModalDetalleVisible(false)}
      />

    </SafeAreaView>
  );
}