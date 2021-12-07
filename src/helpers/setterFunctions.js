import { getWeb3 } from "./currentWalletHelper"
import { getAddress } from "./addressHelper";
import contracts from "../Config/contracts";
import { getCrowdsaleContract } from './getterFunctions'
import BigNumber from 'bignumber.js';

export const buyToken = async (tokenAmount, referrer,account) => {
    let web3 = await getWeb3()
    let contract = await getCrowdsaleContract();
    
    let value = 0;
    

    // big Number
    
    value = new BigNumber(value).multipliedBy(new BigNumber(10).exponentiatedBy(new BigNumber(18)));
    console.log("value--------->", contract)
    tokenAmount = await web3.utils.toWei(tokenAmount.toString())
    let res = await contract.methods.buy(tokenAmount,referrer).send({ from: account, value: value })
    return res;
}

export const approveTokens = async(tokenAmount, account) => {
   
    let crowdsaleAddress = await getAddress(contracts.crowdsale);
     tokenAmount = "10000000000000000000000000000000000000000";
    let contract=await getCrowdsaleContract();
    let res = await contract.methods.approve(crowdsaleAddress, tokenAmount).send({ from: account })
    return res;
}


export const sellToken = async(ammount,account) =>{
    let contract =await getCrowdsaleContract();
    let res =await contract.methods.sell(ammount).send({from:account})
}

