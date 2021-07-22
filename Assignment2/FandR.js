
       
            function FandR() {
                var text = document.getElementById("text").value;
                var word = document.getElementById("word").value;
                var rword = document.getElementById("rword").value;
				var edit= text.replaceAll(word,rword);
                alert("Before Edinting the Text:-"  + text+ "\n"+
				      "After Editing the Text:-" + edit );
				
				
			}