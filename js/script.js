//ensure 'remember me' checkbox is unchecked by default
var checkboxes = document.getElementsByTagName('input');

for (var i=0; i<checkboxes.length; i++)  {
  if (checkboxes[i].type == 'checkbox')   {
    checkboxes[i].checked = false;
  }
}

$(".option").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});
