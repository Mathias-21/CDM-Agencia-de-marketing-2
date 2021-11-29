import * as C from "./style";
import TextAreaKnowStartup from "../../molecules/TextAreaKnowStartup";
import NineDotsLine from "../../atoms/NineDotsLine";

export default function KnowStartup() {
  return (
    <C.Container>
      <div id="content">
        <TextAreaKnowStartup />
        <NineDotsLine />
      </div>
    </C.Container>
  );
}
