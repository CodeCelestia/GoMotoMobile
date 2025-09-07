// app/index.jsx
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FloatingCard from '../components/FloatingCard';
import HomeSearchHeader from '../components/HomeSearchHeader';

export default function Home() {
  const router = useRouter();

  const handleCardPress = (vehicle) => {
    router.push({
      pathname: '/vehicledetails',
      params: { data: JSON.stringify(vehicle) }, // 🔹 pass JSON string
    });
  };

  return (
    <View style={styles.container}>
      <HomeSearchHeader
        username="John Doe"
        onSearch={({ q, vehicleType, category }) =>
          console.log('search:', { q, vehicleType, category })
        }
      />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerSection}>
          <Text style={styles.sectionTitle}>Vehicles Available</Text>
        </View>

        {/* Example Floating Cards */}
        <FloatingCard
          title="Honda XRM125 DSX"
          owner="Juan Dela Cruz"
          color="Black"
          gearbox="4-speed"
          fuel="Unleaded"
          category="Underbones"
          price={350}
          rating={4.5}
          durationLabel="Price for 12 hours"
          onPress={() =>
            handleCardPress({
              title: 'Honda XRM125 DSX',
              year: '2024',
              image: null,
              location: 'Surigao City, Philippines',
              description: 'Reliable underbone bike for daily commute.',
              details: {
                category: 'Underbones',
                make: 'Honda',
                model: 'XRM125 DSX',
                subtype: 'Underbone',
                year: '2024',
                fuelType: 'Unleaded',
                transmission: '4-speed',
                color: 'Black',
                licensePlate: 'ABC-123',
                pricePerHour: 350,
              },
              owner: {
                name: 'Juan Dela Cruz',
                verified: true,
                lastActive: 'Active now',
                memberSince: 'Member since Jan 2023',
                totalRatings: 10,
                averageRating: 4.5,
                vehiclesListed: 2,
              },
            })
          }
        />

        <FloatingCard
          title="Honda Pridor"
          owner="Pedro Santos"
          color="Red"
          gearbox="4-speed"
          fuel="Unleaded"
          category="Underbones"
          price={350}
          rating={3.8}
          durationLabel="Price for 12 hours"
          image={{
            uri: 'https://bike.net/res/media/img/oy800/ref/9c0/87747.png',
          }}
          onPress={() =>
            handleCardPress({
              title: 'Honda Pridor',
              year: '2023',
              image: {
                uri: 'https://bike.net/res/media/img/oy800/ref/9c0/87747.png',
              },
              location: 'Surigao City, Philippines',
              description: 'Lightweight and efficient commuter bike.',
              details: {
                category: 'Underbones',
                make: 'Honda',
                model: 'Pridor',
                subtype: 'Underbone',
                year: '2023',
                fuelType: 'Unleaded',
                transmission: '4-speed',
                color: 'Red',
                licensePlate: 'XYZ-456',
                pricePerHour: 350,
              },
              owner: {
                name: 'Pedro Santos',
                verified: false,
                lastActive: 'Active yesterday',
                memberSince: 'Member since Mar 2022',
                totalRatings: 5,
                averageRating: 3.8,
                vehiclesListed: 1,
              },
            })
          }
        />

        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f1720' },
  content: { flex: 1 },
  contentContainer: { flexGrow: 1, paddingTop: 14, paddingBottom: 40 },
  headerSection: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 8,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#ffffff',
  },
  bottomPadding: { height: 120 },
});
