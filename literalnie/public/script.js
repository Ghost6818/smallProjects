var points = 0;
var min = 0;

$(document).ready(function() {
    const inputs = document.getElementsByTagName('input');
    const inputsCount = inputs.length;
    const pattern =  ['A','a','Ą','ą','B','b','C','c','Ć','ć','D','d','E','e','Ę','ę','F','f','G','g','H','h','I','i','J','j','K','k','L','l','Ł','ł','M','m','N','n','Ń','ń','O','o','Ó','ó','P','p','R','r','S','s','Ś','ś','T','t','U','u','W','w','Y','y','Z','z','Ź','ź','Ż','ż'];
    const chances = [false, false, false, false, false, false];

    const blockLine = (lineId) => {
        const row = document.getElementsByClassName('row')[lineId];

        if (!row) {
            return;
        }

        const inputs = row.children;
        const inputsCount = inputs.length;

        for(let i = 0; i < inputsCount; i++) {
            const input = inputs[i];
            
            input.disabled = true;
            input.style.background = '#787c7e';
        }
    }

    const activateLine = (lineId) => {
        const row = document.getElementsByClassName('row')[lineId];

        if (!row) {
            return;
        }

        const inputs = row.children;
        const input = inputs[0];

        input.focus();
    }

    document.getElementById("round").innerText = 1;
    document.getElementById("right").innerText = 0;
    document.getElementById("wrong").innerText = 0;

    const Right = (lineId, green) => {
        const row = document.getElementsByClassName('row')[lineId];
        if (!row) {
            return;
        }

        const inputs = row.children;
        for (let i = 0; i < green.length; i++) {
            inputs[green[i]].style.background = "#03fc13";
            inputs[green[i]].style.color = "black";
        }
    }

    const Wrong = (lineId, red) => {
        const row = document.getElementsByClassName('row')[lineId];
        if (!row) {
            return;
        }

        const inputs = row.children;

        for (let i = 0; i < red.length; i++) {
            inputs[red[i]].style.background = "red";
            inputs[red[i]].style.color = "black";
        }
    }

    const submitLine = () => {
        let breakLoop = false;

        chances.forEach((chance, index) => {
            if (!breakLoop && !chance) {
                breakLoop = true;

                const row = document.getElementsByClassName('row')[index];
                const inputs = row.children;
                const inputsCount = inputs.length;

                let word = '';

                for(let i = 0; i < inputsCount; i++) {
                    const char = inputs[i].value;

                    word += char;
                }

                if (word.length === 5) {
                    chances[index] = true;
                    blockLine(index);
                    activateLine(index+1);

                    const gameSession = window.gameSession;
                    const data = { word, gameSession };
                    
                    $.post('/api/check', data)
                    .then(response => {
                        console.log(response);
                        if (response.success) {
                            Right(index, "01234");
                            points += 1;
                            document.getElementById("right").innerText = points;
                            }else {
                                Wrong(index, "01234");
                                min += 1;
                                document.getElementById("wrong").innerText = min;
                            }
                    });
                }
            }
        });
    }

    for(let i = 0; i < inputsCount; i++) {
        const input = inputs[i];

        input.addEventListener('keyup', (e) => {
            const key = e.key;
            
            if (key === 'Backspace') {
                input.previousElementSibling.focus();
                return;
            }
        })

        input.addEventListener('keypress', (e) => {
            const key = e.key;

            if (key === 'Enter') {
                submitLine();
                return;
            }
            
            const match = pattern.includes(key);

            if (match) {
                input.value = key;

                if (input.nextElementSibling) {
                    input.nextElementSibling.focus();
                }
            } else {
                input.value = '';
            }
        });
    };
});

var round = 1;

function restart() {
    window.location.reload()
}