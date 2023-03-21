// Add lib
const web3 = new Web3("https://arb1.arbitrum.io/rpc");
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const contract = new web3.eth.Contract([{ "inputs": [{ "internalType": "contract IERC20VotesUpgradeable", "name": "_token", "type": "address" }, { "internalType": "address payable", "name": "_sweepReceiver", "type": "address" }, { "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "uint256", "name": "_claimPeriodStart", "type": "uint256" }, { "internalType": "uint256", "name": "_claimPeriodEnd", "type": "uint256" }, { "internalType": "address", "name": "delegateTo", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "recipient", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "CanClaim", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "recipient", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "HasClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newSweepReceiver", "type": "address" }], "name": "SweepReceiverSet", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Swept", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "recipient", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdrawal", "type": "event" }, { "inputs": [], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }, { "internalType": "uint256", "name": "expiry", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "claimAndDelegate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claimPeriodEnd", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "claimPeriodStart", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "claimableTokens", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_recipients", "type": "address[]" }, { "internalType": "uint256[]", "name": "_claimableAmount", "type": "uint256[]" }], "name": "setRecipients", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "_sweepReceiver", "type": "address" }], "name": "setSweepReciever", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sweep", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sweepReceiver", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20VotesUpgradeable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalClaimable", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }], '0x67a24ce4321ab3af51c2d0a4801c3e111d88c9d9');
const contractAddress = "0x67a24ce4321ab3af51c2d0a4801c3e111d88c9d9";
const accountFrom = {
  address: "0xd5546d61d8925E706706B84F175F49337bb95B8f",
  privateKey: "0xd3d15d563fcd4e5276aea3d07e703bd2a2d021e4c40b182837df701ce00e1f0"
}
// let web3 = new Web3("https://arb1.arbitrum.io/rpc");
// // let account = web3.eth.accounts.privateKeyToAccount('0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709');
// contract.defaultAccount = '0x64632f5E5a17f6e42c300187968a055afF008c56';
// console.error(contract);
// contract.methods.claim().call({ from: '0x64632f5E5a17f6e42c300187968a055afF008c56' }, (error, result) => {
//   console.error(error, result)
// });

var listWallet = $('#js-list-wallet');
listWallet.data = [];

var btn = $('#js-create-wallet');
btn.onclick = () => {
  alert("Hello");
}

var loadLb = $('#js-load-label');
var loadBtn = $('#js-load-wallet');
var claimBtn = $('#js-claim-all');
var clearBtn = $('#js-clear-wallet');

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
          //if (balance > 0) {
          editRow(index + 1, [account.address, web3.utils.fromWei(balance), "ARB", `<p class="status pending">PENDING</p>`], listWallet);
          claimToken(account).then((receipt) => {
            editRow(index + 1, [account.address, web3.utils.fromWei(balance), "ARB", `<p class="status claimed">CLAIMED</p>`], listWallet);
          }).catch((error) => {
            editRow(index + 1, [account.address, web3.utils.fromWei(balance), "ARB", `<p class="status new">NEW</p>`], listWallet);
          });
          //}
        });
    }
  }
};

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
        const row = addNewRow([account.address, web3.utils.fromWei(balance), "ARB", `<p class="status new">NEW</p>`], listWallet);
        listWallet.data = [...listWallet.data, account];
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
      gas: await claimTx.estimateGas(),
    },
    accountFrom.privateKey
  );
  // Send Tx and Wait for Receipt
  const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
  console.log(`Tx successful with hash: ${createReceipt.transactionHash}`);
  return createReceipt;
}