import Data from "../../static/results";

export class AirFlightsService {
  constructor() {
    this.flights = Data.flights.sort();
  }

  get sendFlights() {
    return this._filtredFlights;
  }

  set sendFlights(value) {
    this._filtredFlights = value;
  }

  get pageCount() {
    return this._pageCount;
  }

  set pageCount(value) {
    this._pageCount = value;
  }
  _objectMaping(obj) {
    Object.entries(obj).forEach(([key]) => String(key));
  }
  _arrayCompare = function(array1, array2) {
    return array1
      .filter(i => !array2.includes(i))
      .concat(array2.filter(i => !array1.includes(i)));
  };

  /**
   *
   * @param selectedPage
   * @param elementsPerPage
   */
  paginate(selectedPage, elementsPerPage = 4, flights = this.flights) {
    const indexMin = selectedPage * elementsPerPage;
    const indexMax = indexMin + elementsPerPage;
    this.sendFlights = flights
      .filter((x, index) => index >= indexMin && index < indexMax)
      .sort();
    console.log(this.flights);
    this.pageCount = Math.floor(this.flights.length / elementsPerPage);
    console.log(selectedPage, this.sendFlights, this.pageCount);
  }

  filtration(selectFilter) {
    let readyFilter = [];

    this.flights.forEach(item => {
      if (selectFilter.airlines.length > 0)
        if (selectFilter.airlines.indexOf(item.itineraries[0].carrier) >= 1)
          readyFilter.push(item);
      if (
        selectFilter.flightType === "luggage" &&
        this._objectMaping(item.services) !== "0PC"
      )
        readyFilter.push(item);
      if (
        selectFilter.flightType === "direct" &&
        item.itineraries[0].segments.length < 2
      )
        readyFilter.push(item);
      if (selectFilter.flightType === "refundable" && item.refundable)
        readyFilter.push(item);
    });
    //   // selectFilter.flightType;
    //   // selectFilter.airlines;
  }
}
// direct: "Только прямые",2
//     luggage: "Только с багажом",1
//     returned: "Только возвратные",
//     refundable: "Возвратные билеты"1
