import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RentalOptions({ options = [], onBook }) {
  const [selected, setSelected] = useState(options[0]); // Default to first option
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Rental Options</Text>

      {/* Selected Option */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => setDropdownVisible(!dropdownVisible)}
      >
        <Text style={styles.optionText}>{selected?.label}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.optionPrice}>₱{selected?.price}</Text>
          <Ionicons
            name={dropdownVisible ? "chevron-up" : "chevron-down"}
            size={18}
            color="#666"
            style={{ marginLeft: 6 }}
          />
        </View>
      </TouchableOpacity>

      {/* Dropdown Options */}
      {dropdownVisible && (
        <View style={styles.dropdown}>
          {options.map((opt, idx) => (
            <TouchableOpacity
              key={idx}
              style={[
                styles.dropdownItem,
                opt.label === selected.label && { backgroundColor: "#374151" },
              ]}
              onPress={() => {
                setSelected(opt);
                setDropdownVisible(false);
              }}
            >
              <Text style={styles.dropdownText}>{opt.label}</Text>
              <Text style={styles.dropdownPrice}>₱{opt.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Book Now Button */}
      <TouchableOpacity
        style={styles.bookBtn}
        onPress={() => onBook?.(selected)}
      >
        <Ionicons name="calendar-outline" size={18} color="#fff" />
        <Text style={styles.bookText}>Book Now</Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        Select pickup time and payment method on the next page
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e293b",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2c3e50",
  },
  title: { fontSize: 16, fontWeight: "bold", color: "#fff", marginBottom: 12 },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#2c3e50",
  },
  optionText: { color: "#fff", fontSize: 14 },
  priceRow: { flexDirection: "row", alignItems: "center" },
  optionPrice: { color: "#22c55e", fontWeight: "bold" },

  dropdown: {
    marginTop: 8,
    backgroundColor: "#2c3e50",
    borderRadius: 8,
    overflow: "hidden",
  },
  dropdownItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  dropdownText: { color: "#fff" },
  dropdownPrice: { color: "#22c55e", fontWeight: "bold" },

  bookBtn: {
    flexDirection: "row",
    backgroundColor: "#2563eb",
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  bookText: { color: "#fff", fontWeight: "bold", marginLeft: 6 },
  note: { marginTop: 8, fontSize: 11, color: "#9ca3af", textAlign: "center" },
});
