// app/report.jsx
import { useRouter } from "expo-router";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import BottomNavbar from "../components/BottomNavbar";
import HeaderCenter from "../components/HeaderCenter";

// ✅ The reusable report components
import KYCVerificationCard from "../components/KYCVerificationCard";
import RecentBookingsCard from "../components/RecentBookingsCard";
import StatsCards from "../components/StatsCards";
import WelcomeBackCard from "../components/WelcomeBackCard";

export default function Report() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header with logo */}
      <HeaderCenter bottomRadius={36} />

      <ScrollView contentContainerStyle={styles.container}>
        {/* Page Title */}
        <View style={styles.pageTitleWrap}>
          <Text style={styles.pageTitle}>Report</Text>
        </View>

        {/* Welcome Back */}
        <WelcomeBackCard totalBookings={0} />

        {/* KYC Verification */}
        <KYCVerificationCard onVerify={() => alert("Navigate to KYC")} />

        {/* Stats Cards */}
        <StatsCards
          completed={0}
          spent={0}
          cancelled={0}
          overcharges={0}
        />

        {/* Recent Bookings */}
        <RecentBookingsCard
          bookings={[]} // placeholder
          onViewAll={() => router.push("/allBookings")}
        />

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Bottom Navbar */}
      <BottomNavbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0f1720", // dark background
  },
  container: {
    padding: 16,
  },
  pageTitleWrap: {
    marginTop: 12,
    marginBottom: 16,
    alignItems: "center",
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
});
