// components/OwnerInfo.jsx
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OwnerInfo({
  avatar = null,
  ownerName = 'Owner User',
  verified = true,
  lastActive = 'Active recently',
  memberSince = 'Member since Sep 2025',
  totalRatings = 0,
  averageRating = 0.0,
  vehiclesListed = 1,
  onViewOwnersVehicles = () => {},
}) {
  const initials = ownerName
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.avatarWrap}>
          {avatar ? (
            <Image source={avatar} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarInitials}>{initials}</Text>
            </View>
          )}
          <View style={styles.onlineDot} />
        </View>

        <View style={styles.meta}>
          <View style={styles.titleRow}>
            <Text style={styles.ownerName}>{ownerName}</Text>
            {verified && (
              <View style={styles.verified}>
                <Ionicons name="shield-checkmark" size={12} color="#fff" />
                <Text style={styles.verifiedText}> Verified Owner</Text>
              </View>
            )}
          </View>

          <Text style={styles.smallText}>
            {lastActive} • {memberSince}
          </Text>

          <TouchableOpacity style={styles.viewBtn} onPress={onViewOwnersVehicles} activeOpacity={0.85}>
            <Ionicons name="car-sport" size={14} color="#fff" />
            <Text style={styles.viewBtnText}> View Owner's Vehicles</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{totalRatings}</Text>
          <Text style={styles.statLabel}>Total Ratings</Text>
        </View>

        <View style={[styles.statBox, styles.statPrimary]}>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color="#f59e0b" />
            <Text style={styles.statNumberSmall}> {averageRating.toFixed(1)}</Text>
          </View>
          <Text style={styles.statLabel}>Average Rating</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{vehiclesListed}</Text>
          <Text style={styles.statLabel}>Vehicles Listed</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3a434f', // 🔹 dark card
    padding: 14,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000', // 🔹 floating effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    marginVertical: 12,
  },
  left: { flexDirection: 'row', flex: 1 },
  avatarWrap: { width: 64, height: 64, marginRight: 12, position: 'relative' },
  avatar: { width: 64, height: 64, borderRadius: 32 },
  avatarPlaceholder: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#6b7280',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: { color: '#fff', fontWeight: '800', fontSize: 18 },
  onlineDot: {
    position: 'absolute',
    right: 2,
    bottom: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#10b981',
    borderWidth: 2,
    borderColor: '#3a434f',
  },
  meta: { justifyContent: 'center', flex: 1 },
  titleRow: { flexDirection: 'row', alignItems: 'center' },
  ownerName: { fontSize: 16, fontWeight: '800', color: '#fff' }, // white text
  verified: {
    marginLeft: 8,
    backgroundColor: '#16a34a',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifiedText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  smallText: { color: '#e5e7eb', marginTop: 6, fontSize: 12 }, // 🔹 lighter gray text
  viewBtn: {
    marginTop: 8,
    backgroundColor: '#0f9d58',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  viewBtnText: { color: '#fff', fontWeight: '700', fontSize: 13 },

  stats: { flexDirection: 'row', alignItems: 'center' },
  statBox: {
    minWidth: 72,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#4b5563', // 🔹 darker card stats
    alignItems: 'center',
    marginLeft: 8,
  },
  statPrimary: { backgroundColor: '#f59e0b33' }, // 🔹 subtle highlight with opacity
  statNumber: { fontSize: 16, fontWeight: '900', color: '#fff' }, // 🔹 white
  statNumberSmall: { fontSize: 14, fontWeight: '900', color: '#fff' }, // 🔹 white
  ratingRow: { flexDirection: 'row', alignItems: 'center' },
  statLabel: { fontSize: 11, color: '#d1d5db', marginTop: 4, textAlign: 'center' }, // 🔹 light gray
});

