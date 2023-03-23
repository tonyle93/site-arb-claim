// Add lib
const web3 = new Web3("https://arb-mainnet.g.alchemy.com/v2/2e-x6lNSeJ-M8DDJmNzL01FKrdh3LmCT");
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const contract = new web3.eth.Contract([{ "inputs": [{ "internalType": "contract IERC20VotesUpgradeable", "name": "_token", "type": "address" }, { "internalType": "address payable", "name": "_sweepReceiver", "type": "address" }, { "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "uint256", "name": "_claimPeriodStart", "type": "uint256" }, { "internalType": "uint256", "name": "_claimPeriodEnd", "type": "uint256" }, { "internalType": "address", "name": "delegateTo", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "recipient", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "CanClaim", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "recipient", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "HasClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newSweepReceiver", "type": "address" }], "name": "SweepReceiverSet", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Swept", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "recipient", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdrawal", "type": "event" }, { "inputs": [], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }, { "internalType": "uint256", "name": "expiry", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "claimAndDelegate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claimPeriodEnd", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "claimPeriodStart", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "claimableTokens", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_recipients", "type": "address[]" }, { "internalType": "uint256[]", "name": "_claimableAmount", "type": "uint256[]" }], "name": "setRecipients", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "_sweepReceiver", "type": "address" }], "name": "setSweepReciever", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sweep", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sweepReceiver", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20VotesUpgradeable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalClaimable", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }], '0x67a24ce4321ab3af51c2d0a4801c3e111d88c9d9');
const contractAddress = "0x67a24ce4321ab3af51c2d0a4801c3e111d88c9d9";
let arbContract = new web3.eth.Contract([{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "delegator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "fromDelegate", "type": "address" }, { "indexed": true, "internalType": "address", "name": "toDelegate", "type": "address" }], "name": "DelegateChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "delegate", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "previousBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "DelegateVotesChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint8", "name": "version", "type": "uint8" }], "name": "Initialized", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MINT_CAP_DENOMINATOR", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MINT_CAP_NUMERATOR", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MIN_MINT_INTERVAL", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint32", "name": "pos", "type": "uint32" }], "name": "checkpoints", "outputs": [{ "components": [{ "internalType": "uint32", "name": "fromBlock", "type": "uint32" }, { "internalType": "uint224", "name": "votes", "type": "uint224" }], "internalType": "struct ERC20VotesUpgradeable.Checkpoint", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }], "name": "delegate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "expiry", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "delegateBySig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "delegates", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "blockNumber", "type": "uint256" }], "name": "getPastTotalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "blockNumber", "type": "uint256" }], "name": "getPastVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "getVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_l1TokenAddress", "type": "address" }, { "internalType": "uint256", "name": "_initialSupply", "type": "uint256" }, { "internalType": "address", "name": "_owner", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "l1Address", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nextMint", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "numCheckpoints", "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "transferAndCall", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }], "0x912ce59144191c1204e64559fe8253a0e49e6548");
const daiContract = new web3.eth.Contract([{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "usr", "type": "address" }], "name": "Deny", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "usr", "type": "address" }], "name": "Rely", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "usr", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "deploymentChainId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "usr", "type": "address" }], "name": "rely", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "wards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }], "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1");
const daiAddress = "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1";
let arbAddress = "0x912ce59144191c1204e64559fe8253a0e49e6548";
// arbContract = daiContract;
// arbAddress = daiAddress;

var listWallet = $('#js-list-wallet');
var listBalance = $('#js-list-balance');
var loadLb = $('#js-load-label');
var loadBtn = $('#js-load-wallet');
var loadBalance = $('#js-load-balance');
var loadBalanceLb = $('#js-load-balance-label');
var clearBalance = $('#js-clear-balance');
var claimBtn = $('#js-claim-all');
var clearBtn = $('#js-clear-wallet');
var sendTo = $('#js-send-to');
var inputAddressTo = $('#js-address-to');
var tabs = $$('.tab');
var pages = $$('.page');
var currentTab = $('.tab.active');
var currentPage = $('.page.active');

claimBtn.classList.add('btn-disabled');
clearBtn.classList.add('btn-disabled');
sendTo.classList.add('btn-disabled');
clearBalance.classList.add('btn-disabled');

if (tabs && tabs.length) {
  for (let index = 0; index < tabs.length; index++) {
    let tab = tabs[index];
    tab.onclick = () => {
      currentTab.classList.remove("active");
      currentPage.classList.remove("active");
      currentTab = tab;
      currentPage = pages[index];
      currentTab.classList.add("active");
      currentPage.classList.add("active");
    }
  }
}

listWallet.data = [];
listBalance.data = [];

loadBtn.onchange = function () {
  clear(listWallet);
  loadLb.classList.toggle('btn-disabled');
  claimBtn.classList.remove('btn-disabled');
  clearBtn.classList.remove('btn-disabled');
  var reader = new FileReader();
  reader.addEventListener('load', (event) => {
    const result = event.target.result;
    // Do something with result
    if (typeof result == 'string') {
      var wallets = result.trim().split('\r\n');
      wallets.forEach(addWallet);
    }
  });
  reader.readAsText(this.files[0]);
  loadBtn.value = null;
}


loadBalance.onchange = function () {
  clear(listBalance);
  loadBalanceLb.classList.toggle('btn-disabled');
  sendTo.classList.remove('btn-disabled');
  clearBalance.classList.remove('btn-disabled');
  var reader = new FileReader();
  reader.addEventListener('load', (event) => {
    const result = event.target.result;
    // Do something with result
    if (typeof result == 'string') {
      var wallets = result.trim().split('\r\n');
      wallets.forEach(addBalance);
    }
  });
  reader.readAsText(this.files[0]);
  loadBalance.value = null;
}

