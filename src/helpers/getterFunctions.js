
import crowdsaleAbi from './../Config/abis/hotFry.json'
import { getAddress } from './addressHelper';
import { getAccount, getUserBalance, getWeb3 } from './currentWalletHelper';
import contracts from './../Config/contracts'


export const getCrowdsaleContract = async () => {
    try {
        let web3 = await getWeb3();
        console.log("here", web3);
        let crowdsale = await new web3.eth.Contract(
          crowdsaleAbi,
          "0x17629cc61e3167f071d007e436c4fbfd7bf811df"
        );
        console.log("crowdsale", crowdsale)
        return crowdsale;
    }
    catch (e) {
        console.log(e)
    }

}
export const getAllowance = async (tokenName, account) => {
  try {
    let web3 = await getWeb3();
    let token = await getCrowdsaleContract();
    let crowdsaleAddress = await getAddress(contracts.crowdsale);
    let allowance = await token.methods
      .allowance(account, crowdsaleAddress)
      .call();
    console.log(
      "allowance",
      await web3.utils.fromWei(allowance.toString(), "ether")
    );
    return await web3.utils.fromWei(allowance.toString(), "ether");
  } catch (e) {
    console.log(e);
  }
};

export const checkIfApproved = async (inputAmount, tokenName, account) => {
  try {
    let allowance = await getAllowance(tokenName, account);
    console.log("allowances", inputAmount, allowance);
    if (Number(allowance) < Number(inputAmount)) {
      console.log("false");
      return false;
    } else {
      console.log("true");
      return true;
    }
  } catch (e) {
    console.log(e);
  }
};


