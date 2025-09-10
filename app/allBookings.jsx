import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import BottomNavbar from "../components/BottomNavbar";
import HeaderCenter from "../components/HeaderCenter";

export default function AllBookings() {
  // In the future, fetch all bookings from backend
  const allBookings = [];

  return (
    <SafeAreaView style={styles.safe}>
      <HeaderCenter bottomRadius={36} />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.pageTitle}>All Bookings</Text>

        {allBookings.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No bookings found</Text>
            <Text style={styles.emptySubtitle}>
              Once you book a vehicle, it will appear here.
            </Text>
          </View>
        ) : (
          allBookings.map((b, i) => (
            <View key={i} style={styles.bookingRow}>
              <Text style={styles.bookingText}>{b}</Text>
            </View>
          ))
        )}

        <View style={{ height: 120 }} />
      </ScrollView>

      <BottomNavbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0f1720" },
  container: { padding: 16 },
  pageTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 16,
  },
  emptyState: { alignItems: "center", marginTop: 40 },
  emptyTitle: { fontSize: 18, fontWeight: "700", color: "#fff" },
  emptySubtitle: { fontSize: 14, color: "#9ca3af", marginTop: 6 },
  bookingRow: {
    backgroundColor: "#1e293b",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  bookingText: { color: "#fff" },
});
