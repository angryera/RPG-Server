const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");

// // mainnet
// const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

// testnet
const myPrivateKeyHex = "89e27ccf4fc1198a6bdea3f426dd5bc35657f7195df6bb9adf2a25abe804b75f";

// Create web3.js middleware that signs transactions locally
const localKeyProvider = new HDWalletProvider({
    privateKeys: [myPrivateKeyHex],
    providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545',
});

const web3 = new Web3(localKeyProvider);

exports.tokenAddress = "0xF51eE462603E7E23FbC4264faaEB3d09c612e9d1";
exports.gameContractAddress = "0xCb5aD1f8C8711b47bd2fA1F264CC908D8091d213";

exports.tbgTokenABI = [{
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [{
            "internalType": "uint256",
            "name": "remaining",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "_spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [{
            "internalType": "bool",
            "name": "success",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_owner",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [{
            "internalType": "bool",
            "name": "success",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "_from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [{
            "internalType": "bool",
            "name": "success",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

exports.tbgGameContractABI = [{
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "TBG",
        "outputs": [{
            "internalType": "contract TBGInterface",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_characterName",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "_characterGender",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "_characterRace",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_characterType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_characterLevel",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_characterExp",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_characterCustomized",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "_characterweaponIndex",
                "type": "uint256"
            },
            {
                "internalType": "uint256[]",
                "name": "_characterWeapons",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_characterAttr",
                "type": "uint256[]"
            }
        ],
        "name": "addCharacter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_newItemName",
                "type": "string"
            },
            {
                "internalType": "uint256[]",
                "name": "_newweaponPrices",
                "type": "uint256[]"
            }
        ],
        "name": "addWeapons",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "claimPoint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_pointAmount",
            "type": "uint256"
        }],
        "name": "createRoom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "creatorRooms",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "_characterId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_weaponId",
                "type": "uint256"
            }
        ],
        "name": "equipWeapon",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_winner",
                "type": "address"
            }
        ],
        "name": "finishRoom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "gameWallet",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "itemCount",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "itemPrices",
        "outputs": [{
            "internalType": "string",
            "name": "name",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
        }],
        "name": "joinRoom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "maxCharacter",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "members",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ownerFee",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pointBuyRate",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pointSellRate",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "poolcollected",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "_characterId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_weaponId",
                "type": "uint256"
            }
        ],
        "name": "purchase",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "_characterId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_itemId",
                "type": "uint256"
            }
        ],
        "name": "purchaseItem",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_tokenAmount",
            "type": "uint256"
        }],
        "name": "purchasePoint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_characterId",
            "type": "uint256"
        }],
        "name": "removeCharacter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "retrieve",
        "outputs": [{
            "components": [{
                    "internalType": "string",
                    "name": "characterName",
                    "type": "string"
                },
                {
                    "internalType": "bool",
                    "name": "characterGender",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "characterRace",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "characterType",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "characterLevel",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "characterExp",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "characterCustomized",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "characterweaponIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256[]",
                    "name": "characterWeapons",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "characterAttr",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "purchasedItems",
                    "type": "uint256[]"
                }
            ],
            "internalType": "struct Character[]",
            "name": "",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "retrievePoint",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "retrievePointRate",
        "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "retrieveRoomId",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_itemId",
            "type": "uint256"
        }],
        "name": "retrieveWeaponPrice",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "rooms",
        "outputs": [{
                "internalType": "uint256",
                "name": "betAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "memberCount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "roomStatus",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "winner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "creator",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "roomsIds",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "sellFee",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
        }],
        "name": "sellPoint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "roomMembers",
                "type": "address[]"
            }
        ],
        "name": "startRoom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tempGameWallet",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenAddress",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_wallet",
            "type": "address"
        }],
        "name": "updateGameWallet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_maxCharacter",
            "type": "uint256"
        }],
        "name": "updateMaxCharacter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_fee",
            "type": "uint256"
        }],
        "name": "updateOwnerFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_rate",
            "type": "uint256"
        }],
        "name": "updatePointBuyRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_rate",
            "type": "uint256"
        }],
        "name": "updatePointSellRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_fee",
            "type": "uint256"
        }],
        "name": "updateSellFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_token",
            "type": "address"
        }],
        "name": "updateToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "_itemId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_newItemName",
                "type": "string"
            },
            {
                "internalType": "uint256[]",
                "name": "_newweaponPrices",
                "type": "uint256[]"
            }
        ],
        "name": "updateWeapons",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userCharacters",
        "outputs": [{
                "internalType": "string",
                "name": "characterName",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "characterGender",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "characterRace",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "characterType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "characterLevel",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "characterExp",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "characterCustomized",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "characterweaponIndex",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "userPoint",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userRooms",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "weaponPrices",
        "outputs": [{
            "internalType": "string",
            "name": "name",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }
];

exports.walletAddress = "0x0212F50cE54302bAc31390544D14D6B3875bB68e";

exports.tokenContract = new web3.eth.Contract(this.tbgTokenABI, this.tokenAddress);
exports.gameContract = new web3.eth.Contract(this.tbgGameContractABI, this.gameContractAddress);