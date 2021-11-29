import * as C from "./style";
import InstagramPost from "../../atoms/InstagramPost";
import instagramPostTintasColniza from "../../../svgs/instagramPostTintasColniza.svg";
import instagramPostTamoyoColniza from "../../../svgs/instagramPostTamoyoColniza.svg";
import instagramPostRuralColniza from "../../../svgs/instagramPostRuralColniza.svg";

export default function InstagramPostsTop() {
  return (
    <C.Container>
      <div id="content">
        <InstagramPost
          src={instagramPostTamoyoColniza}
          alt="Postagem do instagram do perfil Tintas Colniza"
          width="18.4375rem"
          marginTop="2rem"
        />
        <InstagramPost
          src={instagramPostTintasColniza}
          alt="Postagem do instagram do perfil Tintas Colniza"
          width="22.5rem"
          marginTop="0"
        />
        <InstagramPost
          src={instagramPostRuralColniza}
          alt="Postagem do instagram do perfil Tintas Colniza"
          width="18.4375rem"
          marginTop="2rem"
        />
      </div>
    </C.Container>
  );
}
