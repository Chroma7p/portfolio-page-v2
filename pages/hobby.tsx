import { Base } from "../components/base";
import { Block3 } from "../components/block3";
import { Block1 } from "../components/block1";

const Hobby = () => {
  return (
    <Base title="趣味">
      <Block1 title="音楽ゲーム">
        <>
          技術的なこと以外では、アーケードの音楽ゲームが趣味です。色々なゲームを転々としながらプレイしています。
          ここではよくプレイするものを挙げていますが、ゲームセンターで今動いているのは大体プレイしたことあります。
          時々レアな音楽ゲームをプレイしに行ったりもします。(Pump It Upやシンクロニカ、Musecaなど……)
          <Block3 title="beatmania IIDX">RESIDENT SP六段</Block3>
          <Block3 title="Dance Dance Revolution">SP七段/DP三段</Block3>
          <Block3 title="jubeat">Festo jubility 5500</Block3>
          <Block3 title="SOUND VOLTEX">剛力羅 VOLFORCE 15.9</Block3>
          <Block3 title="NOSTALGIA">ベーシック3級 Grd.5700</Block3>
          <Block3 title="CHUNITHM">MAX 16.42(虹)</Block3>
          <Block3 title="オンゲキ">奏伝(15770) MAX 15.80(虹)</Block3>
          <Block3 title="maimai">UNIVERSE+ 12000ちょい(銀)</Block3>
        </>
      </Block1>
    </Base>
  );
};

export default Hobby;
