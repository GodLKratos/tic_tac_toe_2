let start_initial = document.querySelector('.inital-start');
let welcome = document.querySelector('.welcome');
let choose = document.querySelector('.choose');
let final_start = document.querySelector('.final-start');
let back_screen = document.querySelector('.back');
let ip11 = document.querySelector('#ip11');
let ip12 = document.querySelector('#ip12');
let ip21 = document.querySelector('#ip21');
let ip22 = document.querySelector('#ip22');
let cell = document.querySelectorAll('.cell');
let turnX = document.querySelector('.turnX')
let turn0 = document.querySelector('.turn0')
let win_game = document.querySelector('.win'); 
let tell = document.querySelector('.tell');
let restart = document.querySelector('.restart');
let symbol = '';
let rand='';

start_initial.addEventListener('click',start_fun);
final_start.addEventListener('click',final_fun);
restart.addEventListener("click",restart_fun);

function start_fun(){
    welcome.classList.add('hide');
    choose.classList.remove('hide');

}

function final_fun(){
    choose.classList.add('hide');
    back_screen.classList.add('hide');
    if (ip11.checked == true && ip21.checked == true){
        x_friend();
    }
    else if(ip12.checked == true && ip21.checked == true){
        O_friend();
    }
    else if (ip11.checked == true && ip22.checked == true){
        x_computer();
    }
}
function x_friend(){
    symbol = 'X';
    turnX.classList.add('toggle');
    select(symbol);
}
function O_friend(){
    symbol = '0';
    turn0.classList.add('toggle');
    select(symbol);
}
function x_computer(){
    symbol = 'X';
    turnX.classList.add('toggle');
    select_comp(symbol);
}

function select(symbol){
    Array.from(cell).forEach(element => {
        element.addEventListener('click',() =>{
            if (element.textContent == ''){
                element.textContent = symbol;
                turnX.classList.toggle('toggle');
                turn0.classList.toggle('toggle');
                symbol = change_symbol(symbol);
                if (element.textContent === 'X'){
                    element.style.color = 'red';
                }
                else{
                 element.style.color = 'blue';
                }
                take = win();
                if (take){
                    win_game.classList.remove('hide');
                    symbol = change_symbol(symbol);
                    tell.textContent = symbol + ' win the game';
    
                }
                if (cell[0].textContent !== '' && cell[1].textContent !== '' && cell[2].textContent !== '' && cell[3].textContent !== '' && cell[4].textContent !== '' &&cell[5].textContent !== '' && cell[6].textContent !== '' 
                && cell[7].textContent !== '' && cell[8].textContent !== ''&& take == false){
                    win_game.classList.remove('hide');
                    tell.textContent = ' Match Draw'; 
                    symbol = change_symbol(symbol);
                }
    
            }
        });
    });
}

function select_comp(symbol){
    Array.from(cell).forEach(element => {
        element.addEventListener('click',() =>{
            if (element.textContent == ''){
                element.textContent = symbol;
                symbol = change_symbol(symbol);
                if (element.textContent === 'X'){
                    element.style.color = 'red';
                }
                else{
                 element.style.color = 'blue';
                }
                for(i=1;i<=999999;i++){
                    rand = Math.floor((Math.random() * 10) +1);
                    rand = rand - 1;
                    if(cell[rand].textContent == ''){
                        cell[rand].textContent = symbol;
                        console.log("sachin");
                        symbol = change_symbol(symbol);
                        break;
                    }
                }
                take = win();
                if (take){
                    win_game.classList.remove('hide');
                    tell.textContent = symbol + ' win the game';
    
                }
                if (cell[0].textContent !== '' && cell[1].textContent !== '' && cell[2].textContent !== '' && cell[3].textContent !== '' && cell[4].textContent !== '' &&cell[5].textContent !== '' && cell[6].textContent !== '' 
                && cell[7].textContent !== '' && cell[8].textContent !== ''&& take == false){
                    win_game.classList.remove('hide');
                    tell.textContent = ' Match Draw'; 
                    symbol = change_symbol(symbol);
                }
    
            }
        });
    });
}



function change_symbol(symbol){
    data = symbol === 'X'?'0':'X';
    return data;
}

function win(){
    if (checkCondition(cell[0],cell[1],cell[2]) || checkCondition(cell[3],cell[4],cell[5]) || checkCondition(cell[6],cell[7],cell[8]) 
    || checkCondition(cell[0],cell[3],cell[6]) || checkCondition(cell[1],cell[4],cell[7]) || checkCondition(cell[2],cell[5],cell[8])
    || checkCondition(cell[0],cell[4],cell[8]) || checkCondition(cell[2],cell[4],cell[6])){
        return true;
    }
    else{
        return false;
    }
}

function checkCondition(div1,div2,div3){
    if(    div1.textContent !== '' && div2.textContent !== '' && div3.textContent !== '' && div1.textContent === div2.textContent && div2.textContent ===
    div3.textContent){
        return true
    }
}

function restart_fun(){
    for (let i = 0;i<9;i++){
        cell[i].textContent = '';
    }
    symbol = '';
    win_game.classList.add('hide');
    choose.classList.remove('hide');
    turnX.classList.remove('toggle');
    turn0.classList.remove('toggle');


}

