'use strict';
const totalStudents = $('#student-list .student-item').length;
const limitPerPage = 10;


$("#student-list .student-item:gt(" + (limitPerPage - 1)  + ")").hide();

const totalPages = Math.ceil(totalStudents / limitPerPage);


$(".pagLinksContainter").append("<ul class='pagLinks'>");

$(".pagLinks").append("<li class='current-page'><a href='#' class = 'active'>" + 1 + "</a></li>")

for(var i = 2; i <= totalPages; i ++) {
	$(".pagLinks").append("<li class='current-page'><a href='#'>" + i + "</a></li>");
}

$(".pagLinks li.current-page").on("click", function () {
	const currentPage = $(this).index() + 1;
	const studentsToShow = limitPerPage * currentPage;
	for(let i = studentsToShow - limitPerPage; i <studentsToShow; i++) {
				$("#student-list .student-item:eq(" + i + ")").show(); }
	
});

$('.pagLinks a').on("click", function() {
					
			$('.pagLinks li a').removeClass('active');
			$(this).addClass('active');
			$('#student-list .student-item').hide();
	
		
			
		
});