clearBalance.onclick = () => {
  clear(listBalance);
  loadBalanceLb.classList.toggle('btn-disabled');
  clearBalance.classList.toggle('btn-disabled');
  sendTo.classList.toggle('btn-disabled');
};

clearBtn.onclick = () => {
  clear(listWallet);
  loadLb.classList.toggle('btn-disabled');
  clearBtn.classList.toggle('btn-disabled');
  claimBtn.classList.toggle('btn-disabled');
};

claimBtn.onclick = () => {
  const data = listWallet.data;
  if (data && data.length) {
    for (let index = 0; index < data.length; index++) {
      const account = data[index];
      contract.methods.claimableTokens(account.address).call({ from: account.address })
        .then((balance) => {
          if (balance > 0) {
            editRow(index + 1, [account.address, web3.utils.fromWei(balance), "ARB", `<p class="status pending">PENDING</p>`], listWallet);
            claimToken(account).then((receipt) => {
              editRow(index + 1, [account.address, web3.utils.fromWei(balance), "ARB", `<p class="status claimed">CLAIMED</p>`], listWallet);
            }).catch((error) => {
              editRow(index + 1, [account.address, web3.utils.fromWei(balance), "ARB", `<p class="status new">NEW</p>`], listWallet);
            });
          }
        });
    }
  }
};

sendTo.onclick = () => {
  const data = listBalance.data;
  const toAddress = inputAddressTo.value.trim();
  if (!toAddress) {
    alert("Receive address is empty");
    return;
  }
  if (data && data.length) {
    sendTo.classList.add('btn-disabled');
    let completedCount = 0;
    for (let index = 0; index < data.length; index++) {
      const account = data[index];
      arbContract.methods.balanceOf(account.address).call({ from: account.address })
        .then((balance) => {
          if (balance > 0) {
            editRow(index + 1, [account.address, web3.utils.fromWei(balance), "ARB", `<p class="status pending">PENDING</p>`], listBalance);
            transferTokenARB(account, toAddress, balance).then((receipt) => {
              editRow(index + 1, [account.address, web3.utils.fromWei(balance), "ARB", `<p class="status claimed">CLAIMED</p>`], listBalance);
            }).catch((error) => {
              editRow(index + 1, [account.address, web3.utils.fromWei(balance), "ARB", `<p class="status new">NEW</p>`], listBalance);
            }).finally(() => {
              completedCount++;
              checkCompleted();
            });
          }
          else {
            completedCount++;
            checkCompleted();
          }
        })
        .catch((error) => {
          completedCount++;
          checkCompleted();
        });
    }

    function checkCompleted() {
      if (completedCount == data.length) {
        sendTo.classList.remove('btn-disabled');
        alert("Done!!!");
      }
    }
  }
  sendTo.classList.add('btn-disabled');
}

function addNewRow(rowData, list) {
  if (list && rowData) {
    let row = list.insertRow(1);
    for (let index = 0; index < rowData.length; index++) {
      let cell = row.insertCell(index);
      cell.innerHTML = rowData[index];
    }
    return row;
  }
  return null;
}

function editRow(index, rowData, list) {
  if (list && rowData) {
    const rows = list.rows;
    if (index < rows.length) {
      const row = rows[index];
      for (let j = 0; j < rowData.length; j++) {
        let cell = row.cells[j];
        cell.innerHTML = rowData[j];
      }
    }
  }
}

function clear(list) {
  if (list) {
    while (list.rows.length > 1) {
      list.deleteRow(1);
    }
    list.data = [];
  }
}


function addWallet(wallet) {
  wallet = wallet.trim();
  let account = web3.eth.accounts.privateKeyToAccount(wallet);
  if (account) {
    contract.methods.claimableTokens(account.address).call({ from: account.address })
      .then((balance) => {
        addNewRow([account.address, web3.utils.fromWei(balance), "ARB", `<p class="status new">NEW</p>`], listWallet);
        listWallet.data = [...listWallet.data, account];
      });
  }
}

function addBalance(wallet) {
  wallet = wallet.trim();
  let account = web3.eth.accounts.privateKeyToAccount(wallet);
  if (account) {
    arbContract.methods.balanceOf(account.address).call({ from: account.address })
      .then((balance) => {
        addNewRow([account.address, web3.utils.fromWei(balance), "ARB", `<p class="status new">NEW</p>`], listBalance);
        listBalance.data = [...listBalance.data, account];
      });
  }
}

async function claimToken(accountFrom) {
  const claimTx = contract.methods.claim();
  console.log(
    `Calling the claim function by ${accountFrom.address}`
  );
  // Sign Tx with PK
  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      to: contractAddress,
      data: claimTx.encodeABI(),
      gas: await transfer.estimateGas({
        from: accountFrom.address,
        gasPrice: "0x3b9aca00"
      }),
    },
    accountFrom.privateKey
  );
  // Send Tx and Wait for Receipt
  const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
  console.log(`Tx successful with hash: ${createReceipt.transactionHash}`);
  return createReceipt;
}

async function transferTokenARB(accountFrom, toAddress, value) {
  const transfer = arbContract.methods.transfer(toAddress, value);
  console.log(
    `Calling the claim function by ${accountFrom.address} ${await transfer.estimateGas({ from: "0xd5546d61d8925E706706B84F175F49337bb95B8f", gasPrice: "0x3b9aca00" })}`
  );
  // Sign Tx with PK
  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      to: arbAddress,
      data: transfer.encodeABI(),
      gas: await transfer.estimateGas({
        from: accountFrom.address,
        gasPrice: "0x3b9aca00"
      }),
    },
    accountFrom.privateKey
  );
  // Send Tx and Wait for Receipt
  const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
  console.log(`Tx successful with hash: ${createReceipt.transactionHash}`);
  return createReceipt;
}