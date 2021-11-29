import * as C from "./style";
import backgroundNotebook from "../../../img/backgroundNotebook.png";
import BlogAreaContent from "../../molecules/BlogAreaContent";

export default function BlogArea() {
  return (
    <C.Container backgroundImg={backgroundNotebook}>
      <div id="content">
        <BlogAreaContent />
      </div>
    </C.Container>
  );
}
