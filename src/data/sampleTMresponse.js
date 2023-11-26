/* 

HTTP/1.1 200 OK
Rate-Limit-Over: 0
Content-Length: 1241
Rate-Limit-Available: 4646
Set-Cookie: CMPS=5Gk5wt8nfXBXXBiKtbkBiPSHgfZp9zC9Gv5MPAEcFsr5g6kwuwchDenPMUm/k7jxtKdE9AU0WRI=; path=/
Access-Control-Max-Age: 3628800
Access-Control-Allow-Methods: GET, PUT, POST, DELETE
Connection: keep-alive
Server: Apache-Coyote/1.1
Rate-Limit-Reset: 1457417554290
Access-Control-Allow-Headers: origin, x-requested-with, accept
Date: Mon, 07 Mar 2016 12:07:21 GMT
Access-Control-Allow-Origin: *
X-Application-Context: application:local,default,jash1:8080
Content-Type: application/json;charset=utf-8
X-Unknown-Params: apikey
X-Unknown-Params: api-key
Rate-Limit: 5000

*/

//SF == 37.746171, -122.442327

const sampleJson = {
  _embedded: {
    venues: [
      {
        _links: {
          self: {
            href: '/discovery/v2/venues/KovZpZAFnIEA?locale=en-us',
          },
        },
        address: {
          line1: 'Crysler Park Marina, 13480 County Rd 2',
        },
        city: {
          name: 'Morrisburg',
        },
        country: {
          name: 'Canada',
          countryCode: 'CA',
        },
        dmas: [
          {
            id: 519,
          },
        ],
        id: 'KovZpZAFnIEA',
        locale: 'en-us',
        location: {
          longitude: '-75.18702730',
          latitude: '44.94535340',
        },
        markets: [
          {
            id: '103',
          },
        ],
        name: '#1 Please do not use, left over from UCV initial acct set up',
        postalCode: 'K0C1X0',
        state: {
          name: 'Ontario',
          stateCode: 'ON',
        },
        test: false,
        timezone: 'America/Toronto',
        type: 'venue',
        url: 'http://ticketmaster.ca/venue/341396',
      },
    ],
  },
  _links: {
    self: {
      href: '/discovery/v2/venues.json?view=null&keyword=UCV{&page,size,sort}',
      templated: true,
    },
  },
  page: {
    size: 20,
    totalElements: 2,
    totalPages: 1,
    number: 0,
  },
};
