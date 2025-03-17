"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import FormAll from "./form";

const Modalnav = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <Button color="primary" onPress={onOpen}>
        Contáctanos
      </Button>
      <Modal size="lg" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1>Contáctanos.</h1>
              </ModalHeader>
              <ModalBody className="items-center">
                <FormAll />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Modalnav;
