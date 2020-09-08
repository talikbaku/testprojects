class media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  };
  get title(){
    return this._title
  };
  get isCheckedOut(){
    return this._isCheckedOut
  };
  get ratings(){
    return this._ratings
  };
  set isCheckedOut(isChecked){
   this._isCheckedOut = isChecked;
  };
  toggleCheckOutStatus(){
    this.isCheckedOut = !this.   isCheckedOut
    // if(this._isCheckedOut = false) {
    //   media._isCheckedOut(true)
    // };
    // if(this._isCheckedOut = true) {
    //   media._isCheckedOut(false)
    // };
  };
  getAverageRating(){
    return this._ratings.reduce((accumulative, currentvalue)=>
       accumulative+currentvalue, 0
    )
  };
  addRating(rating){
    this.ratings.push(rating)
  }
}
class book extends media{
  constructor(author, title, pages){
    super (title);
    this._author = author;
    this._pages = pages;
  };
  get author(){
    return this._author
  };
  get pages(){
    return this._pages
  };

}

class movie extends media{
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
    // this.isCheckedOut = false;
    // this.ratings = [];
    }
    get director(){
      return this._director
    };
    get runTime(){
      return this._runTime
    };
    // get isCheckedOut(){
    //   return this._isCheckedOut
    // };
    // get ratings(){
    //   return this._ratings
    // }

}

const historyOfEverything = new book('Bill Bryson', 'A Short History of Nearly Everything', 544)
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.ratings)
console.log(historyOfEverything.getAverageRating())

const speed = new movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())



class CD extends media{
  constructor(title, songtitles){
    super(title);
    this._songtitles = [];
  }
  get songtitles(){
    return this._songtitles
  }
  set songtitles(songname){
    this._songtitles = songname;
  };
  addsong(song){
    this._songtitles.push(song)
  }
   shuffle(){
    return this.songtitles[Math.floor(Math.random() * this.songtitles.length)]
  }
}


const mycd = new CD('mycd1')
mycd.addsong('Green Day - Holiday')
mycd.addsong('Phoenix - air')
mycd.addsong('Phoenix - rome')
console.log(mycd)
console.log(mycd.shuffle())
