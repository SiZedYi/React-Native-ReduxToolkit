import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent:'flex-end', paddingBottom: 20}}>
        <Text style={styles.title}>A premium online store for sporter and their stylish choice</Text>
      </View>
      <View style={{flex: 3, alignItems: 'center',justifyContent:'center',
       borderRadius:50, backgroundColor:'#E941411A'}}>
        <Image style={styles.logo} source='https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lF5Gn8hEujcOtdsOXxMA7b5AMTsxXVS6iLGImXqx0jqYTUl3RifpEJ1AwcQGANUVu4aC6Eq8SXgPXNiKkErJ9ft6iTqrFLdWEGTtbG38azVAswCRRG7DJLvWIrFaO0A-PCbDsnqM0REdeSaFBsm9dZY1LMTMeuWSD5HJxarXinZ8iya4FAVrjd3QCft2Pd4SMsoesz1B8NnL7LGWP-z4TYJ14-xW7BEYEVpfJmGYJ2auuW7fodRnWGDaM-Ywrrl0lwDUHsJKgTuuteLQljeKew4vrPxn3QcL~J5s5AGypOZPnFjxcefDzz6A0Nb-sIT0V9NUuAizCfCbOJ8Cm4KIag__' />
      </View>
      <View style={{flex: 1}}>
        <Text style={{textAlign:'center', fontSize: 25, fontWeight:'bold', paddingHorizontal:80}}>POWER BIKE SHOP</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center',justifyContent:'center',}}>
        <TouchableOpacity style={{borderRadius: 100, backgroundColor:'#E94141', width: '60%', height:'50%',
           alignItems: 'center',justifyContent:'center',}}
          onPress={()=> {navigation.navigate('ListProduct')}}>
          <Text style={{color:'#fff'}}>Get Started</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
  title: {
    fontSize: 21,
    fontWeight: 400,
    lineHeight: 26,
    textAlign: 'center',

  },
  logo: {
    width: '80%',
    height: '70%',
  }
});
