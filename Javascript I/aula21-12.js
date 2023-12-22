let senha = "123"
const permissao = false
 
 const inserida = "123"
 
if (senha == inserida){
  console.log("Por favor, insira sua nova senha")
  if (permissao == true){
  console.log("Bem-vindo(a) à área de administrador")
  }else{
  console.log("Você não pode acessar esta parte do sistema")
  }
}else{
  console.log("Senha incorreta")
}