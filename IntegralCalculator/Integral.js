var numRectangles = 1000000;
var width = Math.PI/numRectangles;

var height = new Array();

y=0;
for(var x = 0;x < numRectangles;x++)
{
  height[x]=Math.sin(y);

  y+= width;
}


var totalArea = 0;

for(var j = 0;j<height.length;j++)
{
  totalArea += height[j]*width;

}

var result = document.getElementById("area");
result.textContent = totalArea;
