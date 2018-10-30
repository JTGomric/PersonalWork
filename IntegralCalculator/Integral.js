var numRectangles = 10000;
var width = 1/numRectangles;

var height = new Array();


for(var x = 0;x < numRectangles;x++)
{
  height[x]=Math.pow((x*width),3);

}

var totalArea = 0;

for(var x = 0;x<height.length;x++)
{
  totalArea += height[x]*width;
}

var result = document.getElementById("area");
result.textContent = totalArea;
