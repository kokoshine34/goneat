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
  // Optional approved provider search-widget embed URLs.
  // Leave blank until the provider supplies the exact widget URL / code.
  widgets: {
    tripcomFlights: "",
    tripcomHotels: "",
    tripcomAttractions: "",
    tripcomTrains: "",
    agodaHotels: ""
  }
};
