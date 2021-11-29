import * as C from "./style";
import InstagramPost from "../../atoms/InstagramPost";
import instagramPostFarmaciaColniza from "../../../svgs/instagramPostFarmaciaColniza.svg";
import instagramPostTopFitnesColniza from "../../../svgs/instagramPostTopFitnesColniza.svg";

export default function InstagramPostsBottom() {
  return (
    <C.Container>
      <div id="content">
        <InstagramPost
          src={instagramPostFarmaciaColniza}
          alt="Postagem do instagram do perfil Farmacia Colniza"
          width="22.5rem"
          marginTop="0"
        />
        <InstagramPost
          src={instagramPostTopFitnesColniza}
          alt="Postagem do instagram do perfil Topfitnes Colniza"
          width="22.5rem"
          marginTop="0"
        />
      </div>
    </C.Container>
  );
}
