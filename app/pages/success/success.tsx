import Card from "~/components/ui/card";
import * as C from "./styles";
import Button from "~/components/ui/button";
import type { Route } from "../cart/+types";
import SuccessIcon from "@/assets/svg/success-screen.svg";
import { useNavigate } from "react-router";
import { useCartContext } from "~/context/CartContext";
import { useEffect } from "react";

export default function SuccessPage() {
  const navigate = useNavigate();
  const { clearCart } = useCartContext();
  useEffect(() => {
    clearCart();
  }, []);
  return (
    <Card>
      <C.Content>
        <h3>Compra realizada com sucesso!</h3>

        <div>
          <img src={SuccessIcon} alt="Success" />
        </div>

        <Button maxWidth={173} onClick={() => navigate("/")}>
          <span>VOLTAR</span>
        </Button>
      </C.Content>
    </Card>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pedido realizado com sucesso" },
    { name: "description", content: "Pedido realizado com sucesso" },
  ];
}
