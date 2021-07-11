import React, { Component } from 'react';



type AcceptedProps = {
    sessionToken: string
}

type DeleteBRState = {
    barName: string,
    wineListRating: number,
    cocktailRating: number,
    foodRating: number,
    atmosphereRating: number,
    zipcode: number,
    notes:string,
    username: string,
    date: Date //! type date in server. 
}

export default class DeleteBarReview extends Component<AcceptedProps, DeleteBRState> {
    constructor(props: AcceptedProps,) {
        super(props);
        this.state = {

        }
        this.handleDelete = this.handlea.bind(this)
    }

    handleDelete()
}


// const DeleteBarReview= (props) => {
//     const deleteFetch = () => {
//         fetch(`http://localhost:5000/addBarReview/${props.barReview.id}`, {
//             method: 'DELETE',
//             headers: new Headers ({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.token
//             })
//         })
//         .then(res => console.log(res))
//         .then(() => {props.fetchbarReviews})
//     }

//     const [click, setClick] = useState(false);

//     return (
//         <div>
//             Test
//         </div>
//     )
// }
