import React from 'react';
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react';

export type MoreModalProps = {
  headerText: string;
} & (
  | {
      contentType: 'text';
      text: string[];
    }
  | {
      contentType: 'jsx';
      nodes: JSX.Element[];
    }
);

export const MoreModal = React.forwardRef<{ onOpen: () => void }, MoreModalProps>(
  (props: MoreModalProps, ref) => {
    const { onClose, onOpen, isOpen } = useDisclosure();

    React.useImperativeHandle(ref, () => ({
      onOpen
    }));
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc
        closeOnOverlayClick
        isCentered
        scrollBehavior={'inside'}>
        <ModalOverlay />
        <ModalContent maxW={'85vw'}>
          <ModalHeader sx={{ margin: '2vw 2vw 0vw 2vw' }}>
            <Text fontSize={25}>{props.headerText}</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody sx={{ margin: '2vw' }}>
            {props.contentType === 'jsx' ? (
              props.nodes
            ) : (
              <Box>
                {props.text.map((txt, index) => (
                  <Text key={index} fontSize={20} lineHeight={2} sx={{ marginBottom: '2rem' }}>
                    {txt}
                  </Text>
                ))}
              </Box>
            )}
          </ModalBody>
          <ModalFooter>
            <Button variant={'moonstone'} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
);

export default MoreModal;
