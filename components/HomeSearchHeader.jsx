// components/HomeSearchHeader.jsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // ✅ import router
import { useState } from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FiltersPanel from './FiltersPanel';
import ProfilePill from './ProfilePill';

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
  const [isAnimating, setIsAnimating] = useState(false);
  const insets = useSafeAreaInsets();
  const router = useRouter();  // ✅ navigation

  const safeUsername = username || 'Username';
  const safePlaceholder = placeholder || 'Search for Vehicle...';
  const safeSelectedCategory = selectedCategory ? String(selectedCategory) : null;

  const submit = () => {
    if (onSearch)
      onSearch({
        q: query || '',
        vehicleType: selectedVehicle || 'motorcycle',
        category: selectedCategory || null,
      });
  };

  const handleApplyFilters = ({ vehicleType, category }) => {
    setSelectedVehicle(vehicleType || 'motorcycle');
    setSelectedCategory(category || null);
    setIsAnimating(true);
    setFiltersVisible(false);
    if (onSearch)
      onSearch({
        q: query,
        vehicleType: vehicleType || 'motorcycle',
        category: category || null,
      });
  };

  const handleCloseFilters = () => {
    setIsAnimating(true);
    setFiltersVisible(false);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    setFiltersVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[
          styles.header,
          {
            borderBottomLeftRadius:
              filtersVisible || isAnimating ? 0 : bottomRadius,
            borderBottomRightRadius:
              filtersVisible || isAnimating ? 0 : bottomRadius,
            zIndex: 999,
            paddingTop: 12 + insets.top,
          },
        ]}
      >
        {/* Top row: logo + profile pill */}
        <View style={styles.topRow}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <ProfilePill
            username={safeUsername}
            onPress={() => router.push('/profile')}   // ✅ go to profile page
          />
        </View>

        {/* Search row */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Ionicons
              name="search"
              size={20}
              color="#6b6f74"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={
                safeSelectedCategory
                  ? `${safeSelectedCategory} • ${safePlaceholder}`
                  : safePlaceholder
              }
              placeholderTextColor="#8b9096"
              value={query || ''}
              onChangeText={setQuery}
              returnKeyType="search"
              onSubmitEditing={submit}
              underlineColorAndroid="transparent"
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.filterButton}
            onPress={() => {
              if (filtersVisible) {
                handleCloseFilters();
              } else {
                setFiltersVisible(true);
                setIsAnimating(false);
              }
            }}
          >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="options" size={20} color="#2b3440" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* FiltersPanel drops under header */}
      <FiltersPanel
        visible={filtersVisible}
        initialVehicle={selectedVehicle}
        initialCategory={selectedCategory}
        onClose={handleCloseFilters}
        onApply={handleApplyFilters}
        onAnimationComplete={handleAnimationComplete}
        headerHeight={12 + insets.top + 56 + 12 + 46 + 25}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
    backgroundColor: 'transparent',
    zIndex: 10,
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
  logo: { width: 220, height: 56 },
  searchRow: { width: '100%', flexDirection: 'row', alignItems: 'center' },
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
  searchIcon: { marginRight: 8 },
  input: { flex: 1, fontSize: 16, color: '#1a1a1a', paddingVertical: 0 },
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
