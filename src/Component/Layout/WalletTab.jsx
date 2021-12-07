import { React, useState, useEffect } from "react";
import { Tabs, Tab, Button } from "react-bootstrap";
import DropdownNav from "./DropdownNav";
import { RiArrowUpDownFill } from "react-icons/ri";
import { ethers } from "ethers";
import Web3 from "web3";
import HFCToken from "../../Views/Home/abis/HFCToken.json";
import { buyToken,approveTokens,sellToken } from "../../helpers/setterFunctions";
import {getAllowance,checkIfApproved} from "../../helpers/getterFunctions"

export default function WalletTab(props) {
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const [refresh, setrefresh] = useState(0);
  const [key, setKey] = useState("CoinBuy");
  const [HFCContractInstance, setHFCContractInstance] = useState({});
   const [query, setQuery] = useState("USDT");
    const [outputAmount, setOutputAmount] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [transactionOnGoing, setTransactionOnGoing] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
 

  
  useEffect(async() => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    console.log("account is ----->",accounts)
    setAccount(account);
    
  
  }, [])

  const buyTokenFunction=async(tokenAmmount,refferrer)=>{
    await buyToken(tokenAmmount,refferrer,account)
  }

  const _sellToken=async(_ammount,_account)=>{
    await sellToken(_ammount,_account);
  }

  const _approveToken=async(_tokenAmmount,_account)=>{
      await approveTokens(_tokenAmmount,_account);
  }

  const checkAllowance = async () => {
    try {
      if (query == "BNB") return;
      if (props.account && props.account.account && query && outputAmount) {
        let res = await checkIfApproved(
          outputAmount,
          query.toLowerCase(),
          props.account.account
        );
        return res;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const approveToken = async () => {
    try {
      if (props.account && props.account.account && query && inputAmount) {
        setTransactionOnGoing(true);
        setIsDisabled(true);
        let res = await approveTokens(
          query.toLowerCase(),
          props.account.account
        );

        setIsDisabled(false);
        if (res.status == true) {
          alert("Transaction successful");
        } else {
          alert("Transaction Failed");
        }
        setTransactionOnGoing(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  



  return (
    <div className="wallet-tab pb-5">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-0"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="CoinBuy" title="Buy" className="text-center">
          <DropdownNav InputLabel="from"  ButtunName="BUSD" />
          <RiArrowUpDownFill size="30" className="dark-red" />
          <DropdownNav InputLabel="To" ButtunName="BUSD" />
          <Button variant="danger" className="w-100 my-4" onClick={() => buyToken()}>
            Buy1
          </Button>
          <DropdownNav InputLabel="Reffral Code" ButtunName="Copy" />
        </Tab>
        <Tab eventKey="CoinSell" title="Sell" className="text-center">
          <DropdownNav InputLabel="from" ButtunName="HFC" />
          <RiArrowUpDownFill size="30" className="dark-red" />
          <DropdownNav InputLabel="To" ButtunName="BUSD" />
          <Button
            variant="danger"
            className="w-100"
            
          >
            Sell
          </Button>
        </Tab>
        <Tab
          eventKey="CoinSendReceive"
          title="Send Receive"
          className="text-center"
        >
          <DropdownNav InputLabel="From" ButtunName="Address" />
          <DropdownNav InputLabel="Ammount" ButtunName="HFC" />
          <RiArrowUpDownFill size="30" className="dark-red" />
          <DropdownNav InputLabel="To" ButtunName="Address" />
          <Button variant="danger" className="w-100">
            Transfer
          </Button>
        </Tab>
      </Tabs>
    </div>
  );
}
