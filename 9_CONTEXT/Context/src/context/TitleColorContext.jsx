import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

// 6 - Alterando State Complexo
export const titleColorReducer = (state, action) => {
// switch
switch (action.type) {
    case "RED":
        return {...state, color: "red"};
    case "BLUE":
        return {...state, color: "blue"}
    default:
        return state;
        
}
};

export const TitleColorContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(titleColorReducer, {color: "purple"});

    return (
        <TitleColorContext.Provider value={ {...state, dispatch} }>
            {children}
        </TitleColorContext.Provider>

    )

}