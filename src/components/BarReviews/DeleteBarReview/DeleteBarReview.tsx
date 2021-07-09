import React, { Component } from 'react';



type AcceptedProps = {

}

type DeleteBRState = {
    
}

export default class DeleteBarReview extends Component<AcceptedProps, DeleteBRState> {
    constructor(props: AcceptedProps,) {
        super(props);
        this.state = {
            
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e: FormEvent)
    e.preventDefault()
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
