let logins = ['Sara','Vova','Dima','Sasha'];

function isLoginValid(login){
    if((login.length >= 4)&&(login.length <=16)){
        return true;
    }else{
        return false;
    }
}

function isLoginUnique(allLogins,login){
    if(allLogins.includes(login)){
        return false;
    }else{
        return true;
    }
}

function addLogin(allLogins,login){
    
    if((isLoginValid(login)&&(isLoginUnique(allLogins,login)))== true){
        allLogins.push(login);
        return console.log('Логин успешно добавлен!');
    }else if(isLoginValid(login) == false){
        return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    }else if((isLoginUnique(logins,login)) == false){
        return console.log('Такой логин уже используется!');
    }
}

console.log(addLogin(logins,'Dima22'));