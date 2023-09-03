import React from 'react';
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import QueryText from '../QueryText/QueryText';
import QueryButton from '../QueryButton/QueryButton';

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
            <QueryText fontSizeBig={25} fontSizeSmall={15}>
              {props.headerText}
            </QueryText>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody sx={{ margin: '2vw' }}>
            {props.contentType === 'jsx' ? (
              props.nodes
            ) : (
              <Box>
                {props.text.map((txt, index) => (
                  <QueryText
                    key={index}
                    fontSizeBig={20}
                    fontSizeSmall={10}
                    lineHeight={2}
                    sx={{ marginBottom: '2rem' }}>
                    {txt}
                  </QueryText>
                ))}
              </Box>
            )}
          </ModalBody>
          <ModalFooter>
            <QueryButton
              fontSizeBig={undefined}
              fontSizeSmall={10}
              variant={'moonstone'}
              onClick={onClose}>
              Close
            </QueryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
);

export default MoreModal;
