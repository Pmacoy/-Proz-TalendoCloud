#/bin/bash
#Andares Hotel
print('Loop com  for')
for andar in range(20):
    andar = andar + 1
    if (andar == 13):
        continue
    print('Andar nº:', andar)
print('Fim loop com for \n ')

print('Loop com  while')
andar = 0
while(andar < 20):
    andar += 1
    if andar in (0,13):
        continue
    print('Andar nº:', andar)
print('Fim loop com while \n ')

print('Loop com  for decrescente')
for andar in range(19,-1,-1):
    andar = andar + 1
    if (andar == 13):
        continue
    print('Andar nº:', andar)
print('Fim loop com for decrescente\n')

print('Loop com  while decrescente')
andar = 21
while(andar > 1):
    andar -= 1
    if andar in (0,13):
        continue
    print('Andar nº:', andar)
print('Fim loop com while decrescente\n')
    
    