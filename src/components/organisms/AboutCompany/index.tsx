import TitleAboutCompany from "../../atoms/titleAboutCompany";
import CompanyStatistics from "../../molecules/CompanyStatistics";
import * as C from "./style";

export default function AboutCompany() {
  return (
    <C.Container>
      <section id="content">
        <TitleAboutCompany />
        <CompanyStatistics />
      </section>
    </C.Container>
  );
}
