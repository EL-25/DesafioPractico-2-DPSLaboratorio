import React, { useState } from 'react';
import { 
  Modal, 
  View, 
  Text, 
  TextInput, 
  TouchableHighlight,
  ScrollView,
  Platform 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
// Importamos el selector de fecha nativo
import DateTimePicker from '@react-native-community/datetimepicker';
import { estilos} from '../styles/PiezaFormStyle';

const PiezaFormModal = ({ visible, cerrarModal, agregarNuevaPieza }) => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState('Bujía');
  const [marcaIngresada, setMarcaIngresada] = useState('');
  const [serieIngresada, setSerieIngresada] = useState('');
  const [precioIngresado, setPrecioIngresado] = useState('');
  
  // Estados para la fecha
  const [fechaObjeto, setFechaObjeto] = useState(new Date());
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [textoFechaBoton, setTextoFechaBoton] = useState('Seleccionar Fecha');

  const manejarCambioDeFecha = (evento, fechaSeleccionada) => {
    // En Android, al seleccionar o cancelar se debe cerrar el calendario
    setMostrarCalendario(Platform.OS === 'ios'); 
    
    if (fechaSeleccionada) {
      setFechaObjeto(fechaSeleccionada);
      // Formateamos la fecha para mostrarla en el botón (YYYY-MM-DD)
      const anio = fechaSeleccionada.getFullYear();
      const mes = String(fechaSeleccionada.getMonth() + 1).padStart(2, '0');
      const dia = String(fechaSeleccionada.getDate()).padStart(2, '0');
      setTextoFechaBoton(`${anio}-${mes}-${dia}`);
    }
  };

  const guardarYEnviar = () => {
    if (!marcaIngresada || !serieIngresada || !precioIngresado || textoFechaBoton === 'Seleccionar Fecha') {
      alert("Por favor, llena todos los campos y selecciona una fecha.");
      return;
    }

    const nuevaPieza = {
      id: Date.now().toString(),
      tipo: tipoSeleccionado,
      marca: marcaIngresada,
      serie: serieIngresada,
      precio: precioIngresado,
      // Enviamos la fecha formateada
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
    cerrarModal();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={estilos.fondoOscuro}>
        <View style={estilos.contenedorFormulario}>
          <Text style={estilos.titulo}>Nueva Pieza de Repuesto</Text>
          
          <ScrollView>
            <Text style={estilos.etiqueta}>Tipo de Pieza:</Text>
            <View style={estilos.contenedorPicker}>
              <Picker
                selectedValue={tipoSeleccionado}
                onValueChange={(item) => setTipoSeleccionado(item)}
              >
                <Picker.Item label="Bujía" value="Bujía" />
                <Picker.Item label="Filtro de Aceite" value="Filtro de Aceite" />
                <Picker.Item label="Filtro de Aire" value="Filtro de Aire" />
                <Picker.Item label="Pastillas de Freno" value="Pastillas de Freno" />
                <Picker.Item label="Bateria de aceite" value="Baterias de aceite" />
              </Picker>
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
            >
              <Text style={estilos.textoBotonFecha}>{textoFechaBoton}</Text>
            </TouchableHighlight>

            {/* Componente del Calendario */}
            {mostrarCalendario && (
              <DateTimePicker
                value={fechaObjeto}
                mode="date"
                display="default"
                onChange={manejarCambioDeFecha}
              />
            )}

            <View style={estilos.filaBotones}>
              <TouchableHighlight style={[estilos.boton, estilos.botonCancelar]} onPress={limpiarFormulario}>
                <Text style={estilos.textoBlanco}>Cancelar</Text>
              </TouchableHighlight>
              
              <TouchableHighlight style={[estilos.boton, estilos.botonGuardar]} onPress={guardarYEnviar}>
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