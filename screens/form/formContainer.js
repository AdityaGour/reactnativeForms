import React, {Component} from 'react';
import FormView from './formView';
import ValidationComponent from 'react-native-form-validator';

export default class FormContainer extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      customerName: String,
      mobile: Number,
      modelPurchase: String,
      pincode: String,
      state: String,
      dateofInvoice: String,
      batteryNo: String,
      chassisNo: String,
      modalColor: '',
      FinanceBajaj: String,
      checked: false,
    };
  }

  onInputChange = (item, value) => {
    this.setState({[item]: value});
  };

  onSubmit = () => {
    // alert('checking...')
    this.validate({
      customerName: {required: true},
      modelPurchase: {required: true},
      pincode: {required: true},
      state: {required: true},
      dateofInvoice: {required: true},
      batteryNo: {required: true},
      chassisNo: {required: true},
      modalColor: {required: true},
      mobile: {numbers: true, required: true, minlength: 10},
    });
    if (this.getErrorMessages()) {
      const errorArray = this.getErrorMessages().split('.');
      alert(JSON.stringify(errorArray[0].toString()));
    } else {
      alert('successfully login');
    }
  };

  render() {
    return (
      <FormView
        onInputChange={this.onInputChange}
        customerName={this.state.customerName}
        mobile={this.state.mobile}
        modelPurchase={this.state.modalColor}
        pincode={this.state.pincode}
        state={this.state.state}
        dateofInvoice={this.state.dateofInvoice}
        batteryNo={this.state.batteryNo}
        chassisNo={this.state.chassisNo}
        modalColor={this.state.modalColor}
        FinanceBajaj={this.state.FinanceBajaj}
        checked={this.state.checked}
        onSubmit={this.onSubmit}
      />
    );
  }
}
