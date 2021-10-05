import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as SMS from "expo-sms";
import { useContext } from "react";
import { DeviceContext } from "../context/deviceContext";

import { RootStackParamList } from "../navigators/RootStackNavigator";

//type Props = NativeStackScreenProps<RootStackParamList, "Hem">;

export async function SendSms(
  favoritNumbers: string[],
  deviceName: string | undefined,
  deviceModel: string | undefined,
  battery: number,
  locationLongitude: number,
  locationLatitude: number,
) {
  const isAvailable: boolean = await SMS.isAvailableAsync();
  if (isAvailable) {
    const message = messageoutput(deviceName, deviceModel, battery, locationLongitude, locationLatitude)
    const { result } = await SMS.sendSMSAsync(favoritNumbers, message);

    return result;
  } else {
    // misfortune... there's no SMS available on this device
    return "unavailable";
  }
}

// Message to sent to recipientList (should be const)

const messageoutput = (deviceName: string | undefined, deviceModel: string | undefined, battery: number, locationLongitude: number, locationLatitude: number) => { 

  const warningMessage = "NÖDANROP! skickat via Walk Safe" + "\n\n";

  const userMessage = "(Här finns text från användare)" + "\n\n";

  const deviceUnit = `Enhet - ${deviceModel}, - ${deviceName}:\n`;
  const batteryLevel = ` - Batteri: ${battery}%\n`;
  const location = ` - PlatsInfo:\n     Longitude: ${locationLongitude}\n     Latitude: ${locationLatitude}`;

//   const active = " - Senast aktiv: 30/09-21 18:42\n";

  const deviceInfo = batteryLevel + location;

  const completeMessage =
    warningMessage + userMessage + deviceUnit + deviceInfo;

  return completeMessage;
};
