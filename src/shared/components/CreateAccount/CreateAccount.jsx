import { SpaceShipPurpleShade } from "Assets/images";
import { EnvelopeSimple, LockKey, UserIcon } from "Assets/svgs";
import { Button } from "Components/Button";
import { Input } from "Components/Input";
import React from "react";

export const CreateAccount = () => {
  return (
    <div className="w-full mb-5 pb-5 h-fit md:h-[691px] bg-zinc-800 justify-start items-center md:gap-[60px] flex md:flex-row flex-col">
      <div className="w-full md:w-1/2">
        <img className="w-full h-[691px]" src={SpaceShipPurpleShade} />
      </div>

      <div className={`px-[30px] md:px-0 w-full md:w-1/2 h-full`}>
        <div className="w-full h-[691px] py-[100px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="w-full text-white text-[51px] font-semibold capitalize leading-10">
            Create account
          </div>
          <div className="w-full text-white text-[22px] font-normal capitalize leading-9">
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </div>

          {/*  */}
          <form className="w-full h-fit flex-col justify-center gap-5 items-start inline-flex">
            <div className="w-full md:w-[330px] h-[46px]">
              <Input
                placeholder={"Username"}
                icon={<UserIcon pathFill="#BDBDBD" />}
              />
            </div>
            <div className="w-full md:w-[330px] h-[46px]">
              <Input
                placeholder={"Email Address"}
                icon={<EnvelopeSimple pathFill="#BDBDBD" />}
              />
            </div>
            <div className="w-full md:w-[330px] h-[46px]">
              <Input
                placeholder={"Password"}
                icon={
                  <LockKey className={`h-full w-full`} pathFill="#BDBDBD" />
                }
              />
            </div>
            <div className="w-full md:w-[330px] h-[46px]">
              <Input
                placeholder={"Confirm Password"}
                icon={
                  <LockKey className={`h-full w-full`} pathFill="#BDBDBD" />
                }
              />
            </div>
            <Button
              className={`w-full md:w-[330px] h-[46px] px-[50px] bg-purple-500 rounded-2xl justify-center items-center gap-3 inline-flex`}
            >
              <div className="text-center text-white text-[16px] font-semibold leading-snug">
                Create account
              </div>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
