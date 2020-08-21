import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: width,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    color: '#d6405d',
    marginLeft: 12,
  },
  inputStyle: {
    backgroundColor: '#F4F4F4',
    borderBottomWidth: 0,
    paddingLeft: 3,
    marginTop: 10,
  },
});
export default styles;
