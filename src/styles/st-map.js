import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
    // borderRadius: 10,
  },
  btnBackHome: {
    height: 48,
    width: '40%',
    position: 'absolute',
    top: 30,
    left: 10,
    gap: 6,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: {
      height: 6,
      width: 0
    }
  },
});