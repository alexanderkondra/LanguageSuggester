$(document).ready(function() {
  $("#form").submit(function(event) {
    var operatingSystem = parseInt($("#operatingSystem").val());
    var codingExperience = parseInt($("#codingExperience").val());
    var sortOfDeveloper = parseInt($("#sortOfDeveloper").val());
    var findMoreInteresting = parseInt($("#findMoreInteresting").val());
    var typeOfCompanies = parseInt($("#typeOfCompanies").val());

    var total = operatingSystem + codingExperience + sortOfDeveloper + findMoreInteresting + typeOfCompanies;

    if (total <=5) {
      $(".Python").show();
    }

    if (total >=8) {
      $(".Swift").show();
    }

    if (total >=15) {
      $(".JavaScripts").show();
    }

    event.preventDefault();
  });
});

// need help with button refresh after submit
// and i tried to hide didnt worked
