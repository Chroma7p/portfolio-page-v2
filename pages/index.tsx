import { useRouter } from "next/router";
import { Base } from "../components/base";
import { Block1 } from "../components/block1";
import { Block2 } from "../components/block2";
import { Block3 } from "../components/block3";
import { LinkBtn } from "../components/link-button";

const homeurl = process.env.PUBLIC_URL;

const Home = () => {
  const router = useRouter();
  return (
    <Base title="Top">
      <>
        <Block1 title="自己紹介">
          <>
            <div className="mx-3">
              <div className="text-3xl">くろま</div>
              <p>
                普段はPythonを使って競技プログラミングコンテストに参加したり、CTFに参加したり、DiscordBot等の個人開発をしています。
              </p>
            </div>
            <Block2 title="所属">
              <>
                東京電機大学 工学部 情報通信工学科2年
                <br />
                角川ドワンゴ学園 N Code Labo 講師
              </>
            </Block2>
            <Block2 title="スキル">
              <>
                <Block3 title="Python">
                  <p>
                    研究・趣味で3年程度
                    <br />
                    Numpy、Pandas、OpenCV等の有名なライブラリ、機械学習ライブラリ(TensorFlow、scikit-learn)を扱った経験があります。
                  </p>
                </Block3>
                <Block3 title="Unity(C#)">講師として1年程度</Block3>
                <Block3 title="C">基本的な事項を学んだ程度</Block3>
                <Block3 title="C++">
                  <>
                    競技プログラミングでの使用経験あり
                    <br />
                    基本的な事項を学んだ程度
                  </>
                </Block3>
                <Block3 title="HTML/CSS/JavaScript">
                  現在勉強中 このページはReactを用いて作成しています。
                </Block3>
              </>
            </Block2>
          </>
        </Block1>
        <Block1 title="活動">
          <>
            <Block3 title="AtCoder">
              <>
                競技プログラミングコンテスト
                <br />
                始めてから2年と少し、コンテスト参加89回(2022/05/30現在)
                <br />
                Rating:1048(Highest:1140)
                <br />
                <LinkBtn link="https://atcoder.jp/users/Chroma7p">
                  AtCoder プロフィール
                </LinkBtn>
              </>
            </Block3>
            <Block3 title="paiza">
              <>
                プログラミングスキルチェックサイト
                <br />
                Ｓランク
                <br />
                paizaレーティング:1859±124
              </>
            </Block3>
            <Block3 title="CTF">
              <>
                セキュリティコンテスト
                <br />
                時々大学の人とチームで参加しています。
                <br />
                個人的にはCryptoが得意です。
                <br />
                参加の記録は以下のQiitaを参照してください。
                <br />
              </>
            </Block3>
            <Block3 title="Qiita">
              <>
                ブログ
                <br />
                PythonでAtCoderに参加するためのコツを書いたり、CTF参加の記録を書いたりしています。
                <br />
                <LinkBtn link="https://qiita.com/Chroma7p">
                  Qiita プロフィール
                </LinkBtn>
              </>
            </Block3>
            <Block3 title="ハッカソン">
              <>
                高校の同級生と&quot;ご注文は豆腐職人ですか?&quot;というチームでハッカソンに参加しています。
                <br />
                <LinkBtn link="https://hacku.yahoo.co.jp/hacku2020online1/">
                  Open Hack U 2020 Online Vol.1
                </LinkBtn>
                Happy Hacking賞
                <br />
                <LinkBtn link="https://special.discoveryjapan.jp/campaign/hackathon2021/">
                  Discovery Hackathon 2021
                </LinkBtn>
                最優秀賞
                <br />
                また、個人でもたまに小さいハッカソンに参加しています。
                <br />
                制作物については<a onClick={() => router.push("/work")}>Work</a>
                へ
              </>
            </Block3>
            <Block3 title="個人開発">
              <>
                主にPythonを用いて、個人的な計算用のアプリケーションやスクレイピング、Bot制作等をしています。
                <br />
                制作物については{" "}
                <a onClick={() => router.push("/work")}>Work</a>へ
              </>
            </Block3>
          </>
        </Block1>
      </>
    </Base>
  );
};
export default Home;
