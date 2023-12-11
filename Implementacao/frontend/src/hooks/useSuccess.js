import { useToast } from '@chakra-ui/react';

export function useSuccess(duration) {
    const toast = useToast();

    const Success = (message, description = null) => {
        toast({
            title: message,
            status: 'success',
            description,
            duration: duration || 5000,
            isClosable: true,
            position: 'top',
        });
    };
    return {
        Success,
    };
}