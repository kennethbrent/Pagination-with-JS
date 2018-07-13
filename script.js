'use strict';

const totalStudents = $('.student-list .student-item').length;
const limitPerPage = 10;
const totalPages = Math.ceil(totalStudents / limitPerPage);
const studentList = $(".student-list .student-item");



//Function to show only the first ten students by default and hide the rest

const hideStudents = () => {
	
	$(".student-list .student-item:gt(" + (limitPerPage - 1)  + ")").hide();
	
};




//Function to append pagination links based on how many total pages needed
const appendPageLinks = () => {
	
	$(".page").append("<ul class='pagination'>");

	$(".pagination").append("<li class='current-page'><a href='#/' class = 'active'>" + 1 + "</a></li>");

	for(var i = 2; i <= totalPages; i ++) {
	$(".pagination").append("<li class='current-page'><a href='#/'>" + i + "</a></li>");
	}
							  
};


///Function to show the current page and which students to show and hide
const showPage = () => {
	
	hideStudents();
	
	$(".pagination li.current-page").on("click", function () {

	const currentPage = $(this).index() + 1;
	const studentsToShow = limitPerPage * currentPage;
	for(let i = studentsToShow - limitPerPage; i < studentsToShow; i++) {
				$(".student-list .student-item:eq(" + i + ")").show(); }

	});
	
	$('.pagination a').on("click", function() {
			
			$('.pagination li a').removeClass('active');
			$(this).addClass('active');
			$(studentList).hide();
	
	});		

};



appendPageLinks();
showPage();

$(".page-header").append("<div class='student-search'>");
$(".student-search").append("<input type='text' id='searchInput' onkeyup='search()' placeholder='Search for students'>");
$(".student-search").append("<button class='searchButton'>Search</button>");


const search = () => {
	  
  	const input = document.getElementById('searchInput');
    const formattedInput = input.value.toUpperCase();
	const studentDetail = document.getElementsByTagName('h3');
	



//    // Loop through all list items, and hide those who don't match the user input
    for (let i = 0; i < studentDetail.length; i++) {
		
		const studentName = studentDetail[i].innerHTML;
		const formattedName = studentName.toUpperCase();
		
        if (formattedName === formattedInput) {
            studentDetail[i].style.display = "";
        } else {
            studentDetail[i].style.display = "none";
        }
    }
};


