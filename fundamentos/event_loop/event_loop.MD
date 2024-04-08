# Como o node lê o arquivo?

O node ele lê de cima para baixo

dando um exemplo

```javascript

  function a(){
    console.log("executando a()")
  }
   function b(){
    console.log("executando b()")
  }
   function c(){
    console.log("executando c()")
  }
  a()
  b()
  c() 

```
teremos como resultado:

executando a()
executando b()
executando c()
