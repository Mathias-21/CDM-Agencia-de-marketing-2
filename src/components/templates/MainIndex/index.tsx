import * as C from "./style";
import KnowBackgroundImg from "../../organisms/KnowBackgroundImg";
import SocialNetworks from "../../organisms/SocialNetworks";
import KnowOurServices from "../../organisms/KnowOurServices";
import AboutCompany from "../../organisms/AboutCompany";
import BlogArea from "../../organisms/BlogArea";
import FooterIndex from "../../organisms/FooterIndex";
import Header from "../../organisms/Header";

export default function MainIndex() {
  return (
    <C.Container>
      <Header />
      <KnowBackgroundImg />
      <SocialNetworks />
      <KnowOurServices />
      <AboutCompany />
      <BlogArea />
      <FooterIndex />
    </C.Container>
  );
}
