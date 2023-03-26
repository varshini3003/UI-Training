// tabs() method allows flipping
$(function(){
    $("#nav-container").tabs();
});
$(function(){
    $("#accordion").accordion();
});
// Fetches locations from json file and stores it in table and
$locTable= $('<table>');
$.getJSON('js/locations.json',function(location){
    location.forEach(entry => {
        $rowEntry=$('<tr>');
        $rowEntry.append($('<td><div><img class="image" src="'+entry.country+'" alt="Country"></div></td>" + "<td>'+entry.state+'</td>" + "<td>'+entry.city+'</td>" + "<td>'+entry.contact+'</td>'));
        $rowEntry.append($('</tr>'));
        $locTable.append($rowEntry);
    });
});
$locTable.append($('</table>'));
$("#locations").append($locTable);