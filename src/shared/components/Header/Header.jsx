import {
  BrandIcon,
  HamBurgerMenu,
  StoreFrontIcon,
  UserIcon,
} from "Assets/svgs";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative `}>
      <div
        className={`lg:hidden z-[999] top-[-2px] bg-primary-bg fixed h-screen flex flex-col gap-[30px] justify-start items-center ${
          open ? classes.open : classes.NavHead
        }`}
      >
        <div className="flex w-full px-[20px] mt-[30px] items-center justify-start gap-2.5">
          <Link to={`/`} className={`flex items-center gap-[.625rem]`}>
            <img src={StoreFrontIcon} alt="" />

            <img src={BrandIcon} alt="" />
          </Link>
        </div>
        <Link
          to={`/marketplace`}
          className="flex w-full items-center justify-start gap-3 rounded-2xl px-5"
        >
          <div className="text-center text-[16px] font-semibold leading-snug text-white">
            Marketplace
          </div>
        </Link>
        <Link
          to={`/rankings`}
          className="flex w-full items-center justify-start gap-3 rounded-2xl px-5"
        >
          <div className="text-center text-[16px] font-semibold leading-snug text-white">
            Rankings
          </div>
        </Link>
        <Link
          to={`/connect-wallet`}
          className="flex w-full items-center justify-start gap-3 rounded-2xl px-5"
        >
          <div className="text-center text-[16px] font-semibold leading-snug text-white">
            Connect a wallet
          </div>
        </Link>

        <Link
          to={`/create-account`}
          className="cursor-pointer inline-flex h-[60px] w-[90%] items-center justify-start gap-3 rounded-2xl bg-purple-500 px-[30px]"
        >
          <UserIcon />

          <div className="text-center text-[16px] font-semibold leading-snug text-white hover:text-white">
            Sign Up
          </div>
        </Link>
      </div>
      <div className="inline-flex h-[100px] w-full items-center justify-between bg-zinc-800 px-[30px] md:px-[50px] py-5">
        <div className="flex items-center justify-start gap-2.5">
          <Link to={`/`} className={`flex items-center gap-[.625rem]`}>
            <img src={StoreFrontIcon} alt="" />

            <img src={BrandIcon} alt="" className="w-[150px] md:w-[200px]" />
          </Link>
        </div>

        <div className={`hidden lg:flex items-center justify-end gap-2.5`}>
          <Link
            to={`/marketplace`}
            className="flex w-[139px] items-center justify-center gap-3 rounded-2xl px-5"
          >
            <div className="text-center text-[16px] font-semibold leading-snug text-white">
              Marketplace
            </div>
          </Link>
          <Link
            to={`/rankings`}
            className="flex w-28 items-center justify-center gap-3 rounded-2xl px-5"
          >
            <div className="text-center text-[16px] font-semibold leading-snug text-white">
              Rankings
            </div>
          </Link>
          <Link
            to={`/connect-wallet`}
            className="flex w-[174px] items-center justify-center gap-3 rounded-2xl px-5"
          >
            <div className="text-center text-[16px] font-semibold leading-snug text-white">
              Connect a wallet
            </div>
          </Link>

          <Link
            to={`/create-account`}
            className="cursor-pointer inline-flex h-[60px] w-[152px] items-center justify-center gap-3 rounded-2xl bg-purple-500 px-[30px]"
          >
            <UserIcon />

            <div className="text-center text-[16px] font-semibold leading-snug text-white hover:text-white">
              Sign Up
            </div>
          </Link>
        </div>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className={`block lg:hidden cursor-pointer`}
        >
          <HamBurgerMenu />
        </div>
      </div>
    </div>
  );
};
