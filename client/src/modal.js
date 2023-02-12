import ReactDOM from 'react-dom'
import './modal.css'

const Modal = ({show, close, onEditClick, onReviewClick}) => {

    if (!show) {
        return null
    }

    return ReactDOM.createPortal (
        <div className="modal-bg">
            <div className="modal">
                <div className='options-list'>
                    <div className='options-item edit'>
                        <h3>Edit Deck</h3>
                    </div>
                    <div className='options-item review'>
                        <h3>Review Deck</h3>
                    </div>
                </div>
                <button onClick={close}>Close Modal</button>
            </div>
        </div>, document.body
    )
}

export default Modal;