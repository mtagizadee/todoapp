import React, {useCallback} from 'react';

const Modal = ({children, setModal, modal}) => {
    const onBackClick = useCallback(() => {
        setModal(false);
    },[]);


    return (
        <>
            {modal &&
                <div onClick={onBackClick} className='full-screen center-content z-50 fixed top-0 left-0 bg-black bg-opacity-30'>
                    <div className='modal' onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;