# venues-list
Using APIs from Ticketmaster and SeatGeek to create a list of music venues in (hopefully) the US or at least a portion of it. 
Using one or both of these APIs

- https://developer.ticketmaster.com/products-and-docs/apis/getting-started/
- https://platform.seatgeek.com/

# Functionality

- Users will be able to search for venues in the United States possibly further, depending on the limits of the APIs, for venues, based on either ZIP Code or venue, name, or city name, or state name, which may change based on the capabilities of the APIs.
- The homepage will have the search as its main focus, and every other page will have search capabilities in the header under the navigation.
- After the search users will be brought to the listings page which will have any listings that match the criteria, and as a stretch, goal, a Google map. 
- Users can see a detail page after clicking on one of the listings, which will Sherwin image title description, address, webpage, and other pertinent information.
- On the homepage, there will be a randomized carousel of venues at the bottom, which will have a photo a title and our clickable to the venue detail page
- Users can submit a venue via a React form if it is not listed (some very basic validation on existence will be created).
- if the venue has been found to exist, there will be an error message saying so.
- Thank you page follows a successful submission that has been validated did not already exist.
- Basic non-functional storefront to follow the website concept and for a giggle. They will be listings of fake products, and as a stretch goal, if time is permitting, clicking on one will take one user to a detail page for that fake product.


# Components (and Pages)

![Site and component map](https://github.com/evilgeniuscreative/venues-list/blob/master/Site-component-map.png "Site and component map")

# Stories
https://evilgeniuscreative.atlassian.net/jira/software/projects/VEN/boards/9

(Please forgive me if I don't use the stilted "As a user of ... " language. No job I've ever had has used that. Just the facts, m'am. If you need me to add that to be acceptable, lmk).

# Wireframe

[Wireframe 8-page clickable PDF](https://github.com/evilgeniuscreative/venues-list/blob/master/Venues-v3.pdf) i.e., [https://github.com/evilgeniuscreative/venues-list/edit/master/Venues-v3.pdf](https://github.com/evilgeniuscreative/venues-list/blob/master/Venues-v3.pdf)

![Homepage image](https://github.com/evilgeniuscreative/venues-list/blob/master/Homepage.png "Homepage image")

![Mobile Homeage image](https://github.com/evilgeniuscreative/venues-list/blob/master/Mobile%20Homepage.png "Mobile Homepage image")

# Stretch Goals
- Google maps
- Pagination of results
- List upcoming shows at the venue
- Store item detail page
