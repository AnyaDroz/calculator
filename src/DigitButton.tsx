import {ACTIONS} from "./App"
type Props = {
    digit: string,
    dispatch: any
}

const DigitButton = ({digit, dispatch}: Props) => {
    return (
        <button onClick={()=> dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}>{digit}</button>
    )
}

export default DigitButton