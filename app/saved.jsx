// app/saved.jsx
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import BottomNavbar from '../components/BottomNavbar';
import HeaderCenter from '../components/HeaderCenter';

export default function Saved() {
  return (
    <SafeAreaView style={styles.safe}>
      {/* ✅ Header */}
      <HeaderCenter bottomRadius={36} />

      <ScrollView contentContainerStyle={styles.container}>
        {/* Page Title */}
        <View style={styles.pageTitleWrap}>
          <Text style={styles.pageTitle}>Saved</Text>
        </View>

        {/* 🔹 My Saved Vehicles Summary Card */}
        <View style={styles.summaryCard}>
          <View>
            <Text style={styles.cardTitle}>My Saved Vehicles</Text>
            <Text style={styles.cardSubtitle}>
              Vehicles you&apos;ve saved for future booking
            </Text>
          </View>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1</Text>
              <Text style={styles.statLabel}>Total Saved</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1</Text>
              <Text style={styles.statLabel}>Wishlists</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1</Text>
              <Text style={styles.statLabel}>This Week</Text>
            </View>
          </View>
        </View>

        {/* 🔹 Saved List Component */}
        <View style={styles.listCard}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>My Saved Vehicles</Text>
            <Text style={styles.listCount}>0</Text>
            <Text style={styles.newList}>+ New List</Text>
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* ✅ Bottom Navbar */}
      <BottomNavbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0f1720',
  },
  container: {
    padding: 16,
  },
  pageTitleWrap: {
    marginTop: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },
  summaryCard: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#9ca3af',
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4ade80', // green
  },
  statLabel: {
    fontSize: 12,
    color: '#9ca3af',
  },
  listCard: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  listCount: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#9ca3af',
  },
  newList: {
    marginLeft: 16,
    fontSize: 14,
    fontWeight: '600',
    color: '#3b82f6', // blue
  },
});
