
$(document).ready(function() {
//обработка Enter
  $("#new").keyup(function() {
      if (event.keyCode === 13) {
          $("#add").click();
      }
  });
//обработка кнопки Добавить: появляется элемент списка с кнопками управления
  var i = 1; //счетчик строки
 $("#add").click(function() {
  var text =$.trim ($("#new").val());
  if (text.length > 0) {
    $("#ul").append('<li><input type="checkbox"><span class="span" id="text' + i + '">' + text + '</span>' +
                    '<button class="button" id="red'+ i + '"> <img src="red.png" width="15"></button>'+ " " +
                    '<button class="button" id="del'+ i + '"> <img src="del.png" width="15"></button></li>').show();

//обработчик кнопок удаления
$("#del" + i).click(function(){
 $(this).parent().remove();
});

//обработчик кнопок редактирования
$("#red" + i).click(function(){
  $(this).prev().attr('contenteditable','true');
  $(this).prev().focus();
  });

//проверка строки после редактирования
$( "#text" + i ).focusout(function(){
 if (($(this).text()) == 0) {
   $(this).parent().remove();
}
});

i++; //прибавляем счетчик

}
});

 //чистим поле ввода
 $("#add").click(function() {
     $("#new").val("");
});
});
