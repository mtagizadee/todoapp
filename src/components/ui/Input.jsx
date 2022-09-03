import React, {memo, useCallback} from 'react';

const Input = memo(({
    label,
    value,
    setValue,
    type,
    className
}) => {
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    },[])

    return (
        <div className={`w-full ${className}`}>
            <p className='bg-primary-card relative text-primary-border text-sm relative top-2.5 left-6 max-w-[100px] flex justify-center'> {label} </p>
            <input
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    );
});

export default Input;