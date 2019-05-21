/*function newItem() {
    var item = document.getElementById("input").value;
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + item));
    ul.appendChild(li);
    document.getElementById("input").value = "";
    li.onclick = removeItem;
  }
  
  
function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
  }
*/


(function() {
	function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input, select, textarea" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
            var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
        }
        
        var li = document.createElement("li");
            var inputValue = obj;
            var t = document.createTextNode(inputValue);
            li.appendChild(t);
            if (inputValue === '') {
            alert('You must write something!'); 
            } else {
            document.getElementById("output").appendChild(li);
                }
                    document.getElementById("myInput").value = "";

		return JSON.stringify( obj );
	}

	document.addEventListener( "DOMContentLoaded", function() {
		var form = document.getElementById( "test" );
		var output = document.getElementById( "output" );
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var json = toJSONString( this );
			output.innerHTML = json;

		}, false);

    });
    
    function eraseAll() {
        var ul = document.getElementById("output");
        var lis = ul.getElementsByTagName("li");
        while(lis.length > 0) {
	        ul.removeChild(lis[0]);
}
    }

})();