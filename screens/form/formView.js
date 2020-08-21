import React from 'react';
import {View, Text, Dimensions, Button, CheckBox, Platform} from 'react-native';
import {Input} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';

const constHeight = Dimensions.get('window').height;

const FormView = (props) => {
  const {
    onInputChange,
    mobile,
    customerName,
    modelPurchase,
    pincode,
    state,
    dateofInvoice,
    batteryNo,
    chassisNo,
    modalColor,
    FinanceBajaj,
    checked,
    onSubmit,
  } = props;
  return (
    <View style={styles.container}>
      <Text />
      {/**** Customer Name *****/}
      <View>
        <Text style={styles.title}>Customer Name</Text>
        <Input
          placeholder="Customer Name"
          inputContainerStyle={styles.inputStyle}
          onChangeText={(e) => onInputChange('customerName', e)}
          underlineColorAndroid="transparent"
          keyboardType="default"
        />
      </View>

      {/**** Customer Mobile *****/}
      <View>
        <Text style={styles.title}>Customer Mobile</Text>
        <Input
          placeholder="Customer Mobile"
          inputContainerStyle={styles.inputStyle}
          onChangeText={(e) => onInputChange('mobile', e)}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          maxLength={10}
        />
      </View>

      {/**** Customer Name *****/}
      <View>
        <Text style={styles.title}>Model Purchase</Text>
        <Input
          placeholder="Model Purchase"
          inputContainerStyle={styles.inputStyle}
          onChangeText={(e) => onInputChange('modelPurchase', e)}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          maxLength={4}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        {/**** Customer Pinceode *****/}
        <View style={{width: '48%'}}>
          <Text style={styles.title}>Pincode</Text>
          <Input
            placeholder="Pincode"
            inputContainerStyle={styles.inputStyle}
            onChangeText={(e) => onInputChange('pincode', e)}
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            maxLength={6}
          />
        </View>

        {/**** Customer State *****/}
        <View style={{width: '48%'}}>
          <Text style={styles.title}>State</Text>
          <Input
            placeholder="State"
            inputContainerStyle={styles.inputStyle}
            onChangeText={(e) => onInputChange('state', e)}
            underlineColorAndroid="transparent"
            keyboardType="default"
          />
        </View>
      </View>

      {/**** Date of Invoice *****/}
      <View>
        <Text style={styles.title}>Date of Invoice</Text>
        <Input
          placeholder="Date of Invoice"
          inputContainerStyle={styles.inputStyle}
          onChangeText={(e) => onInputChange('dateofInvoice', e)}
          underlineColorAndroid="transparent"
          keyboardType="default"
        />
      </View>

      {/**** Battery No. *****/}
      <View>
        <Text style={styles.title}>Battery No.</Text>
        <Input
          placeholder="Battery No."
          inputContainerStyle={styles.inputStyle}
          onChangeText={(e) => onInputChange('batteryNo', e)}
          underlineColorAndroid="transparent"
          keyboardType="default"
        />
      </View>

      <View
        style={{
          // The solution: Apply zIndex to any device except Android
          ...(Platform.OS !== 'android' && {
            zIndex: 10,
          }),
        }}>
        <Text style={styles.title}>Model</Text>
        <DropDownPicker
          items={[
            {
              label: 'Blue',
              value: 'blue',
            },
            {
              label: 'Black',
              value: 'black',
            },
            {
              label: 'White',
              value: 'white',
            },
            {
              label: 'Gray',
              value: 'gray',
            },
          ]}
          defaultValue={modalColor}
          zIndex={5000}
          placeholder={'Select Model'}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={(item) => onInputChange('modalColor', item.value)}
        />
      </View>

      {/**** Battery No. *****/}
      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <View style={{width: '58%'}}>
          <Text style={styles.title}>Finance Through Bajaj</Text>
        </View>
        <View
          style={{
            width: '40%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CheckBox
            title="Yes"
            value={checked}
            onValueChange={() => onInputChange('checked', !checked)}
          />
          <Text>Yes</Text>
          <CheckBox
            title="No"
            value={!checked}
            onValueChange={() => onInputChange('checked', !checked)}
          />
          <Text>No</Text>
        </View>
      </View>

      <Button title="Submit" onPress={() => onSubmit()} style={{zIndex: 1}} />
    </View>
  );
};

export default FormView;
