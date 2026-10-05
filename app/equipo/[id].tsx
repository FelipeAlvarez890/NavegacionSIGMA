import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { equipos } from '../../data/equipos';

export default function DetalleEquipo() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const equipo = equipos.find((e) => e.id === id);

  if (!equipo) {
    return (
      <View style={styles.container}>
        <Text>No se encontró el equipo {id}.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.code}>Equipo {equipo.id}</Text>
      <Text style={styles.title}>{equipo.nombre}</Text>
      <Text style={styles.detail}>Categoría: {equipo.categoria}</Text>
      <Text style={styles.detail}>Ubicación: {equipo.ubicacion}</Text>
      <Text style={styles.detail}>Estado: {equipo.estado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 6, backgroundColor: '#F4F7FA' },
  code: { fontSize: 13, fontWeight: '800', color: '#2878B5' },
  title: { fontSize: 26, fontWeight: '700', color: '#17324D' },
  detail: { fontSize: 16, color: '#5A6F82' },
});