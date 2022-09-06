import React from 'react';

const Option = ({color, completed, onClick}) => {
    return (
        <div className='rounded-2xl bg-primary-bg h-[3em] relative'>
            <div
                onClick={onClick}
                className={`w-[20px] h-[20px] rounded-[50%] clickable ${completed && 'mt-7'}`}
                style={{
                    backgroundColor: color
                }}
            />
        </div>
    );
};

export default Option;