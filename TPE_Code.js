(function(){ 
  [].forEach.call(  document.querySelectorAll('input[type="radio"][value="5"]'),function(rdo){rdo.checked = true} ); 
 document.getElementById("Comment").value = "Excellent"; document.forms[0].submit();})();