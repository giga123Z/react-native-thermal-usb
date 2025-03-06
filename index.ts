import { NativeModules } from "react-native";


const RNUSBPrinter = NativeModules.RNUSBPrinter || {};


export interface IUSBPrinter {
  device_name: string;
  vendor_id: string;
  product_id: string;
}


export const USBPrinter = {
  init: (): Promise<void> =>
    new Promise((resolve, reject) =>
      RNUSBPrinter.init(
        () => resolve(),
        (error: Error) => reject(error)
      )
    ),

  getDeviceList: (): Promise<IUSBPrinter[]> =>
    new Promise((resolve, reject) =>
      RNUSBPrinter.getDeviceList(
        (printers: IUSBPrinter[]) => resolve(printers),
        (error: Error) => reject(error)
      )
    ),

  connectPrinter: (vendorId: string, productId: string): Promise<IUSBPrinter> =>
    new Promise((resolve, reject) =>
      RNUSBPrinter.connectPrinter(
        vendorId,
        productId,
        (printer: IUSBPrinter) => resolve(printer),
        (error: Error) => reject(error)
      )
    ),

  closeConn: (): Promise<void> =>
    new Promise((resolve) => {
      RNUSBPrinter.closeConn();
      resolve();
    }),

  printRawData: (data: string): Promise<any> =>
    new Promise((resolve) =>
      RNUSBPrinter.printRawData(data, (error: Error) =>
        resolve(error)
      )
    ),
};



