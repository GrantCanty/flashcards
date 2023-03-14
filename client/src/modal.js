import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'
import './modal.css'

const Modal = ({show, close, onEditClick, onReviewClick, setID, increaseReviewedCount}) => {
    const navigate = useNavigate()

    if (!show) {
        return null
    }

    return ReactDOM.createPortal (
        <div className="modal-bg">
            <div className="modal">
                <div className='options-list'>
                    <div className='options-item edit' onClick={() => {
                                                                        navigate(onEditClick + '/' + setID)
                                                                        close()
                                                                        }} >
                        <h3>Edit Deck</h3>
                    </div>
                    <div className='options-item review' onClick={() => {
                                                                        navigate(onReviewClick + '/' + setID)
                                                                        increaseReviewedCount(1)
                                                                        close()
                                                                        }} >
                        <h3>Review Deck</h3>
                    </div>
                </div>
                <button onClick={close}>Close Modal</button>
            </div>
        </div>, document.body
    )
}

export default Modal;