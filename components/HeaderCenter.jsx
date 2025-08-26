import { Image, SafeAreaView, StyleSheet, View } from 'react-native';

/**
 * HeaderCenter
 * Props:
 *  - bottomRadius: number (radius for bottom-left & bottom-right corners)
 *  - style: additional style to apply to the header container
 */
export default function HeaderCenter({ bottomRadius = 36, style }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[
          styles.header,
          {
            borderBottomLeftRadius: bottomRadius,
            borderBottomRightRadius: bottomRadius,
          },
          style,
        ]}
      >
        <Image
          source={require('../assets/images/Gomoto_HeaderCroped.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Safe area ensures content sits below status bar on all devices
  safeArea: {
    width: '100%',
    backgroundColor: 'transparent', // let parent control page BG
  },

  // Header "hangs" from the top: full width and attached (no absolute positioning)
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,

    // Top corners square, only bottom corners are rounded via props
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,

    // Use the dark color from your photo
    backgroundColor: '#27313a',

    // Remove heavy shadows so it looks attached to top.
    // If you want a small separation/soft drop, set shadowOpacity and elevation to small values.
    shadowColor: 'transparent',
    elevation: 0,

    // clip children so the logo doesn't overflow rounded corners
    overflow: 'hidden',
  },

  // Logo sizing: keeps logo centered horizontally and scales with width
  logo: {
    width: '88%',
    maxWidth: 520,
    height: 60,
  },
});
