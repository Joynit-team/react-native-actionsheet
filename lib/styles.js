import { StyleSheet, Dimensions, StatusBar } from 'react-native'

export const hairlineWidth = StyleSheet.hairlineWidth

export default StyleSheet.create({
	overlay: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		opacity: 0.4,
		backgroundColor: '#000'
	}
})

export const sheetStyle = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'row'
	},
	bd: {
		flex: 1,
		alignSelf: 'flex-end',
		backgroundColor: 'transparent',
    margin: 16
	},
	title: {
		height: 28,
    padding: 6,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8
	},
	message: {
    height: 56,
    paddingBottom: 10,
		alignItems: 'center',
		justifyContent: 'center',
    backgroundColor: '#fff'
	},
	titleText: {
    fontFamily: "Ubuntu",
    fontSize: 14,
    textAlign: "center",
    color: "#989bab"
	},
  options: {
	  backgroundColor: '#ccc',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  }
})

export const btnStyle = StyleSheet.create({
	wrapper: {
		height: 56,
		marginTop: hairlineWidth,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	title: {
    fontFamily: "Ubuntu",
    fontSize: 17,
    lineHeight: 19.0,
    textAlign: "center"
	}
})





