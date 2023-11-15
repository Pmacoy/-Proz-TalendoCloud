from datetime import date
ano = False
while (ano == False):
    ano_atual = date.today()
    nome = input('Insire seu nome: ')
    print('Insira seu ano de nascimento(se nasceu entre 1922 e 2021):')
    try:
        nascimento = int(input())
        if(nascimento >= 1922 and nascimento <= 2021):
            ano = True
            print(nome, "este ano de", ano_atual.year, "completará(ou):", ano_atual.year - nascimento)
        else:
            print("Ano tem que estar entre 1922 e 2021")
    except:
        print("Dado inválido, digite apenas numeros no ano")