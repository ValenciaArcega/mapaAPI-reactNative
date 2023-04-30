import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 44,
    fontSize: 23,
    fontWeight: 700,
    alignSelf: 'center',
  },
  btnShowCoor: {
    height: 48,
    width: 216,
    marginTop: 12,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  btnShowCoorGradient: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnShowCoorText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 600
  }
});