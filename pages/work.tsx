import { Base } from "../components/base";
import { Block1 } from "../components/block1";
import { Block2 } from "../components/block2";
import { LinkBtn } from "../components/link-button";
import songbot from "../pics/song_bot.png";
import aipost from "../pics/AIPOST.png";
import taskmanage from "../pics/task_manager.png";
import suico from "../pics/SUICOVERY.jpg";
import akarichang from "../pics/Yomiage-Akari-Chang.png";
import Image from "next/image";

const Work = () => {
  return (
    <Base title="制作物">
      <>
        <Block1 title="ハッカソン">
          <>
            <Block2 title="ムービング座布団">
              <>
                <LinkBtn link="https://hacku.yahoo.co.jp/hacku2020online1/">
                  <>Open Hack U 2020 Online Vol.1</>
                </LinkBtn>
                Happy Hacking賞
                <br /> にて、Happy Hacking賞を受賞した作品。
                <br />
                映像の音声に合わせて座布団に内蔵したモーターや外付けのミストが動作し、4D映画のような体感を手軽に得ることができる。
                <br />
                私は映像の音声を判定する機械学習モデルを担当した。
                <iframe
                  src="https://onedrive.live.com/embed?cid=92FB6F5CFB1C5CB2&amp;resid=92FB6F5CFB1C5CB2%212075&amp;authkey=AE_d-WasIoNzsgM&amp;em=2&amp;wdAr=1.7777777777777777"
                  width="480px"
                  height="300px"
                  frameBorder="0"
                  suppressHydrationWarning
                >
                  これは、
                  <a href="https://office.com/webapps">Office</a>{" "}
                  の機能を利用した、
                  <a href="https://office.com">Microsoft Office</a>{" "}
                  の埋め込み型のプレゼンテーションです。
                </iframe>
              </>
            </Block2>
            <Block2 title="SUICOVERY">
              <>
                <LinkBtn link="https://special.discoveryjapan.jp/campaign/hackathon2021/">
                  <>Discovery Hackathon 2021</>
                </LinkBtn>{" "}
                にて、最優秀賞を受賞した作品。
                <br />
                ハッカソンのテーマが「リカバー」であり、我々は「オンラインでもみんなでワイワイ出来る状況をリカバー」したいということで、オンラインでスイカ割りが出来るロボット、SUICOVERYを制作した。この名前はDiscovery,Recover,スイカ割りに由来する。
                指定されたページにアクセスすると、音声入力ができ、別の場所にいるロボットが指示の通り動く。(オンライン会議などで繋いでいる想定)ただし、指示が錯綜すると思いもよらぬ方向へ動いたり、時々ランダムに動き指示をする側を混乱させたりする。
                実際に参加型のデモを行ったところ、オンライン特有のタイムラグによる意図しない動きやテストではできなかった大人数の参加により、予想以上に盛り上がった。
                <br />
                私は文字に起こしされた入力を解析し、ロボットへの指示に変換する部分を担当した。
                <br />
                <LinkBtn link="https://github.com/Chroma7p/discovery2021">
                  <>リポジトリ</>
                </LinkBtn>
                <Image src={suico} alt="picture" width="400px" />
              </>
            </Block2>
            <Block2 title="A.I.POST">
              <>
                Digital Hack Day2021で制作した作品。
                <br />
                テーマが「日本のデジタル化」であり、我々は「郵送物のデジタル化」を目標に投函された郵便物を読み取り判断し、通知を送るポストを制作した。
                郵便物が投函されると、中のカメラで投函されたことを判定し、投函された物を撮影する。撮影した画像から郵便物の内容を判断し、重要なものであれば通知し、チラシなどは無視する。
                <br />
                私は投函されたものを撮影し加工する部分を担当した。
                <br />
                <LinkBtn link="https://github.com/csenet/digital-hackday-2021">
                  <>リポジトリ</>
                </LinkBtn>
                <Image src={aipost} alt="picture" width="400px" />
              </>
            </Block2>
            <Block2 title="ツイ病みちゃん">
              <p>
                Open HackU 2022 TOKYOで制作した作品。
                Twitterのアカウントでログインするとツイートなどの情報を収集し、自分が普段呟いている物事やよく関わっている人について、ヤンデレ風に尋ねてくるシミュレーションゲーム風Webアプリケーション。
                普段呟いていることを客観的に、かつ俯瞰的に観察することで、普段SNSを使用する際の意識の向上を目的としている。
                今回はツイートからの単語のピックアップと、よく関わる人のピックアップにとどまったが、いずれ画像の解析やツイート位置の解析などを通してより監視感を高めていきたいと考えている。
              </p>
            </Block2>
            <Block2 title="タスクマネージャーbot">
              <>
                N Code Labo講師によるハッカソンで作成したDiscordBot。
                <br />
                コマンドでタスクと期日を登録し、毎日タスクの状況を通知する。完了した場合はタスクを削除し褒めてくれる。
                <br />
                ユーザーごとに定時にタスクの状況を通知する機能がついている。
                <br />
                <LinkBtn link="https://github.com/Chroma7p/task_manager_bot">
                  <>リポジトリ</>
                </LinkBtn>
                <Image src={taskmanage} alt="picture" width="400px" />
              </>
            </Block2>
            <Block2 title="A.I.Voice APIラッパー・Yomiage-Akari-Chang">
              <>
                N Code Labo講師によるハッカソンで作成したもの。
                <br />
                .NETで提供されているA.I.VOICE(テキストを入力すると自然に読み上げてくれるアプリケーション)のAPIのPythonによるラッパーと、それを用いて作られたDiscordBot。
                <br />
                ハッカソン内では、ラッパーとして最低限の読み上げ機能周りを実装し、Discordで、受け取った内容を読み上げるBotをそれを用いて作った。
                <br />
                現在はBotは自分のPCで動作させ、そのPCで受け取った内容を再生している。
                せっかくDiscordBotにしたので、キャラクター切り替えコマンドを実装した。
                <Image src={akarichang} alt="picture" width="400px" />
              </>
            </Block2>
          </>
        </Block1>
        <Block1 title="個人開発">
          <>
            <Block2 title="課題曲bot">
              <>
                大学で音楽ゲームのサークルを主宰しており、そのサークル及び個人用に作成したDiscordBot。
                <br />
                そもそも音楽ゲームには選曲に迷った際に、ランダムに曲を決定したり、他人に決めてもらったりする、課題曲と呼ばれる文化があり、それをDiscord上で実現するためのBotとして開発した。
                元々は1つのゲームにしか対応していなかったが、対応ゲームを3つに増やした上、収録楽曲の検索や難易度の指定や目標提示などの機能を追加してきた。
                また、収録楽曲データの取得のためにスクレイピングを行っている。
                さらに現在スコアを管理するためのプログラムと統合し、より多機能にするアップデートを予定している。
                現在は、そのアップデートとデータベースへの楽曲データの移行のために開発を進めている。
                <br />
                <LinkBtn link="https://github.com/Chroma7p/assignment_song_bot_for_public">
                  <>公開用リポジトリ</>
                </LinkBtn>
                <Image src={songbot} alt="picture" width="400px" />
              </>
            </Block2>

            <Block2 title="STP Judge">
              <>
                Python等でクラスを学ぶための教材として用いている
                <LinkBtn link="https://github.com/MogamiTsuchikawa/ShoppingThemeProgram">
                  <>Shopping Theme Program</>
                </LinkBtn>
                のジャッジ用のサイト。
                JavaScript、Reactの学習用に制作。(現在制作中)
              </>
            </Block2>
            <Block2 title="portfolio-page">
              <>
                このポートフォリオのページ。 学習も兼ねてNext.jsを用いて制作。
                <br />
                <LinkBtn link="https://github.com/Chroma7p/portfolio-page">
                  <>リポジトリ</>
                </LinkBtn>
              </>
            </Block2>
          </>
        </Block1>
      </>
    </Base>
  );
};

export default Work;
