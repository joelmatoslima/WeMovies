if (!Number.prototype.toCurrency) {
  Number.prototype.toCurrency = function (this: number): string {
    if (this === undefined) {
      return "";
    }
    if (typeof this.valueOf() !== "number") {
      return this.valueOf().toString();
    }
    const formatted = this.valueOf().toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });

    return formatted;
  };
}

interface Number {
  toCurrency(): string;
}

declare module "global" {
  interface Number {
    toCurrency(): string;
  }
}
