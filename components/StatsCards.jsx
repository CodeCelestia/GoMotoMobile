import { StyleSheet, Text, View } from "react-native";

function StatCard({ label, value, color }) {
  return (
    <View style={styles.statCard}>
      <Text style={[styles.value, { color }]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

export default function StatsCards({ completed, spent, cancelled, overcharges }) {
  return (
    <View style={styles.grid}>
      <StatCard label="Completed Trips" value={completed} color="#60a5fa" />
      <StatCard label="Total Spent" value={`₱${spent.toFixed(2)}`} color="#4ade80" />
      <StatCard label="Cancelled" value={cancelled} color="#fb923c" />
      <StatCard label="Unpaid Overcharges" value={`₱${overcharges.toFixed(2)}`} color="#9ca3af" />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 16,
  },
  statCard: {
    backgroundColor: "#1e293b",
    padding: 16,
    borderRadius: 12,
    width: "48%",
    alignItems: "center",
    marginBottom: 12,
  },
  value: { fontSize: 20, fontWeight: "700" },
  label: { fontSize: 13, color: "#9ca3af", marginTop: 4, textAlign: "center" },
});
