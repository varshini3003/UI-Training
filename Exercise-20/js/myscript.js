// Sidebar functions
function openNav(element) {
	document.getElementById(element).style.display = "flex";
}

function closeNav(element) {
	document.getElementById(element).style.display = "none";
}

// Get current date
function getCurrDate() {
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let curr_date = new Date();
	let formatted_date =  months[curr_date.getMonth()] + " " + curr_date.getDate()+ ", " + curr_date.getFullYear();
	return formatted_date;
}

// Resizable textarea
const textarea = document.querySelector("textarea");
textarea.addEventListener("input", e =>{
	let scHeight = e.target.scrollHeight;
	textarea.style.height = `${scHeight}px`;
});

// Selecting background color for the note
let color_palette = document.querySelector('#color-palette');
var bgcolor;
color_palette.addEventListener('click', e => {
	if (e.target.id == 'lavender-btn') {
		bgcolor = '#eacded';
	} else if (e.target.id == 'ivory-btn') {
		bgcolor = '#fcfcfc';
	} else if (e.target.id == 'orange-btn') {
		bgcolor = '#feca73';
	} else if (e.target.id == 'green-btn') {
		bgcolor = '#e5ee90'
	} else if (e.target.id == 'lightred-btn') {
		bgcolor = '#ffa68a';
	}
});

// Whole note count
var keynum = localStorage.length;

// Fetch all notes
function showAll() {
	// Fetch content from localStorage

	for (var index = 1; index <= localStorage.length; index++) {
		let fetched_note = JSON.parse(localStorage.getItem(index));
		let fetched_note_title = fetched_note.title;
		let fetched_note_date = fetched_note.date;
		let fetched_note_img = fetched_note.img;
		let fetched_note_content = fetched_note.content;
		let fetched_note_bgcolor = fetched_note.bgcolor;

		// Remove the empty message
		document.getElementById('empty-msg').style.display = 'none';

		// Display the input content in the main page
		var notes_grid = document.getElementById('grid');
		
		// Creating grid block
		let grid_block = document.createElement('div');
		grid_block.setAttribute('class', 'grid-block');
		grid_block.setAttribute('id', keynum);
		grid_block.style.backgroundColor = fetched_note_bgcolor;
		grid_block.style.height = '300px';

		// Adding title to grid block
		let block_title = document.createElement('div');
		block_title.innerHTML = fetched_note_title;
		block_title.style.padding = '10px';
		grid_block.appendChild(block_title);

		// Adding date to grid block
		let block_date = document.createElement('div');
		block_date.innerHTML = fetched_note_date;
		block_date.style.padding = '10px';
		block_date.style.fontSize = '10px';
		grid_block.appendChild(block_date);

		// Adding content to grid block
		let block_content = document.createElement('div');
		block_content.innerHTML = fetched_note_content;
		block_content.style.padding = '10px';
		grid_block.appendChild(block_content);

		// Adding grid block to grid
		notes_grid.appendChild(grid_block);
	}
}

// Disable add button if title or content is empty

// Add note
const add_button = document.querySelector("#add-btn");
add_button.addEventListener('click', () => {
	keynum++;
	let note_title = document.getElementById('note-title').value;
	let note_date = getCurrDate();
	let note_img = document.getElementById('img-url').value;
	let note_content = document.getElementById('note-content').value;
	let note_bgcolor = bgcolor;

	// Write content to localStorage
	let notes = {"title": note_title, "date": note_date, "img": note_img, "content": note_content, "bgcolor": note_bgcolor};
	
	localStorage.setItem(keynum, JSON.stringify(notes));

	// Fetch content from localStorage
	let fetched_note = JSON.parse(localStorage.getItem(keynum));
	let fetched_note_title = fetched_note.title;
	let fetched_note_date = fetched_note.date;
	let fetched_note_img = fetched_note.img;
	let fetched_note_content = fetched_note.content;
	let fetched_note_bgcolor = fetched_note.bgcolor;

	// Remove the empty message
	document.getElementById('empty-msg').style.display = 'none';

	// Display the input content in the main page
	var notes_grid = document.getElementById('grid');
	
	// Creating grid block
	let grid_block = document.createElement('div');
	grid_block.setAttribute('class', 'grid-block');
	grid_block.setAttribute('id', keynum);
	grid_block.style.backgroundColor = fetched_note_bgcolor;
	grid_block.style.height = '300px';

	// Adding title to grid block
	let block_title = document.createElement('div');
	block_title.innerHTML = fetched_note_title;
	block_title.style.padding = '10px';
	grid_block.appendChild(block_title);

	// Adding date to grid block
	let block_date = document.createElement('div');
	block_date.innerHTML = fetched_note_date;
	block_date.style.padding = '10px';
	block_date.style.fontSize = '10px';
	grid_block.appendChild(block_date);

	// Adding content to grid block
	let block_content = document.createElement('div');
	block_content.innerHTML = fetched_note_content;
	block_content.style.padding = '10px';
	grid_block.appendChild(block_content);

	// Adding grid block to grid
	notes_grid.appendChild(grid_block);

	// Set the input fields to empty
	document.getElementById('note-title').value = '';
	document.getElementById('img-url').value = '';
	document.getElementById('note-content').value = '';
})

function confirmOp(element) {
	document.getElementById(element.split('-')[0] + '-alert').style.display = 'block';
}

// Delete all notes
const confirm_delall_button = document.querySelector("#deleteall-confirm-btn");
if(confirm_delall_button) {
	confirm_delall_button.addEventListener('click', e => {
		// Reset note count to 0
		keynum = 0;
	
		// Clear localStorage
		localStorage.clear();
	
		// Remove all grid elements
		document.querySelector("#grid").innerHTML = '';
	
		// Hide the delete confirmation alert
		document.getElementById('deleteall-alert').style.display = 'none';
	
		// Display the empty message
		document.getElementById('empty-msg').style.display = 'block';
	})
}

// Delete all notes
const confirm_del_button = document.querySelector('#delete-confirm-btn')
if (confirm_del_button) {
	confirm_del_button.addEventListener('click', e => {
		let key = parseInt(document.querySelector('.content-section').getAttribute('id'));
		// Clear localStorage
		localStorage.removeItem(key);
	
		// Hide the delete confirmation alert
		document.getElementById('delete-alert').style.display = 'none';
	
		// Go to previous page
		window.location.href = "index.html";

		// Remove grid element from main page
		let note = document.getElementById(key);
		note.parentNode.removeChild(note);
		localStorage.removeItem(key);
	})
}


// The below code does not work correctly
var key;
// View full note
const whole_grid = document.getElementById('grid');
if (whole_grid) {
	whole_grid.addEventListener('click', e => {
		key = e.target.id;
		let querystr = "?id=" + key;
		
		var content_window = window.location.href = "content.html" + querystr;
		
		content_window.addEventListener('load', () => {
			const params = new Proxy(new URLSearchParams(window.location.search), {
				get: (searchParams, prop) => searchParams.get(prop),
			});
			
			let value = params.id;
			let whole_content = document.querySelector('.content-section');
			whole_content.setAttribute('id', value);
		})
	})
}