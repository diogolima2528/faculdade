function processName(nome,callback){
    if(typeof nome !== 'string'){
        callback(new Error('O nome deve ser uma string'))
        return;
    }

    if(nome.length === 0){
        callback(new Error('O campo nome não pode estar vazio'))
        return;
    }

    callback(null,"Nome processado com sucesso")
}

processName("Diogo", (error,result) => {
    if(error){
        console.log("Ocorreu um problema: ", error.message)
    }else{
        console.log(result)
    }
})