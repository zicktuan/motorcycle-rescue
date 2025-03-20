// JavaScript Document
function clearText(thefield) {
  if (thefield.defaultValue==thefield.value) { thefield.value = "" }
}

function replaceText(thefield) {
  if (thefield.value=="") { thefield.value = thefield.defaultValue }
}