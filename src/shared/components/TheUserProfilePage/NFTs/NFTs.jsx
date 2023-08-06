import { NFTCard } from "Components/DiscoverMoreNFTs";
import React from "react";
import {
  AstroFictionNFTImage,
  DistantGalaxyNFTImage,
  LifeOnEdenaNFTImage,
  MoonDancerAvatarImage,
  NebulaKidAvatarImage,
  SpaceoneAvatarImage,
} from "Assets/images";
import { useSelector } from "react-redux";
import { CreatedNFTCard } from "./CreatedNft";

const NFTS = [
  {
    artistName: "Animakid",
    artistAvatar: MoonDancerAvatarImage,
    NFTImage: DistantGalaxyNFTImage,
    NFTName: "Distant Galaxy",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Animakid",
    artistAvatar: NebulaKidAvatarImage,
    NFTImage: LifeOnEdenaNFTImage,
    NFTName: "Life On Edena",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Animakid",
    artistAvatar: SpaceoneAvatarImage,
    NFTImage: AstroFictionNFTImage,
    NFTName: "AstroFiction",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Animakid",
    artistAvatar: MoonDancerAvatarImage,
    NFTImage: DistantGalaxyNFTImage,
    NFTName: "Distant Galaxy",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Animakid",
    artistAvatar: NebulaKidAvatarImage,
    NFTImage: LifeOnEdenaNFTImage,
    NFTName: "Life On Edena",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Animakid",
    artistAvatar: SpaceoneAvatarImage,
    NFTImage: AstroFictionNFTImage,
    NFTName: "AstroFiction",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Animakid",
    artistAvatar: MoonDancerAvatarImage,
    NFTImage: DistantGalaxyNFTImage,
    NFTName: "Distant Galaxy",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Animakid",
    artistAvatar: NebulaKidAvatarImage,
    NFTImage: LifeOnEdenaNFTImage,
    NFTName: "Life On Edena",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Animakid",
    artistAvatar: SpaceoneAvatarImage,
    NFTImage: AstroFictionNFTImage,
    NFTName: "AstroFiction",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
];
export const NFTs = () => {
  const {
    user: {
      profile: { name, collections, nfts },
    },
  } = useSelector((state) => state.appSlice);

  console.log("nfts", { collections, nfts });

  return (
    <>
      {nfts?.length > 0 ? (
        <div className="w-full h-fit px-[30px] md:px-base pt-[60px] pb-20 mb-1 bg-neutral-700 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-center gap-[30px] grid">
          {nfts.map((nft, key) => (
            <CreatedNFTCard
              key={key + 1}
              NFTImage={nft?.metadata?.image}
              NFTName={nft?.metadata?.name}
              artistAvatar={NebulaKidAvatarImage}
              artistName={name}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-[200px] flex items-center justify-center">
          <p className="text-center text-white">No Created NFTs found!</p>
        </div>
      )}
    </>
  );
};
