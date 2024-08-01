import { useContext } from "react";
import HeaderContext from "../context/header";

function useHeader(){
    return useContext(HeaderContext)
}

export default useHeader