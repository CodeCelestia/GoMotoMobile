import { Slot } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavbar from '../components/BottomNavbar';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Slot />
        <BottomNavbar />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f1720' }, // 🔹 global background
});
