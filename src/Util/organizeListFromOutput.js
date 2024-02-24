/*
result -> [{id},{id},{id..name, src, }]
1. create a utility function that organize the result in way so we can pass it to the footer experiement
modifedListOfImages->
[{src, alt, title, styleClass, href},
{src, alt, title, styleClass, href},
{src, alt, title, styleClass, href},
{src, alt, title, styleClass, href}]

*/
import { getUsableImage } from './getImage';

async function OrganizeListFromOutput(results) {
  const data = await Promise.all(
    results.map(async (venue) => {
      let preSrc = await getUsableImage(venue.name + ' ' + venue.address + ' ' + venue.city.name + ' ' + venue.state.name);
      return {
        place: {
          id: venue.id,
          title: venue.name,
          link: venue.url,
          src: preSrc,
          location: venue.location,
          postCode: venue.postalCode,
        },
      };
    })
  );

  return data;
}

export default OrganizeListFromOutput;
