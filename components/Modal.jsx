"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const Modal = ({ children }) => {
  const router = useRouter();
  const modalRef = useRef(null);
  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);
  function onHide() {
    router.back();
  }
  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="shadow-gray-300 shadow-lg border border-gray-300 flex flex-col p-2 pb-10 mx-10 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100"
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer">
        <Image src="/xmark.svg" alt="close" width={30} height={30} />
      </span>
      {children}
    </dialog>,
    document.getElementById("root-portal-container"),
  );
};

export default Modal;
