import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, TouchableOpacity } from 'react-native';
import { PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { s } from '../styles/st-map';

export function Map({ route }) {
  Icon.loadFont();
  const isGoogle = route.params;
  const n = useNavigation();
  // fn
  function goHome() { n.replace('Home'); };

  return (
    <View>
      <MapView
        style={s.map}
        provider={isGoogle ? PROVIDER_GOOGLE : null}
        showsUserLocation={true}
        followsUserLocation={true}
        showsScale={true} // apple maps
        showsMyLocationButton={true}
        mapType="standard"
        userInterfaceStyle="dark" // apple maps
        showsPointsOfInterest={true}
        initialRegion={{
          latitude: 19.6283670,
          longitude: -99.0745796,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
      <TouchableOpacity onPress={goHome} style={s.btnBackHome}>
        <Icon name="chevron-left" size={18} color="#000" />
        <Text style={{ fontSize: 18 }}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
}