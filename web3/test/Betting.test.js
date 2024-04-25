const { assert, expect } = require("chai");
const { network, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const PUBLIC_KEY = process.env.PUBLIC_KEY;
!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Betting Testing testing", function () {
      let Betting, deployer,user1;
      beforeEach(async () => {
        accounts = await ethers.getSigners();
        deployer = accounts[0];
        await deployments.fixture(["Bet"]);
        Betting = await ethers.getContract("Bet");
      });

      describe("Constructor", () => {
        it("Owner Check", async () => {
          const name = await Betting.getOwner();
          assert(name.toString(), deployer.toString());
        });
        it("Entry Fees", async () => {
          const value = await Betting.getEntryFee();
          assert(value.toString(), "1");
        });
      });
    });
