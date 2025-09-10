// components/ReviewsRatings.jsx
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function ReviewsRatings({ totalReviews = 0 }) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Reviews & Ratings</Text>

      {totalReviews === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="star-outline" size={40} color="#9ca3af" />
          <Text style={styles.noReviews}>No reviews yet</Text>
          <Text style={styles.hint}>Be the first to review this vehicle!</Text>
        </View>
      ) : (
        <Text style={{ color: '#fff' }}>⭐ Reviews will go here</Text>
      )}
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
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  noReviews: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginTop: 8,
  },
  hint: {
    fontSize: 13,
    color: '#9ca3af',
    marginTop: 4,
  },
});
