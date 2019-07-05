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
      $('span.doctor-result').text(`The Doctor's name is: ${results.data[0].profile.first_name} ${results.data[0].profile.last_name} Address: ${results.data[0].practices[0].visit_address.street}
      ${results.data[0].practices[0].visit_address.zip} Is accepting new patients: ${results.data[0].practices[0].accepts_new_patients} Phone: ${results.data[0].practices[0].phones[0].number}`);

    });
  });
});
