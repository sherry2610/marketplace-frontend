import { Routes, Route } from "react-router-dom";

import { ScreenWrapper } from "Components/ScreenWrapper";
import {
  CreateACcount,
  Home,
  WalletConnect,
  ArtistRankings,
  MarketPlace,
  ArtistPage,
  NFTPage,
} from "./LazyLoad";

const HomeScreen = () => (
  <ScreenWrapper>
    <Home />
  </ScreenWrapper>
);
const CreateAccountScreen = () => (
  <ScreenWrapper>
    <CreateACcount />
  </ScreenWrapper>
);
const WalletConnectScreen = () => (
  <ScreenWrapper>
    <WalletConnect />
  </ScreenWrapper>
);
const ArtistRankingScreen = () => (
  <ScreenWrapper>
    <ArtistRankings />
  </ScreenWrapper>
);
const MarketPlaceScreen = () => (
  <ScreenWrapper>
    <MarketPlace />
  </ScreenWrapper>
);
const ArtistScreen = () => (
  <ScreenWrapper>
    <ArtistPage />
  </ScreenWrapper>
);
const NFTScreen = () => (
  <ScreenWrapper>
    <NFTPage />
  </ScreenWrapper>
);

export function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/create-account" element={<CreateAccountScreen />} />
        <Route path="/connect-wallet" element={<WalletConnectScreen />} />
        <Route path="/rankings" element={<ArtistRankingScreen />} />
        <Route path="/marketplace" element={<MarketPlaceScreen />} />
        <Route path="/artist" element={<ArtistScreen />} />
        <Route path="/nft" element={<NFTScreen />} />

        {/* <Route Component={NotFoundRoute} /> */}
      </Routes>
    </>
  );
}
