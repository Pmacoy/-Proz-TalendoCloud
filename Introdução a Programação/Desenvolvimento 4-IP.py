def soma(x, y):
    return x + y

def subtracao(x, y):
    return x - y

def multiplicacao(x, y):
    return x * y

def divisao(x, y):
   return x / y

def calculadora():
    operacao = input("Escolha uma operação (+, -, *, /): ")
    n1 = float(input("Digite o primeiro número: "))
    n2 = float(input("Digite o segundo número: "))
    while operacao:      
        if operacao == "+":
            print(n1, "+", n2, "=", soma(n1, n2))
            break
        if operacao == "-":
            print(n1, "-", n2, "=", subtracao(n1, n2))
            break
        if operacao == "*":
            print(n1, "*", n2, "=", multiplicacao(n1, n2))
            break
        if operacao == "/":
            print(n1, "/", n2, "=", divisao(n1, n2))
            break
        else:
            print("Operação inválida!")
calculadora()    
    
