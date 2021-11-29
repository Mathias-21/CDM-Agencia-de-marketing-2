import * as C from "./style";
import instagramProfileInPhone from "../../../svgs/instagramProfileInPhone.svg";

export default function ImageProfileInstagramPhone() {
  return (
    <C.Container>
      <img
        src={instagramProfileInPhone}
        alt="Foto de perfil do instagram no celular"
      />
    </C.Container>
  );
}
