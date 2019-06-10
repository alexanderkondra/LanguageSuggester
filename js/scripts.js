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
      $("form").hide();
      $(".refresh").show();
    }

    if (total >=6 && total<=10) {
      $(".Swift").show();
      $("form").hide();
      $(".refresh").show();
    }

    if (total >=11 && total<=15) {
      $(".JavaScripts").show();
      $("form").hide();
      $(".refresh").show();

    }


    event.preventDefault();
  });
});
