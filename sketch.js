/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 DATASET TITLE: What the data is about?
 DATA SOURCE: what organisation/person collected the data?
 LINK TO DATA: where did you get the data from?
 HEADERS: what are the headers of the dataset?
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 
 TASK:  
  1. Can you source and load alternative data? 
  2. Can you add text to the lollipops grabbed from the 'context' column? 

  */

 let scale = 20;

 let dataset;

 var tabX = 0;
 var tabY = 400;
 var tabW = 50;
 var tabH = 50;
 
 function preload(){
   dataset = loadTable("B'Tselem.csv", "header");
 }
 
 //run once when our index.html file is first loaded
 function setup() {
   createCanvas(700, 500); //width in pixels, height in pixels
  
   colorMode(HSB);

  }
 
 //draw is run in a loop
 function draw() {
   
   background(340, 100, 100);
   frameRate(60);

   console.log(mouseX);
   console.log(mouseY);

   push();

   if((mouseX>tabX) && (mouseX<tabX+tabW) && (mouseY>tabY) && (mouseY<tabY+tabH)){
    fill(340, 100, 100);
   }else{
    fill(350, 100, 50);
   }
   noStroke();
   rect(tabX, tabY, tabW, tabH);

   pop();
   
   stroke(350, 100, 50);
   line(0, height-100, width, height-100);
   for(let row=0; row<dataset.getRowCount(); row++){
     let dayIndex = dataset.getNum(row, 1);
     let date = dataset.getString(row, 0);
     let value = dataset.getNum(row, 2);
     let y = height-100;
     let x = dayIndex * scale;
     let h = y-value * 5;

     fill(350, 100, 50);
     line(x, y, x, h);
     ellipse(x, h, 10, 10);

   }

 }