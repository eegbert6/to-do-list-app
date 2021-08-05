function newItem () {

  //1. Adding a new item to the list of items:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  //2. Crossing out an item from the list
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', crossOut);

  //3(i). Adding the delete button "X":
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  //3(ii). Adding class delete
  crossOutButton.on('click', deleteListItem);

  function deleteListItem() {
    li.addClass("delete");
  }

  // 4. Reordering the items:
  $('#list').sortable();
}