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
      if(results.data.length === 0) {
        $('#doctor-info').text(`There are 0 results for your search. Please try again.`)
      }
      for (let i =0; i < results.data.length; i++) {
        $('#doctor-info').append('<br>').append('<ui>' + `Doctor: ${results.data[i].profile.first_name}   ${results.data[i].profile.last_name} Title:
        ${results.data[i].profile.title}`);
        if (results.data[i].practices.length > 0) {
          for (let x=0; x < results.data[i].practices.length; x++) {
            $('#doctor-info').append('<li>' + `Address: ${results.data[i].practices[x].visit_address.street}
            ${results.data[i].practices[x].visit_address.zip}
            Accepting new patients: ${results.data[i].practices[x].accepts_new_patients}` + '</li>');
            if (results.data[i].practices[x].phones.length > 0) {
              for(let n=0; n < results.data[i].practices[x].phones.length; n++) {
                $('#doctor-info').append('<li>' + `Phone: ${results.data[i].practices[x].phones[n].number}` + '</li>');
              }
            }
          }
        }

      }
    },

    function (error) {
      $('#doctor-info').text(error.message);
    });
  });
});
