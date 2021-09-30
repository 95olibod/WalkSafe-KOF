import * as SMS from "expo-sms";

interface Props {
  onSetPage?: (page: string) => void;
}

export async function CheckSmsAvailability(
  favoritNumbers: string[],
  deviceName: string,
  deviceModel: string
) {
  const isAvailable: boolean = await SMS.isAvailableAsync();
  if (isAvailable) {
    // do your SMS stuff here

    SendSms(favoritNumbers, deviceName, deviceModel);
    return "Message sent";
  } else {
    // misfortune... there's no SMS available on this device
    return "Unable to send message";
  }
}

// List containing Recipients of alarm message

// Message to sent to recipientList (should be chonst)

const messageoutput = (deviceName: string, deviceModel: string) => {
  const varningMessage = "NÖDANROP! skickat via Walk Safe" + "\n\n";

  const userMessage = "(Här finns text från användare)" + "\n\n";

  const deviceUnit = "Enhet - " + deviceModel + ", - " + deviceName + " :\n";
  const battery = " - Batteri: 56%\n";
  const location = " - PlatsInfo: Kullegatan 6 51533 Viskafors\n";
  const active = " - Senast aktiv: 30/09-21 18:42\n";

  const deviceInfo = battery + location + active;

  const completeMessage =
    varningMessage + 
    userMessage + 
    deviceUnit + 
    deviceInfo;
  return completeMessage;
};

export async function SendSms(
  favoritNumbers: string[],
  deviceName: string,
  deviceModel: string
) {
  let messageToSend: string;
  let message: string = messageoutput(deviceName, deviceModel);
  const { result } = await SMS.sendSMSAsync(
    favoritNumbers,
    (messageToSend = message),
  );
  if (result === "sent") {
    alert("HE IS COMING FOR YOU");
  }
  if (result === "cancelled") {
    () => {
      alert("du avbröt sms, och kommer nu inte att få hjälp");
    };
  }
}
