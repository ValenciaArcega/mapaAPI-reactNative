import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Notification } from "../components/Notification";
import { useState } from "react";
import { s } from '../styles/st-home';

export function Home() {
  const [banner, setBanner] = useState(false);

  function showBanner() {
    setBanner(true);
    setTimeout(() => setBanner(false), 4000);
  }

  return (
    <SafeAreaView style={s.safeArea}>

      {banner ? <Notification /> : null}

      <Text style={s.title}>Welcome to MapaAPI</Text>

      <TouchableOpacity style={s.btnShowCoor} onPress={showBanner} >
        <LinearGradient
          colors={['#0ca678', '#099268']}
          start={{ x: 0, y: .5 }}
          end={{ x: 1, y: 2 }}
          style={s.btnShowCoorGradient}>
          <Text style={s.btnShowCoorText}>¿Donde estoy?</Text>
        </LinearGradient>
      </TouchableOpacity>

    </SafeAreaView>
  );
}