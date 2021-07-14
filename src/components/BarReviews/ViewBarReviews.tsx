import React, { Component } from 'react'
// import EditBarReview from './EditBarReview';
// import DeleteBarReview from './DeleteBarReview';
import APIURL from '../../helpers/environment';
import { Button } from 'reactstrap';


export interface BarReviewInfo {
    id: number,
        barName: string,
        wineListRating: number, 
        cocktailRating: number,
        foodRating: number,
        atmosphereRating: number,
        outdoorSeating: boolean,
        zipcode: number,
        notes: string,
        username: string,
        date: string,
}

type AcceptedProps = {
    sessionToken: string,
    allBarReviews: {
        id: number,
        barName: string,
        wineListRating: number, 
        cocktailRating: number,
        foodRating: number,
        atmosphereRating: number,
        outdoorSeating: boolean,
        zipcode: number,
        notes: string,
        username: string,
        date: string,
    },
    updateReview: {
        id: number,
        barName: string,
        wineListRating: number,
        cocktailRating: number,
        foodRating: number,
        atmosphereRating: number,
        outdoorSeating: boolean,
        zipcode: number,
        notes: string,
        username: string,
        date: string,
    },
    deleteReview: {
        id: number,
        barName: string,
        wineListRating: number,
        cocktailRating: number,
        foodRating: number,
        atmosphereRating: number,
        outdoorSeating: boolean,
        zipcode: number,
        notes: string,
        username: string,
        date: string,
    }
}

type ViewBRState = {
    barReviews: BarReviewInfo[]
}

export default class ViewBarReviews extends Component<AcceptedProps, ViewBRState> {
    constructor (props: AcceptedProps) {
        super(props);
        this.state = {
            barReviews: [{
                id: 0,
                barName: '',
                wineListRating: 0,
                cocktailRating: 0,
                foodRating: 0,
                atmosphereRating: 0,
                outdoorSeating: false,
                zipcode: 0,
                notes: '',
                username: '',
                date: '',
            }]
        }
    }

    fetchReviews = async () =>  {
        fetch(`${APIURL}/barReview/all`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken,
            })
        }).then(res => res.json())
        .then(barReviews => this.setState({barReviews: barReviews}))
        .catch((err) => console.log(err))
    }

    componentDidMount() {
        this.fetchReviews()
    }

    render() {
        const { barReviews } = this.state;
        return(
            <div className='mainDiv'>
                <div className='brMap'>
                    {barReviews.map(barReviews => {
                        return( 
                        <dl key={barReviews.id}>
                            
                            <h3>{barReviews.barName}</h3>
                            <dt>Wine List Rating: {barReviews.wineListRating}/10</dt>
                            <dt>Cocktail Rating: {barReviews.cocktailRating}/10</dt>
                            <dt>Food Rating: {barReviews.foodRating}/10</dt>
                            <dt>Atmosphere Rating: {barReviews.atmosphereRating}/10</dt>
                            <dt>Zip Code: {barReviews.zipcode}</dt>
                            <dt>Notes: </dt>
                            <dd>{barReviews.notes}</dd>
                            <p>Submitted by: {barReviews.username} on {barReviews.date}</p>
                            <h3>Need to edit this Review?</h3>
                            {/*<EditBarReview updateReview={this.props.updateReview} sessionToken={this.props.sessionToken}/> */}
                            <Button>
                                Delete Review
                            {/* <DeleteBarReview sessionToken={this.props.sessionToken} deleteReview={this.props.deleteReview}/> */}
                            </Button>
                        </dl>     
                        )
                    })}    
                </div>
            </div>
        )
        }
}
