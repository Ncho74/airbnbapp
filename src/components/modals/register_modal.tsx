"use client";
import Modal from "./Modal";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import {FcGoogle} from "react-icons/fc"
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/hooks/user_register_modal";
import Heading from "../heading";
import Input from "../inputs/input";
import {toast} from "react-hot-toast"
import Button from "../Button";
import { IoLogoGoogle } from "react-icons/io";
import { BiGitBranch } from "react-icons/bi";

const RegisterModal = () => {
  const regisetModal = useRegisterModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        regisetModal.onClose();
      })
      .catch((error) => {
       toast.error("Something went wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome to Airbnb"
        center={false}
        subtitle="Create an account"
      />
      <Input
        required={true}
        disabled={isLoading}
        register={register}
        id="email"
        label="Email"
        errors={errors}
      />
      <Input
        required={true}
        disabled={isLoading}
        register={register}
        id="name"
        label="name"
        errors={errors}
      />
      <Input
        required={true}
        disabled={isLoading}
        register={register}
        id="password"
        label="Password"
        errors={errors}
      />
    </div>
  );

  const footerContent=(
    <div className=" flex flex-col gap-4 mt-3">
      <hr />
      <Button outline  onClick={() => { } } icon={FcGoogle} label={"Continue with Google"}/>
      <Button outline  onClick={() => { } } icon={AiFillGithub} label={"Continue with GitHub"}/>
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="  justify-center flex flex-row items-center gap-2">
         <div>  Already have an account?</div>
         <div  className="text-neutral-800 cursor-pointer hover:underline" onClick={regisetModal.onClose}>
          login
         </div>

        </div>
      </div>
    </div>
  );

  

  return (
    <>
      <Modal
        isOpen={regisetModal.isOpen}
        onClose={regisetModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        actionLabel="Continue"
        title="Register"
        body={bodyContent}
        footer={footerContent }
      />
    </>
  );
};

export default RegisterModal;



