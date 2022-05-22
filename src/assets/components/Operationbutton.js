import { ACTIONS } from '../js/App'

export default function OperationButton({ dispatch, operation }){
    return (
        <button 
            onClick={ () => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } }) }
        >
            {operation}
        </button>
    )
}