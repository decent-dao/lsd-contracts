/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  LiquidityHub,
  LiquidityHubInterface,
} from "../../contracts/LiquidityHub";

const _abi = [
  {
    inputs: [],
    name: "_fairClaim",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "xtoken",
        type: "address",
      },
      {
        internalType: "address",
        name: "dtoken",
        type: "address",
      },
    ],
    name: "cliamAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a2a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806336db63721461003b578063ec5baa5614610057575b600080fd5b6100556004803603810190610050919061053d565b610075565b005b61005f6101ce565b60405161006c9190610596565b60405180910390f35b60008273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016100b091906105c0565b602060405180830381865afa1580156100cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100f19190610607565b905060008273ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161012e91906105c0565b602060405180830381865afa15801561014b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016f9190610607565b90506000828211156101845782905080610189565b819050805b506101c7336101966101ce565b836101a19190610663565b8773ffffffffffffffffffffffffffffffffffffffff166101d79092919063ffffffff16565b5050505050565b60006001905090565b6102588363a9059cbb60e01b84846040516024016101f69291906106bd565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061025d565b505050565b60006102bf826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166103249092919063ffffffff16565b905060008151111561031f57808060200190518101906102df919061071e565b61031e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610315906107ce565b60405180910390fd5b5b505050565b6060610333848460008561033c565b90509392505050565b606082471015610381576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037890610860565b60405180910390fd5b61038a85610450565b6103c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c0906108cc565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516103f29190610966565b60006040518083038185875af1925050503d806000811461042f576040519150601f19603f3d011682016040523d82523d6000602084013e610434565b606091505b5091509150610444828286610473565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610483578290506104d3565b6000835111156104965782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ca91906109d2565b60405180910390fd5b9392505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061050a826104df565b9050919050565b61051a816104ff565b811461052557600080fd5b50565b60008135905061053781610511565b92915050565b60008060408385031215610554576105536104da565b5b600061056285828601610528565b925050602061057385828601610528565b9150509250929050565b6000819050919050565b6105908161057d565b82525050565b60006020820190506105ab6000830184610587565b92915050565b6105ba816104ff565b82525050565b60006020820190506105d560008301846105b1565b92915050565b6105e48161057d565b81146105ef57600080fd5b50565b600081519050610601816105db565b92915050565b60006020828403121561061d5761061c6104da565b5b600061062b848285016105f2565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061066e8261057d565b91506106798361057d565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156106b2576106b1610634565b5b828202905092915050565b60006040820190506106d260008301856105b1565b6106df6020830184610587565b9392505050565b60008115159050919050565b6106fb816106e6565b811461070657600080fd5b50565b600081519050610718816106f2565b92915050565b600060208284031215610734576107336104da565b5b600061074284828501610709565b91505092915050565b600082825260208201905092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b60006107b8602a8361074b565b91506107c38261075c565b604082019050919050565b600060208201905081810360008301526107e7816107ab565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b600061084a60268361074b565b9150610855826107ee565b604082019050919050565b600060208201905081810360008301526108798161083d565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006108b6601d8361074b565b91506108c182610880565b602082019050919050565b600060208201905081810360008301526108e5816108a9565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015610920578082015181840152602081019050610905565b8381111561092f576000848401525b50505050565b6000610940826108ec565b61094a81856108f7565b935061095a818560208601610902565b80840191505092915050565b60006109728284610935565b915081905092915050565b600081519050919050565b6000601f19601f8301169050919050565b60006109a48261097d565b6109ae818561074b565b93506109be818560208601610902565b6109c781610988565b840191505092915050565b600060208201905081810360008301526109ec8184610999565b90509291505056fea264697066735822122044354f1d4dd7e3d18ecd5fb09fb3bbb9b361ea8af76eb5f5bd7ed0fa7705d82964736f6c634300080e0033";

type LiquidityHubConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidityHubConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LiquidityHub__factory extends ContractFactory {
  constructor(...args: LiquidityHubConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LiquidityHub> {
    return super.deploy(overrides || {}) as Promise<LiquidityHub>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LiquidityHub {
    return super.attach(address) as LiquidityHub;
  }
  override connect(signer: Signer): LiquidityHub__factory {
    return super.connect(signer) as LiquidityHub__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityHubInterface {
    return new utils.Interface(_abi) as LiquidityHubInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidityHub {
    return new Contract(address, _abi, signerOrProvider) as LiquidityHub;
  }
}