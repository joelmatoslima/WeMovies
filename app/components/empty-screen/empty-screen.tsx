import Card from "../ui/card";
import * as C from "./styles";
import EmptyScreenIcon from "@/assets/svg/realod-screen.svg";
import Button from "../ui/button";

type Props = {
  buttonText?: string;
  onButtonClick?: VoidFunction;
};

export default function EmptyScreen({
  buttonText = "Recarregar página",
  onButtonClick: onButtonClick,
}: Props) {
  return (
    <Card>
      <C.Content>
        <h3>Parece que não há nada por aqui :(</h3>

        <div>
          <img src={EmptyScreenIcon} alt="Empty Screen" />
        </div>

        <Button maxWidth={173} onClick={onButtonClick}>
          <span>{buttonText}</span>
        </Button>
      </C.Content>
    </Card>
  );
}
