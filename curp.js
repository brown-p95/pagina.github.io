function get_datos(){
    var curp;
    
    
    
    var ape1 = document.getElementById('apellido1Form').value;
    curp=ape1.slice(0,1);
    
    
    
        for(c=0;c<ape1.length;c++){
            var y=ape1.charAt(c);
            if (y=='A'|| y=='E'||y=='I'||y=='O'||y=='U'||y=='a'||y=='e'||y=='i'||y=='o'|| y=='u') 
            { 
                curp+=y; 
                c=ape1.length; 
            }
            
            
        }

        var ape2 = document.getElementById('apellido2Form').value;
        curp+=ape2.slice(0,1);
        var nombre = document.getElementById('nombreForm').value;
        var fecha = document.getElementById('whFecNac').value;
        curp+=nombre.slice(0,1);
        curp+=fecha.slice(2,4);
        curp+=fecha.slice(5,7);
        curp+=fecha.slice(8,10);
        var genero = document.getElementById('whGenero').value;
        curp+=genero;
        var estado = document.getElementById('estadoForm').value;
        curp+=estado;
        

        for(c=1;c<ape1.length;c++){
            var h=ape1.charAt(c);
            if (h!='A'&& h!='E'&&h!='I'&&h!='O'&&h!='U'&&h!='a'&&h!='e'&&h!='i'&&h!='o'&& h!='u') 
            { 
                curp+=h; 
                c=ape1.length; 
            }
            
            
        }   
        for(c=1;c<ape2.length;c++){
            var h=ape2.charAt(c);
            if (h!='A'&& h!='E'&&h!='I'&&h!='O'&&h!='U'&&h!='a'&&h!='e'&&h!='i'&&h!='o'&& h!='u') 
            { 
                curp+=h; 
                c=ape2.length; 
            }
        }
        for(c=1;c<nombre.length;c++){
            var h=nombre.charAt(c);
                if (h!='A'&& h!='E'&&h!='I'&&h!='O'&&h!='U'&&h!='a'&&h!='e'&&h!='i'&&h!='o'&& h!='u') 
                { 
                    curp+=h; 
                    c=nombre.length; 
                }
            
            
        }
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
          }
        var random=getRandomInt(1,9);
        var random2=getRandomInt(1,9);
        curp+=random;
        curp+=random2;
        alert(curp.toUpperCase()); 
        

       
    
        

}
