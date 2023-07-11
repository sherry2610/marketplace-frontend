import { WalletConnectSingleShip } from "Assets/images";
import { CoinbaseLogo, MetamaskLogo, WalletConnectLogo } from "Assets/svgs";
// import { Button } from "Components/Button";
// import { Input } from "Components/Input";
import React from "react";

export const ConnectWallet = () => {
  return (
    <div className="w-full h-fit pb-5 mb-5 md:h-[691px] bg-zinc-800 justify-start items-center md:gap-[60px] flex md:flex-row flex-col">
      <div className="w-full md:w-1/2">
        <img className="w-full h-[691px]" src={WalletConnectSingleShip} />
      </div>

      <div className={`px-[30px] md:px-0 w-full md:w-1/2 h-fit`}>
        <div className="w-full h-fit md:h-[691px] py-[100px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="w-full text-white text-[51px] font-semibold capitalize leading-20 md:leading-10">
            Connect wallet
          </div>
          <div className="w-full text-white text-[22px] font-normal capitalize leading-9">
            Choose a wallet you want to connect. There are several wallet
            providers.
          </div>

          {/*  */}
          <div className="w-full py-5 md:py-0 md:w-80 h-[72px] pl-10 pr-5 bg-neutral-700 rounded-2xl border border-purple-500 justify-start items-center gap-5 inline-flex">
            <div className="w-10 h-10 justify-center items-center flex">
              <div className="w-10 h-10 relative flex-col justify-start items-start flex">
                <div className="w-10 h-[37.08px] relative">
                  <img src={MetamaskLogo} alt="" />
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 text-white text-[22px] font-semibold capitalize leading-loose">
              Metamask
            </div>
          </div>

          {/*  */}
          <div className="w-full py-5 md:py-0 md:w-80 h-[72px] pl-10 pr-5 bg-neutral-700 rounded-2xl border border-purple-500 justify-start items-center gap-5 inline-flex">
            <div className="w-10 h-10 justify-center items-center flex">
              <div className="w-10 h-10 relative flex-col justify-start items-start flex">
                <div className="w-10 h-[37.08px] relative">
                  <img src={WalletConnectLogo} alt="" />
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 text-white text-[22px] font-semibold capitalize leading-loose">
              Wallet Connect
            </div>
          </div>
          {/*  */}
          <div className="w-full py-5 md:py-0 md:w-80 h-[72px] pl-10 pr-5 bg-neutral-700 rounded-2xl border border-purple-500 justify-start items-center gap-5 inline-flex">
            <div className="w-10 h-10 justify-center items-center flex">
              <div className="w-10 h-10 relative flex-col justify-start items-start flex">
                <div className="w-10 h-[37.08px] relative">
                  <img src={CoinbaseLogo} alt="" />
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 text-white text-[22px] font-semibold capitalize leading-loose">
              Coinbase
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
