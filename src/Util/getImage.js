import { fetchWmData } from './fetchWmData';

async function getUsableImage(wikimediaVenue) {
  try {
    // Fetch additional data based on venue ID
    // let detailedSearchTerm = thisVenue.name;
    // if (thisVenue.city && thisVenue.city.name) {
    //   detailedSearchTerm = thisVenue.name + thisVenue.city.name;
    // }
    const vimg = await fetchWmData(wikimediaVenue); // Use thisVenue.name or any other identifier that corresponds to the venue
    const whichPage = Object.keys(vimg.query.pages)[0];
    const WMimg = vimg.query.pages[whichPage].imageinfo[0].thumburl;
    return WMimg;
  } catch (error) {
    console.error('Error:', error);
  }
}

export { getUsableImage };
