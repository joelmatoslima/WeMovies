import * as C from "./styles";
import LoadingIcon from "@/assets/svg/loading-icon.svg";

export default function Loading() {
  return (
    <C.Loading>
      <img src={LoadingIcon} alt="Loading" />
    </C.Loading>
  );
}
