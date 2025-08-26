import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

/**
 * FiltersPanel
 * Props:
 *  - visible: boolean
 *  - initialVehicle: 'motorcycle' | 'car'
 *  - onClose: () => void
 *  - onApply: ({ vehicleType, category }) => void
 *
 * This component animates its height when visible changes.
 */
export default function FiltersPanel({
  visible = false,
  initialVehicle = 'motorcycle',
  initialCategory = null,
  onClose = () => {},
  onApply = () => {},
}) {
  const [vehicleType, setVehicleType] = useState(initialVehicle);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const { height: SCREEN_HEIGHT } = Dimensions.get('window');

  // animation: from height 0 to fullHeight
  const anim = useRef(new Animated.Value(0)).current;
  // Reduced container height to remove extra bottom space
  const fullHeight = Platform.OS === 'web' ? 135 : 150;

  // Custom motorcycle icons
  const motorcycleIcons = {
    scooter: require('../assets/images/motorcycle/Scooter.png'),
    underbone: require('../assets/images/motorcycle/Underbone.png'),
    sportsbike: require('../assets/images/motorcycle/Sports_Bike.png'),
    dirtbike: require('../assets/images/motorcycle/Dirt_Bike.png'),
    cruiser: require('../assets/images/motorcycle/Cruiser.png'),
  };

  const carIcons = {
    sedan: require('../assets/images/car/Sedan.png'),
    suv: require('../assets/images/car/Suv.png'),
    hatchback: require('../assets/images/car/Hatchback.png'),
    van: require('../assets/images/car/Van.png'),
    pickup: require('../assets/images/car/Pickup.png'),
  };

  useEffect(() => {
    // Create animation but store the reference
    const animationRef = Animated.timing(anim, {
      toValue: visible ? 1 : 0,
      duration: 220,
      useNativeDriver: false,
    });
    
    // Start the animation
    animationRef.start();
    
    // Return cleanup function to stop animation when component unmounts
    return () => {
      animationRef.stop();
    };
  }, [visible, anim]);

  // categories for each vehicle type
  const CATEGORIES = {
    motorcycle: [
      { key: 'scooter', label: 'Scooter', icon: 'scooter' },
      { key: 'underbone', label: 'Underbone', icon: 'underbone' },
      { key: 'sportsbike', label: 'Sportsbike', icon: 'sportsbike' },
      { key: 'dirtbike', label: 'Dirt Bike', icon: 'dirtbike' },
      { key: 'cruiser', label: 'Cruiser', icon: 'cruiser' },
    ],
    car: [
      { key: 'sedan', label: 'Sedan', icon: 'sedan' },
      { key: 'suv', label: 'SUV', icon: 'suv' },
      { key: 'hatchback', label: 'Hatchback', icon: 'hatchback' },
      { key: 'van', label: 'Van', icon: 'van' },
      { key: 'pickup', label: 'Pickup', icon: 'pickup' },
    ],
  };

  const heightInterpolate = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, fullHeight],
  });

  const handleSelectCategory = (categoryKey) => {
    Animated.timing(anim, { toValue: 0, duration: 220, useNativeDriver: false })
      .start(({ finished }) => {
        if (finished) {
          setSelectedCategory(categoryKey);
          onApply({ vehicleType, category: categoryKey });
          onClose();
        }
      });
  };

  const handleResetCategory = () => {
    Animated.timing(anim, { toValue: 0, duration: 220, useNativeDriver: false })
      .start(({ finished }) => {
        if (finished) {
          setSelectedCategory(null);
          onApply({ vehicleType, category: null });
          onClose();
        }
      });
  };

  return (
    <Animated.View 
      style={[
        styles.container,
        Platform.OS !== 'web' ? styles.mobileContainer : {},
        { height: heightInterpolate }
      ]}
      pointerEvents={visible ? 'auto' : 'none'}
    >
      <View style={styles.inner}>
        {/* top row: vehicle type toggles only */}
        <View style={styles.topRow}>
          <View style={styles.typeToggle}>
            <TouchableOpacity
              style={[
                styles.typeButton,
                vehicleType === 'motorcycle' && styles.typeButtonActive,
              ]}
              onPress={() => setVehicleType('motorcycle')}
              activeOpacity={0.85}
            >
              <Ionicons name="bicycle" size={18} color={vehicleType === 'motorcycle' ? '#fff' : '#cfd6db'} />
              <Text style={[styles.typeLabel, vehicleType === 'motorcycle' && styles.typeLabelActive]}>Motorcycle</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.typeButton,
                vehicleType === 'car' && styles.typeButtonActive,
              ]}
              onPress={() => setVehicleType('car')}
              activeOpacity={0.85}
            >
              <Ionicons name="car" size={18} color={vehicleType === 'car' ? '#fff' : '#cfd6db'} />
              <Text style={[styles.typeLabel, vehicleType === 'car' && styles.typeLabelActive]}>Automobile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* categories */}
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.categoriesWrap}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.categoriesRow}>
            {CATEGORIES[vehicleType].map((cat) => {
              const active = selectedCategory === cat.key;
              return (
                <TouchableOpacity
                  key={cat.key}
                  style={[styles.catButton, active && styles.catButtonActive]}
                  onPress={() => handleSelectCategory(cat.key)}
                  activeOpacity={0.85}
                >
                  <View style={[styles.catIconWrap, active && styles.catIconWrapActive]}>
                    {vehicleType === 'motorcycle' ? (
                      <Image 
                        source={motorcycleIcons[cat.icon]} 
                        style={[
                          styles.customIcon, 
                          active && { tintColor: '#194b59' }
                        ]} 
                        resizeMode="contain" 
                      />
                    ) : (
                      <Image 
                        source={carIcons[cat.icon]} 
                        style={[
                          styles.customIcon, 
                          active && { tintColor: '#194b59' }
                        ]} 
                        resizeMode="contain" 
                      />
                    )}
                  </View>
                  <Text style={[styles.catLabel, active && styles.catLabelActive]}>{cat.label}</Text>
                </TouchableOpacity>
              );
            })}
            
            {/* Reset button */}
            <TouchableOpacity
              style={[styles.catButton, styles.resetButton]}
              onPress={handleResetCategory}
              activeOpacity={0.85}
            >
              <View style={styles.catIconWrap}>
                <Ionicons name="refresh" size={24} color="#e74c3c" />
              </View>
              <Text style={styles.resetLabel}>Reset</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: Platform.OS === 'web' ? 'auto' : 130,
    left: 0,
    right: 0,
    zIndex: Platform.OS === 'web' ? 1 : 1000,
    elevation: Platform.OS === 'android' ? 20 : 0,
  },
  mobileContainer: {
    position: 'absolute',
    // Position fixed to top regardless of scroll
    top: 130,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  hiddenContainer: {
    height: 0,
    opacity: 0,
    display: Platform.OS === 'web' ? 'flex' : 'none',
  },
  inner: {
    flex: 1,
    backgroundColor: '#2b3440',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 0,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    // Enhanced shadow for better visibility on mobile
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: { elevation: 10 },
    }),
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.OS === 'web' ? 2 : 10,
  },
  typeToggle: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    marginTop: Platform.OS === 'web' ? 0 : 5,
  },
  typeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'web' ? 6 : 8,
    borderRadius: 16,
  },
  typeButtonActive: {
    backgroundColor: '#194b59',
  },
  typeLabel: {
    color: '#cfd6db',
    marginLeft: 8,
    fontSize: 14,
  },
  typeLabelActive: {
    color: '#fff',
    fontWeight: '600',
  },
  
  categoriesWrap: {
    paddingVertical: 0,
  },
  categoriesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: Platform.OS === 'web' ? 4 : 5,
    paddingBottom: 0,
  },
  catButton: {
    width: Platform.OS === 'web' ? 67 : 70,
    height: Platform.OS === 'web' ? 53 : 55,
    backgroundColor: '#e9eef1',
    margin: Platform.OS === 'web' ? 3 : 3,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  catButtonActive: {
    backgroundColor: '#87b6b1ff',  // darker highlight, still light enough for text/icons
  },
  customIcon: {
    width: 37,
    height: 37,
    tintColor: '#2b3440',
  },
  catIconWrap: {
    width: 36,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  catIconWrapActive: {
    backgroundColor: 'transparent',
  },
  catLabel: {
    color: '#2b3440',
    fontSize: Platform.OS === 'web' ? 12 : 13,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: -2,
  },
  catLabelActive: {
    color: '#1a3841ff',
    fontWeight: '600',
    fontSize: Platform.OS === 'web' ? 10 : 11,
    textAlign: 'center',
    marginTop: 2,
  },
  resetButton: {
    backgroundColor: '#f8f9fa',
  },
  resetLabel: {
    color: '#e74c3c',
    fontSize: Platform.OS === 'web' ? 12 : 13,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: -2,
  },
});
