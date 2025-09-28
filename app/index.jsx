// app/index.jsx
import { useRouter } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FindRide from '../components/FindRide';
import HeaderCenter from '../components/HeaderCenter';

export default function Landing() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <HeaderCenter bottomRadius={36} />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heroTitle}>Your Perfect{'\n'}Ride Awaits</Text>
        <Text style={styles.heroSubtitle}>
          Discover premium vehicles for every journey. Safe, reliable, and professionally maintained.
        </Text>

        {/* Reusable find-ride component */}
        <FindRide
          onSearch={(q) => {
            // if you want to pass the search query to the /home page later,
            // you can push params like: router.push({ pathname: '/home', params: { q } })
            console.log('search pressed:', q);
            router.push('/home');
          }}
          onExplore={() => router.push('/home')}
          onBecomePartner={() => router.push('/signup')}
        />

        <View style={{ height: 80 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0f1720' },
  container: {
    paddingHorizontal: 28,
    paddingTop: 28,
    alignItems: 'center',
  },

  heroTitle: {
    fontSize: 44,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 18,
    lineHeight: 48,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#cbd5e1',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 24,
    maxWidth: 880,
  },
});
