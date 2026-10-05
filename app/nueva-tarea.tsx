import { StyleSheet, Text, View } from 'react-native';

export default function NuevaTarea() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nueva tarea</Text>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 8, backgroundColor: '#F4F7FA' },
  title: { fontSize: 24, fontWeight: '700' },
});