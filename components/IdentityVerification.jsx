import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function IdentityVerification() {
  const [status] = useState('Pending');

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Identity Verification</Text>
      <Text style={styles.subtitle}>
        Secure your account by verifying your identity with official documents.
      </Text>

      {/* Verification Status */}
      <View style={styles.highlightBox}>
        <View style={styles.row}>
          <Ionicons name="shield-checkmark-outline" size={20} color="#f1c40f" />
          <Text style={styles.sectionTitle}>Verification Status</Text>
        </View>
        <View style={styles.statusBox}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>

      {/* Restrictions */}
      <View style={[styles.highlightBox, styles.warningBox]}>
        <Ionicons name="warning-outline" size={20} color="#d35400" />
        <Text style={styles.warningText}>
          You cannot make bookings or list vehicles until your identity verification is complete.
        </Text>
      </View>

      {/* Driver's License Upload */}
      <View style={styles.highlightBox}>
        <Text style={styles.sectionTitle}>Driver's License Verification</Text>
        <Text style={styles.helperText}>
          Upload clear, high-quality photos of both sides of your driver's license.
        </Text>

        {/* Photo Requirements */}
        <View style={styles.requirementsBox}>
          <Text style={styles.requirement}>✔ Clear, readable text</Text>
          <Text style={styles.requirement}>✔ No glare or shadows</Text>
          <Text style={styles.requirement}>✔ JPEG, PNG, or GIF — Max 2MB</Text>
        </View>

        {/* Upload Boxes */}
        <View style={styles.uploadRow}>
          <TouchableOpacity style={styles.uploadBox}>
            <Ionicons name="cloud-upload-outline" size={28} color="#aaa" />
            <Text style={styles.uploadText}>Front Side</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadBox}>
            <Ionicons name="cloud-upload-outline" size={28} color="#aaa" />
            <Text style={styles.uploadText}>Back Side</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit for Verification</Text>
      </TouchableOpacity>
      <Text style={styles.footerNote}>Secure upload • Data encrypted</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 16,
  },
  highlightBox: {
    backgroundColor: 'rgba(255,255,255,0.05)', // same as ProfileInfo
    borderColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 6,
  },
  statusBox: {
    backgroundColor: '#444d58',
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#f1c40f',
  },
  warningBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(211, 84, 0, 0.1)', // softer warning highlight
    borderColor: '#d35400',
  },
  warningText: {
    color: '#f39c12',
    fontSize: 13,
    marginLeft: 8,
    flex: 1,
  },
  helperText: {
    fontSize: 13,
    color: '#aaa',
    marginTop: 4,
    marginBottom: 12,
  },
  requirementsBox: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  requirement: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 4,
  },
  uploadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadBox: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 12,
    paddingVertical: 28,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  uploadText: {
    marginTop: 6,
    color: '#aaa',
    fontSize: 13,
  },
  submitButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 8,
  },
  submitText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  footerNote: {
    fontSize: 12,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 20,
  },
});
