import ImageSocialNetwork from "../../atoms/imageSocialNetwork";
import * as C from "./style";

export default function SocialNetworks() {
  return (
    <C.Container>
      <ImageSocialNetwork
        href="https://resultadosdigitais.com.br/"
        target="_blank"
        rel="noreferrer"
        src="https://www.zioncontent.com.br/wp-content/uploads/2018/02/Resultados-Digitais-ZionContent.jpg"
        alt="ResultadosDigitais Logo"
      />
      <ImageSocialNetwork
        href="https://rockcontent.com/"
        target="_blank"
        rel="noreferrer"
        src="https://www.zioncontent.com.br/wp-content/uploads/2018/02/Rockcontent-ZionContent.jpg"
        alt="Rockcontent Logo"
      />
      <ImageSocialNetwork
        href="https://resultadosdigitais.com.br/"
        target="_blank"
        rel="noreferrer"
        src="https://www.zioncontent.com.br/wp-content/uploads/2018/04/EVOLLUA-Zion-Content.jpg"
        alt="EVOLLUA Logo"
      />
      <ImageSocialNetwork
        href="https://www.facebook.com/zioncontent/"
        target="_blank"
        rel="noreferrer"
        src="https://www.zioncontent.com.br/wp-content/uploads/2018/02/Facebook-ZionContent.jpg"
        alt="Facebook Logo"
      />
      <ImageSocialNetwork
        href="https://www.instagram.com/zioncontent/"
        target="_blank"
        rel="noreferrer"
        src="https://www.zioncontent.com.br/wp-content/uploads/2018/02/Instagram-ZionContent.jpg"
        alt="Instagram Logo"
      />
    </C.Container>
  );
}
