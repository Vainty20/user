import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BookingItem ({ item }){
  const formatDate = (timestamp) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDate = new Date(timestamp).toLocaleString("en-US", options);
    return formattedDate;
  };

  return (
    <View style={styles.bookingItem}>
      <View style={styles.bookingHeader}>
        <Text style={styles.timestampText}>{formatDate(item.timestamp)}</Text>
        <Text style={styles.ridePrice}>{item.ridePrice}</Text>
      </View>

      <View style={styles.bookingInfo}>
        <View>
          <Text style={styles.locationLabel}>🔵 Pickup Location:</Text>
          <Text style={styles.locationText}>{item.pickupLocation}</Text>
        </View>
        <View>
          <Text style={styles.locationLabel}>📍Dropoff Location:</Text>
          <Text style={styles.locationText}>{item.dropoffLocation}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookingItem: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
  },
  bookingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  timestampText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ridePrice: {
    fontSize: 16,
  },
  bookingInfo: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  locationLabel: {
    marginTop: 12,
    marginBottom: 6,
    fontSize: 16,
  },
  locationText: {
    fontSize: 14,
    width: "80%",
  },
});

