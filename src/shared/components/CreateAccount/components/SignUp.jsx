import { EnvelopeSimple, LockKey, UserIcon } from "Assets/svgs";
import { Button } from "Components/Button";
import { Input } from "Components/Input";
import React from "react";

const SignUp = () => {
  return (
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
          icon={<LockKey className={`h-full w-full`} pathFill="#BDBDBD" />}
        />
      </div>
      <div className="w-full md:w-[330px] h-[46px]">
        <Input
          placeholder={"Confirm Password"}
          icon={<LockKey className={`h-full w-full`} pathFill="#BDBDBD" />}
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
  );
};

export default SignUp;
