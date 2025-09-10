import { StyleSheet, Text, View } from "react-native";

export default function WelcomeBackCard({ totalBookings }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>
          Here's what's happening with your bookings
        </Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.label}>TOTAL BOOKINGS</Text>
        <Text style={styles.value}>{totalBookings}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: { fontSize: 20, fontWeight: "700", color: "#fff" },
  subtitle: { fontSize: 14, color: "#9ca3af" },
  label: { fontSize: 12, color: "#9ca3af" },
  value: { fontSize: 22, fontWeight: "700", color: "#fff" },
});
