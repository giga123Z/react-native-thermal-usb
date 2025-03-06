declare module "react-native-thermal-usb" {
  export class USBPrinter {
    static init(): PromiseLike<void>;
    static getDeviceList(): PromiseLike<any>;
    static connectPrinter(
      vendorId: string, productId: string
    ): PromiseLike<any>;
    static closeConn(): PromiseLike<void>;
    static printRawData(
      data: string
    ): PromiseLike<any>;
  }

}
