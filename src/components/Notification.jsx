import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { s } from '../styles/st-notification';

export function Notification() {
  let flag = false;
  const n = useNavigation();

  const goGoogleMap = () => {
    flag = true;
    n.replace('Map', flag);
  };
  function goAppleMap() {
    flag = false;
    n.replace('Map', flag);
  }

  return (
    <View style={s.banner}>
      <Text style={[s.h, s.title]}>MapaAPI</Text>
      <Text style={s.body}>Tus coordenadas son: {'\n'}
        <Text style={s.h}>◉</Text> Latitude: 19.6283670, {'\n'}
        <Text style={s.h}>◉</Text> Longitude: -99.0745796, {'\n'}
      </Text>

      <TouchableOpacity onPress={goAppleMap} style={s.btnOpenMap}>
        <Text style={{ fontWeight: 500, fontSize: 16 }}>Abrir en Apple Maps</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goGoogleMap} style={[s.btnOpenMap, s.btnOpenGoogleMaps]}>
        <Text style={{ fontWeight: 500, fontSize: 16, color: '#fff' }}>Abrir en Google Maps</Text>
      </TouchableOpacity>
    </View>
  );
}