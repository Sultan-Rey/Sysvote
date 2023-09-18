/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
    function checkBoxLimit() {
	var checkBoxGroup = document.forms['form_name']['check[]'];
        var checkBoxeast =  document.forms['form_name']['checkeast[]'];
        var checkBoxwest =  document.forms['form_name']['checkwest[]'];
        var checkBoxart  =  document.forms['form_name']['checkart[]'];
        var alert = document.getElementById("alert");
	var limit = 3;
	/*---------------- NORD */
        for (var i = 0; i < checkBoxGroup.length; i++) {
		checkBoxGroup[i].onclick = function() {
			var checkedcount = 0;
			for (var i = 0; i < checkBoxGroup.length; i++) {
				checkedcount += (checkBoxGroup[i].checked) ? 1 : 0;
			}
			if (checkedcount > limit) {
				console.log("You can select maximum of " + limit + " checkboxes.");
                                alert.style="display:block";
				//alert("Vous ne pouvez choisir plus de " + limit + " Candidat pour ce poste.");						
				this.checked = false;
			}
		};
	}
         for (var i = 0; i < checkBoxeast.length; i++) {
		checkBoxeast[i].onclick = function() {
			var checkedcount = 0;
			for (var i = 0; i < checkBoxeast.length; i++) {
				checkedcount += (checkBoxeast[i].checked) ? 1 : 0;
			}
			if (checkedcount > limit) {
				console.log("You can select maximum of " + limit + " checkboxes.");
                                alert.style="display:block";
				//alert("Vous ne pouvez choisir plus de " + limit + " Candidat pour ce poste.");						
				this.checked = false;
			}
		};
	}
         for (var i = 0; i < checkBoxwest.length; i++) {
		checkBoxwest[i].onclick = function() {
			var checkedcount = 0;
			for (var i = 0; i < checkBoxwest.length; i++) {
				checkedcount += (checkBoxwest[i].checked) ? 1 : 0;
			}
			if (checkedcount > limit) {
				console.log("You can select maximum of " + limit + " checkboxes.");
				alert.style="display:block";//alert("Vous ne pouvez choisir plus de " + limit + " Candidat pour ce poste.");						
				this.checked = false;
			}
		};
	}
         for (var i = 0; i < checkBoxart.length; i++) {
		checkBoxart[i].onclick = function() {
			var checkedcount = 0;
			for (var i = 0; i < checkBoxart.length; i++) {
				checkedcount += (checkBoxart[i].checked) ? 1 : 0;
			}
			if (checkedcount > limit) {
				console.log("You can select maximum of " + limit + " checkboxes.");
				alert.style="display:block";//alert("Vous ne pouvez choisir plus de " + limit + " Candidat pour ce poste.");						
				this.checked = false;
			}
		};
	}
        
            
}
checkBoxLimit();
})();