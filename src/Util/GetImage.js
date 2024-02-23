import {useEffect, useState} from "react";
import FetchWMData from "./FetchWmData";

function GetImage(venueDetails){
    const [thisVenue, setThisVenue] = useState(null);
    const [venueImg, setVenueImg] = useState('');

    // THIS IS COPIED MORE OR LESS FROM WHEN IT WORKED ON DETAIL.JS

    useEffect( (venueDetails)=>{
        async function getUsableImage(venueDetails) {
            try {
                // Fetch additional data based on venue ID
                // let detailedSearchTerm = thisVenue.name;
                // if (thisVenue.city && thisVenue.city.name) {
                //   detailedSearchTerm = thisVenue.name + thisVenue.city.name;
                // }
                const vimg = await FetchWMData(venueDetails); // Use thisVenue.name or any other identifier that corresponds to the venue
                const whichPage = Object.keys(vimg.query.pages)[0];
                const WMimg = vimg.query.pages[whichPage].imageinfo[0].thumburl;
                console.log('WMimg (GetImage.js)', WMimg);
                setVenueImg(WMimg);
            } catch (error) {
                console.error('Error:', error);
            }
        }

     getUsableImage();

    })
}

export default GetImage;

