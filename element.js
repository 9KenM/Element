Core.addModule((function(){

	var attr = function(attributes){
		for(var i in attributes){
			this.element.setAttribute(i, attributes[i]);
		}
		return this;
	};

	var content = function(){
		var text;
		for(var i = 0; i < arguments.length; i++){
			if(typeof arguments[i] === 'string'){
				text = document.createTextNode(arguments[i]);
				this.element.appendChild(text);
			} else if(arguments[i] instanceof elem) {
				this.element.appendChild(arguments[i].element);
			} else {
				this.element.appendChild(arguments[i]);
			}
		}
		return this;
	};

	var listen = function(listeners){
		for(var i in listeners){
			this.element.addEventListener(i, listeners[i])
		}
		return this;
	};

	var elem = function(type){
		this.element = document.createElement(type);	
	};
	elem.prototype = {
		attr: attr,
		content: content,
		listen: listen
	};

	var template = function(){
		var result = [];
		for(var i = 0; i < arguments.length; i++){
			result.push(arguments[i].element);
		}
		return arguments
	};

	var construct = function(type){
		return new elem(type);
	};

	var create = function(element){
		return element.element;
	};

	return {
		id: 'element',
		create: create,
		elem: construct
	};

})())
