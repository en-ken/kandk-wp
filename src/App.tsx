import React, { useRef, useEffect, useState } from "react";
import {
  Container,
  Header,
  Responsive,
  Segment,
  Menu,
  Label,
  Ref,
} from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return (isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth) as number;
};

const ResponsiveContainer: React.FC = ({ children }) => {
  return (
    <>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </>
  );
};

const DesktopContainer: React.FC<{}> = ({ children }) => {
  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Segment
        inverted
        textAlign="center"
        style={{
          minHeight: 700,
          padding: "1em 0em",
          backgroundImage: `url(${"./bg.jpg"})`,
          backgroundSize: "cover",
        }}
      >
        <HomepageHeading />
      </Segment>
      <MainContent />
    </Responsive>
  );
};

const MobileContainer: React.FC = () => {
  return (
    <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
      <Segment
        inverted
        textAlign="center"
        style={{
          minHeight: 350,
          padding: "1em 0em",
          backgroundImage: `url(${"./bg.jpg"})`,
          backgroundSize: "cover",
        }}
        vertical
      >
        <HomepageHeading mobile />
      </Segment>

      <MainContent mobile />
    </Responsive>
  );
};

const HomepageHeading: React.FC<{ mobile?: boolean }> = ({ mobile }) => (
  <Container text style={{ position: "relative" }}>
    <img
      src="top.png"
      alt="Kenta and Kaho Wedding Invitation 2020/07/25(Sat) at Q.E.D CLUB"
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        width: "99%",
      }}
    />
  </Container>
);

const MainContent: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
  return (
    <>
      <Section>
        <Heading>Message</Heading>
        <Paragraph center>
          先般ご案内申し上げました
          <br />
          私たちの結婚式に関して
          <br />
          このたびの新型コロナウイルス
          <br />
          感染拡大に伴い
          <br />
          ご心配をおかけしている
          <br />
          かと思いますが
          <br />
          二人で話し合った結果
          <br />
          会場での衛生管理を徹底の上で
          <br />
          7月25日に開催することと致しました
        </Paragraph>
        <Paragraph center>
          つきましては
          <br />
          どうぞごむりのないご判断で
          <br />
          改めてご都合のほどを
          <br />
          <strong style={{ color: "#FF8E16" }}>7月10日</strong>までに
          <br />
          下記返信ボタンより
          <br />
          ご一報賜りますようお願い申し上げます
        </Paragraph>
        <Paragraph center>
          このような状況ではございますが
          <br />
          くれぐれもご自愛ください
        </Paragraph>
      </Section>
      <ReplyButton />
      <Section>
        <Heading>Information</Heading>
        <SubHeading>Date</SubHeading>
        <Paragraph center>
          2020年　7月　25日 （土曜日）
          <br />
          受付　　　　　　16時00分
          <br />
          挙式・披露宴　　16時30分
        </Paragraph>
        <SubHeading>Place</SubHeading>
        <Paragraph center>
          <a
            href="http://www.qed.co.jp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="qed_logo.png"
              alt="Q.E.D.CLUB"
              style={{
                fontWeight: "normal",
                width: mobile ? "65%" : "250px",
              }}
            />
          </a>
          <br />
          東京都目黒区中目黒1-1-29
          <br />
          <Label
            size="large"
            as="a"
            href="https://www.google.com/maps/place/%E3%80%92153-0061+%E6%9D%B1%E4%BA%AC%E9%83%BD%E7%9B%AE%E9%BB%92%E5%8C%BA%E4%B8%AD%E7%9B%AE%E9%BB%92%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%91%E2%88%92%EF%BC%92%EF%BC%99+Q.E.D.CLUB/@35.6440389,139.7046571,17z/data=!4m2!3m1!1s0x60188b40e7849a4f:0xa38054734ee0d324"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#221122",
              margin: "8px",
            }}
          >
            Map
          </Label>
        </Paragraph>
      </Section>
      <Section>
        <Heading>感染症対策について</Heading>
        <Paragraph>
          会場で働く従業員の方々は、出社時全員検温（37.5度以上の場合、自宅待機）や
          手洗い、うがい、アルコール消毒液による手指消毒を徹底し、全員マスクを着用しています。
          また、会場は、定期的な清掃、特に直接手に触れる機会の多い箇所（ドアノブ・螺旋階段など）の
          アルコール消毒が徹底されています。
        </Paragraph>
        <Paragraph>
          当日は、ご参加いただく皆様全員にも来場時に検温いただくほか、
          挙式会場や披露宴会場では、
          ガーデンとダイニング扉を開けるなど換気の良い環境の維持、席間隔の確保、扉の開閉は原則として従業員の方に行うなどの対策を実施していただく予定です。
          また、受付での一連のやりとりについても、出来るかぎり接触をへらす取り組みを実施する予定です。
        </Paragraph>
      </Section>
      <Section>
        <Heading>ご祝儀について</Heading>
        <Paragraph>
          当日の接触をへらす観点から、
          希望者の方にはQRコード決済(PayPay)によるご祝儀の事前送金を承っております。
          ご希望の方はアプリをご準備の上で、下記QRコードをタップしアプリを立ち上げるか、
          アプリを立ち上げのち、下記QRコードの読み取って送金をお願い致します。
        </Paragraph>
        <SubHeading>送金の際のご注意</SubHeading>
        <Paragraph>
          どなたからいただいた方を把握するため、
          <strong>必ずメッセージに「フルネーム」と「ご祝儀である旨」</strong>
          を記載頂くようお願いします。 メッセージの追加方法は
          <a
            href="https://paypay.ne.jp/guide/send/"
            target="_blank"
            rel="noopener noreferrer"
          >
            こちら
          </a>
          をご参考にお願いします。
        </Paragraph>
        <Paragraph center>
          <a
            href="https://qr.paypay.ne.jp/YL2uKGbMZL1GgXtC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="paypay.jpg"
              alt="Q.E.D.CLUB"
              style={{
                fontWeight: "normal",
                width: mobile ? "90%" : "350px",
              }}
            />
          </a>
        </Paragraph>
      </Section>
    </>
  );
};

