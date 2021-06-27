import { StyleSheet,Dimensions } from 'react-native';
import colors from './../../../utils/colors';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  safeStyle:{ 
    flex: 1,
    alignItems:'center' 
  },
  logoStyle:{
    width: 180,
    height: 125,
    resizeMode: 'contain',
    marginTop:40,
    marginLeft:10
    // backgroundColor:'red'
  },
  loginTxtStyle:{
    fontSize:18,
    marginTop:60,
    textAlign:'center',
  },
  independentTxtStyle:{
    fontSize:22,
    fontWeight:'bold',
    marginTop:5
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    position:"absolute",
    bottom:-10,
    transform: [{ rotate: '90deg' }],
    right:50
},
arrowUp: {
    borderTopWidth: 0,
    borderRightWidth: 30,
    borderBottomWidth: 30,
    borderLeftWidth: 30,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: "white",
    borderLeftColor: 'transparent',
},
container: {
  flex: 1,
  alignItems: 'center',
  paddingTop:90,
},
bedtimeText: {
  color: '#ff9800',
  marginLeft: 3,
  fontSize: 16,
},
wakeText: {
  color: '#ffcf00',
  marginLeft: 3,
  fontSize: 16,
},
timeContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
},
time: {
  alignItems: 'center',
  flex: 1,
},
timeHeader: {
  flexDirection: 'row',
  alignItems: 'center',
},
timeValue: {
  color: 'white',
  fontSize: 35,
  fontWeight: '300',
},
sleepTimeContainer: {
  flex: 1,
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
},
Btn:{
  width:windowWidth/1.3,
  backgroundColor:"blue",
  justifyContent:"center",
  alignItems:"center",
  height:50,
  borderRadius:50,
  marginTop:50
},
BtnText:{
  fontSize:17,
  color:"white",
  fontWeight:"bold"
},
eyeImage:{
  width:102,
  height:102,
  resizeMode:"contain"
},
eyeView:{
  flex: 1,
  justifyContent: 'center',
  alignItems:"center",
  position:"absolute",
  top:0,
  bottom:0,
  left:0,
  right:0,
  marginBottom:110
},
eyeImageJoker:{
  width:80,
  height:80,
  resizeMode:"contain"
}
});
