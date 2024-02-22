import {useContext} from "react";
import {Context} from "../hoc/COntextProvider";

const useAppContext = ()=> useContext(Context)


export {
    useAppContext
}