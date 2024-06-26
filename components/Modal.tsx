"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
export default function ModalOn({ title, overview, button, className }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className={className} onPress={onOpen}>
        {button}
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                {title}
              </ModalHeader>
              <ModalBody className="text-white">{overview}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
