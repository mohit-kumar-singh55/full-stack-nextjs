import React, { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link';
import { useRouter } from 'next/router';        // used for redirecting

const axios = require('axios').default;

function EditHero({ heros }) {
    const [form, setForm] = useState({
        superHero: heros.superHero,
        realName: heros.realName
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const router = useRouter();
    const heroId = router.query.id;

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            const res = await axios(`http://localhost:3000/api/hero/${heroId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(form)
            })

            // Redirecting
            router.push("/");
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container'>
            <h1 className='display-3'>Edit the hero</h1>
            <form onSubmit={handleForm}>
                <MDBInput
                    label="Superhero"
                    type="text"
                    name="superHero"
                    onChange={handleChange}
                    value={form.superHero}
                />
                <MDBInput className='my-2'
                    label="Real Name"
                    type="text"
                    name="realName"
                    onChange={handleChange}
                    value={form.realName}
                />
                <MDBBtn type='submit'>Save</MDBBtn>
            </form>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const id = params.id;
    const res = (await axios(`http://localhost:3000/api/hero/${id}`)) || [];
    const { hero } = res.data;
    return {
        props: { heros: hero }
    }
}

export default EditHero;