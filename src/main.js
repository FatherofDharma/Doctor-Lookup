import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import { DoctorRequest } from './doctor.js';

console.log(process.env.exports.apiKey);

$(document).ready(function () {
  $('form.doctor-request').submit(function (event) {
    event.preventDefault();
    const inputtedFirstName = $('input#first-name').val();
    const inputtedLastName = $('input#last-name').val();
    const inputtedMedicalIssue = $('input#medical-issue').val();
    $('input#first-name').val('');
    $('input#last-name').val('');
    $('input#medical-issue').val();

    let docRequest = new DoctorRequest();
    let promise = docRequest.getDoctorInfo(inputtedFirstName, inputtedLastName, inputtedMedicalIssue);

    promise.then(function (response) {
      let results = JSON.parse(response);
      console.log(results);
    });
  });
});
