import React, { useState } from 'react';
import { 
  Modal, 
  View, 
  Text, 
  TextInput, 
  TouchableHighlight,
  ScrollView,
  Platform,
  Alert 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { estilos } from '../styles/PiezaFormStyle';

const PiezaFormModal = ({ visible, cerrarModal, agregarNuevaPieza, piezasExistentes }) => {
  
  // --- LÓGICA DINÁMICA DEL PICKER ---
  const [categorias, setCategorias] = useState([
    'Bujía', 
    'Filtro de Aceite', 
    'Filtro de Aire', 
    'Pastillas de Freno', 
    'Bateria de aceite'
  ]);
  const [nuevaCat, setNuevaCat] = useState('');

  // ESTADOS DEL FORMULARIO
  const [tipoSeleccionado, setTipoSeleccionado] = useState('Bujía');
  const [marcaIngresada, setMarcaIngresada] = useState('');
  const [serieIngresada, setSerieIngresada] = useState('');
  const [precioIngresado, setPrecioIngresado] = useState('');
  
  // ESTADOS PARA LA FECHA
  const [fechaObjeto, setFechaObjeto] = useState(new Date());
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [textoFechaBoton, setTextoFechaBoton] = useState('Seleccionar Fecha');

  // Función para agregar un elemento nuevo al Picker
  const agregarCategoriaDinamica = () => {
    if (nuevaCat.trim() === '') {
      Alert.alert("Campo vacío", "Por favor escribe el nombre de la nueva pieza.");
      return;
    }
    
    if (categorias.includes(nuevaCat.trim())) {
      Alert.alert("Aviso", "Esta categoría ya existe.");
      return;
    }

    setCategorias([...categorias, nuevaCat.trim()]);
    setTipoSeleccionado(nuevaCat.trim());
    setNuevaCat('');
  };

  const manejarCambioDeFecha = (evento, fechaSeleccionada) => {
    setMostrarCalendario(Platform.OS === 'ios'); 
    
    if (fechaSeleccionada) {
      setFechaObjeto(fechaSeleccionada);
      const anio = fechaSeleccionada.getFullYear();
      const mes = String(fechaSeleccionada.getMonth() + 1).padStart(2, '0');
      const dia = String(fechaSeleccionada.getDate()).padStart(2, '0');
      setTextoFechaBoton(`${anio}-${mes}-${dia}`);
    }
  };

  const guardarYEnviar = () => {
    // 1. Validar campos vacíos
    if (!marcaIngresada || !serieIngresada || !precioIngresado || textoFechaBoton === 'Seleccionar Fecha') {
      Alert.alert("Incompleto", "Por favor, llena todos los campos y selecciona una fecha.");
      return;
    }

    // 2. VALIDACIÓN DE NÚMERO DE SERIE DUPLICADO
    // Buscamos si ya existe una pieza con el mismo número de serie en el arreglo actual
    const serieExiste = piezasExistentes.some(
      (pieza) => pieza.serie.trim().toLowerCase() === serieIngresada.trim().toLowerCase()
    );

    if (serieExiste) {
      Alert.alert(
        "Serie Duplicada", 
        `El número de serie "${serieIngresada}" ya está registrado. Por favor, verifica el código.`
      );
      return; // Detiene la ejecución y no guarda
    }

    // 3. Si pasa las validaciones, se crea el objeto
    const nuevaPieza = {
      id: Date.now().toString(),
      tipo: tipoSeleccionado,
      marca: marcaIngresada,
      serie: serieIngresada.trim(),
      precio: precioIngresado,
      fecha: textoFechaBoton 
    };

    agregarNuevaPieza(nuevaPieza);
    limpiarFormulario();
  };

  const limpiarFormulario = () => {
    setMarcaIngresada('');
    setSerieIngresada('');
    setPrecioIngresado('');
    setTextoFechaBoton('Seleccionar Fecha');
    setFechaObjeto(new Date());
    setNuevaCat('');
    cerrarModal();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={estilos.fondoOscuro}>
        <View style={estilos.contenedorFormulario}>
          <Text style={estilos.titulo}>Nueva Pieza de Repuesto</Text>
          
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* PICKER DINÁMICO */}
            <Text style={estilos.etiqueta}>Tipo de Pieza:</Text>
            <View style={estilos.contenedorPicker}>
              <Picker
                selectedValue={tipoSeleccionado}
                onValueChange={(item) => setTipoSeleccionado(item)}
              >
                {categorias.map((cat, index) => (
                  <Picker.Item key={index} label={cat} value={cat} />
                ))}
              </Picker>
            </View>

            {/* SECCIÓN AGREGAR CATEGORÍA */}
            <View style={estilos.seccionNuevaCat}>
              <TextInput 
                style={[estilos.entradaTexto, { flex: 1, marginTop: 0 }]}
                placeholder="¿No está en la lista? Escríbela aquí"
                value={nuevaCat}
                onChangeText={setNuevaCat}
              />
              <TouchableHighlight 
                style={estilos.botonAdd} 
                onPress={agregarCategoriaDinamica}
                underlayColor="#1557b0"
              >
                <Text style={estilos.textoBlanco}>+</Text>
              </TouchableHighlight>
            </View>

            <Text style={estilos.etiqueta}>Marca:</Text>
            <TextInput 
              style={estilos.entradaTexto}
              placeholder="Ej: Bosch, Fram..."
              value={marcaIngresada}
              onChangeText={setMarcaIngresada}
            />

            <Text style={estilos.etiqueta}>Serie:</Text>
            <TextInput 
              style={estilos.entradaTexto}
              placeholder="Número de serie único"
              value={serieIngresada}
              onChangeText={setSerieIngresada}
            />

            <Text style={estilos.etiqueta}>Precio ($):</Text>
            <TextInput 
              style={estilos.entradaTexto}
              placeholder="0.00"
              keyboardType="numeric"
              value={precioIngresado}
              onChangeText={setPrecioIngresado}
            />

            <Text style={estilos.etiqueta}>Fecha de Cambio:</Text>
            <TouchableHighlight
              style={estilos.botonFecha} 
              onPress={() => setMostrarCalendario(true)}
              underlayColor="#ddd"
            >
              <Text style={estilos.textoBotonFecha}>{textoFechaBoton}</Text>
            </TouchableHighlight>

            {mostrarCalendario && (
              <DateTimePicker
                value={fechaObjeto}
                mode="date"
                display="default"
                onChange={manejarCambioDeFecha}
              />
            )}

            <View style={estilos.filaBotones}>
              <TouchableHighlight 
                style={[estilos.boton, estilos.botonCancelar]} 
                onPress={limpiarFormulario}
                underlayColor="#777"
              >
                <Text style={estilos.textoBlanco}>Cancelar</Text>
              </TouchableHighlight>
              
              <TouchableHighlight 
                style={[estilos.boton, estilos.botonGuardar]} 
                onPress={guardarYEnviar}
                underlayColor="#0d47a1"
              >
                <Text style={estilos.textoBlanco}>Guardar</Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default PiezaFormModal;