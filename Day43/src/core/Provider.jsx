import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import PropTypes from "prop-types";

export const ProviderContext = createContext();

export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ProviderContext.Provider value={{ state, dispatch }}>
            {children}
        </ProviderContext.Provider>
    );
}

Provider.propTypes = {
    children: PropTypes.node,
};