const Section: React.FC = ({ children }) => (
  <Segment style={{ padding: "8em 0em" }} vertical>
    <Container text>{children}</Container>
  </Segment>
);

const Heading: React.FC = ({ children }) => (
  <Header
    as="h3"
    style={{ fontSize: "2em", textAlign: "center", color: "#869A91" }}
  >
    {children}
  </Header>
);

const SubHeading: React.FC = ({ children }) => (
  <Header
    as="h4"
    style={{ fontSize: "1.6em", textAlign: "center", color: "#395D4A" }}
  >
    {children}
  </Header>
);

const Paragraph: React.FC<{ center?: boolean }> = ({ center, children }) => (
  <p
    style={{
      fontSize: "1.1em",
      textAlign: center ? "center" : "left",
      color: "#101413",
    }}
  >
    {children}
  </p>
);

const ReplyButton: React.FC = () => {
  const contextRef = useRef(null);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (contextRef.current) {
      const bottom = (contextRef.current as any).getBoundingClientRect()
        .bottom as number;

      if (bottom <= window.screen.availHeight) {
        setFixed(true);
      }
      if (window.pageYOffset === 0) {
        setFixed(false);
      }
    }
  };

  return (
    <Menu
      inverted
      style={{ backgroundColor: "#FF8E16", color: "#101413" }}
      size="massive"
      fixed={fixed ? "bottom" : undefined}
      widths={1}
    >
      <Ref innerRef={contextRef}>
        <Menu.Item
          name="招待状に返答する"
          onClick={() => {
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSe7gdiZfxyETyZxHl_3nx7fXMIoDXrmyQVhuZSTN4DM6sRjtQ/viewform?usp=sf_link"
            );
          }}
        />
      </Ref>
    </Menu>
  );
};

export default ResponsiveContainer;
