var p, x, y, r, ans=false;
function setup() {
  createCanvas(400, 400);
  background(255)
  r=55
  p=1-r
  x=0
  y=r
  console.log(x+" "+y)
  translate(200,200)
  strokeWeight(2)
  point(x,y)
  
}

function draw() {
  ans = midPoint()
  if(ans==true)
    noLoop()
}

function midPoint(){
  x+=1
  if(p<0){
    drawPoints(x,y)
    p=p+2*x+3
  }else if(p>=0){
    y = y - 1
    drawPoints(x,y)
    p = p+2*x-2*y+5
  }
  console.log(x+" "+y)
  if(x>=y){
    return true
  }
  return false
}

function drawPoints(x,y){
  translate(200,200)
  point(x, y)
  point(-x, y)
  point(x, -y)
  point(-x, -y)
  point(y, x)
  point(-y, x)
  point(y, -x)
  point(-y, -x)
}
