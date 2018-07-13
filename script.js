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


///Function to determine which page/students to show and which students to hide
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

