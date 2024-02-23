/*
result -> [{id},{id},{id..name, src, }]
1. create a utility function that organize the result in way so we can pass it to the footer experiement
modifedListOfImages->
[{src, alt, title, styleClass, href},
{src, alt, title, styleClass, href},
{src, alt, title, styleClass, href},
{src, alt, title, styleClass, href}]

*/
import GetImage from "./GetImage";


function OrganizeListFromOutput(results) {

    return results.map( (venue) => {
        return {
            place: {
                id: venue.id,
                title: venue.name,
                link: venue.url,
                src: GetImage(venue.name + ' ' + venue.address + ' ' + venue.city.name + ' ' + venue.state.name),
                location: venue.location,
                postCode: venue.postalCode
            }
        }
    });
}

export default OrganizeListFromOutput;