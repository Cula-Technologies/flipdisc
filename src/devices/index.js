import USBDevice from "./usb.js";
import NetworkDevice from "./network.js";
import NullDevice from "./null.js";

function deviceForInput(input) {
  if (input.match(/tty|cu/)) {
    return USBDevice;
  } else if(input === 'null') {
    return NullDevice;
  } else {
    return NetworkDevice;
  }
}

export {
  USBDevice,
  NullDevice,
  NetworkDevice,
  deviceForInput
}