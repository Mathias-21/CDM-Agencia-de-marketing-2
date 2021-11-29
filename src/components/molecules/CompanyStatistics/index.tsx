import * as C from "./style";
import StatisticsInfo from "../../atoms/StatisticsInfo";

export default function CompanyStatistics() {
  return (
    <C.Container>
      <StatisticsInfo
        topText="Mais de"
        numberStatistics="200"
        bottomText="Clientes"
        fontSizeText="1.4rem"
        fontSizeNumber="3.8rem"
        height="auto"
      />
      <StatisticsInfo
        topText="Mais de"
        numberStatistics="1.500"
        bottomText="posts nas redes sociais por mês."
        fontSizeText="1.4rem"
        fontSizeNumber="3.8rem"
        height="auto"
      />
      <StatisticsInfo
        topText="Mais de"
        numberStatistics="30"
        bottomText="pessoas fazendo acontecer."
        fontSizeText="1.4rem"
        fontSizeNumber="3.8rem"
        height="auto"
      />
      <StatisticsInfo
        topText="Mais de"
        numberStatistics="1 milhão"
        bottomText="reais investidos."
        fontSizeText="1.4rem"
        fontSizeNumber="3.8rem"
        height="auto"
      />
    </C.Container>
  );
}
