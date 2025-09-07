import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Description from '../components/Description';
import OwnerInfo from '../components/OwnerInfo';
import VehicleHeader from '../components/VehicleHeader';

export default function VehicleDetails() {
  const { data } = useLocalSearchParams();

  // If navigated with params, parse the JSON string
  const parsedData = data ? JSON.parse(data) : {
    title: 'BMW R12',
    year: '2026',
    image: null,
    location: 'Burgos Street, Kaskag Village, Surigao City, Surigao del Norte, Caraga, 8400, Philippines',
    description: 'adawdadwda',
    details: {
      category: 'Motorcycle',
      make: 'BMW',
      model: 'R12',
      subtype: 'Adventure',
      year: '2026',
      fuelType: 'Electric',
      transmission: '4-speed manual',
      color: 'pink',
      licensePlate: '123123',
      pricePerHour: 260,
    },
    owner: {
      name: 'Owner User',
      verified: true,
      lastActive: 'Active recently',
      memberSince: 'Member since September 2025',
      totalRatings: 0,
      averageRating: 0.0,
      vehiclesListed: 1,
    },
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* 🔹 Custom Vehicle Header */}
      <VehicleHeader title={parsedData.title} />

      {/* 🔹 Content */}
      <ScrollView contentContainerStyle={styles.container}>
        {/* Vehicle image */}
        <View style={styles.imageWrap}>
          {parsedData.image ? (
            <Image source={parsedData.image} style={styles.image} resizeMode="cover" />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Ionicons name="car" size={48} color="#fff" />
            </View>
          )}
        </View>

        {/* Title and year */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>{parsedData.title}</Text>
          <Text style={styles.year}>({parsedData.year})</Text>
        </View>

        {/* Location */}
        <Text style={styles.location}>
          <Ionicons name="location-outline" size={14} color="#6b7280" />{' '}
          <Text style={styles.locationText}>{parsedData.location}</Text>
        </Text>

        {/* Owner info */}
        <OwnerInfo
          avatar={null}
          ownerName={parsedData.owner?.name}
          verified={parsedData.owner?.verified}
          lastActive={parsedData.owner?.lastActive}
          memberSince={parsedData.owner?.memberSince}
          totalRatings={parsedData.owner?.totalRatings}
          averageRating={parsedData.owner?.averageRating}
          vehiclesListed={parsedData.owner?.vehiclesListed}
          onViewOwnersVehicles={() => console.log("View owner's vehicles")}
        />

        {/* Vehicle description + details */}
        <Description description={parsedData.description} details={parsedData.details} />

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* 🔹 Bottom bar */}
      <View style={styles.bottomBar}>
        <View style={{ flex: 1 }}>
          <Text style={styles.priceLabel}>Starting at</Text>
          <Text style={styles.price}>₱{parsedData.details.pricePerHour}/hour</Text>
        </View>

        <TouchableOpacity
          style={styles.rentBtn}
          onPress={() => console.log('Rent now pressed (placeholder)')}
        >
          <Text style={styles.rentBtnText}>Rent now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0f1720' }, // Dark background

  container: { padding: 16, paddingBottom: 200 },

  imageWrap: {
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { width: '100%', height: '100%' },
  imagePlaceholder: { width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' },

  titleRow: { flexDirection: 'row', alignItems: 'baseline', marginTop: 12 },
  title: { fontSize: 22, fontWeight: '900', color: '#fff' },
  year: { fontSize: 14, color: '#d1d5db', marginLeft: 8 },

  location: { marginTop: 8, color: '#d1d5db' },
  locationText: { fontSize: 13, color: '#d1d5db' },

  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 72,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e6eef0',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceLabel: { color: '#6b7280', fontSize: 12 },
  price: { fontSize: 20, fontWeight: '900' },
  rentBtn: {
    backgroundColor: '#0f9d58',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  rentBtnText: { color: '#fff', fontWeight: '800' },
});
