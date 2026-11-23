/*
  GO & EAT AFFILIATE CONFIGURATION

  IMPORTANT:
  1. Paste only the exact affiliate URLs generated in your Trip.com / Agoda partner dashboard.
  2. Do not edit tracking IDs or tracking parameters in generated URLs.
  3. Do not put API keys, passwords, or private tokens in this public file.
  4. If your partner dashboard provides an official search widget, follow the
     instructions in integrations/README.md to add it.
*/
window.GO_EAT_AFFILIATES = {
  tripcom: {
    flights: "",
    hotels: "",
    attractions: "",
    trains: ""
  },
  agoda: {
    hotels: ""
  },
  <iframe border="0" src="https://www.trip.com/partners/ad/S21480720?Allianceid=8268583&SID=314249664&trip_sub1=" style="width:320px;height:320px" frameborder="0" scrolling="no" style="border:none" id="S21480720"></iframe>
  // Leave blank until the provider supplies the exact widget URL / code.
  widgets: {
    tripcomFlights: "",
    tripcomHotels: "",
    tripcomAttractions: "",
    tripcomTrains: "",
    agodaHotels: ""
  }
};
