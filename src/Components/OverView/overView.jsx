import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardFooter,
  MDBListGroupItem,
  MDBListGroup,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";

import { getSpecificRestaurant } from "../../redux/reducers/restaurants/restaurant.action";
import { getReview } from "../../redux/reducers/review/review.action";

function OverView() {
  const [review, setReview] = useState([]);
  const { _id } = useParams();
  // console.log(_id);

  const reduxState = useSelector(
    (globalState) => globalState.restaurants.selectedRestaurant.restaurant
  );
  console.log(reduxState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpecificRestaurant(_id));
  }, []);

  useEffect(() => {
    if (reduxState !== null) {
      dispatch(getReview(_id)).then((data) => setReview(data.payload.reviews));
    }
  }, []);

  return (
    <div className="p-3">
      <MDBCard style={{ width: "18rem", padding: "10px" }}>
        <MDBListGroup flush>
          <MDBListGroupItem> {reduxState?.name} </MDBListGroupItem>
          <MDBListGroupItem>{reduxState?.address}</MDBListGroupItem>
          <MDBListGroupItem>{reduxState?.restaurantTimings}</MDBListGroupItem>
        </MDBListGroup>
        <MDBCardFooter>open Time</MDBCardFooter>
      </MDBCard>

      <div>
        <h4 className="text-lg font-medium my-4">{
          reduxState?.cuisine.map((cuisineName,index)=>(
            <span
            key={index}
            className="border border-gray-600 text-blue-600 px-2 py-1 "
          >
            {cuisineName}
          </span>
          ))
        }</h4>
        <span className="border border-gray-600  px-2 py-1 ">Noodles </span>
      </div>

      <div>
        <h4 className="text-lg font-medium">{reduxState?.averageCost}</h4>
        <h6>for one order (approx.)</h6>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Reviews</h3>

        <small className="text-gray-500">{review.map((data,index)=>(
          <div key={index}>
          <p className="w-full text-gray-600 font-light text-base">{data.createdAt}</p>
          <p className="w-full text-gray-600 font-light text-base">{data.reviewText}</p>
          </div>
          
        ))}</small>
       
      </div>
    </div>
  );
}

export default OverView;