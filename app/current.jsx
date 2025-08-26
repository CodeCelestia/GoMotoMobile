import { StyleSheet, Text, View } from 'react-native';

export default function Current() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f1720' },
  title: { color: '#fff', fontSize: 24 },
});
