import React, { useEffect, useContext, useState } from 'react';


/*/--------------  WIKIMEDIA  ----------------/*/

async function FetchWMData(searchTerm) {
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
        console.error('Error:', error);
        // what do we want to do here if there is an error? show an alert ?
        throw error; // Re-throw the error to handle it outside this function if needed
    }
}

/*/--------------  END  ----------------/*/

function GetImage(){
    const [thisVenue, setThisVenue] = useState(null);
    const [venueImg, setVenueImg] = useState('');

    useEffect( ()=>{
        async function getUsableImage() {
            try {
                // Fetch additional data based on venue ID
                // let detailedSearchTerm = thisVenue.name;
                // if (thisVenue.city && thisVenue.city.name) {
                //   detailedSearchTerm = thisVenue.name + thisVenue.city.name;
                // }
                const vimg = await FetchWMData(thisVenue.name); // Use thisVenue.name or any other identifier that corresponds to the venue
                const whichPage = Object.keys(vimg.query.pages)[0];
                const WMimg = vimg.query.pages[whichPage].imageinfo[0].thumburl;
                setVenueImg(WMimg);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        getUsableImage();
    })
}

export {FetchWMData, GetImage};