// переменная, в которой хранится выбранное математическое действие
var op;

// функция расчёта
function func() {
  // переменная для результата
  var result;
  // получаем первое и второе число
  var num1_str = Number(document.getElementById("num1").value);
  var num2_str = Number(document.getElementById("num2").value);

  // переводим строки в числа
  let num1 = Number(num1_str);
  let num2 = Number(num2_str);

  // проверяем, получилось ли число из первой строки или нет
  if (isNaN(num1)) {
    // если не получилось — пишем сообщение
    document.getElementById("result").innerHTML = 'Калькулятор не может распознать <span>первое</span> число. Проверьте его, пожалуйста';
    // и выходим из функции
    return;
  }

  // проверяем, получилось ли число из второй строки или нет
  if (isNaN(num2)) {
    // если не получилось — пишем сообщение
    document.getElementById("result").innerHTML = 'Калькулятор не может распознать <span>второе</span> число. Проверьте его, пожалуйста';
    // и выходим из функции
    return;
  }

  // =============================================
  // =============================================

  // смотрим, что было в переменной с действием, и действуем исходя из этого
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  // отправляем результат на страницу
  document.getElementById("result").innerHTML = result;


}
