import { useRouter } from "next/router";
import { Base } from "../components/base";
import { Block1 } from "../components/block1";
import { Block2 } from "../components/block2";
import { Block3 } from "../components/block3";
import { LinkBtn } from "../components/link-button";
import twilogo from "../pics/twitterlogo.png";
import githublogo from "../pics/github-mark.png";
import Image from "next/image";

const Home = () => {
  const myLoader = ({ src, width }: { src: string; width: Number }) => {
    return `https://grass-graph.appspot.com/images/${src}?w=${width}
    }`;
  };

  const router = useRouter();

  return (
    <Base title="Top">
      <>
        <Block1 title="自己紹介">
          <>
            <div className="mx-3">
              <div className="flex mb-3">
                <div>
                  <Image
                    alt="my icon"
                    width={400}
                    height={400}
                    src="https://avatars.githubusercontent.com/u/60846545?v=4"
                  />
                  <p className="text-xs text-center">アイコンらしいアイコンがない</p>

                </div>

                <div>

                  <div className="text-5xl my-3">くろま</div>


                  <div className="flex">
                    <div className="mx-2 my-4" >
                      <a href="https://twitter.com/Chroma7p">
                        <Image
                          alt="Twitter icon"
                          width={40}
                          height={40}
                          layout="fixed"
                          src={twilogo}
                          className=""
                        />
                      </a>
                    </div>
                    <div className="mx-2 my-4" >
                      <a href="hhttps://github.com/Chroma7p">
                        <Image
                          alt="GitHub icon"
                          width={40}
                          height={40}
                          layout="fixed"
                          src={githublogo}
                          className=""
                        />
                      </a>
                    </div>

                  </div>
                  <p>
                    普段はPythonを使って競技プログラミングコンテストに参加したり、CTFに参加したり、DiscordBot等の個人開発をしています。
                    最近Web系を触り始め、フロント、バックともに勉強中です。
                  </p>
                  <Block2 title="所属">
                    <ul>
                      <li>東京電機大学 工学部 情報通信工学科2年</li>
                      <li>角川ドワンゴ学園 N Code Labo 講師</li>
                    </ul>
                  </Block2>
                  <Block2 title="趣味">
                    <ul>
                      <li>音楽ゲーム(主にアーケードのもの)</li>
                      <li>競技プログラミング</li>
                      <li>CTF</li>
                    </ul>

                  </Block2>
                </div>
              </div>
            </div>


            <Block2 title="スキルセット(2023年1月現在)" >
              <>
                <Block3 title="Python">
                  <>
                    <p>研究や趣味で3年程度使用しています。</p>
                    <p>Numpy、Pandas、OpenCV等の有名なライブラリ、機械学習ライブラリ(TensorFlow、scikit-learn)を扱った経験があります。</p>
                    <p>また、スクレイピング等のデータ収集の自動化の経験があります。</p>
                  </>
                </Block3>
                <Block3 title="Unity(C#)">
                  講師として1年程度扱っています。
                </Block3>
                <Block3 title="C">基本的な事項を学んだ程度です。</Block3>
                <Block3 title="C++">
                  競技プログラミングでの使用経験がありますが、知識としては基本的な事項を学んだ程度です。
                </Block3>
                <Block3 title="HTML/CSS/JavaScript">
                  実務・趣味で３ヶ月程度使用しています。
                  このページはNext.js用いて作成しています。
                </Block3>
              </>
            </Block2>

            <Block2 title="GitHub">
              <div>
                <div className="flex">
                  <Image
                    alt="my icon"
                    width={200}
                    height={200}
                    src="https://avatars.githubusercontent.com/u/60846545?v=4"
                  />
                  <Image
                    alt="github stats"
                    width={400}
                    height={200}
                    src="https://github-readme-stats.vercel.app/api?username=Chroma7p&theme=onedark&show_icons=true&count_private=true"
                  />
                </div>
                <div className="flex">
                  <Image
                    alt="github grass"
                    loader={myLoader}
                    width={900}
                    height={175}
                    src="Chroma7p.png"
                  />
                </div>
              </div>
            </Block2>
          </>
        </Block1>
        <Block1 title="活動">
          <>
            <Block3 title="AtCoder">
              <>
                <p>競技プログラミングコンテスト</p>
                <p>Highest:1140</p>
                <LinkBtn link="https://atcoder.jp/users/Chroma7p">
                  AtCoder プロフィール
                </LinkBtn>
              </>
            </Block3>
            <Block3 title="paiza">
              <>
                <p>プログラミングスキルチェックサイト</p>
                <p>Ｓランク</p>
                <p>paizaレーティング:1859±124</p>
              </>
            </Block3>
            <Block3 title="CTF">
              <>
                <p>セキュリティコンテスト</p>
                <p>時々大学の人とチームで参加しています。</p>
                <p>個人的にはCryptoが得意です。</p>
                <p>参加の記録は以下のQiitaを参照してください。</p>
              </>
            </Block3>
            <Block3 title="Qiita">
              <>
                <p>ブログ</p>
                <p>PythonでAtCoderに参加するためのコツを書いたり、CTF参加の記録を書いたりしています。</p>
                <LinkBtn link="https://qiita.com/Chroma7p">
                  Qiita プロフィール
                </LinkBtn>
              </>
            </Block3>
            <Block3 title="ハッカソン">
              <>
                <p>高校の同級生と&quot;ご注文は豆腐職人ですか?&quot;というチームでハッカソンに参加しています。</p>
                <LinkBtn link="https://hacku.yahoo.co.jp/hacku2020online1/">
                  Open Hack U 2020 Online Vol.1
                </LinkBtn>
                <p>Happy Hacking賞</p>
                <br />
                <LinkBtn link="https://special.discoveryjapan.jp/campaign/hackathon2021/">
                  Discovery Hackathon 2021
                </LinkBtn>
                <p>最優秀賞</p>
                <br />
                <p>また、個人でもたまに小さいハッカソンに参加しています。</p>
                <p>制作物については<a onClick={() => router.push("/work")}>Work</a>へ</p>
              </>
            </Block3>
            <Block3 title="個人開発">
              <>
                <p>主にPythonを用いて、個人的な計算用のアプリケーションやスクレイピング、Bot制作等をしています。</p>

                <p>制作物については<a onClick={() => router.push("/work")}>Work</a>へ</p>
              </>
            </Block3>
          </>
        </Block1>
      </>
    </Base >
  );
};
export default Home;
