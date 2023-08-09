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

// $(document).keypress((event)=>{
//     k = event.key;
    
//     for(v = 1; v<=4; v++){
//         $('h1').html('level ' + v)
//         ar = [];
//         console.log('v: ',v)
//         for(i=0; i<v;i++){
//             ar[i]=Math.floor((Math.random()*1000)%4) +1;
//         }

//         baja=(k)=>{
//             nn = mp[k]
//             console.log(nn)
//             sn = new Audio('sounds/'+nn+'.mp3');
//             sn.play();
//             console.log(k,' ',nn)
    
//         }
//         for(i=0; i<v;i++){
            
//                 baja(ar[i]).delar(1000,()=>{})
                
          

//         }
//         $('.img').click(()=>{
//             console.log('this:',this)
           
//         })
//         u = 0;
//         while(u<v){
//             console.log('u: ',u)
//             u++
//         }


//     }


// })

f=()=>{

       
    baja=(k)=>{
        nn = mp[k]
        console.log(nn)
        sn = new Audio('sounds/'+nn+'.mp3');
            

                sn.play();
            console.log(k,' ',nn)
    
        }
        for(i=1; i<4;i++){
          setInterval(()=>{baja(i)},1500);
            
        }

}

$(document).keypress(()=>{
    f();
})
