import { StyleSheet, Text, View } from 'react-native';

export default function Tareas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tareas</Text>
      <Text>Tarea ejemplo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 8, backgroundColor: '#F4F7FA' },
  title: { fontSize: 24, fontWeight: '700' },
});