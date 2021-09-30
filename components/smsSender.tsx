import * as SMS from "expo-sms";

interface Props {
    onSetPage?: (page: string) => void;
}

export async function CheckSmsAvailability(favoritNumbers: string[]) {
    const isAvailable: boolean = await SMS.isAvailableAsync();
    if (isAvailable) {
        // do your SMS stuff here

        SendSms(favoritNumbers);
        return "Message sent";
    } else {
        // misfortune... there's no SMS available on this device
        return "Unable to send message";
    }
}

// List containing Recipients of alarm message

// Message to sent to recipientList (should be chonst)

export async function SendSms(favoritNumbers: string[]) {
    let messageToSend: string;
    const { result } = await SMS.sendSMSAsync(
        favoritNumbers,
        (messageToSend = "Testmeddelande från appen...")
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
