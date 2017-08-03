import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import tripsList from './flight-json';
import hotelsList from './hotel-json';
import 'rxjs/add/operator/map';

/*
  Generated class for the FlightManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FlightManagerProvider {
  trips: any = {};
  tripList: any;
  airports: any;
  cities: any;
  carriers: any;
  days: any = [];
  months: any = [];
  request = {
    'origin': {
      airportCode: "BLR",
      city: "Bangalore",
      country : "India"
    },
    'destination': {
      airportCode: "SIN",
      city: "Singapore",
      country : "Singapore"
    },
    'hotelInformation': {
      numberOfGuests: 2,
      numberOfRooms: 1,
      ratings: [3, 4]
    },
    budgetLimit: 100000,
    currency: "INR",
    startDate: 1501785000000,
    endDate: 1502130600000,
  };
// searchCriteria: any;
  constructor(public http: Http) {
    // this.manageReturnedTrips();
    this.days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  }

  /**
   * Method that queries the backend to fetch matching flights
   */
  fetchMatchingFlights(searchCriteria){
    // this.prepareRequestObject(searchCriteria);
    return this.http.post('http://ec2-34-200-248-144.compute-1.amazonaws.com:8080/flights', this.request);
    // .map(res => res.json());
    // return finalList;
  };


  /**
   * Manage hotels returned from hotel-json.ts
   */
  manageReturnedHotels(searchCriteria){
    // this.prepareRequestObject(searchCriteria);
    return this.http.post('http://ec2-34-200-248-144.compute-1.amazonaws.com:8080/hotels', this.request)
    // return hotelsList;
  }

  /**
   * Method used to create a request object to query for flight details
   */
  prepareRequestObject(searchCriteria){
    this.request.origin.airportCode = searchCriteria.origin.airportCode
    this.request.origin.city = searchCriteria.origin.city;
    this.request.origin.country = searchCriteria.origin.country;

    this.request.destination.airportCode = searchCriteria.destination.airportCode
    this.request.destination.city = searchCriteria.destination.city;
    this.request.destination.country = searchCriteria.destination.country;

    this.request.hotelInformation.numberOfGuests = searchCriteria.hotelInformation.numberOfGuests;
    this.request.hotelInformation.numberOfRooms = searchCriteria.hotelInformation.numberOfRooms;
    this.request.hotelInformation.ratings = searchCriteria.hotelInformation.ratings;

    this.request.budgetLimit = searchCriteria.budgetLimit.upper;
    this.request.currency = "INR";
    this.request.startDate = searchCriteria.startDate;
    this.request.endDate = searchCriteria.endDate;
  }


  /*
  * Manage trips json returned from flight-json.ts
  */
  manageReturnedTrips(data){
    let tripsList = data;
    this.manageMetaData(data);
    // manageReturnedTrips(){
      // this.manageMetaData();  
      this.trips = [];
    //for each trip object
    for (var i = 0; i < tripsList.tripOption.length; i++){
      var trip : any = {};
      trip.totalPrice = tripsList.tripOption[i].saleTotal;
      trip.totalDuration = tripsList.tripOption[i].slice[0].duration;
      trip.phase = [];
      for(var j = 0; j < tripsList.tripOption[i].slice[0].segment.length; j++){
        trip.phase[j] = {};
        trip.phase[j].duration = tripsList.tripOption[i].slice[0].segment[j].duration;
        trip.phase[j].flightNumber = tripsList.tripOption[i].slice[0].segment[j].flight.carrier +""+ tripsList.tripOption[i].slice[0].segment[j].flight.number;
        trip.phase[j].arrival = this.getTimeandDate(tripsList.tripOption[i].slice[0].segment[j].leg[0].arrivalTime);
        trip.phase[j].departure = this.getTimeandDate(tripsList.tripOption[i].slice[0].segment[j].leg[0].departureTime);
        trip.phase[j].origin = tripsList.tripOption[i].slice[0].segment[j].leg[0].origin;
        trip.phase[j].destination = tripsList.tripOption[i].slice[0].segment[j].leg[0].destination;
        trip.phase[j].originCity = this.getCityInformation(trip.phase[j].origin);
        trip.phase[j].destinationCity = this.getCityInformation(trip.phase[j].destination);
        trip.phase[j].originAirport = this.getAirportInformation(trip.phase[j].origin);
        trip.phase[j].destinationAirport = this.getAirportInformation(trip.phase[j].destination);
        trip.phase[j].carrier = this.getCarrierInformation(tripsList.tripOption[i].slice[0].segment[j].flight.carrier);
        trip.phase[j].connectionDuration = tripsList.tripOption[i].slice[0].segment[j].connectionDuration | "";
        // trip.phase[j].destinationTerminal = tripsList.tripOption[i].slice[0].segment[j].leg[0].destinationTerminal || "";
        // trip.phase[j].originTerminal = tripsList.tripOption[i].slice[0].segment[j].leg[0].originTerminal || "";
        trip.phase[j].meal = tripsList.tripOption[i].slice[0].segment[j].leg[0].meal || "";
        // trip.phase[j].connectionDuration = tripsList.tripOption[i].slice[0].segment[j];

        if(j == 0){
          //first element
          //set origin as origin of trip
          trip.origin = tripsList.tripOption[i].slice[0].segment[j].leg[0].origin;
          trip.originCity = this.getCityInformation(trip.origin);
          trip.originDeparture = trip.phase[0].departure;
        }
        if(j == tripsList.tripOption[i].slice[0].segment.length -1){
          //last element
          //set destination as final destination of trip
          trip.destination = tripsList.tripOption[i].slice[0].segment[j].leg[0].destination;
          trip.destinationCity = this.getCityInformation(trip.destination);
          trip.baseFareTotal = tripsList.tripOption[i].pricing[0].baseFareTotal;
          trip.saleTaxTotal = tripsList.tripOption[i].pricing[0].saleTaxTotal;
          trip.saleTotal = tripsList.tripOption[i].pricing[0].saleTotal;
          trip.isRefundable = tripsList.tripOption[i].pricing[0].refundable;
          trip.adultCount = tripsList.tripOption[i].pricing[0].passengers.adultCount;
          trip.destinationArrival = trip.phase[j].departure;
        }
      }
      this.trips.push(trip);
    }
    return this.trips;
  }

  manageMetaData(tripsList){
    console.log(tripsList);
    // manageMetaData(){
    this.airports = this.generateReferenceObject(tripsList.data.airport);
    this.cities = this.generateReferenceObject(tripsList.data.city);
    this.carriers = this.generateReferenceObject(tripsList.data.carrier);
  }

  generateReferenceObject(data){
    //generate an object to hold data
    var obj : any = {};
    for(var i = 0; i < data.length; i++){
      obj[data[i].code] = data[i].name;
    }
    return obj;
  }

  getAirportInformation(airportCode){
    return this.airports[airportCode];
  }
  getCarrierInformation(carrierCode){
    return this.carriers[carrierCode];
  }
  getCityInformation(cityCode){
    return this.cities[cityCode];
  }

  getTimeandDate(dateTime){
    var d = new Date(dateTime);
    var obj : any = {};
    obj.date = {};
    obj.time = {};

    obj.date.date = d.getDate();
    obj.date.month = this.months[d.getMonth()];
    obj.date.year = d.getFullYear();
    obj.date.day = this.days[d.getDay()];

    obj.time.hours = d.getHours();
    obj.time.mins = d.getMinutes();

    return obj;
  }

}
