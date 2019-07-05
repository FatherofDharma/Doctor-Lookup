//Business logic for galactic age calculator.
import $ from 'jquery';

export class DoctorRequest {
  getDoctorInfo(firstName, lastName, issue) {
    return new Promise(function (resolve,reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&query={issue}&location=45.52955%2C-122.69954%2C100&skip=0&limit=10&user_key=${process.env.exports.apiKey}`
    })
  }
}
