import { Slot } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import BottomNavbar from '../components/BottomNavbar';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Slot />
      <BottomNavbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
