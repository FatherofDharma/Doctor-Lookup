import './styles.css';
import './doctor.js';
import $ from 'jquery';
import 'bootstrap';

console.log(process.env.exports.apiKey);

$(document).ready(function () {
  $('form.doctor-request').submit(function (event) {
    event.preventDefault();
    const inputtedFirstName = $('input#first-name').val();
    const inputtedLastName = $('input#last-name').val();
    const inputtedMedicalIssue = $('input#medical-issue').val();
    console.log(inputtedFirstName);
    console.log(inputtedLastName);
    console.log(inputtedMedicalIssue);
    $('input#first-name').val('');
    $('input#last-name').val('');
    $('input#medical-issue').val();
  })
});
