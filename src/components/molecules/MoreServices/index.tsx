import * as C from "./style";
import ServicesCard from "../../atoms/ServicesCard";
import tomadaDeBriefing from "../../../svgs/tomadaDeBriefing.svg";
import planejamentoDasAcoes from "../../../svgs/planejamentoDasAcoes.svg";
import criaçãoDeConteudo from "../../../svgs/criaçãoDeConteudo.svg";
import criaçãoDaLinhaDeDesign from "../../../svgs/criaçãoDaLinhaDeDesign.svg";
import aprovacaoPreviaDasArtesPelosClientes from "../../../svgs/aprovacaoPreviaDasArtesPelosClientes.svg";
import publicacaoNasRedesSociais from "../../../svgs/publicacaoNasRedesSociais.svg";
import criacaoDeAnunciosPatrocinados from "../../../svgs/criacaoDeAnunciosPatrocinados.svg";
import relatorioDeResultados from "../../../svgs/relatorioDeResultados.svg";

export default function MoreServices() {
  return (
    <C.Container>
      <ServicesCard
        src={tomadaDeBriefing}
        alt="Tomada de briefing"
        title="Tomada de briefing:"
      />
      <ServicesCard
        src={planejamentoDasAcoes}
        alt="Planejamento das ações"
        title="Planejamento das ações:"
      />
      <ServicesCard
        src={criaçãoDeConteudo}
        alt="Criação de Conteúdo"
        title="Criação de Conteúdo:"
      />
      <ServicesCard
        src={criaçãoDaLinhaDeDesign}
        alt="Criação da linha de design"
        title="Criação da linha de design:"
      />
      <ServicesCard
        src={aprovacaoPreviaDasArtesPelosClientes}
        alt="Aprovação prévia das artes pelos clientes"
        title="Aprovação prévia das artes pelos clientes:"
      />
      <ServicesCard
        src={publicacaoNasRedesSociais}
        alt="Publicação nas redes sociais"
        title="Publicação nas redes sociais:"
      />
      <ServicesCard
        src={criacaoDeAnunciosPatrocinados}
        alt="Criação de anúncios patrocinados"
        title="Criação de anúncios patrocinados:"
      />
      <ServicesCard
        src={relatorioDeResultados}
        alt="Relatório de resultados"
        title="Relatório de resultados:"
      />
    </C.Container>
  );
}
