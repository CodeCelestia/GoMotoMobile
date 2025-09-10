import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RecentBookingsCard({ bookings = [], onViewAll }) {
  return (
    <View style={styles.card}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>Recent Bookings</Text>
        <TouchableOpacity onPress={onViewAll}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      {/* If no bookings */}
      {bookings.length === 0 ? (
        <View style={styles.emptyState}>
          <MaterialIcons name="description" size={36} color="#6b7280" />
          <Text style={styles.emptyTitle}>No bookings yet</Text>
          <Text style={styles.emptySubtitle}>
            Start your journey by booking your first vehicle
          </Text>
        </View>
      ) : (
        bookings.map((item, idx) => (
          <View key={idx} style={styles.bookingRow}>
            <Text style={styles.bookingText}>{item}</Text>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e293b",
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: { fontSize: 16, fontWeight: "700", color: "#fff" },
  viewAll: { fontSize: 14, fontWeight: "600", color: "#3b82f6" },
  divider: {
    height: 1,
    backgroundColor: "#334155",
    marginVertical: 10,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 24,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginTop: 8,
  },
  emptySubtitle: { fontSize: 13, color: "#9ca3af", marginTop: 4 },
  bookingRow: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#334155",
  },
  bookingText: { color: "#fff" },
});
