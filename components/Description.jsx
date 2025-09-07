// components/Description.jsx
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function Description({ description = '', details = {} }) {
  // details = { category, make, model, subtype, year, fuelType, transmission, color, licensePlate, pricePerHour }
  const D = {
    category: details.category || 'Motorcycle',
    make: details.make || 'BMW',
    model: details.model || 'R12',
    subtype: details.subtype || 'Adventure',
    year: details.year || '2026',
    fuelType: details.fuelType || 'Electric',
    transmission: details.transmission || '4-speed manual',
    color: details.color || 'pink',
    licensePlate: details.licensePlate || '123123',
    pricePerHour: details.pricePerHour || 260,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.paragraph}>{description || 'No description provided yet.'}</Text>

      <Text style={[styles.sectionTitle, { marginTop: 14 }]}>Vehicle Details</Text>
      <View style={styles.grid}>
        <Detail label="Category" value={D.category} icon="bicycle" />
        <Detail label="Make" value={D.make} />
        <Detail label="Model" value={D.model} />
        <Detail label="Sub-Type" value={D.subtype} />
        <Detail label="Year" value={D.year} icon="calendar" />
        <Detail label="Fuel Type" value={D.fuelType} icon="water" />
        <Detail label="Transmission" value={D.transmission} />
        <Detail label="Color" value={D.color} />
        <Detail label="License Plate" value={D.licensePlate} />
        <Detail label="Starting at" value={`₱${D.pricePerHour}/hour`} />
      </View>
    </View>
  );
}

function Detail({ label, value, icon }) {
  return (
    <View style={detailStyles.item}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {icon && <Ionicons name={icon} size={14} color="#6b7280" style={{ marginRight: 6 }} />}
        <Text style={detailStyles.label}>{label}</Text>
      </View>
      <Text style={detailStyles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3a434f', // 🔹 dark card
    padding: 14,
    borderRadius: 10,
    marginTop: 12,
    shadowColor: '#000', // 🔹 floating effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  sectionTitle: { fontSize: 16, fontWeight: '800', marginBottom: 8, color: '#fff' },
  paragraph: { color: '#d1d5db', lineHeight: 18 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});

const detailStyles = StyleSheet.create({
  item: { width: '48%', marginBottom: 12 },
  label: { color: '#9ca3af', fontSize: 12 },
  value: { color: '#fff', fontWeight: '700', marginTop: 4 },
});