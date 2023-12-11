import { useToast } from '@chakra-ui/react';
import { defaultToastWarn, toastMultipleWarns } from '../utils/toastUtils';

export function useWarning() {
    const toast = useToast();

    const Warning = ({ title , message}) => {
        if (typeof message === 'string')
            return toast({
                ...defaultToastWarn,
                description: message,
                title: title || 'Atenção',
            });
        return toastMultipleWarns(message, toast);
    };
    return {
        Warning,
    };
}
