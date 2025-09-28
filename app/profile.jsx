import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import DeleteAccount from '../components/DeleteAccount';
import HeaderCenter from '../components/HeaderCenter';
import IdentityVerification from '../components/IdentityVerification';
import ProfileInfo from '../components/ProfileInfo';
import UpdatePassword from '../components/UpdatePassword';

export default function ProfilePage() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <HeaderCenter bottomRadius={36} />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Profile Info Card */}
        <View style={styles.cardWrapper}>
          <ProfileInfo />
        </View>

        {/* Identity Verification Card */}
        <View style={styles.cardWrapper}>
          <IdentityVerification />
        </View>

        {/* Update Password Card */}
        <View style={styles.cardWrapper}>
          <UpdatePassword />
        </View>

        {/* Delete Account Card */}
        <View style={styles.cardWrapper}>
          <DeleteAccount />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e2630',
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  cardWrapper: {
    backgroundColor: '#2b3440',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
});
