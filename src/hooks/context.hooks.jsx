import { createContext, useContext, useReducer } from "react";
import reducer from "../store/reducer";
import initial from "../store/initial";

const StateContext = createContext(null);
const AgentContext = createContext(null);

export const StepProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        reducer,
        initial,
    );
    return (
        <StateContext.Provider value={state}>
            <AgentContext.Provider value={dispatch}>
                {children}
            </AgentContext.Provider>
        </StateContext.Provider>
    );
}

export const useStateContext = () => {
    return useContext(StateContext);
}

export const useAgentContext = () => {
    return useContext(AgentContext);
}
