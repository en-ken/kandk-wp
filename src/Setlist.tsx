import React from "react";
import { Image, Container, Menu, Header, List, Icon } from "semantic-ui-react";

const tracks = [
  {
    title: "LOVELAND,ISLAND",
    artist: "山下達郎",
    url: "https://www.youtube.com/watch?v=k_ScisjFIIA",
    isKaho: true,
  },
  {
    title: "ロックンロール・ハネムーン",
    artist: "くるり",
    isKaho: true,
  },
  {
    title: "Two Of Us",
    artist: "The Beatles",
    url: "https://www.youtube.com/watch?v=cLQox8e9688",
    isKaho: false,
  },
  {
    title: "happiness!!!",
    artist: "木村カエラ",
    url: "https://www.youtube.com/watch?v=VrV8ZZwP1Nw",
    isKaho: true,
  },
  {
    title: "Me & You Together Song",
    artist: "The 1975",
    url: "https://www.youtube.com/watch?v=NF47oaT6qzc",
    isKaho: true,
  },
  {
    title: "瀬戸の花嫁",
    artist: "小柳ルミ子",
    url: "https://www.youtube.com/watch?v=JUVNv-pwAiE",
    isKaho: true,
  },
  {
    title: "蛍の光",
    isKaho: false,
  },
  {
    title: "愛してます",
    artist: "PSG",
    url: "https://www.youtube.com/watch?v=iZFocDZMbh0",
    isKaho: true,
  },
  {
    title: "ハム食べたい SCHINKEN",
    artist: "くるり",
    url: "https://www.youtube.com/watch?v=h1Iaudd0BXs",
    isKaho: true,
  },
  {
    title: "Family Song",
    artist: "星野源",
    url: "https://www.youtube.com/watch?v=Ucbp-Ej5RpI",
    isKaho: true,
  },
  {
    title: "めぐる",
    artist: "優河",
    isKaho: false,
  },
  {
    title: "OK, Cheers!",
    artist: "chelmico",
    url: "https://www.youtube.com/watch?v=q3kpsIhVq2o",
    isKaho: true,
  },
  {
    title: "Friday I'm In Love",
    artist: "The Cure",
    url: "https://www.youtube.com/watch?v=mGgMZpGYiy8",
    isKaho: false,
  },
  {
    title: "ダンシンスルーザナイト",
    artist: "Dancinthruthenights × Sugar's Campaign",
    url: "https://soundcloud.com/dancinthruthenights/k7fikdgm0yjr",
    isKaho: true,
  },
  {
    title: "Us",
    artist: "Regina Spektor",
    url: "https://www.youtube.com/watch?v=fczPlmz-Vug",
    isKaho: false,
  },
  {
    title: "きみは最高",
    artist: "JABBA DA FOOTBALL CLUB",
    url: "https://www.youtube.com/watch?v=HuYbt8tPEyA",
    isKaho: true,
  },
  {
    title: "夜空の星",
    artist: "KAKATO(環ROYx鎮座DOPENESS)",
    url: "https://www.youtube.com/watch?v=8h4P9vxGMMg",
    isKaho: false,
  },
  {
    title: "Big Love",
    artist: "Enjoy Music Club",
    isKaho: true,
  },
  {
    title: "If You Say You Love Me",
    artist: "El Presidente",
    url: "https://www.youtube.com/watch?v=YFT2JkGveQw",
    isKaho: false,
  },
  {
    title: "光",
    artist: "宇多田ヒカル",
    url: "https://www.youtube.com/watch?v=AlMdDpUWFFI",
    isKaho: true,
  },
  {
    title: "ばらの花 x ネイティブダンサー",
    artist: "yui x ミゾベリョウ",
    url: "https://www.youtube.com/watch?v=tUe6YedzjlM",
    isKaho: false,
  },
  {
    title: "街の報せ",
    artist: "cero",
    url: "https://www.youtube.com/watch?v=MmcTyNrrvh0",
    isKaho: true,
  },
  {
    title: "ミレニアム",
    artist: "ラブリーサマーちゃん",
    url: "https://www.youtube.com/watch?v=_eCbH6oWvk8",
    isKaho: false,
  },
  {
    title: "恋は思いのまま",
    artist: "一十三十一",
    url: "https://www.youtube.com/watch?v=m8u91xGtOZQ",
    isKaho: true,
  },
  {
    title: "She's Electric",
    artist: "Oasis",
    url: "https://www.youtube.com/watch?v=h9JZWhjQDvc",
    isKaho: false,
  },
  {
    title: "お嫁においで 2015",
    artist: "加山雄三 feat. PUNPEE",
    url: "https://www.youtube.com/watch?v=gLS_4iPoZ40",
    isKaho: true,
  },
  {
    title: "渚",
    artist: "スピッツ",
    url: "https://www.youtube.com/watch?v=B7T4NNNWeHg",
    isKaho: false,
  },
  {
    title: "光はわたしのなか",
    artist: "Lucky Kilimanjaro",
    url: "https://www.youtube.com/watch?v=C5SHFXA9tdA",
    isKaho: true,
  },
  {
    title: "Horchata",
    artist: "Vampire Weekend",
    url: "https://www.youtube.com/watch?v=fh3zE7wWD4E",
    isKaho: false,
  },
  {
    title: "週末はソウルバンド",
    artist: "思い出野郎Aチーム",
    url: "https://www.youtube.com/watch?v=1jStVB9ARes",
    isKaho: true,
  },
  {
    title: "Morning",
    artist: "Francis And The Lights",
    url: "https://www.youtube.com/watch?v=xJ0xczwPxIE",
    isKaho: false,
  },
  {
    title: "You're the One For Me",
    artist: "Jacintha",
    url: "https://www.youtube.com/watch?v=jS1lEdH4-2E",
    isKaho: true,
  },
  {
    title: "恋におちたら",
    artist: "サニーデイ・サービス",
    url: "https://www.youtube.com/watch?v=RxKDLetDiUY",
    isKaho: false,
  },
  {
    title: "Heartbeat",
    artist: "Tahiti 80",
    url: "https://www.youtube.com/watch?v=K3SezDMPpVM",
    isKaho: true,
  },
  {
    title: "The Model",
    artist: "Belle & Sebastian",
    url: "https://www.youtube.com/watch?v=Kc74AVWprmc",
    isKaho: false,
  },
  {
    title: "Wonder Wall feat. 5lack",
    artist: "PUNPEE",
    url: "https://www.youtube.com/watch?v=uAxuoCsPF0o",
    isKaho: true,
  },
  {
    title: "Make you happy",
    artist: "NiziU",
    url: "https://www.youtube.com/watch?v=QW28YKqdxe0",
    isKaho: false,
  },
  {
    title: "愛のままに feat. 唾奇",
    artist: "BASI",
    url: "https://www.youtube.com/watch?v=3hPI3xjsNKE",
    isKaho: true,
  },
  {
    title: "Scenic World",
    artist: "Beirut",
    url: "https://www.youtube.com/watch?v=MH6Ed4V3tpo",
    isKaho: false,
  },
  {
    title: "黄昏サラウンド",
    artist: "RYP SLYME",
    url: "https://www.youtube.com/watch?v=DdFV6TCs5h0",
    isKaho: true,
  },
  {
    title: "Little Lou, Ugly Jack, Prophet John",
    artist: "Belle & Sebastian feat. Norah Jones",
    url: "https://www.youtube.com/watch?v=jdnVyOe1Pvg",
    isKaho: false,
  },
  {
    title: "Precious Moment",
    artist: "Adi Rakhmadian",
    url: "https://www.youtube.com/watch?v=WFekEtF0518",
    isKaho: true,
  },
  {
    title: "Still Fighting It",
    artist: "Ben Folds",
    url: "https://www.youtube.com/watch?v=kqPwR39VMh0",
    isKaho: false,
  },
  {
    title: "夜風に吹かれて",
    artist: "EVISBEATSとPUNCH&MIGHTY",
    url: "https://www.youtube.com/watch?v=VSIQXRl7dUE",
    isKaho: true,
  },
  {
    title: "To Build A Home",
    artist: "The Cinematic Orchestra",
    url: "https://www.youtube.com/watch?v=bjjc59FgUpg",
    isKaho: false,
  },
  {
    title: "夜をつかいはたして feat. PUNPEE",
    artist: "STATS",
    url: "https://www.youtube.com/watch?v=CUxIykX4hfw",
    isKaho: true,
  },
  {
    title: "Put Your Records On",
    artist: "Corinne Bailey Rae",
    url: "https://www.youtube.com/watch?v=rjOhZZyn30k",
    isKaho: false,
  },
  {
    title: "Happy",
    artist: "Pharrell Williams",
    url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
    isKaho: true,
  },
  {
    title: "おだやかな暮らし",
    artist: "クラムボン",
    isKaho: false,
  },
  {
    title: "Orphans",
    artist: "Cero",
    url: "https://www.youtube.com/watch?v=c_SLGBJgDNE",
    isKaho: true,
  },
  {
    title: "Baby I Love You",
    artist: "くるり",
    url: "https://www.youtube.com/watch?v=Js7vwDaMn8E",
    isKaho: false,
  },
  {
    title: "そんな夜",
    artist: "Enjoy Music Club",
    url: "https://www.youtube.com/watch?v=w0nD3aTx3Gc",
    isKaho: true,
  },
  {
    title: "くだらないの中に",
    artist: "星野源",
    url: "https://www.youtube.com/watch?v=K2PVq10dsiM",
    isKaho: false,
  },
  {
    title: "明るい未来",
    artist: "never young beach",
    url: "https://www.youtube.com/watch?v=PL9-6rClgXs",
    isKaho: true,
  },
];

