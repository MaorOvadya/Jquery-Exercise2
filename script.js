/**
 * Assign a click event handler to the add button with an id of addTask.
 *
 * When the add button is clicked:
 *  - If the textbox is empty, generate an alert with the text “Error: Please enter a task first”.
 *  - If the text box is not empty, generate an alert with the text containing the task name. For example, if the text in the input box is “Complete Assignment”, generate an alert with text “New Task: Complete Assignment”.
 *  - Clear the text inside the text box after the add button is clicked.
 */

$(document).ready(function () {
    // code goes here
const addNote = $(".notCompleted").append($('.textBox').val());


 $('.fa-plus').click(function() {

   const newNote = ($('.textBox').val())
   
   if (!newNote) {
      alert("Error: Please enter a task first")
      return 
      
   } else {
         alert(`task Name: ${newNote}`)
         const addNote = $(`<li class="task"> ${newNote} <i class="fa-solid fa-check"></i> <i class="fa-solid fa-trash"></i> </li>`)
         $(".notCompleted").append(addNote);
         $('textBox').val(' ')

    }
     $('.fa-check').click(function () {
       const noteComplete = $(this).parent()
        // noteComplete.fadeOut(800, function () {
        noteComplete.hide().appendTo('.completed').fadeIn(800)
       })
     });
      $('fa-trash-can').click(function() {
        const noteDone = $(this).parent()
        noteDone.fadeOut(800, function() {
        noteDone.remove()
        })
      })
   })
 