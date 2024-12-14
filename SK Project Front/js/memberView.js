$(document).ready(function() {
    $('#gridViewBtn').on('click', function() {
        $(this).addClass('active'); // Add active class to Grid View button
        $('#listViewBtn').removeClass('active'); // Remove active class from List View button
        $('#memberGrid').show(); // Show grid view
        $('#memberList').hide(); // Hide list view
    });

    $('#listViewBtn').on('click', function() {
        $(this).addClass('active'); // Add active class to List View button
        $('#gridViewBtn').removeClass('active'); // Remove active class from Grid View button
        $('#memberGrid').hide(); // Hide grid view
        $('#memberList').show(); // Show list view
    });
});
