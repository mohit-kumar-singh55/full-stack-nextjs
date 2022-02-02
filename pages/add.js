import React, { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link';
import Router from 'next/router';        // used for redirecting

const axios = require('axios').default;

function AddNewHero() {
    const [form, setForm] = useState({
        superHero: '',
        realName: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const res = await axios('http://localhost:3000/api/hero', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(form)
            })

            // Redirecting
            Router.push("/");
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container'>
            <h1 className='display-3'>Add a new hero identity</h1>
            <form onSubmit={handleForm}>
                <MDBInput
                    label="Superhero"
                    type="text"
                    name="superHero"
                    onChange={handleChange}
                />
                <MDBInput className='my-2'
                    label="Real Name"
                    type="text"
                    name="realName"
                    onChange={handleChange}
                />
                <MDBBtn type='submit'>Add</MDBBtn>
            </form>
        </div>
    )
}

export default AddNewHero;