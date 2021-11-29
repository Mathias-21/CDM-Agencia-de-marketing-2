import * as C from "./style";
import InstagramStorie from "../../atoms/InstagramStorie";
import storieFarmaciaColniza from "../../../svgs/storieFarmaciaColniza.svg";
import storieTamoyoColniza from "../../../svgs/storieTamoyoColniza.svg";
import storieTintasColniza from "../../../svgs/storieTintasColniza.svg";

export default function AreaInstagramStories() {
  return (
    <C.Container>
      <InstagramStorie
        src={storieFarmaciaColniza}
        alt="Storie do perfil farmacia Colniza"
      />
      <InstagramStorie
        src={storieTamoyoColniza}
        alt="Storie do perfil tamoyo Colniza"
      />
      <InstagramStorie
        src={storieTintasColniza}
        alt="Storie do perfil tintas Colniza"
      />
    </C.Container>
  );
}
