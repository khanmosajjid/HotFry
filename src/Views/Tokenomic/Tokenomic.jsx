import React from "react";
import DarkMode from "../../Component/Layout/DarkMode";
import Footer from "../../Component/Layout/Footer";
import Header from "../../Component/Layout/Header";
import { Row, Col, Container } from "react-bootstrap";
import PageBanner from "../../Component/Layout/PageBanner";

export default function Tokenomic() {
  return (
    <>
      <Header />
      <DarkMode />
      <PageBanner PageTitle="Tokenomic" />
      <section className="pagesection">
        <Container className="py-5">
          <Row>
            <Col>
              <p>
                We went even further to make DEFI simple and easily accessible
                for everyone everywhere in world.
              </p>
              <p>
                DEFI was created to give the opportunity to people, to have
                access to financial services available to real world such as
                lending, yield investing, and derivatives in the crypto world.
              </p>
              <p>
                Unfortunately, thus far DEFI is not available to the non-crypto
                expert.
              </p>
              <p>
                Our Tokenomics and many of the innovative protocol that we have
                built solve that issue.
              </p>
              <p>
                At Hotfriescoin to sart earning interest it is as simple as buy
                and hold.
              </p>
              <p>
                Just that simple, because as transaction happen in the network,
                the fees paid are continuously shared to the holders.
                Hotfriescoin is the new BSC DEX built strictly on stablecoin.
              </p>
              <p>
                Like most crypto that have an initial supply (finite or
                infinite), the Hotfriescoin doesn’t have an initial supply. It
                will have an elastic infinite supply, which mean that anytime
                someone engages in a buy or sell transaction WITH (BUSD OR ANY
                STABLECOIN AVAILABLE ON THE BSC) the exact amount equivalent of
                hotfriescoin will be mint or burn in respect of the appropriate
                fees.
              </p>
              <h6>The INITIAL PRICE OF A HOTFRIESCOIN WILL BE 1 HFC= 1BUSD.</h6>
              <h6>
                THE FEES CHARGE ON ANY BUY OR SELL TRANSACTION IS 10% OF THE
                TOTAL TRANSACTION.
              </h6>
              <p>The fees will be share as follow:</p>
              <p>- 8% shared between all holders</p>
              <p>- 2% to the hotfriescoin treasury.</p>
              <p>
                The 10% fees charged on the transactions (buy or sell) will give
                an annual APR of up to 584% for every holders, which beats the
                ROI of investiment of eery defi protocol so far.
              </p>
              <p>In addition, we have a CHEESY TOPPER PROTOCOL:</p>
              <p>
                All our products offering such as trading, yield farming,
                lottery, prediction and prediction marketplace will incur some
                fees, parts of the fees will be shared back to our holder.
              </p>
              <p>
                Anytime a fee a shared to the holders the price of Hotfriescoin
                will increase.
              </p>
              <p>
                In every scenario Hotfriescoin will continuously increase no
                matter the transaction (buy or sell), which is the idea of the
                Stable progressive Currency.
              </p>
              <p>
                One very important thing to mention, the fact that hotfriescoin
                is strictly built on Stable coins it is protected against price
                lost that can incur because of the volatility of speculative
                asset like ( btc,bnb, eth etc…)
              </p>
              <h6>Below here is table of the fees schedule:</h6>

              <h6>
                EXAMPLE of YIELD GENERATED BY JUST HOLING HFC ( HOTFRIESCOI
                STAKING)
              </h6>
              <p>Let’say we the following value:</p>
              <p>
                Liquidity: $1Billion/1Billion BUSD Volume 24H: $200M Volume 7D:
                $1.5Billion
              </p>
              <p>Calculate yearly fees</p>
              <p>
                Use the 24H volume to calculate the fee share of liquidity
                providers in the pool (based on the 10% farming fee structure):
                $200,000,000*8/100 = $16,000,000
              </p>
              <p>
                Next, use that fee share to estimate the projected yearly fees
                earned by the holder pool (based on the current 24h volume):
                $16,000,000*365 = $5,840,000,000
              </p>
              <p>
                We can now use the yearly fees to calculate the YIELD rewards :
                That's yearly fees divided by liquidity:
                ($5,840,000,000/$1,000,000,000)*100 = 584% YIELD reward.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
