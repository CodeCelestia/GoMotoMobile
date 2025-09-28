import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DeleteAccount() {
  const handleDelete = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => alert("Account deleted!") }
      ]
    );
  };

  return (
    <View style={styles.highlightBox}>
      <Text style={styles.title}>Delete Account</Text>
      <Text style={styles.subtitle}>
        Once your account is deleted, all of its resources and data will be permanently deleted.{"\n"}
        Please download any data or information that you wish to retain.
      </Text>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>DELETE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  highlightBox: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#aaa', marginBottom: 16 },
  deleteButton: {
    backgroundColor: '#d9534f',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteButtonText: { color: '#fff', fontWeight: 'bold' },
});
