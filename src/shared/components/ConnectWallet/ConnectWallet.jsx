import { WalletConnectSingleShip } from "Assets/images";
import { CoinbaseLogo, MetamaskLogo, WalletConnectLogo } from "Assets/svgs";
// import { Button } from "Components/Button";
// import { Input } from "Components/Input";

import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors";
import React, { useCallback, useEffect } from "react";
import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError,
} from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { injected } from "Root/utils/web3Connectors";
import {
  resetAppSlice,
  setIsIWalletConnected,
  setUser,
} from "Root/redux/slices/appSlice";
import { useDispatch, useSelector } from "react-redux";

export const ConnectWallet = () => {
  const { activate, deactivate, account } = useWeb3React();
  const web3context = useWeb3React();
  const dispatch = useDispatch();

  useEffect(() => {
    if (account) {
      dispatch(setUser({ address: account }));
    }
  }, [account]);

  const deactivateWallet = async () => {
    await web3context.deactivate();
    console.log(web3context, "TEST", web3context.active);
    if (web3context?.connector instanceof WalletConnectConnector) {
      await web3context.connector.close();
    }

    dispatch(setIsIWalletConnected(false));

    dispatch(resetAppSlice());
    // dispatch(setActiveTrustWallet(false));
  };

  const getErrorMessage = (e) => {
    if (e instanceof UnsupportedChainIdError) {
      return "Unsupported Network";
    } else if (e instanceof NoEthereumProviderError) {
      return "No Wallet Found";
    } else if (
      e instanceof UserRejectedRequestError ||
      e?.message == "The user rejected the request."
    ) {
      return "Wallet Connection Rejected";
    } else if (e.code === -32002) {
      return "Wallet Connection Request Pending";
    } else {
      return "An Error Occurred";
    }
  };

  const activateWallet = useCallback(
    async (connector, onClose = () => {}) => {
      console.log("started", connector);
      if (
        connector instanceof WalletConnectConnector &&
        connector.walletConnectProvider?.wc?.uri
      ) {
        connector.walletConnectProvider = undefined;
      }

      await web3context
        .activate(
          connector
            ? connector
            : new InjectedConnector({
                supportedChainIds: [1, 3, 4, 5, 42, 97, 56, 137, 80001],
              }),
          undefined,
          true
        )
        .then((res) => {
          //   setLoadingF({ walletConnection: false });
          //getJWTF(web3context.account, Date.now());

          dispatch(setIsIWalletConnected(true));
        })
        .catch((e) => {
          const err = getErrorMessage(e);
          console.log("error from method", err);
          alert(err);
          // showSnackbarF({ message: err, severity: "error" });
          console.log("ERROR activateWallet -> ", e);
          //   setLoadingF({ walletConnection: false });
        });
    },
    [web3context]
  );

  const activateTrustWallet = useCallback(
    (connector, onClose = () => {}) => {
      if (
        connector instanceof WalletConnectConnector &&
        connector.walletConnectProvider?.wc?.uri
      ) {
        connector.walletConnectProvider = undefined;
      }

      web3context
        .activate(
          connector
            ? connector
            : new InjectedConnector({
                supportedChainIds: [1, 3, 4, 5, 42, 97, 56, 137, 80001],
              }),
          undefined,
          true
        )
        .then((res) => {
          //   setLoadingF({ walletConnection: false });
          //getJWTF(web3context.account, Date.now());

          console.log("activateWallet connector => ", { connector, res });
        })
        .catch((e) => {
          const err = getErrorMessage(e);
          showSnackbarF({ message: err, severity: "error" });
          console.error("ERROR activateWallet -> ", e);
          //   setLoadingF({ walletConnection: false });
        });
    },
    [web3context]
  );

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
          <button
            onClick={() => {
              // activate(connectors.injected);
              !web3context.active &&
              !(web3context?.connector instanceof InjectedConnector)
                ? activateWallet(injected)
                : deactivateWallet();
            }}
          >
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
          </button>
          {/*  */}
          <button
            onClick={() => {
              activate(connectors.walletconnect);
            }}
          >
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
          </button>
          {/*  */}
          <button
            onClick={() => {
              activate(connectors.walletlink);
            }}
          >
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
          </button>
        </div>
      </div>
    </div>
  );
};
