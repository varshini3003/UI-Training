var clicked=''; 
var area;
var perimeter;
var shapes = {
    'circle': {
        'label' : "2. Enter Radius",
        area(radius){
            return (3.14*radius*radius).toFixed(2);
        },
        perimeter(radius){
            return (2*3.14*radius).toFixed(2);
        },
        'Result': [["RADIUS", "r", 5],["AREA", "πr^2", 78.53],["PERIMETER", "2πr", 31.41]],
        'resLabel' : "Circle"
    },
    'square': {      
        'label' :"2. Enter Side",
        area(side){
            return (side*side).toFixed(2);
        },
        perimeter(side){
            return (4*side).toFixed(2);
        },
        'Result': [["SIDE", "s", 5],["AREA", "s * s", 25],["PERIMETER", "4 * s", 20]],
        'resLabel' : "Square"
    },
    'triangle': {    
        'label' :"2. Enter Side (Base & Height)",
        area(base){
            return (0.433*base*base).toFixed(2)
        },
        perimeter(side){
            return (4*side).toFixed(2);
        },
        'Result': [["SIDE", "s", 5],["AREA", "0.433 * s * s", 10.85],["PERIMETER", "3 * s", 15]],
        'resLabel' : "Triangle"
    }
};
// Circle element
const circle = document.createElement("div");   
circle.setAttribute("id","circle");
document.getElementById('shapes').appendChild(circle); 

//Triangle element
const triangle = document.createElement("div"); 
triangle.setAttribute("id","triangle");
document.getElementById('shapes').appendChild(triangle);  

//Square element
const square = document.createElement("div");
square.setAttribute("id", "square");
document.getElementById('shapes').appendChild(square); 

const Shapes = document.getElementById("shapes");
const allShapes = Shapes.getElementsByTagName("div");
const tickSymbol = document.getElementById("tick");
for(let currShape of allShapes){
    currShape.addEventListener("click", () => {
        document.getElementById("next-button").style.display="block";
        tickSymbol.style.display = "block";
    });
}   
circle.addEventListener("click", () => {    
    tickSymbol.style.left = "36%";
    tickSymbol.style.bottom = "38%";
    clicked = 'circle';
});
triangle.addEventListener("click", () => {  
    tickSymbol.style.left = "49%";
    tickSymbol.style.bottom = "36%";
    clicked = 'triangle';
});
square.addEventListener("click", () => {  
    tickSymbol.style.left = "62%";
    tickSymbol.style.bottom = "38%";
    clicked = 'square';
});    
// Section - 2: Displays the corresponding label for the selected shape and reads the input from user.
function goToSection2(){
    const section_1 = document.getElementById("section-1");
    section_1.style.display="none";
    const section_2 = document.getElementById("section-2");
    section_2.style.display="block"; 
    document.getElementById("label").innerHTML = shapes[clicked]['label'];
}
// Section - 3: Displays the result in the form of table and the corresponding shape is displayed.
function goToSection3(){
    var inputValue='';
    inputValue = document.getElementById("side").value;
    if(inputValue==''){
        return;
    }
    const section_2 = document.getElementById("section-2");
    section_2.style.display="none";
    const section_3 = document.getElementById("section-3");
    section_3.style.display="block";
    var output='';
    area = shapes[clicked].area(inputValue);    
    perimeter = shapes[clicked].perimeter(inputValue);
    shapes[clicked]['Result'][0][2] = inputValue+" cm";
    shapes[clicked]['Result'][1][2] = area+" cm";
    shapes[clicked]['Result'][2][2] = perimeter+" cm";
    output+='<div id="'+clicked+'" class="shape-position"></div>';
    output+='<div>'+shapes[clicked]['resLabel']+'</div>';
    output+='<table>';
    for(let i=0; i<3; i++)
    {
        output+='<tr>';
        for(let j=0; j<3; j++)
        {
            console.log(shapes[clicked]['Result'][i][j]);
            output+='<td>'+shapes[clicked]['Result'][i][j]+'</td>';
        }
        output+='</tr>';
    }
    output+='</table>';
    document.querySelector("#result-label").innerHTML = output;   
}
