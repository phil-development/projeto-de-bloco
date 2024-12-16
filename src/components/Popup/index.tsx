import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Overlay, Modal, CloseButton, Title, Content } from './styles';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    message?: string;
    children?: React.ReactNode;
    autoCloseDuration?: number;
}

const Popup: React.FC<PopupProps> = ({
    isOpen,
    onClose,
    title,
    message,
    children,
    autoCloseDuration
}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            if (autoCloseDuration) {
                const id = setTimeout(() => {
                    onClose();
                }, autoCloseDuration);
                setTimerId(id);
            }
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            if (timerId) {
                clearTimeout(timerId);
                setTimerId(null);
            }
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            if (timerId) {
                clearTimeout(timerId);
            }
        };
    }, [isOpen, autoCloseDuration, timerId]);

    if (!isOpen) {
        return null;
    }

    return (
        <Overlay>
            <Modal ref={modalRef}>
                <CloseButton onClick={onClose}>
                    <AiOutlineClose size={20} />
                </CloseButton>

                {title && <Title>{title}</Title>}
                <Content>
                    {message && <p>{message}</p>}
                    {children}
                </Content>
            </Modal>
        </Overlay>
    );
};

export default Popup;