import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import FiltersPanel from './FiltersPanel';

export default function HomeSearchHeader({
  username = 'Username',
  onSearch,
  logo = require('../assets/images/Gomoto_HeaderCroped.png'),
  placeholder = 'Search for Vehicle...',
  bottomRadius = 22,
}) {
  const [query, setQuery] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('motorcycle');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const submit = () => {
    if (onSearch) onSearch({ q: query, vehicleType: selectedVehicle, category: selectedCategory });
  };

  const handleApplyFilters = ({ vehicleType, category }) => {
    setSelectedVehicle(vehicleType);
    setSelectedCategory(category);
    setFiltersVisible(false);
    // optionally trigger a search/update
    if (onSearch) onSearch({ q: query, vehicleType, category });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.header, { 
        borderBottomLeftRadius: filtersVisible ? 0 : bottomRadius, 
        borderBottomRightRadius: filtersVisible ? 0 : bottomRadius,
        zIndex: 999,
      }]}>
        {/* Top row: logo + profile pill */}
        <View style={styles.topRow}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />

          <TouchableOpacity activeOpacity={0.85} style={styles.profilePill}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={22} color="#194b59" />
            </View>
            <Text numberOfLines={1} style={styles.usernameText}>
              {username}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Search row */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Ionicons name="search" size={20} color="#6b6f74" style={styles.searchIcon} />
            <TextInput
              style={styles.input}
              placeholder={selectedCategory ? `${selectedCategory} • ${placeholder}` : placeholder}
              placeholderTextColor="#8b9096"
              value={query}
              onChangeText={setQuery}
              returnKeyType="search"
              onSubmitEditing={submit}
              underlineColorAndroid="transparent"
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.filterButton}
            onPress={() => setFiltersVisible(!filtersVisible)}
          >
            <Ionicons name="options" size={20} color="#2b3440" />
          </TouchableOpacity>
        </View>
      </View>

      {/* FiltersPanel drops under header */}
      <FiltersPanel
        visible={filtersVisible}
        initialVehicle={selectedVehicle}
        initialCategory={selectedCategory}
        onClose={() => setFiltersVisible(false)}
        onApply={handleApplyFilters}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
    backgroundColor: 'transparent',
    zIndex: 10, // Ensure header is above content but below navbar
  },

  header: {
    width: '100%',
    backgroundColor: '#27313a',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 25,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    shadowColor: 'transparent',
    elevation: 0,
  },

  topRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  logo: {
    width: 220,
    height: 56,
  },

  profilePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f2730',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
    minWidth: 120,
    justifyContent: 'center',
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 21,
    backgroundColor: '#dff1f4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  usernameText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
  },

  searchRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 46,
    borderRadius: 12,
    paddingHorizontal: 14,
    marginRight: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 6,
      },
      android: { elevation: 3 },
    }),
  },

  searchIcon: {
    marginRight: 8,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#1a1a1a',
    paddingVertical: 0,
  },

  filterButton: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 6,
      },
      android: { elevation: 3 },
    }),
  },
});
