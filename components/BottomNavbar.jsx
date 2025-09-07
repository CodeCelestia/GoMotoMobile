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
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const NAV_HEIGHT = 72;
const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function BottomNavbar() {
  const router = useRouter();
  const pathname = usePathname() || '/';
  const bounce = useRef(new Animated.Value(1)).current;
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const animationSequence = Animated.sequence([
      Animated.timing(bounce, { toValue: 1.12, duration: 140, useNativeDriver: true }),
      Animated.timing(bounce, { toValue: 1.0, duration: 160, useNativeDriver: true }),
    ]);
    animationSequence.start();
    return () => {
      animationSequence.stop();
    };
  }, [pathname, bounce]);

  const tabs = [
    { route: '/', label: 'Home', icon: 'home' },
    { route: '/current', label: 'Current', icon: 'location' },
    { route: '/settings', label: 'Settings', icon: 'settings' },
  ];

  const handlePress = (route) => router.push(route);

  return (
    <View style={[styles.navWrapper, { paddingBottom: insets.bottom + 16 }]}>
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
                {/* WRAPPER so animated icon and label are grouped without raw text leakage */}
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Animated.View
                    style={[
                      styles.iconWrap,
                      active && styles.iconWrapActive,
                      active && { transform: [{ translateY: -14 }, { scale: bounce }] },
                    ]}
                  >
                    <Ionicons name={iconName} size={22} color={active ? '#ffffff' : '#c9d1d9'} />
                  </Animated.View>

                  <Text style={[styles.label, { color: active ? '#ffffff' : '#c9d1d9' }]}>
                    {String(t.label)}
                  </Text>
                </View>
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
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1,
    paddingBottom: Platform.select({ ios: 0, android: 16 }),
  },
  container: {
    width: SCREEN_WIDTH - 32,
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
  tab: { alignItems: 'center', justifyContent: 'center', width: 88, },
  iconWrap: { width: 52, height: 52, borderRadius: 26, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', },
  iconWrapActive: { backgroundColor: '#949494ff', shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.28, shadowRadius: 12, elevation: 10, },
  label: { fontSize: 12, fontWeight: '500' },
});
