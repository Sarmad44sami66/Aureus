import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors'
export const styles = StyleSheet.create({
  safeStyle: {
    flex: 1,
  },
  mainContainer:{
    width:'100%',
    height:'100%',
    marginTop:20
  },
  buttonStyleComponent: {
    marginTop: 0,
    marginBottom: 40,
    width: '80%',
    alignSelf: 'center'
  },
  mainItemContainer:{
    flexDirection:'row',
    borderTopWidth:1,
    borderTopColor:'#EFEFEF',
    padding:17,
    justifyContent:'space-between',
    alignItems:'center'
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
    color:colors.darkGrey,
    marginTop:-10
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
  }
});
