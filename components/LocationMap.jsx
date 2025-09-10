// components/LocationMap.jsx
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function LocationMap({ location }) {
  // Google Maps embed URL (search by address)
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Location Map</Text>
      <View style={styles.mapContainer}>
        <WebView source={{ uri: mapUrl }} style={styles.map} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1f2937',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
  },
  mapContainer: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
});
