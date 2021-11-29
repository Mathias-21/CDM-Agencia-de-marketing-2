import * as C from "./style";
import MoreServices from "../../molecules/MoreServices";
import MoreServicesPhrase from "../../molecules/MoreServicesPhrase";
import KnowOurServicesPhrase from "../../molecules/KnowOurServicesPhrase";

export default function KnowOurServices() {
  return (
    <C.Container>
      <section id="content">
        <MoreServicesPhrase />
        <MoreServices />
        <KnowOurServicesPhrase />
      </section>
    </C.Container>
  );
}
