import Device from './device.js';

export default class NullDevice extends Device {
  constructor(path, addresses) {
    super(path, addresses);
    console.log('construct', {path, addresses});
  }

  open(callback) {
    this.isOpen = true;
    this.emit('open');
    callback();
  }

  write(data, callback) {
  }

  close() {
  }
}