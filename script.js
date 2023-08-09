mp = {
    'a':'green',
    'b':'red',
    'c':'yellow',
    'd':'blue',
    1:'green',
    2:'red',
    3:'yellow',
    4:'blue',
}

$(document).keypress((event)=>{
    k = event.key;
    for(v = 1; v<=1; v++){
        ar = [];
        for(i=0; i<v;i++){
            ar[i]=Math.floor((Math.random()*1000)%4) +1;
        
        }
        baja=(k)=>{
            sn = new Audio('sounds/'+k+'.mp3');
            sn.play();
    
        }
        for(i=0; i<v;i++){
            baja(ar[i])
        }
        console.log(ar)
        $('.imm').click(()=>{


        });



    }


})