import React,{useState} from 'react';
import Modal from "./Modal"


function ReviewPage() {

   const [isOpen, setIsOpen] = useState(false);
   console.log(isOpen);


   const openModal = () => {
    // if (!localStorage.zomatoUser) {
    //   return alert("Please sign in to post a review");
    // }
   
     setIsOpen(true);
   };

  return (
    <div>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">ADD REVIEW</h5>
      <div className="d-flex items-center gap-2">
          <input type="radio" name="review" id="dining" />
          <label htmlFor="dining">Dining</label>
        </div>
        <div className="d-flex items-center gap-2">
          <input type="radio" name="review" id="delivery" />
          <label htmlFor="delivery">Delivery</label>
        </div>
      <button type="button" className="btn btn-primary" onClick={openModal}> add Review </button>
    </div>
  </div>
    </div>
    );
}

export default ReviewPage;
