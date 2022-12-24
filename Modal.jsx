import React from 'react';
import "./Modal.css"

const Modal = (props) => {

    const { show, showmodal } = props;
    const clickHandler = () => {
        props.showmodal(false);
    }

    return (
        show && <div className='modal-container'>
            <div className='content'>
                <p className='info-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas placeat magnam officia consectetur quod atque itaque rem reiciendis sapiente rerum quaerat, fugiat repudiandae provident est fugit voluptates exercitationem nostrum distinctio!
                    Dolorem nam nulla natus, perferendis enim voluptatem rem nisi! Eum incidunt vitae in saepe ea asperiores inventore aliquam suscipit beatae earum. Corporis, aliquid molestias odio obcaecati laudantium non molestiae voluptatem.</p>
                <button className='close' onClick={clickHandler}>
                    <p></p>
                    <p></p>
                </button>
            </div>
        </div>
    )
}

export default Modal