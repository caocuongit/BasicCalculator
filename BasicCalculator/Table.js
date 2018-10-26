(function() {

    const $calc = document.getElementById('calc')
    const $resultBox = $calc.querySelector('.resultBox')
    const $resultLog = $calc.querySelector('.resultLog')

    var resultLog = []

    document.getElementById('resultLog').value = 'something';

    calc.addEventListener('click', (e) => {
        if (e.target.matches('input[type="button"]')) {
            const value = e.target.value
            if (value !== '=') {
                $resultBox.value += value;
            }
            
            if (value === "C") {
                console.log('Clear');
                $resultBox.value = "";
            }

            else if(value.match(/[0-9]/)){
                console.log(value);
            }
            else if(value.match(/[.\+\-\*\/]/)){
                console.log(value);
            }
            
            else {
                console.log('tinh toan');
                
                $resultBox.value = eval($resultBox.value);
            }
        }
        
    })

    
    calc.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'Enter':
            e.preventDefault()
            console.log('tinh toan ket qua o day')
            break;
            default:
            if ((/[0-9]/).test(e.key)) {
                $resultBox.value += e.key
            }
        }
    })

})()