import ErrorIcon from "Root/assets/toasts/ErrorIcon";
import WarningIcon from "Root/assets/toasts/WarningIcon";
import SuccesIcon from "Root/assets/toasts/succesIcon";
import { ERROR_ICON, SUCCESS_ICON, WARNING_ICON } from "Root/constants";
import Web3 from "web3";

export const conciseAddress = (address) => {
  if (Web3.utils.isAddress(address)) {
    return `${address.slice(0, 6)}...${address.slice(
      address.length - 4,
      address.length
    )}`;
  }
  return "-";
};

export const GetIcon = (iconName) => {
  let Icon = SuccesIcon;
  switch (iconName) {
    case SUCCESS_ICON:
      Icon = SuccesIcon;
      break;
    case WARNING_ICON:
      Icon = WarningIcon;
      break;
    case ERROR_ICON:
      Icon = ErrorIcon;
      break;
    default:
      Icon = SuccesIcon;
      break;
  }
  return Icon;
};

export const getNetworkName = (chainId) => {
  let Icon = "mumbai";
  switch (chainId) {
    case "137":
      Icon = "polygon";
      break;
    case "80001":
      Icon = "mumbai";
      break;
    default:
      Icon = "mumbai";
      break;
  }
  return Icon;
};
