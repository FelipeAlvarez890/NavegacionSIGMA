import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGMA</Text>
      <Text style={styles.subtitle}>Gestión de mantenimiento</Text>

      <Link href="/equipos" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Equipos</Text>
        </Pressable>
      </Link>

      <Link href="/tareas" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Tareas</Text>
        </Pressable>
      </Link>

      <Link href="/nueva-tarea" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Nueva tarea</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12, backgroundColor: '#F4F7FA' },
  title: { fontSize: 30, fontWeight: '700', color: '#17324D' },
  subtitle: { fontSize: 15, color: '#5A6F82', marginBottom: 12 },
  button: { backgroundColor: '#1F4E78', paddingVertical: 14, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: '600', fontSize: 16 },
});