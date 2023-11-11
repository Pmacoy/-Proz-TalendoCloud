qtd_rodas=3
pso_bruto=600
qtd_pessoas=9
Veiculo_A="Veículos com duas ou três rodas"
Veiculo_B="Veículos com quatro rodas, que acomodam até oito pessoa e seu peso é de até 3500 kg"
Veiculo_C="Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg"
Veiculo_D="Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas"
Veiculo_E=" Veículos com quatro rodas ou mais e com mais de 6000 kg."


if (qtd_pessoas<=2) and (qtd_rodas<4) and (pso_bruto<=1000):
    print(Veiculo_A)
elif (pso_bruto<3500):
    print(Veiculo_B)
elif (qtd_pessoas<=8) and (pso_bruto>=3500) and (pso_bruto<=6000):
    print(Veiculo_C)
elif (qtd_pessoas>8):
    print(Veiculo_D)
elif (pso_bruto<6000):
    print(Veiculo_E)