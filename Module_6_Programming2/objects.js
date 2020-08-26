const Car = {
  make: 'Honda',
  model: 'CRV',
  year: '2018',
  tires: 5,
  mileage: 0,
  set miles(miles) {
    this.mileage = miles
  },
  get miles() {
    return this.mileage
  },
  pressHorn: () => { console.log('honk, honk') }
}

const Team = {
  name: 'New York Yankees',
  homeState: 'NY',
  hasStadium: 'yes',
  establised: 1903,
  numPlayers: 0,
  set HowManyPlayers(players) {
    this.numPlayers = players;
  },
  get HowManyPlayers() {
    return this.numPlayers
  },
  cheer: function () { console.log(`We are the ${this.name} and we are the best of ${this.homeState}`) }
}

const Animal = {
  commonName: 'duck',
  type: 'bird',
  canSwim: 'yes',
  canFly: 'yes',
  givenName: '',
  set name(name) {
    this.givenName = name
  },
  get name() {
    return this.givenName
  },
  talk: () => { console.log('quack, quack') }
}