import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as SMS from "expo-sms";
import { RootStackParamList } from "../navigators/RootStackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Hem">;

export async function SendSms(
    favoritNumbers: string[],
    deviceName: string,
    deviceModel: string
) {
    const isAvailable: boolean = await SMS.isAvailableAsync();
    if (isAvailable) {
        const message = messageoutput(deviceName, deviceModel);
        const { result } = await SMS.sendSMSAsync(favoritNumbers, message);

        return result;
    } else {
        // misfortune... there's no SMS available on this device
        return "unavailable";
    }
}

// Message to sent to recipientList (should be const)

const messageoutput = (deviceName: string, deviceModel: string) => {
    const warningMessage = "NÖDANROP! skickat via Walk Safe" + "\n\n";

    const userMessage = "(Här finns text från användare)" + "\n\n";

    const deviceUnit = "Enhet - " + deviceModel + ", - " + deviceName + " :\n";
    const battery = " - Batteri: 56%\n";
    const location = " - PlatsInfo: Kullegatan 6 51533 Viskafors\n";
    const active = " - Senast aktiv: 30/09-21 18:42\n";

    const deviceInfo = battery + location + active;

    const completeMessage =
        warningMessage + userMessage + deviceUnit + deviceInfo;

    return completeMessage;
};
