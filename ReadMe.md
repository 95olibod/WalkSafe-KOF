# Walk Safe KOFA 

Länk till repo:
[Github](https://github.com/95olibod/WalkSafe-KOF)

Walk Safe är en applikation som möjliggör för användarens telefon att automatiskt skicka ett nödmeddelande vid en oförutsedd händelse under färd. Användaren ställer in och aktiverar en timer. Om denna timer inte stoppas innan den nått noll så skickas ett SMS med utvald information till en lista av förutbestämda mottagare. Informationen innehåller bland annat latitud, longitud, batteritid, telefon model, enhetsnamn samt ett av användaren komponerat meddelande. 

Appens användningsområde var från början tänkt att vara bredare med bland annat användning för folk som gått bort sig under svampplockning, på fjällvandring mm. Beslutet togs dock att nischa appen och den inriktar sig nu istället mot personer som går hem i en otrygg miljö. 

## Struktur
Filerna är placerade i olika mappar för att ge en tydligare förståelse och översikt av vad som finns var och vad som gör vad. 
Funktionalitet är uppdelade i små komponenter som har sina egna ansvarsområden. 

## Installation
Klona repot och kör `npm install` för att installera alla nödvändiga moduler för appen.

#### Starta app
Starta appen genom att köra `npm start`
OBS! För att notiser ska fungera i EXPO, måste du logga in på ditt EXPO-konto. Görs genom kommandot `expo login`.

## Använda komponenter

### React-native komponenter:

[Text](https://docs.expo.dev/versions/v42.0.0/react-native/text/)
[View](https://docs.expo.dev/versions/v42.0.0/react-native/view/)
[ScrollView](https://docs.expo.dev/versions/v42.0.0/react-native/scrollview/)
[SafeAreaView](https://docs.expo.dev/versions/v42.0.0/react-native/safeareaview/)
[StyleSheet](https://docs.expo.dev/versions/v42.0.0/react-native/stylesheet/)
[Switch](https://docs.expo.dev/versions/v42.0.0/react-native/switch/)
[TextInput](https://docs.expo.dev/versions/v42.0.0/react-native/textinput/)
[TouchableHighlight](https://docs.expo.dev/versions/v42.0.0/react-native/touchablehighlight/)
[FlatList](https://docs.expo.dev/versions/v42.0.0/react-native/flatlist/)
[Alert](https://docs.expo.dev/versions/v42.0.0/react-native/alert/)
[Image](https://docs.expo.dev/versions/v42.0.0/react-native/image/)


### Expo komponenter: 

[StatusBar](https://docs.expo.dev/versions/v42.0.0/react-native/statusbar/)
[Contacts](https://docs.expo.dev/versions/v42.0.0/sdk/contacts/)
[Location](https://docs.expo.dev/versions/v42.0.0/sdk/location/)
[Battery](https://docs.expo.dev/versions/v42.0.0/sdk/battery/)
[Device](https://docs.expo.dev/versions/v42.0.0/sdk/device/)
[SMS](https://docs.expo.dev/versions/v42.0.0/sdk/sms/)
[Notifications](https://docs.expo.dev/versions/v42.0.0/sdk/notifications/)
[Constans](https://docs.expo.dev/versions/v42.0.0/sdk/constants/)

### Externa moduler:
[react-native-stopwatch-timer](https://snack.expo.dev/@aboutreact/stopwatch-and-timer?session_id=snack-session-y4eB29bZK)
[Formik](https://formik.org/docs/overview)

Annat externt:
[Yup](https://www.npmjs.com/package/yup)

## Krav

Krav för godkänt:

1. Projektet använder minst 6 stycken RN-komponenter och minst 6 stycken Expo komponenter. [JA]
2. De utvalda komponenterna ska antecknas i er README tillsammans med en lista över genomförda krav. [JA]
3. Git & GitHub har använts [JA]
4. Projektmappen innehåller en README.md fil - (läs ovan för mer info) [JA]
5. Uppgiften lämnas in i tid! [JA]
6. Muntlig presentation är genomförd [JA]

Krav för väl godkänt:

1. Alla punkter för godkänt är uppfyllda [JA]
2. React Navigation används för att skapa en bättre upplevelse i appen. [JA]
3. Ytterligare en valfri extern modul används i projektet. [JA]
4. Prototyper för applikation tas fram innan den implementeras. Bilder på prototypen skall finnas i projektet vid inlämning. [JA]
