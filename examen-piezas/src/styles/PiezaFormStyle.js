import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  fondoOscuro: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.6)', 
    justifyContent: 'center' 
  },

  contenedorFormulario: { 
    backgroundColor: 'white', 
    margin: 20, 
    padding: 20, 
    borderRadius: 15,
    maxHeight: '80%'
  },

  titulo: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 15, 
    textAlign: 'center', 
    color: '#1a73e8' 
  },

  etiqueta: { 
    fontWeight: '600', 
    marginTop: 15, 
    color: '#555',
    fontSize: 14
  },

  entradaTexto: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8, 
    padding: 10, 
    marginTop: 5,
    backgroundColor: '#fff'
  },

  contenedorPicker: { 
    borderWidth: 1, 
    borderColor: '#ccc',
    borderRadius: 8, 
    marginTop: 5,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden'
  },

  seccionNuevaCat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 10
  },

  botonAdd: {
    backgroundColor: '#1a73e8',
    width: 45,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },

  botonFecha: { 
    backgroundColor: '#f0f0f0', 
    padding: 12, 
    borderRadius: 8, 
    marginTop: 5, 
    borderWidth: 1, 
    borderColor: '#ccc',
    alignItems: 'center'
  },

  textoBotonFecha: {
    color: '#333', 
    fontWeight: '500'
  },

  filaBotones: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 30,
    marginBottom: 10
  },

  boton: { 
    padding: 15, 
    borderRadius: 10, 
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  botonCancelar: { 
    backgroundColor: '#999' 
  },

  botonGuardar: { 
    backgroundColor: '#1a73e8' 
  },

  textoBlanco: { 
    color: 'white', 
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 16
  }
});
