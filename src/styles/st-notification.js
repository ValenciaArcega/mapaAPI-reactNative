import { StyleSheet } from 'react-native';
import { colors as c } from "./colors";

export const s = StyleSheet.create({
  h: {
    color: c.mainColor__shade,
  },
  banner: {
    width: '94%',
    padding: 14,
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
    top: 22,
    backgroundColor: c.ff,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: {
      height: 6,
      width: 0
    }
  },
  title: {
    fontSize: 17,
    fontWeight: 700
  },
  body: {
    marginTop: 4,
    fontSize: 15,
    lineHeight: 18
  },
  btnOpenMap: {
    height: 36,
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: c.bg
  },
  btnOpenGoogleMaps: {
    marginTop: 12,
    backgroundColor: c.mainColor__tint
  }
});