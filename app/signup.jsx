// app/signup.jsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import HeaderCenter from '../components/HeaderCenter';

export default function SignUpPage() {
  const router = useRouter();
  const [role, setRole] = useState(null); // 'renter' | 'owner'
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleCreate = () => {
    // placeholder: validate & submit later
    console.log({ firstName, lastName, email, phone, role });
    router.push('/home');
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Logo header */}
      <HeaderCenter bottomRadius={36} />

      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.top}>
          <View style={styles.iconWrap}>
            <Ionicons name="person-circle-outline" size={46} color="#fff" />
          </View>
          <Text style={styles.title}>Join GoMOTO</Text>
          <Text style={styles.subtitle}>Create your account to start your journey</Text>
        </View>

        {/* Center card */}
        <View style={styles.card}>
          {/* Name row */}
          <View style={styles.row}>
            <View style={[styles.fieldWrapper, { marginRight: 8 }]}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                value={firstName}
                onChangeText={setFirstName}
                placeholder="Enter your first name"
                placeholderTextColor="#9aa3ad"
                style={styles.input}
                returnKeyType="next"
              />
            </View>

            <View style={[styles.fieldWrapper, { marginLeft: 8 }]}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                value={lastName}
                onChangeText={setLastName}
                placeholder="Enter your last name"
                placeholderTextColor="#9aa3ad"
                style={styles.input}
                returnKeyType="next"
              />
            </View>
          </View>

          {/* Email */}
          <View style={styles.fieldWrapper}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email address"
              placeholderTextColor="#9aa3ad"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Phone */}
          <View style={styles.fieldWrapper}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter your phone number"
              placeholderTextColor="#9aa3ad"
              style={styles.input}
              keyboardType="phone-pad"
            />
          </View>

          {/* Role selection */}
          <Text style={[styles.label, { marginTop: 8 }]}>I want to...</Text>
          <View style={styles.roleRow}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setRole('renter')}
              style={[styles.highlightBox, role === 'renter' && styles.activeBox]}
            >
              <Ionicons name="car-outline" size={22} color="#fff" />
              <Text style={styles.boxTitle}>Rent Vehicles</Text>
              <Text style={styles.boxSubtitle}>Find and book amazing rides</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setRole('owner')}
              style={[styles.highlightBox, role === 'owner' && styles.activeBox, { marginLeft: 12 }]}
            >
              <Ionicons name="business-outline" size={22} color="#fff" />
              <Text style={styles.boxTitle}>List My Vehicles</Text>
              <Text style={styles.boxSubtitle}>Share and earn from your car</Text>
            </TouchableOpacity>
          </View>

          {/* Passwords */}
          <View style={styles.row}>
            <View style={[styles.fieldWrapper, { marginRight: 8 }]}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Create a strong password"
                placeholderTextColor="#9aa3ad"
                style={styles.input}
                secureTextEntry
              />
            </View>

            <View style={[styles.fieldWrapper, { marginLeft: 8 }]}>
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                value={confirm}
                onChangeText={setConfirm}
                placeholder="Repeat your password"
                placeholderTextColor="#9aa3ad"
                style={styles.input}
                secureTextEntry
              />
            </View>
          </View>

          {/* Terms */}
          <View style={{ marginTop: 10 }}>
            <Text style={styles.terms}>
              By creating an account, you agree to our{' '}
              <Text style={styles.link}>Terms of Service</Text> and{' '}
              <Text style={styles.link}>Privacy Policy</Text>
            </Text>
          </View>

          {/* Create button */}
          <TouchableOpacity style={styles.submitButton} activeOpacity={0.9} onPress={handleCreate}>
            <Text style={styles.submitText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>

          {/* Sign in link */}
          <View style={styles.signinRow}>
            <Text style={styles.note}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/signin')}>
              <Text style={styles.linkBold}>Sign in here</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0f1720' },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: Platform.OS === 'ios' ? 36 : 18,
  },

  top: {
    alignItems: 'center',
    marginBottom: 12,
  },
  iconWrap: {
    width: 64,
    height: 64,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.04)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: { fontSize: 22, fontWeight: '800', color: '#fff' },
  subtitle: { color: '#cbd5e1', marginTop: 6, textAlign: 'center' },

  card: {
    width: '100%',
    maxWidth: 540,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderRadius: 14,
    padding: 18,
    shadowColor: '#0b1a2b',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.18,
    shadowRadius: 22,
    elevation: 8,
  },

  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  fieldWrapper: { flex: 1 },

  label: { color: '#cbd5e1', fontSize: 13, marginBottom: 6 },
  input: {
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#fff',
  },

  roleRow: { flexDirection: 'row', marginTop: 4, marginBottom: 10 },

  highlightBox: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
  },
  activeBox: {
    borderColor: '#4da6ff',
    shadowColor: '#4da6ff',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  boxTitle: { color: '#fff', fontWeight: '700', marginTop: 8 },
  boxSubtitle: { color: '#aab6bf', fontSize: 12, marginTop: 4, textAlign: 'center' },

  terms: { color: '#9aa3ad', fontSize: 12, lineHeight: 18 },
  link: { color: '#4da6ff' },

  submitButton: {
    marginTop: 14,
    backgroundColor: '#111827',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
  },
  submitText: { color: '#fff', fontWeight: '800' },

  signinRow: { marginTop: 14, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  note: { color: '#cbd5e1' },
  linkBold: { color: '#4da6ff', fontWeight: '700' },
});
