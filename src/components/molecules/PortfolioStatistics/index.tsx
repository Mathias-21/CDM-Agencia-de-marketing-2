import * as C from "./style";
import StatisticsInfo from "../../atoms/StatisticsInfo";

export default function PortfolioStatistics() {
  return (
    <C.Container>
      <StatisticsInfo
        topText="Mais de"
        numberStatistics="100"
        bottomText="Clientes"
        fontSizeText="1.40625rem"
        fontSizeNumber="5.6rem"
        height="5.3rem"
      />
      <StatisticsInfo
        topText="Mais de"
        numberStatistics="1.000"
        bottomText="posts nas redes sociais por mês."
        fontSizeText="1.40625rem"
        fontSizeNumber="5.6rem"
        height="5.3rem"
      />
      <StatisticsInfo
        topText="Mais de"
        numberStatistics="30"
        bottomText="colaboradores fazendo acontecer."
        fontSizeText="1.40625rem"
        fontSizeNumber="5.6rem"
        height="5.3rem"
      />
    </C.Container>
  );
}
