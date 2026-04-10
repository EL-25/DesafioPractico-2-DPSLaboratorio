import { StyleSheet } from 'react-native';

export const estilosDetallePieza = StyleSheet.create({
  fondoPantalla: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tarjetaContenedor: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  tituloSeccion: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a73e8',
    textAlign: 'center',
    marginBottom: 10,
  },
  lineaDivisoria: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '100%',
    marginBottom: 15,
  },
  cuerpoInfo: {
    marginBottom: 20,
  },
  bloqueDato: {
    marginBottom: 12,
  },
  etiquetaDato: {
    fontSize: 13,
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  valorDato: {
    fontSize: 17,
    color: '#333',
    marginTop: 2,
  },
  botonEntendido: {
    backgroundColor: '#1a73e8',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});