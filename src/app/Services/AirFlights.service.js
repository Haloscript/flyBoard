import Data from "../../static/results";

export class AirFlightsService {
  constructor() {
    this.flights = Data.flights.sort();
  }

  get sendFlights() {
    return this._sendFlights;
  }

  set sendFlights(value) {
    this._sendFlights = value;
  }

  get beforeFiltration() {
    return this._beforeFiltration;
  }

  set beforeFiltration(value) {
    this._beforeFiltration = value;
  }

  get pageCount() {
    return this._pageCount;
  }

  set pageCount(value) {
    this._pageCount = value;
  }
  _objectMaping(obj) {
    let returnedKey = "";
    Object.entries(obj).forEach(([key]) => {
      returnedKey = key;
    });
    return returnedKey;
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
  paginate(selectedPage, elementsPerPage = 5, flights = this.flights) {
    const indexMin = selectedPage * elementsPerPage;
    const indexMax = indexMin + elementsPerPage;
    console.log("flights", flights);
    if (flights.length > elementsPerPage)
      this.sendFlights = flights.filter(
        (x, index) => index >= indexMin && index < indexMax
      );
    else this.sendFlights = flights;
    this.pageCount = Math.floor(flights.length / elementsPerPage);
    console.log(selectedPage, this.sendFlights, this.pageCount);
  }

  filtration(selectFilter) {
    let readyFilter = [];
    this.beforeFiltration = this.flights;
    if (selectFilter.flightType !== "") {
      switch (selectFilter.flightType) {
        case "luggage":
          readyFilter.push(
            ...this.beforeFiltration.filter(
              item => this._objectMaping(item.services) !== "0PC"
            )
          );

          break;
        case "direct":
          readyFilter.push(
            ...this.beforeFiltration.filter(
              item => item.itineraries[0][0].segments.length < 2
            )
          );
          break;
        case "refundable":
          readyFilter.push(
            ...this.beforeFiltration.filter(item => item.refundable)
          );
          break;
      }
      this.beforeFiltration = readyFilter;
    } else this.beforeFiltration = this.flights;

    if (selectFilter.airlines.length > 0) {
      readyFilter = [];
      readyFilter.push(
        ...this.beforeFiltration.filter(
          item =>
            selectFilter.airlines.indexOf(item.itineraries[0][0].carrier) >= 0
        )
      );
      this.beforeFiltration = readyFilter;
    } else if (readyFilter.length === 0) this.beforeFiltration = this.flights;
    console.log("this.beforeFiltration", this.beforeFiltration);
    this.paginate(1, 4, this.beforeFiltration);
  }
}
// direct: "Только прямые",2
//     luggage: "Только с багажом",1
//     returned: "Только возвратные",
//     refundable: "Возвратные билеты"1
