import * as SMS from "expo-sms";

// Function which handle SMS functionality
export async function SendSms(
    favoritNumbers: string[],
    deviceName: string | undefined,
    deviceModel: string | undefined,
    locationLongitude: number,
    locationLatitude: number,
    personalMessage: string | undefined,
    battery: number,
    includeLocation: boolean,
    includeBattery: boolean
) {
    const isAvailable: boolean = await SMS.isAvailableAsync();
    if (isAvailable) {
        includeBattery ? battery : (battery = 0);
        includeLocation ? locationLongitude : (locationLongitude = 0);

        const message = messageOutput(
            deviceName,
            deviceModel,
            personalMessage,
            locationLongitude,
            locationLatitude,
            battery
        );
        const { result } = await SMS.sendSMSAsync(favoritNumbers, message);
        return result;
    } else {

        // Alert if user not allow app access SMS
        return alert("Du måste tillåta appen använda sig av SMS");
    }
}

// Message to be sent to favourite contacts
const messageOutput = (
    deviceName: string | undefined,
    deviceModel: string | undefined,
    personalMessage: string | undefined,
    locationLongitude: number,
    locationLatitude: number,
    battery: number
) => {
    const warningIntro = "NÖDANROP!\nSkickat via Walk Safe" + "\n\n";
    const warningInfo = `Detta är ett nödsms som skickas till dig av anledning till att någon på enheten  ${deviceName} INTE har avbrutit sin säker hemgång timer via Walk Safe. Denna person kan vara i fara!\n\nPersonligt meddelande:\n`;
    const warningMessage = warningIntro + warningInfo;

    const userMessage = ` - ${personalMessage}\n\n`;

    const deviceUnit = `Modell - ${deviceModel}\nEnhet - ${deviceName}:\n`;

    const batteryLevel = battery !== 0 ? ` - Batteri: ${battery}%\n` : "";

    const location =
        locationLongitude !== 0
            ? ` - Platsinformation:\n     Longitude: ${locationLongitude}\n     Latitude: ${locationLatitude}`
            : " - Platsinformation: Okänd";

    const deviceInfo = batteryLevel + location;

    const completeMessage =
        warningMessage + userMessage + deviceUnit + deviceInfo;

    return completeMessage;
};
