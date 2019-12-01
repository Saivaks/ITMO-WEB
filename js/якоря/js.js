document.writeln("PICK PUDGE <br \/>");
 var s="PICK PUDGE",s1;
var k=0;
var k1=1;
var i=0,i1=0;
while(i<s.length ) 
{
if  (s[i]!=" ") 
k++;
if (s[i]==" ") 
k1++;
i++
}
document.write("БУКВ:");
document.writeln(k," <br \/>");
document.write("СЛОВ:");
document.writeln(k1, "<br \/>");
var URL="file:///C:/Users/SSS/Desktop/site.html";
document.writeln(URL, "<br \/>");
k=0;
i=URL.indexOf(":");
document.write("ПРОТОКОЛ:");
while(k<i)
{
document.write(URL[k]);
k++;
}
document.write("<br \/>");
i1=URL.lastIndexOf(".");
document.write("ИМЯ:");
for( k=i+3;k<i1;k++)
{
document.write(URL[k]);
}
document.write("<br \/>");
document.write("РАССШИРЕНИЕ:");
for (k=i1+1;k<URL.length;k++)
{
document.write(URL[k]);
}
document.write("<br \/>");
document.write("ПОДСТРОКА ПАРАМЕТРОВ:");
i=URL.lastIndexOf("?");
i1=URL.lastIndexOf("#");
if (i!=-1)
for (k=i+1;k<i1;k++)
document.write(URL[k]);
document.write("<br \/>");

var f = 'АРКОН';

document.write('АНКОР1: ', f.anchor(), '<br>');
document.write('<a href="https://dota2.ru/">лучший сайт в мире</a><br>')
document.write('АНКОР2: ', f.anchor(), '<br>');
document.write('<a href="http://www.ifmo.ru/ru/">дурка</a><br>')

document.write('<img src="https://versiya.info/uploads/posts/2017-10/1508582819_psn_4683.jpg" style="width: 25%";height:110px" id="new">')
document.write('<img src="https://avatars.mds.yandex.net/get-pdb/477388/997f7b0f-0da1-4d15-9651-eb8954354b54/s1200" style="width: 30%;height:330px" id="new2"><br>')

document.write('Кол-во анкоров: ', document.anchors.length,'<br>');
document.write('Кол-во ссылок: ', document.links.length,'<br>');
document.write('Вывод имеющегося анкора: ', document.anchors[0].innerHTML, '<br>')
document.write('Кол-во картинок: ', document.images.length,'<br>');
document.write('Ширина первой картинки: ', document.images[0].width,'<br>');
document.write('Ширина самой широкой картинки: ', Math.max.apply(Math, Array.from(document.images).map(function(o) { return o.width; })), '<br>');

for(i=0; i<10; i++){
  document.write('<form id="', i,'">')
  document.write('<input type="button" class="arc" value="Имя формы" onClick="alert(\'Имя формы\')"></input>')
  document.write('<input type="button" value="Принадлежность" onClick="alert(',i,')"></input>')
  document.write('<input type="button" value="Пок. кол-во полей" onClick="alert(',document.forms[i].childElementCount+1,')"></input>')
  document.write('</form>')
}
for(i=0; i<10; i+=2){
if (document.forms[i].id!=8)
  document.write(document.forms[i].id, ', ');
else
document.write(document.forms[i].id);
}
document.write('<form id="form1"><input type="reset" value="Кнопка"></input><input type="text" placeholder="Введите что-то"></input></form>')
document.write('<form id="form2"><input type="password"></input></form>');



function WordCount(str) { 
  return str.split(" ").length;
}


