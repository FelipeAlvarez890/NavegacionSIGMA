import { Link } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native';
import { equipos } from '../data/equipos';

export default function Equipos() {
  return (
    <FlatList
      data={equipos}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.content}
      ListHeaderComponent={<Text style={styles.title}>Equipos registrados</Text>}
      renderItem={({ item }) => (
        <Link href={'/equipo/' + item.id} asChild>
          <Pressable style={styles.card}>
            <Text style={styles.code}>{item.id}</Text>
            <Text style={styles.name}>{item.nombre}</Text>
            <Text style={styles.detail}>Detalles</Text>
          </Pressable>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, gap: 12 },
  title: { fontSize: 22, fontWeight: '700', color: '#17324D', marginBottom: 8 },
  card: { padding: 18, borderWidth: 1, borderColor: '#D9E3EC', borderRadius: 16, backgroundColor: '#FFFFFF' },
  code: { fontSize: 12, fontWeight: '800', color: '#2878B5' },
  name: { marginTop: 6, fontSize: 18, fontWeight: '700', color: '#17324D' },
  detail: { marginTop: 4, fontSize: 14, color: '#5A6F82' },
});