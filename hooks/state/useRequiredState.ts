import { useState, useCallback } from 'react';

const useRequiredState = (initialValue: any) => {
    const [value, setValue] = useState(initialValue);
    const [isValid, setValid] = useState(!!initialValue);
    const [isDirty, setDirty] = useState(false);

    const updateValue = useCallback(newValue => {
        setValue(() => newValue);
        setValid(() => !!newValue);
        setDirty(true);
    }, []);

    return [value, updateValue, isValid, isDirty];
};

export default useRequiredState;
