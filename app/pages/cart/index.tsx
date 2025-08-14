import { useNavigate } from "react-router";
import EmptyScreen from "~/components/empty-screen/empty-screen";
import Card from "~/components/ui/card";
import * as C from "./styles";
import type { Route } from "./+types";
import Button from "~/components/ui/button";
import TrashIcon from "@/assets/svg/trash-con.svg";

export default function CartPage() {
  const navigate = useNavigate();
  const items = [1, 2];

  if (items.length === 0)
    return (
      <EmptyScreen
        buttonText="Voltar para a loja"
        onButtonClick={() => navigate("/")}
      />
    );

  return (
    <Card padding={24}>
      <C.Table>
        <C.TableHeader>
          <tr>
            <th>Produto</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </C.TableHeader>
        <C.TableBody>
          {items.map((item) => (
            <tr key={item}>
              <td>Produto 1</td>
              <td>1</td>
              <td>R$ 10,00</td>
              <td>
                <button>
                  <img src={TrashIcon} alt="trash" width={24} height={24} />
                </button>
              </td>
            </tr>
          ))}
        </C.TableBody>
      </C.Table>
    </Card>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Carrinho de compras" },
    { name: "description", content: "Carrinho de compras" },
  ];
}
