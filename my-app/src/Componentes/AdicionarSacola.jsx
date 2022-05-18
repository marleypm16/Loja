function AdicionarSacola(sacola){
    sacola.produto= [] 
    
    
    fetch("http://localhost:5000/sacola",{
      method: "POST",
      headers:{
        "Content-type": "application/json",
      },
    }).then((resp)=> resp.json())
    .then((data)=> console.log(data),
    setMensagem('O produto foi adicionado ao carrinho'),
    setType('item_adicionado_na_sacola'),
    contador+=1)
    .catch((err)=> console.log(err))
    
  }