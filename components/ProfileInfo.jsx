// components/ProfileInfo.jsx
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProfileInfo() {
  const [firstName, setFirstName] = useState('Owner');
  const [lastName, setLastName] = useState('User');
  const [email, setEmail] = useState('cameraexpert15@gmail.com');
  const [bio, setBio] = useState('');

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Profile Information</Text>
      <Text style={styles.subtitle}>
        Manage your personal information and customize your profile to help
        others get to know you better.
      </Text>

      {/* Profile Picture Section */}
      <View style={styles.highlightBox}>
        <Text style={styles.sectionTitle}>Profile Picture</Text>
        <View style={styles.profilePicContainer}>
          <Image
            source={require('../assets/images/stressed1.png')} // placeholder
            style={styles.profilePic}
          />
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.chooseButton}>
          <Ionicons name="cloud-upload" size={18} color="#2b3440" />
          <Text style={styles.chooseButtonText}>Choose Photo</Text>
        </TouchableOpacity>
        <Text style={styles.helperText}>
          JPG, GIF or PNG. Max 2MB. Recommended: Square image, at least 200×200px
        </Text>
      </View>

      {/* Basic Info Section */}
      <View style={styles.highlightBox}>
        <Text style={styles.sectionTitle}>Basic Information</Text>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 8 }]}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="First Name"
            placeholderTextColor="#888"
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Last Name"
            placeholderTextColor="#888"
          />
        </View>
        <TextInput
          style={[styles.input, { marginTop: 10 }]}
          value={email}
          onChangeText={setEmail}
          placeholder="Email Address"
          placeholderTextColor="#888"
        />
      </View>

      {/* About You Section */}
      <View style={styles.highlightBox}>
        <Text style={styles.sectionTitle}>About You</Text>
        <Text style={styles.helperText}>
          Share a bit about yourself. This helps others get to know you better.
        </Text>
        <TextInput
          style={styles.bioInput}
          value={bio}
          onChangeText={setBio}
          placeholder="Tell others about yourself, your interests, profession, or anything you'd like to share..."
          placeholderTextColor="#888"
          multiline
        />
        <Text style={styles.charCount}>{bio.length}/1000</Text>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 22,
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
    backgroundColor: 'rgba(255,255,255,0.05)', // soft highlight
    borderColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  profilePicContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#444',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 130,
    backgroundColor: '#4a90e2',
    borderRadius: 12,
    padding: 6,
  },
  chooseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  chooseButtonText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
    color: '#2b3440',
  },
  helperText: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 6,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#000',
  },
  bioInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#000',
    height: 120,
    marginTop: 10,
    textAlignVertical: 'top',
  },
  charCount: {
    textAlign: 'right',
    color: '#aaa',
    fontSize: 12,
    marginTop: 4,
  },
  saveButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 10,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
