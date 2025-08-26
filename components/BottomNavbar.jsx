import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const NAV_HEIGHT = 72;
const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function BottomNavbar() {
  const router = useRouter();
  const pathname = usePathname() || '/home';
  const bounce = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Create animation sequence and store the reference
    const animationSequence = Animated.sequence([
      Animated.timing(bounce, { 
        toValue: 1.12, 
        duration: 140, 
        useNativeDriver: true 
      }),
      Animated.timing(bounce, { 
        toValue: 1.0, 
        duration: 160, 
        useNativeDriver: true 
      }),
    ]);
    
    // Start the animation
    animationSequence.start();
    
    // Return cleanup function to stop animation when component unmounts
    // or when pathname changes (triggering a re-run of this effect)
    return () => {
      animationSequence.stop();
    };
  }, [pathname, bounce]);

  const tabs = [
    { route: '/home', label: 'Home', icon: 'home' },
    { route: '/current', label: 'Current', icon: 'location' },
    { route: '/settings', label: 'Settings', icon: 'settings' },
  ];

  const handlePress = (route) => router.push(route);

  return (
    <View style={styles.navWrapper}>
      <View style={styles.container}>
        <View style={styles.background} />

        <View style={styles.row}>
          {tabs.map((t) => {
            const active = pathname === t.route;
            const iconName = active ? t.icon : `${t.icon}-outline`;

            return (
              <TouchableOpacity
                key={t.route}
                activeOpacity={0.9}
                onPress={() => handlePress(t.route)}
                style={styles.tab}
              >
                <Animated.View
                  style={[
                    styles.iconWrap,
                    active && styles.iconWrapActive,
                    active && { transform: [{ translateY: -14 }, { scale: bounce }] },
                  ]}
                >
                  <Ionicons
                    name={iconName}
                    size={22}
                    color={active ? '#ffffff' : '#c9d1d9'}
                  />
                </Animated.View>

                <Text style={[styles.label, { color: active ? '#ffffff' : '#c9d1d9' }]}>
                  {t.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navWrapper: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 30 : 16,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1,
  },
  container: {
    width: SCREEN_WIDTH - 32, // 16px padding on each side
    height: NAV_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#2b3440',
    borderRadius: 36,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
  row: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-around',
    paddingBottom: 12,
    paddingHorizontal: 6,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 88,
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  iconWrapActive: {
    backgroundColor: '#949494ff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.28,
    shadowRadius: 12,
    elevation: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
  },
});
