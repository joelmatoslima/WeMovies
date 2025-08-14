import MinusIcon from "@/assets/svg/minus-icon.svg";
import PlusIcon from "@/assets/svg/plus-icon.svg";
import * as C from "./styles";

interface Props {
  quantity: number;
  onIncrement: VoidFunction;
  onDecrement: VoidFunction;
}

export default function CartCounter({
  quantity,
  onIncrement,
  onDecrement,
}: Props) {
  return (
    <C.Container>
      <button onClick={onDecrement}>
        <img src={MinusIcon} alt="minus" width={16} height={16} />
      </button>

      <div className="counter-area">
        <span>{quantity}</span>
      </div>

      <button onClick={onIncrement}>
        <img src={PlusIcon} alt="plus" width={16} height={16} />
      </button>
    </C.Container>
  );
}
