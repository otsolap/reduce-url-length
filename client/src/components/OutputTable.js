import React, { useState, useEffect } from 'react'
import callBackUri from '../constants/constants';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';

const UrlShortenerOutput = () => {
    const [reducedUrls, setReducedUrl] = useState([])

    useEffect(() => {
        axios
            .get(callBackUri)
            .then((response) => {
                const urls = response.data
                setReducedUrl(urls);
            });
    }, [])

    const reducedUrlsList = reducedUrls.map((urls) => {
        let webUrl = new URL(`${window.location.origin}`)

        return (
            <TableRow label={urls._id} value={urls.value}>
                <TableCell align="left"><a href={urls.full}>{urls.full}</a></TableCell>
                <TableCell align="right"><a href={urls.full}>{webUrl.host}/{urls.reduced}</a></TableCell>
                <Divider />
            </TableRow>
        )
    })

    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Full Url</TableCell>
                            <TableCell>Reduced Url</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reducedUrlsList}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default UrlShortenerOutput;