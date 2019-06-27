// const itemList = document.getElementsByTagName('li');
// for (let i = 0; i < itemList.length; i++) {
// 	let createSpan = document.createElement('span');
// 	let createText = document.createTextNode('\u00D7');
// 	createSpan.className = 'close';
// 	createSpan.appendChild(createText);
// 	itemList[i].appendChild(createSpan);
// }

// let close = document.getElementsByClassName('close');
// for (let index = 0; index < close.length; index++) {
// 	close[index].onclick = function() {
// 		let section = this.parentElement;
// 		section.style.display = 'none';
// 	};
// }

// let listItem = document.querySelector('UL');
// listItem.addEventListener(
// 	'click',
// 	function(event) {
// 		if (event.target.tagName === 'LI') {
// 			event.target.classList.toggle('checked');
// 		}
// 	},
// 	false
// );

function newElement() {
	let li = document.createElement('li');
	let inputValue = document.getElementById('taskInput').value;
	let t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
		alert('You must write something!');
	}
	else {
		document.getElementById('taskList').appendChild(li);
	}
	document.getElementById('taskInput').value = '';

	let span = document.createElement('span');
	let txt = document.createTextNode('\u00D7');
	span.className = 'close';
	span.appendChild(txt);
	li.appendChild(span);
	li.onclick = function() {
		if (li.className == "checked") {
		}
		console.log(li.className);
	}

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			let div = this.parentElement;
			div.style.display = 'none';
		};
	}
}

// let taskCompleted = function() {
// 	document.querySelectorAll('checked').forEach(function(checked) {
// 		checked.appendChild(document.querySelector('completedTasks'));
// 	});
// };
