import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FloatingCard({
  title = 'Vehicle Name',
  owner = 'Owner Name',
  color = 'Red',
  gearbox = '4-speed',
  fuel = 'Unleaded',
  category = 'Underbones',
  price = 0,
  rating = 0.0,
  image = null,
  onPress = () => {},
}) {
  const [liked, setLiked] = useState(false);
  const priceLabel = `₱${price} /hours`;

  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        {/* Heart Button (top-left overlay) */}
        <TouchableOpacity
          style={styles.heartButton}
          onPress={() => setLiked(!liked)}
          activeOpacity={0.7}
        >
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={22}
            color={liked ? "red" : "#ccc"}
          />
        </TouchableOpacity>

        {/* Left: image / placeholder */}
        <View style={styles.left}>
          {image ? (
            <Image source={image} style={styles.image} resizeMode="contain" />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Ionicons name="bicycle" size={56} color="#9ca3af" />
            </View>
          )}
        </View>

        {/* Middle: details */}
        <View style={styles.middle}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>

          {/* Owner with user icon */}
          <View style={styles.ownerWrap}>
            <Ionicons name="person-circle" size={16} color="#d1d5db" />
            <Text style={styles.owner}>{owner}</Text>
          </View>

          <View style={styles.featuresWrap}>
            <View style={styles.feature}>
              <Ionicons name="color-palette" size={18} color="#9ca3af" />
              <Text style={styles.featureText}>{color}</Text>
            </View>

            <View style={styles.feature}>
              <Ionicons name="cog" size={18} color="#9ca3af" />
              <Text style={styles.featureText}>{gearbox}</Text>
            </View>

            <View style={styles.feature}>
              <Ionicons name="speedometer" size={18} color="#9ca3af" />
              <Text style={styles.featureText}>{fuel}</Text>
            </View>

            <View style={styles.feature}>
              <Ionicons name="grid" size={18} color="#9ca3af" />
              <Text style={styles.featureText}>{category}</Text>
            </View>
          </View>
        </View>

        {/* Right: rating + price + button */}
        <View style={styles.right}>
          <View style={styles.ratingWrap}>
            <Ionicons name="star" size={16} color="#fbbf24" />
            <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
          </View>

          <Text style={styles.price}>{priceLabel}</Text>

          <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={onPress}>
            <Text style={styles.buttonText}>View Deal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1e293b',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
      },
      android: {
        elevation: 10,
      },
    }),
    alignItems: 'center',
    position: 'relative',
  },

  /* ❤️ Heart button positioned top-left */
  heartButton: {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
    padding: 6,
  },

  left: {
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 10,
  },
  imagePlaceholder: {
    width: 100,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#334155',
    alignItems: 'center',
    justifyContent: 'center',
  },

  middle: {
    flex: 1,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 6,
  },
  ownerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    gap: 6,
  },
  owner: {
    fontSize: 14,
    color: '#d1d5db',
  },

  featuresWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 12,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 14,
    marginBottom: 6,
    minWidth: 80,
  },
  featureText: {
    marginLeft: 6,
    fontSize: 13,
    color: '#e5e7eb',
    fontWeight: '600',
  },

  right: {
    width: 130,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  ratingWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fbbf24',
    marginLeft: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: '900',
    color: '#4ade80',
    marginVertical: 8,
  },

  button: {
    backgroundColor: '#535862',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    minWidth: 110,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 14,
  },
});
