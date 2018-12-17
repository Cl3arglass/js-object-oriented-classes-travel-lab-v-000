class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let beg = new Date(year, 1).getFullYear();
    return beg - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
     this.beginningLocation = beginningLocation;
     this.endingLocation = endingLocation;
   }
}
