import './Modal.styles.css'
import { useErrorModal } from '../ErrorModalProvider/ErrorModalProvider'

export const ErrorModal = () => {
const {toggleErrorModal, isVisibleModal, errorText} = useErrorModal();
const {name, message} = errorText;

    if (isVisibleModal) {
    return(
<div className='modal-overlay'>
      <div className='modal'>
        <div className='modal-text'>
            <h2>{name}</h2>
            <span>{message}</span>
        </div>
        <span onClick={toggleErrorModal} className='modal-close'>&times;</span>
      </div>
    </div>
    );
}

    return;
};