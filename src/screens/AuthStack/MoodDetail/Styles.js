import { StyleSheet,Dimensions } from 'react-native';
import colors from '../../../utils/colors';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  safeStyle: {
    flex: 1,
  },
  mainContainer:{
    width:'100%',
    height:'100%',
    padding:20
  },
  buttonStyleComponent: {
    marginTop: 0,
    marginBottom: 40,
    width: '80%',
    alignSelf: 'center'
  },
  mainItemContainer:{
    padding:10,
    paddingLeft:15,
    paddingRight:15,
    backgroundColor:colors.darkGrey,
    height:45,
    justifyContent:'center',
    borderRadius:12,
    marginRight:12
  },
  leftContainer:{
    flexDirection:'row',
    width:'80%',
    alignItems:'center'
  },
  imageForward:{
    width:6,
    height:15,
    resizeMode:'contain'
  },
  textStyle:{
    fontSize:13,
    color:colors.white,
  },
  imageLeftContainer:{
    alignItems:'center',
    justifyContent:'center',
    marginRight:17
  },
  imageLeftItem:{
    width:49,
    height:49,
    resizeMode:'contain'
  },
  dateStyle:{
    fontSize:13,
    color:'#949494',
    textAlign:'center',
    marginTop:-20
  },
  headingStyle:{
    fontSize:13,
    color:'#949494',
    marginBottom:10
  },
  notesContainer:{
    backgroundColor:colors.warmBackground,
    borderRadius:12,
    width:'100%',
    padding:20
  },
  container: {
    alignItems: 'center',
    // paddingTop:90,
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
    marginBottom:20
  },
  eyeImageJoker:{
    width:80,
    height:80,
    resizeMode:"contain"
  }
});
