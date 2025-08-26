// app/home.jsx
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import HomeSearchHeader from '../components/HomeSearchHeader';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <HomeSearchHeader
        username="John Doe"
        onSearch={(q) => console.log('search:', q)}
        onFilter={() => router.push('/filters')}
      />

      {/* rest of your page content below */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f1720' },
});
