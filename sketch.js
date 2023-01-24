
// loading imagens
var stubo , ntubo;
var stuboImg, ntuboImg;

var fundo, fundoImg;
var cons = 460;

var passarinho, passarinhoImg;
var debora, deboraImg, groudchao;
var deboraInvisivel;

var groudTubo1 , groudTubo2;
var bateJogo = "play";

//função serve pra carregar arquivos pra dentro da variável
function preload()
{   //fidel
    ntuboImg = loadImage("img/FIDEL1.png");
    stuboImg = loadImage("img/FIDEL2.png");   

    // flaviane
    fundoImg = loadImage("img/FLAVIANE.png");

    //carlos
    passarinhoImg = loadAnimation(
        "img/CARLOS 1.png",
        "img/CARLOS 2.png",
        "img/CARLOS 3.png"
      );

    //debora
    deboraImg = loadImage("img/DEBORA 1.png");
}

//função de criação
function setup()
{
    //o tamanho da tela (largura,altura)
    createCanvas(400,600);

    //flaviane " fundo"
   fundo = createSprite(30,500,10,10); 
   fundo.addImage(fundoImg);

   //flaviane - "GAME OVER "


    //Carlos
   passarinho = createSprite(40, 280, 0, 0);
   passarinho.addAnimation("passarinho", passarinhoImg);
   passarinho.scale = 0.2;
 
   //Debora
   debora = createSprite(0, 650);
   debora.addImage("debora", deboraImg);
  

   deboraInvisivel = createSprite(90, 550, 200, 10);
   deboraInvisivel.visible = false;  
    
   groudTubo1 = new Group();
   groudTubo2 = new Group();
   groudchao = new Group();

}

//função de execução-desenho
function draw()
{
    
    //mostra o tamanho da tela
    background("#82D0E8");
    
    if(bateJogo === "play")
    {

    
        debora.x = debora.width / 2;
        groudchao.add(deboraInvisivel);

        if (keyDown("up_arrow")) 
        {
            passarinho.velocityY = -7;
        }
    
        passarinho.velocityY = passarinho.velocityY + 0.8;
        passarinho.collide(deboraInvisivel);
    

        criaTubo(); 


        if(groudTubo1.isTouching(passarinho)||groudTubo2.isTouching(passarinho)||groudchao.isTouching(passarinho))
        {
            bateJogo = "end";
        }

    }
    else if(bateJogo === "end")
    {
        passarinho.velocityY = 0;

        groudTubo1.setVelocityXEach(0);
        groudTubo2.setVelocityXEach(0); 


        //Flaviane esta aqui fazer! " GAWE OVER"
    }

    drawSprites(); 
}

// função de criação dos tubo
//Nome Fidel
function criaTubo()
{
    
    if(frameCount % 150 == 0)
    {
        ntubo = createSprite(460,0);
        stubo = createSprite(460,ntubo.x+cons);
        
        stubo.addImage(stuboImg);          
        ntubo.addImage(ntuboImg);
        
        

        stubo.velocityX = -2;
        ntubo.velocityX = -2;
       
        var num = Math.random();
        if((num > 0.155)){
            ntubo.y = Math.floor(num*ntubo.x)-ntubo.x
            stubo.y = Math.floor(num*stubo.x)+stubo.x
        }

        groudTubo1.add(ntubo);
        groudTubo2.add(stubo);
  
        console.log(num);
        console.log(ntubo.y);
        console.log(stubo.y);  
    }
    


}