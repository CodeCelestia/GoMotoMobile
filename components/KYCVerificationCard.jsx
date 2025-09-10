import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function KYCVerificationCard({ isVerified, onVerify }) {
  if (isVerified) return null;

  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>⚠️ Complete KYC Verification</Text>
        <Text style={styles.subtitle}>
          Upload your driver's license to start booking vehicles.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onVerify}>
        <Text style={styles.buttonText}>Complete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#facc15",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  title: { fontSize: 16, fontWeight: "700", color: "#facc15" },
  subtitle: { fontSize: 13, color: "#9ca3af", marginTop: 4 },
  button: {
    backgroundColor: "#ca8a04",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginLeft: 12,
  },
  buttonText: { color: "#fff", fontWeight: "600" },
});
