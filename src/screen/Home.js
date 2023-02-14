import { View } from 'native-base';
import { Text } from 'react-native';

export const Home = () => {
  var aa = 1;
  var ab = 1;
  return (
    <View flex={1} alignItems={'center'} justifyContent={'center'}>
      <Text style={{ backgroundColor: 'red', marginRight: 5, fontSize: 24 }}>
        Welcome Home
      </Text>
    </View>
  );
};
