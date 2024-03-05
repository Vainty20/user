import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import getUserBookings from "../hooks/getUserBookings";
import Loading from "../components/Loading";
import BookingItem from "../components/BookItem";

export default function BookHistoryScreen() {
  const { userBookings, loading } = getUserBookings();

  if (loading) return <Loading/>;
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bookingContainer}>
        {userBookings.length > 0 ? (
          <FlatList
            data={userBookings}
            keyExtractor={(item, index) => item.bookingId || index.toString()}
            renderItem={({item}) => <BookingItem item={item} />}
          />
        ) : (
          <Text style={styles.noBookingText}>
            {userBookings.length === 0 && "You haven't booked a ride yet."}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  bookingContainer: {
    flex: 1,
  },
  noBookingText: {
    textAlign: "center",
    marginTop: 10,
  },
});
