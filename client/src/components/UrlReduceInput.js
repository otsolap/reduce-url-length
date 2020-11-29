import React, { useState } from 'react'
import axios from 'axios'
import callBackUri from '../constants/constants';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';



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
            .post(callBackUri, reduceUrl)
            .then(response => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>
            <FormControl margin='normal' className="reduceUrl" action="/reduceurls" >
                <InputLabel color='primary' htmlFor="fullUrl" name="fullUrl">Reduce Url  </InputLabel>
                <Input color='primary' onChange={changeValueHandler} placeholder="Cast your spell" type="url" name="fullUrl" id="fullUrl" required />
                <Button variant="contained" color="primary" onClick={addSubmitHandler} type="submit">Reduce Url</Button>
            </FormControl>
        </div>
    )
}

export default UrlShortenerInput;