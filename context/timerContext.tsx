// import { createContext, FC, useState } from "react";


// interface ContextValue {
//     stopTimer: () => void;
//     startTimer: (nr:number) => void;
// }

//     const [timerOn, setTimerOn] = useState(true);
    
//     export const TimerContext = createContext<ContextValue>({
//         stopTimer: () => 0,
//         startTimer: () => 0,
//     })
    
//     const stopTimer = () => {
//         setTimerOn(!timerOn);
// };
//     const startTimer = () => {
//         setTimerOn(timerOn);
// };

// const TimerProvider: FC = (props) => {

    
//     return (
//         <TimerContext.Provider
//         value= {{
//             stopTimer,
//             startTimer
//         }}
//         >
//             {props.children}
//     </TimerContext.Provider>
// )
// }
// export default TimerProvider