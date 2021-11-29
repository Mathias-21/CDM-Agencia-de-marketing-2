import * as C from "./style";
import InstagramPosts from "../../molecules/InstagramPostsTop";
import AreaInstagramProfilePhone from "../../molecules/AreaInstagramProfilePhone";
import InstagramPostsBottom from "../../molecules/InstagramPostsBottom";

export default function AreaInstagramPosts() {
  return (
    <C.Container>
      <InstagramPosts />
      <AreaInstagramProfilePhone />
      <InstagramPostsBottom />
    </C.Container>
  );
}
