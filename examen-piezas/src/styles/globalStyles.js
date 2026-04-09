import { StyleSheet } from 'react-native';

// Exportamos una constante llamada 'styles' que contiene todo el diseño
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  botonContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 12,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    // Sombras (Importante para la rúbrica)
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  info: {
    flex: 1,
  },
  tipoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  fechaText: {
    color: '#6c757d',
    marginTop: 5,
  },
  btnEliminar: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 8,
  },
  btnEliminarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  empty: {
    textAlign: 'center',
    marginTop: 50,
    color: '#adb5bd',
  }
});