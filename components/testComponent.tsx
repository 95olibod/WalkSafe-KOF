// // inside components/list.tsx
// import * as React from "react";
// import { Text, View, StyleSheet, Animated, Dimensions } from "react-native";
// import { Avatar, Surface } from "react-native-paper";

// const { height } = Dimensions.get("screen");

// interface Data {
//     name: string;
//     email: string;
//     job_title: string;
//     key: string;
//     avatar: string;
//   }
  
//   export default function List({ data }: { data: Data[] }) {
//     return (
//       <View style={styles.container}>
//         <Animated.FlatList
//           data={data}
//           keyExtractor={(item) => item.key}
//           renderItem={({ item, index }) => {
  
//             return (
//               <Animated.View>
//                 <Surface style={styles.surface}>
//                   <View style={{ flex: 0.3, justifyContent: "center" }}>
//                     <Avatar.Image size={42} source={{ uri: item.avatar }} />
//                   </View>
//                   <View
//                     style={{
//                       flex: 0.7,
//                       flexDirection: "column",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Text style={{ fontSize: 22, fontWeight: "bold" }}>
//                       {item.name}
//                     </Text>
//                     <Text style={{ fontSize: 14 }}>{item.job_title}</Text>
//                   </View>
//                 </Surface>
//               </Animated.View>
//             );
//           }}
//         />
//       </View>
//     );
//   }
  
  
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: "center",
//     },
//     surface: {
//       height: height * 0.1,
//       marginTop: 15,
//       padding: 8,
//       marginHorizontal: 10,
//       borderRadius: 8,
//       flexDirection: "row",
//     },
//   });