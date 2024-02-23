import {useState} from "react";

function FooterData() {
    const [footerDataset, setFooterDataset] = useState({});
    const [footerResults, setFooterResults] = useState([]); // TO AVOID RERENDERS

    const footerDataQuery = process.env.REACT_APP_TM_BASE_URL + 'venues?apikey=' + process.env.REACT_APP_TM_API_KEY + '&locale=*&countryCode=US&size=5';
    fetch(footerDataQuery)
        .then((response) => response.json())
        .then((response) => {
            setFooterDataset(response); // whole dataset with all parent elements
            setFooterResults(response._embedded.venues);
            console.log('response', response);
            console.log('results', response._embedded.venues);
        })
        .catch(console.error);
}


export default FooterData;