import {
  IAddress,
  SmartContract,
  Address,
  ContractFunction,
  Interaction,
  ApiNetworkProvider,
  AccountOnNetwork,
  NetworkConfig
} from "@dharitri/sdk-core";
import { ContractTransactionGenerator } from "../../src/sc.interactions/contract.transaction.generator";

const TEST_ADDRESS = "drt1wtm3yl58vcnj089lqy3tatkdpwklffh4pjnf27zwsa2znjyk355sph22rf";
describe("Contract transaction generator", () => {
  it('Should set transaction nonce', async () => {
    const cTxGenerator = new ContractTransactionGenerator(new ApiNetworkProvider("some-url"));

    const getAccountSpy = jest
      .spyOn(ApiNetworkProvider.prototype, "getAccount")
      // eslint-disable-next-line require-await
      .mockImplementation(jest.fn(async (_: IAddress) => new AccountOnNetwork({ nonce: 10 })));

    const getNetworkConfigSpy = jest
      .spyOn(ApiNetworkProvider.prototype, "getNetworkConfig")
      // eslint-disable-next-line require-await
      .mockImplementation(jest.fn(async () => new NetworkConfig()));

    const contract = new SmartContract({ address: new Address(TEST_ADDRESS) });
    const dummyFunction = new ContractFunction("dummy");
    const interaction = new Interaction(contract, dummyFunction, []);

    interaction
      .withNonce(7)
      .withGasLimit(20000000);

    const tx = await cTxGenerator.createTransaction(interaction, new Address(TEST_ADDRESS));

    expect(getAccountSpy).toHaveBeenCalled();
    expect(getNetworkConfigSpy).toHaveBeenCalled();

    expect(tx.getNonce()).toStrictEqual(10);
  });
});
