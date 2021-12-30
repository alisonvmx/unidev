
const bt = document.getElementById('bt');


function limpar () {
    var text = document.getElementById('t');
    var value = text.value.split(" ");
    var xings = ['merda', 'porra', 'caralho', 'desgrama', 'desgraça','fuder', 'puta', 'puto', 'corno', 'corna', 'desgraçado', 'miseravel'];
    
    for( var i=0; i<value.length;i++){
        for( var j=0; j<xings.length;j++)
        if(value[i]==xings[j]){
        value[i]='****';
     }
    }
    for( var i=0; i<value.length;i++){
    console.log(value[i]);
    }
}

bt.addEventListener ('click', limpar);
