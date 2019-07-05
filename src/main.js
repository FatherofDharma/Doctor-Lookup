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
    $('input#medical-issue').val('');

    let docRequest = new DoctorRequest();
    let promise = docRequest.getDoctorInfo(inputtedFirstName, inputtedLastName, inputtedMedicalIssue);

    promise.then(function (response) {
      let results = JSON.parse(response);
      console.log(results);
      $('#doctor-info').empty();
      for (let i =0; i < results.data.length; i++) {
        $('#doctor-info').append('<br>').append(`Doctor:   ${results.data[i].profile.first_name}   ${results.data[i].profile.last_name}
        ${results.data[i].profile.title} Address:       ${results.data[i].practices[0].visit_address.street}
        ${results.data[i].practices[0].visit_address.zip} Accepting new patients:   ${results.data[i].practices[0].accepts_new_patients}  Phone: ${results.data[i].practices[0].phones[0].number}`);
      }
    });
  });
});
