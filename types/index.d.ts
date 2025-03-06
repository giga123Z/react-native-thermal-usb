declare module "react-native-thermal-usb" {
  export class USBPrinter {
    static init():
      | void
      | PromiseLike<void>
      | PromiseLike<string>;
    static getDeviceList(): void | string | PromiseLike<void> | PromiseLike<any>;
    static connectPrinter(
      vendorId: string, productId: string
    ): PromiseLike<any>;
    static printerLineSpace(
      space: number
    ): void | string | PromiseLike<void> | PromiseLike<string>;
    static closeConn(): PromiseLike<void>;
    static printRawData(
      data: string
    ): PromiseLike<any>;
  }

}
