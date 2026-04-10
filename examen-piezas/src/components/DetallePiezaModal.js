import React from 'react';
import { 
  Modal, 
  View, 
  Text,  
  TouchableOpacity 
} from 'react-native';
import { estilosDetallePieza } from '../styles/DetallePieza';

const DetallePiezaModal = ({ visible, pieza, cerrarModal }) => {
  // Verificación de seguridad: si no hay pieza seleccionada, no mostramos nada
  if (!pieza) return null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={cerrarModal}
    >
      <View style={estilosDetallePieza.fondoPantalla}>
        <View style={estilosDetallePieza.tarjetaContenedor}>
          
          <Text style={estilosDetallePieza.tituloSeccion}>Detalles del Registro</Text>
          
          <View style={estilosDetallePieza.lineaDivisoria} />

          <View style={estilosDetallePieza.cuerpoInfo}>
            <View style={estilosDetallePieza.bloqueDato}>
              <Text style={estilosDetallePieza.etiquetaDato}>Tipo de Repuesto:</Text>
              <Text style={estilosDetallePieza.valorDato}>{pieza.tipo}</Text>
            </View>

            <View style={estilosDetallePieza.bloqueDato}>
              <Text style={estilosDetallePieza.etiquetaDato}>Marca:</Text>
              <Text style={estilosDetallePieza.valorDato}>{pieza.marca}</Text>
            </View>

            <View style={estilosDetallePieza.bloqueDato}>
              <Text style={estilosDetallePieza.etiquetaDato}>Número de Serie:</Text>
              <Text style={estilosDetallePieza.valorDato}>{pieza.serie}</Text>
            </View>

            <View style={estilosDetallePieza.bloqueDato}>
              <Text style={estilosDetallePieza.etiquetaDato}>Costo de la Pieza:</Text>
              <Text style={[estilosDetallePieza.valorDato, { color: '#2e7d32', fontWeight: 'bold' }]}>
                ${pieza.precio}
              </Text>
            </View>

            <View style={estilosDetallePieza.bloqueDato}>
              <Text style={estilosDetallePieza.etiquetaDato}>Fecha del ultimo cambio</Text>
              <Text style={estilosDetallePieza.valorDato}>{pieza.fecha}</Text>
            </View>
          </View>

          <TouchableOpacity 
            style={estilosDetallePieza.botonEntendido} 
            onPress={cerrarModal}
          >
            <Text style={estilosDetallePieza.textoBoton}>Entendido</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};


export default DetallePiezaModal;