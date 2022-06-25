/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  FullUpgradableSuperTokenProxy,
  FullUpgradableSuperTokenProxyInterface,
} from "../../../../../@superfluid-finance/ethereum-contracts/contracts/superfluid/FullUpgradableSuperTokenProxy";

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103af806100206000396000f3fe6080604052600436106100225760003560e01c80638129fc1c1461003b57610031565b366100315761002f610052565b005b610039610052565b005b34801561004757600080fd5b5061005061006c565b005b61005a61012a565b61006a61006561012c565b610205565b565b60007fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a0549050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610101576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100f890610288565b60405180910390fd5b339050807fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a05550565b565b6000807fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a0549050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101905761018f6102a8565b5b8073ffffffffffffffffffffffffffffffffffffffff16639470a5b26040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ff919061034c565b91505090565b3660008037600080366000845af43d6000803e8060008114610226573d6000f35b3d6000fd5b600082825260208201905092915050565b7f416c726561647920696e697469616c697a656400000000000000000000000000600082015250565b600061027260138361022b565b915061027d8261023c565b602082019050919050565b600060208201905081810360008301526102a181610265565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610307826102dc565b9050919050565b6000610319826102fc565b9050919050565b6103298161030e565b811461033457600080fd5b50565b60008151905061034681610320565b92915050565b600060208284031215610362576103616102d7565b5b600061037084828501610337565b9150509291505056fea2646970667358221220b2f5a658a4562716a14d6bd1f223a37fbd1d73f5960dbfd0985bec9c6fac5af464736f6c634300080e0033";

type FullUpgradableSuperTokenProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FullUpgradableSuperTokenProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FullUpgradableSuperTokenProxy__factory extends ContractFactory {
  constructor(...args: FullUpgradableSuperTokenProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FullUpgradableSuperTokenProxy> {
    return super.deploy(
      overrides || {}
    ) as Promise<FullUpgradableSuperTokenProxy>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FullUpgradableSuperTokenProxy {
    return super.attach(address) as FullUpgradableSuperTokenProxy;
  }
  override connect(signer: Signer): FullUpgradableSuperTokenProxy__factory {
    return super.connect(signer) as FullUpgradableSuperTokenProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FullUpgradableSuperTokenProxyInterface {
    return new utils.Interface(_abi) as FullUpgradableSuperTokenProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FullUpgradableSuperTokenProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FullUpgradableSuperTokenProxy;
  }
}