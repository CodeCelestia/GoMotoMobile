// components/FindRide.jsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

/**
 * FindRide
 * - optional props:
 *    chips: array of quick filter labels
 *    popular: array of popular search labels
 *    onSearch: function(query) called when Search pressed (fallbacks to navigate '/home')
 *    onExplore: function() called when Explore Vehicles pressed
 *    onBecomePartner: function() called when Become a Partner pressed
 */
export default function FindRide({
  chips = ['Cars', 'Motorcycles', 'SUVs', 'Automatic'],
  popular = ['Honda Civic', 'Toyota Vios', 'Yamaha', 'Honda Beat', 'Automatic', 'SUV', 'Motorcycle'],
  onSearch,
  onExplore,
  onBecomePartner,
}) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (onSearch) return onSearch(query);
    router.push('/home');
  };

  const handleExplore = () => {
    if (onExplore) return onExplore();
    router.push('/home');
  };

  const handleBecome = () => {
    if (onBecomePartner) return onBecomePartner();
    router.push('/signup');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Find Your Perfect Ride</Text>
      <Text style={styles.cardSubtitle}>
        Discover premium vehicles for every journey across Surigao del Norte
      </Text>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#cbd5e1" style={{ marginRight: 10 }} />
          <TextInput
            placeholder="Search by make, model, type, or location..."
            placeholderTextColor="#cbd5e1"
            style={styles.searchInput}
            value={query}
            onChangeText={setQuery}
            returnKeyType="search"
            onSubmitEditing={handleSearch}
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSearch}
          activeOpacity={0.9}
        >
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.chipsRow}>
        {chips.map((c) => (
          <View key={c} style={styles.chip}>
            <Text style={styles.chipText}>{c}</Text>
          </View>
        ))}
      </View>

      <View style={styles.popularRow}>
        <Text style={styles.popularLabel}>Popular searches:</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 8 }}
        >
          {popular.map((p) => (
            <TouchableOpacity
              key={p}
              style={styles.popularChip}
              onPress={() => {
                setQuery(p);
                // optionally perform search automatically:
                // handleSearch();
              }}
            >
              <Text style={styles.popularChipText}>{p}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.primaryBtn} onPress={handleExplore} activeOpacity={0.9}>
          <Ionicons name="search-outline" size={18} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.primaryBtnText}>Explore Vehicles</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn} onPress={handleBecome} activeOpacity={0.9}>
          <Ionicons name="person-add-outline" size={18} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.secondaryBtnText}>Become a Partner</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 980,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 14,
    paddingVertical: 28,
    paddingHorizontal: 22,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    shadowColor: '#1f2a44',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 8,
    alignItems: 'center',
    marginBottom: 28,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#b7c2cd',
    textAlign: 'center',
    marginBottom: 18,
  },

  searchRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 14,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 48,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.04)',
  },
  searchInput: {
    flex: 1,
    color: '#e6eef0',
    fontSize: 14,
    paddingVertical: 0,
  },
  searchButton: {
    marginLeft: 12,
    backgroundColor: 'rgba(255,255,255,0.06)',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: '700',
  },

  chipsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  chip: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.04)',
  },
  chipText: { color: '#cbd5e1', fontWeight: '600' },

  popularRow: {
    width: '100%',
    marginTop: 12,
    alignItems: 'flex-start',
  },
  popularLabel: { color: '#a7b1bb', fontSize: 13 },

  popularChip: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.04)',
  },
  popularChipText: { color: '#d7e2ea', fontSize: 13 },

  actionsRow: {
    width: '100%',
    maxWidth: 780,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 18,
    marginTop: 18,
  },
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b3a4a',
    paddingHorizontal: 26,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.04)',
    shadowColor: '#20304a',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 6,
  },
  primaryBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  secondaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f2937',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.03)',
    shadowColor: '#17202a',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 12,
    elevation: 6,
  },
  secondaryBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
