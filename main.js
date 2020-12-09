class School {
    constructor(name,level="middle",numberOfStudents){
      this._name = name
      this._level = level
      this._numberOfStudents = numberOfStudents
    }
    get name(){
      return this._name
    }
    get level(){
      return this._level
    }
    get numberOfStudents(){
      return this._numberOfStudents
    }
    set numberOfStudents(newNumber){
      if(typeof newNumber === 'number'){
        this._numberOfStudents = newNumber
      }else{
        console.log('Invalid input: numberOfStudents must be set to a Number.')
      }
    }
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers){
      return substituteTeachers[Math.floor(Math.random()*substituteTeachers.length)]
    }
  }
  class PrimarySchool extends School{
    constructor(name,numberOfStudents,pickupPolicy){
      super(name,'primary',numberOfStudents)
      this._pickupPolicy = pickupPolicy
    }
    get pickupPolicy() {
      return this._pickupPolicy
    }
  }
  class HighSchool extends School{
    constructor(name,numberOfStudents,sportsTeams){
      super(name,'high',numberOfStudents)
      this._sportsTeams = sportsTeams
    }
    get sportsTeams() {
      return this._sportsTeams
    }
  }
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
  lorraineHansbury.quickFacts()
