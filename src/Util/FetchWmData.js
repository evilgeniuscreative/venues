import React, { useEffect, useContext, useState } from 'react';


/*/--------------  WIKIMEDIA  ----------------/*/

async function FetchWmData(searchTerm) {
    try {
        let url =
            'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=' +
            encodeURIComponent(searchTerm) +
            '&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url&iiurlwidth=1500&origin=*';
        let response = await fetch(url, {
            headers: {
                Authorization: process.env.REACT_APP_WM_TOKEN,
                'Api-User-Agent': 'Venues',
            },
        });

        return await response.json();

    } catch (error) {
        console.error('Error (FetchWmData):', error);
        // what do we want to do here if there is an error? show an alert ?
        throw error; // Re-throw the error to handle it outside this function if needed
    }
}

/*/--------------  END  ----------------/*/

export default FetchWmData;