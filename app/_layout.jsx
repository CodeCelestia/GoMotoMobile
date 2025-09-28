// app/_layout.jsx
import { Slot, usePathname } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavbar from '../components/BottomNavbar';

export default function RootLayout() {
  const pathname = usePathname() || '/';

  // Show navbar on these routes (adjust list as needed)
  const navbarRoutes = [
    '/home',
    '/profile',
    '/current',
    '/settings',
    '/saved',
    '/report',
  ];

  const showNavbar = navbarRoutes.includes(pathname);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Slot />
        {showNavbar && <BottomNavbar />}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f1720' }, // global background
});
