function showForm() {
  $(this).hide();
  $("#mainForm").show("slow");
};

function showQuestionary() {
  var checkbox = "";
  var str = "";
  str += "имя: " + $("#name").val() + "\n";
  str += "пол: " + $(".gender:checked").val() + "\n";
  str += "дата рождения: " + $("#birthDay").val() + "\n";
  str += "любимый цвет: " + $("#color").val() + "\n";     
  if ($('#accept').is(":checked")) {
    checkbox = "да";
  } else {
    checkbox = "нет";
  };
  str += "согласие на обработку данных: " + checkbox + "\n";
  alert(str);
};
$(document).ready(function() {
  $("#showForm").click(showForm);
  $("#submit").click(showQuestionary);  
});