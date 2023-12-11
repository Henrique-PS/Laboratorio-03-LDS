export const defaultToastProperties = {
    duration: 5000,
    isClosable: true,
    position: 'top',
};

export const defaultToastWarn = {
    status: 'warning',
    ...defaultToastProperties,
};

export const toastMultipleWarns = (
    descriptions,
    cb
) => {
    console.log(descriptions)
    if (typeof descriptions === 'string')
        cb({ ...defaultToastWarn, description: descriptions });
    else
        descriptions?.forEach((description) =>
            cb({ ...defaultToastWarn, description })
        );
};