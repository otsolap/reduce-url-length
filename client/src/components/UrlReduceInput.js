import React, { useState } from 'react'
import axios from 'axios'
// import { callBackUri } from '../constants';
import { callBackUriDev } from '../constants';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const UrlShortenerInput = () => {
    const [reduceUrl, setReducedUrl] = useState({
        fullUrl: '',
    })

    const changeValueHandler = (event) => {
        setReducedUrl({
            ...reduceUrl,
            [event.target.name]: event.target.value,
        });
    };

    const addSubmitHandler = (event) => {
        event.preventDefault();

        axios
            .post(callBackUriDev, reduceUrl)
            .then(response => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>
            <Form>
                <Form.Group margin='normal' className="reduceUrl" action="/reduceurls" >
                    <Form.Label color='primary' htmlFor="fullUrl" name="fullUrl">Place the Url you wish to reduce here</Form.Label>
                    <Form.Control color='primary' onChange={changeValueHandler} placeholder="Cast Spell Reduc" type="url" name="fullUrl" id="fullUrl" required />
                    <Button variant="success" onClick={addSubmitHandler} type="submit">Cast Spell</Button>
                </Form.Group>.
            </Form>
        </div>
    )
}

export default UrlShortenerInput;