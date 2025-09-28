// components/ProfilePill.jsx
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfilePill({ username = 'Username', onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.profilePill}
      onPress={onPress}
    >
      <View style={styles.row}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={22} color="#194b59" />
        </View>
        <Text numberOfLines={1} style={styles.usernameText}>
          {String(username)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
});
