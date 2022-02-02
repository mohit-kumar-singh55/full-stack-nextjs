import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link';

const axios = require('axios').default;

export default function EachHero({ heros }) {
    return (
        <div className="container" >
            <h1 className='display-2'>Identiy of hero</h1>
            <div>
                <MDBCard style={{ maxWidth: '22rem' }} className="my-2">
                    <MDBCardBody>
                        <MDBCardTitle>{heros.superHero}</MDBCardTitle>
                        <MDBCardText>
                            {heros.realName}
                        </MDBCardText>
                        <MDBBtn className='btn btn-danger'>Delete hero</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div >
    );
}

export async function getServerSideProps({ params }) {
    const id = params.id;
    const res = (await axios(`http://localhost:3000/api/hero/${id}`)) || [];
    const { hero } = res.data;
    return {
        props: { heros: hero }
    }
}
