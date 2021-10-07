import * as SMS from "expo-sms";

export async function SendSms(
    favoritNumbers: string[],
    deviceName: string | undefined,
    deviceModel: string | undefined,
    battery: number,
    locationLongitude: number,
    locationLatitude: number,
    userText: string | undefined
) {
    const isAvailable: boolean = await SMS.isAvailableAsync();
    if (isAvailable) {
        const message = messageoutput(
            deviceName,
            deviceModel,
            battery,
            locationLongitude,
            locationLatitude,
            userText
        );
        const { result } = await SMS.sendSMSAsync(favoritNumbers, message);

        return result;
    } else {
        // misfortune... there's no SMS available on this device
        return "unavailable";
    }
}

// Message to sent to recipientList (should be const)

const messageoutput = (
    deviceName: string | undefined,
    deviceModel: string | undefined,
    battery: number,
    locationLongitude: number,
    locationLatitude: number,
    userText: string | undefined
) => {
    const warningIntro = "NÖDANROP! skickat via Walk Safe" + "\n\n";
    const warningInfo = `Detta är ett nöd sms som skickas till dig av anledning till att någon på enheten  ${deviceName} INTE har avbrutit sin säker hemgång timer via Walk Safe. Denna person kan vara i fara!\n\n Personligt meddelande:\n`;
    const warningMessage = warningIntro + warningInfo;
    if (userText === undefined) {
        userText =
            "Hej, jag skickar detta till dig i fall att jag inte kommer hem säkert";
    }

    const userMessage = `${userText}\n\n`;

    const deviceUnit = `Enhet - ${deviceModel}, - ${deviceName}:\n`;
    const batteryLevel = ` - Batteri: ${battery}%\n`;
    const location = ` - PlatsInfo:\n     Longitude: ${locationLongitude}\n     Latitude: ${locationLatitude}`;

    //   const active = " - Senast aktiv: 30/09-21 18:42\n";

    const deviceInfo = batteryLevel + location;

    const completeMessage =
        warningMessage + userMessage + deviceUnit + deviceInfo;

    return completeMessage;
};
