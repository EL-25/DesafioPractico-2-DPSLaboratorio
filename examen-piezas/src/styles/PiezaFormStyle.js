import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  fondoOscuro: { 
    flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', 
    justifyContent: 'center' },

  contenedorFormulario: { 
    backgroundColor: 'white', 
    margin: 20, 
    padding: 20, 
    borderRadius: 15 },

  titulo: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 15, 
    textAlign: 'center', 
    color: '#1a73e8' },

  etiqueta: { 
    fontWeight: '600', 
    marginTop: 10, color: '#555' },

entradaTexto: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8, 
    padding: 10, 
    marginTop: 5 },

  contenedorPicker: { 
    borderWidth: 1, 
    borderColor: '#ccc',
    borderRadius: 8, 
    marginTop: 5 },

  botonFecha: { 
    backgroundColor: '#f0f0f0', 
    padding: 12, 
    borderRadius: 8, 
    marginTop: 5, 
    borderWidth: 1, 
    borderColor: '#ccc' 
  },

  textoBotonFecha: {
    color: '#333', 
    textAlign: 'center' },

  filaBotones: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 25 },

  boton: { 
    padding: 15, 
    borderRadius: 10, 
    width: '48%',
    alignItems: 'center' },

  botonCancelar: { backgroundColor: '#999' },

  botonGuardar: { backgroundColor: '#1a73e8' },

  textoBlanco: { 
    color: 'white', 
    textAlign: 'center', 
    fontWeight: 'bold' }
});