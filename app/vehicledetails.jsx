import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Description from "../components/Description";
import LocationMap from "../components/LocationMap";
import OwnerInfo from "../components/OwnerInfo";
import RentalOptions from "../components/RentalOptions"; // ✅ Rental Options
import ReviewsRatings from "../components/ReviewsRatings";
import VehicleHeader from "../components/VehicleHeader";

export default function VehicleDetails() {
  const { data } = useLocalSearchParams();

  const parsedData = data
    ? JSON.parse(data)
    : {
        title: "BMW R12",
        year: "2026",
        image: null,
        location:
          "Burgos Street, Kaskag Village, Surigao City, Surigao del Norte, Caraga, 8400, Philippines",
        description: "adawdadwda",
        details: {
          category: "Motorcycle",
          make: "BMW",
          model: "R12",
          subtype: "Adventure",
          year: "2026",
          fuelType: "Electric",
          transmission: "4-speed manual",
          color: "pink",
          licensePlate: "123123",
          pricePerHour: 260,
        },
        owner: {
          name: "Owner User",
          verified: true,
          lastActive: "Active recently",
          memberSince: "Member since September 2025",
          totalRatings: 0,
          averageRating: 0.0,
          vehiclesListed: 1,
        },
      };

  // Rental options placeholder
  const rentalOptions = [
    { label: "6 hours", price: 260 },
    { label: "12 hours", price: 450 },
    { label: "24 hours", price: 800 },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <VehicleHeader title={parsedData.title} />

      <ScrollView contentContainerStyle={styles.container}>
        {/* Vehicle image */}
        <View style={styles.imageWrap}>
          {parsedData.image ? (
            <Image
              source={parsedData.image}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Ionicons name="car" size={48} color="#fff" />
            </View>
          )}
        </View>

        {/* Title + Year */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>{parsedData.title}</Text>
          <Text style={styles.year}>({parsedData.year})</Text>
        </View>

        {/* Location */}
        <Text style={styles.location}>
          <Ionicons name="location-outline" size={14} color="#6b7280" />{" "}
          <Text style={styles.locationText}>{parsedData.location}</Text>
        </Text>

        {/* Owner info */}
        <OwnerInfo {...parsedData.owner} />

        {/* Description */}
        <Description
          description={parsedData.description}
          details={parsedData.details}
        />

        {/* Location Map */}
        <LocationMap location={parsedData.location} />

        {/* Reviews */}
        <ReviewsRatings totalReviews={parsedData.owner.totalRatings} />

        {/* Add spacing before rental options */}
        <View style={{ height: 24 }} />

        {/* ✅ Rental Options */}
        <RentalOptions
          options={rentalOptions}
          onBook={(opt) => console.log("Booked:", opt)}
        />

        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0f1720" },
  container: { padding: 16, paddingBottom: 50 },

  imageWrap: {
    height: 180,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#374151",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: "100%", height: "100%" },
  imagePlaceholder: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  titleRow: { flexDirection: "row", alignItems: "baseline", marginTop: 12 },
  title: { fontSize: 22, fontWeight: "900", color: "#fff" },
  year: { fontSize: 14, color: "#d1d5db", marginLeft: 8 },

  location: { marginTop: 8, color: "#d1d5db" },
  locationText: { fontSize: 13, color: "#d1d5db" },
});
