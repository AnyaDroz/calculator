import { ACTIONS } from "./App";

type Props = {
  operation: string;
  dispatch: any;
};

const OperationButton = ({ operation, dispatch }: Props) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
};

export default OperationButton;
