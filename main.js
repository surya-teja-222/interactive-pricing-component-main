console.log('Ok! Im working');



// check if range of inp-range change and set value of amt to the value of the range

document.querySelector('#inp-range').addEventListener('change', doonchange);
document.querySelector('#checkkk').addEventListener('change', function(){
    var isChecked = document.getElementById('checkkk').checked;
    if(isChecked){
        var x = document.getElementById('inp-range').value/6.25;
        x = x*0.75;
        x = x.toFixed(2);
        document.getElementById('gdbfgfh').innerHTML = '$'+x;
    }
    else{
        var x = document.getElementById('inp-range').value/6.25;
        x = x.toFixed(2);
        document.getElementById('gdbfgfh').innerHTML = '$'+x;
    }
});

function doonchange(event){
    document.getElementById('inp-range').style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) "+event.target.value/2+"%,hsl(224, 65%, 95%) "+event.target.value/2+"%, hsl(224, 65%, 95%) 100%)"
    var isChecked = document.getElementById('checkkk').checked;
    if(!isChecked){
        document.getElementById('amtkjfnvkjnv').innerHTML = event.target.value;
        var x = event.target.value/6.25;
        // set x to upto 2 decimal placesdoonchange
        x = x.toFixed(2);
        document.getElementById('gdbfgfh').innerHTML = '$'+x;
    }
    else{
        document.getElementById('amtkjfnvkjnv').innerHTML = event.target.value;
        var x = event.target.value/6.25;
        x = x*0.75;
        x = x.toFixed(2);
        document.getElementById('gdbfgfh').innerHTML = '$'+x;
    }
}

var val = document.querySelector('#inp-range').value;
document.getElementById('amtkjfnvkjnv').innerHTML =val;

var hmm = document.getElementById('inp-range').value;
document.getElementById('inp-range').style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) "+hmm/2+"%,hsl(224, 65%, 95%) "+hmm/2+"%, hsl(224, 65%, 95%) 100%)"