const Setlist: React.FC = () => (
  <>
    <Menu
      fixed="top"
      borderless
      style={{
        backgroundImage: `url(${"./bg.jpg"})`,
        backgroundSize: "cover",
      }}
    >
      <Menu.Item>
        <Header
          as="h3"
          style={{
            color: "#222222",
          }}
        >
          Setlist
        </Header>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          as="a"
          href="https://open.spotify.com/playlist/24P6CEGeFpGoU7lVehjJ8i?si=7Y14lkDFQku22YT5pbOIbA"
          target="setlist"
        >
          <Icon
            name="spotify"
            size="large"
            style={{
              color: "#222222",
            }}
          />
        </Menu.Item>
        <Menu.Item
          as="a"
          href="https://music.apple.com/jp/playlist/wedding/pl.u-V9D7mqKf1Nzek0"
          target="setlist"
        >
          <Icon
            name="apple"
            size="large"
            style={{
              color: "#222222",
            }}
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    <Container
      style={{
        paddingTop: "4em",
      }}
    >
      <List celled>
        {tracks.map((x, i) => (
          <List.Item>
            {x.isKaho ? <KahoIcon /> : <KentaIcon />}
            <List.Content>
              {x.url ? (
                <List.Header as="a" href={x.url} target="almostYoutube">
                  {x.title}
                </List.Header>
              ) : (
                <List.Header
                  style={{
                    //color: "#869A91",
                    color: "#395D4A",
                  }}
                >
                  {x.title}
                </List.Header>
              )}
              <List.Description>{x.artist}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Container>
  </>
);

const KahoIcon: React.FC = () => <Image avatar src="kaho.png" />;
const KentaIcon: React.FC = () => <Image avatar src="kenta.png" />;

export default Setlist;
