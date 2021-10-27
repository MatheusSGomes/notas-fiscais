def calcula_imc(peso, altura):
  return peso / (altura * altura)

imc = calcula_imc(altura=1.71, peso=78)
print(imc)

# Python tem parâmetros nomeados, ou seja, independemente da ordem, os parâmetros são passados corretamente.

# python teste.py
# 26.674874320303687