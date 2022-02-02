import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link';

const axios = require('axios').default;

export default function Index({ heros }) {
  return (
    <div className="container">
      <h1 className='display-2'>Superhero Identity Manager</h1>
      <div>
        {heros && heros.map((hero) => (
          <MDBCard style={{ maxWidth: '22rem' }} className="my-2" key={hero.superHero}>
            <MDBCardBody>
              <MDBCardTitle>{hero.superHero}</MDBCardTitle>
              <MDBCardText>
                Reveal Identity
              </MDBCardText>
              <Link href={`/${hero._id}`} passHref><MDBBtn className='mx-2'>View hero</MDBBtn></Link>
              <Link href={`/${hero._id}/edit`} passHref><MDBBtn className='mx-2'>Edit hero</MDBBtn></Link>
            </MDBCardBody>
          </MDBCard>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = (await axios("http://localhost:3000/api/hero")) || [];
  const { hero } = res.data;
  return {
    props: { heros: hero }
  }
}