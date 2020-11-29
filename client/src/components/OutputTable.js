import React, { useState, useEffect } from 'react'
// import { callBackUri } from '../constants';
import { callBackUriDev } from '../constants';

import Table from 'react-bootstrap/Table';
import axios from 'axios';

const UrlShortenerOutput = () => {
    const [reducedUrls, setReducedUrl] = useState([])

    useEffect(() => {
        axios
            .get(callBackUriDev)
            .then((response) => {
                const urls = response.data
                setReducedUrl(urls);
            });
    }, [])

    const reducedUrlsList = reducedUrls.map((urls) => {
        let webUrl = new URL(`${window.location.origin}`)

        return (
            <tr label={urls._id} value={urls.value}>
                <td><a href={urls.full}>{webUrl.host}/{urls.reduced}</a></td>
            </tr>
        )
    })

    return (
        <div>
            <Table aria-label="simple table">
                <th>
                    <tr>
                        <td>Reduced Url</td>
                    </tr>
                </th>
                <tbody>
                    {reducedUrlsList}
                </tbody>
            </Table>
        </div>
    )
}

export default UrlShortenerOutput;