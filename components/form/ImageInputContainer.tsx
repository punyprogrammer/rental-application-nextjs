"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import { SubmitButton } from "./Buttons";
import { type actionFunction } from "@/utils/types";
import { LuUser2 } from "react-icons/lu";
import ImageInput from "./ImageInput";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};
function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text } = props;
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
  const userIcon = (
    <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />
  );
  return (
    <div className="py-4">
      {image ? (
        <Image
          src={image}
          width={100}
          height={100}
          className="rounded-md object-cover mb-4 w-24 h-24"
          alt={name}
        />
      ) : (
        userIcon
      )}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div>
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton text="Update Profile " size="sm" />
          </FormContainer>
        </div>
      )}
    </div>
  );
}
export default ImageInputContainer;
