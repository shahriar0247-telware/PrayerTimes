import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [fajr_time, set_fajr_time] = React.useState("");
  const [sunrise_time, set_sunrise_time] = React.useState("");
  const [dhuhr_time, set_dhuhr_time] = React.useState("");
  const [asr_time, set_asr_time] = React.useState("");
  const [maghrib_time, set_maghrib_time] = React.useState("");
  const [isha_time, set_isha_time] = React.useState("");
  const [midnight, set_midnight] = React.useState("");
  const [firstthird_time, set_firstthird_time] = React.useState("");
  const [lastthird, set_lastthird] = React.useState("");
  async function get_times() {
    // const response = await fetch("http://api.aladhan.com/v1/calendarByCity/2023/9?city=Toronto&country=CA&method=2");
    const response = await fetch(
      "http://api.aladhan.com/v1/timingsByCity?city=Toronto&country=CA&method=2"
    );

    const data = await response.json();
    set_fajr_time(data.data.timings['Fajr']);
    set_sunrise_time(data.data.timings['Sunrise']);
    set_dhuhr_time(data.data.timings['Dhuhr']);
    set_asr_time(data.data.timings['Asr']);
    set_maghrib_time(data.data.timings['Maghrib']);
    set_isha_time(data.data.timings['Isha']);
    set_midnight(data.data.timings['Midnight']);
    set_firstthird_time(data.data.timings['Firstthird']);
    set_lastthird(data.data.timings['Lastthird']);
  }
  // "Fajr": "05:36",
  // "Sunrise": "06:57",
  // "Dhuhr": "13:13",
  // "Asr": "16:43",
  // "Sunset": "19:28",
  // "Maghrib": "19:28",
  // "Isha": "20:48",
  // "Midnight": "01:12",
  // "Firstthird": "23:18",
  // "Lastthird": "03:07"
  React.useEffect(() => {
    get_times();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.heading}>Prayer Times</Text>
        </View>
        <View style={styles.prayer_times_container}>
          <View style={styles.detail_line_1}>
            <Text style={styles.date}>15th September</Text>
          </View>
          <View style={styles.detail_line_2}>
            <Text style={styles.location}>Toronto</Text>
          </View>
          <View style={styles.prayer_times}>
            <View style={styles.one_prayer}>
              <Text style={styles.prayer_name}>Fajr</Text>
              <Text style={styles.prayer_time}>{fajr_time}</Text>
            </View>
            <View style={styles.one_prayer}>
              <Text style={styles.prayer_name}>Sunrise</Text>
              <Text style={styles.prayer_time}>{sunrise_time}</Text>
            </View>
            <View style={styles.one_prayer}>
              <Text style={styles.prayer_name}>Dhuhr</Text>
              <Text style={styles.prayer_time}>{dhuhr_time}</Text>
            </View>
            <View style={styles.one_prayer}>
              <Text style={styles.prayer_name}>Asr</Text>
              <Text style={styles.prayer_time}>{asr_time}</Text>
            </View>
            <View style={styles.one_prayer}>
              <Text style={styles.prayer_name}>Maghrib</Text>
              <Text style={styles.prayer_time}>{maghrib_time}</Text>
            </View>
            <View style={styles.one_prayer}>
              <Text style={styles.prayer_name}>Isha</Text>
              <Text style={styles.prayer_time}>{isha_time}</Text>
            </View>
            <View style={styles.one_prayer}>
              <Text style={styles.prayer_name}>Midnight</Text>
              <Text style={styles.prayer_time}>{midnight}</Text>
            </View>
            <View style={styles.one_prayer}>
              <Text style={styles.prayer_name}>First Third</Text>
              <Text style={styles.prayer_time}>{firstthird_time}</Text>
            </View>
            <View style={styles.one_prayer}>
              <Text style={styles.prayer_name}>Last Third</Text>
              <Text style={styles.prayer_time}>{lastthird}</Text>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50,
    alignItems: "center",
    width: "100%",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
  },
  prayer_times_container: {
    width: 300,
    height: 500,
    marginTop: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
  },
  detail_line_1: { marginTop: 0 },
  detail_line_2: { marginTop: 5 },
  date: {
    textAlign: "center",
    fontSize: 17,
  },
  location: {
    fontWeight: "bold",
    textAlign: "center",
  },
  prayer_times: {
    marginTop: 10,
  },
  one_prayer: {
    flexDirection: "row",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1.5,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },
  prayer_name: {
    flex: 1,
    alignItems: "flex-start",
  },
  prayer_time: {
    flex: 1,
    alignItems: "flex-end",
    textAlign: "right",
  },
});
