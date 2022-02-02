# import pandas as pd

# data = pd.read_csv('data.csv')

# print(data)

# -------------------------------------

# formas de pegar apenas o que está na coluna 'job_title'

# 1 - lógica normal

data = [
  {'job_title': 'estagiario', 'min_salary': 1200, 'max_salary': 2300},
  {'job_title': 'junior', 'min_salary': 3000, 'max_salary': 5000},
  {'job_title': 'pleno', 'min_salary': 6000, 'max_salary': 8000},
  {'job_title': 'senior', 'min_salary': 9000, 'max_salary': 12000},
]

conjunto = set()
for value in data:
    conjunto.add(value['job_title'])

print(conjunto)

# -------------------------------------------------
# 2 - forma pythonica - com compreension

data = [
  {'job_title': 'estagiario', 'min_salary': 1200, 'max_salary': 2300},
  {'job_title': 'junior', 'min_salary': 3000, 'max_salary': 5000},
  {'job_title': 'pleno', 'min_salary': 6000, 'max_salary': 8000},
  {'job_title': 'senior', 'min_salary': 9000, 'max_salary': 12000},
]

compreension = [value['job_title'] for value in data]
print(compreension)

# -------------------------------------------------
# 3 - compreension para filtrar valores maiores que 6000

data = [
  {'job_title': 'estagiario', 'min_salary': 1200, 'max_salary': 2300},
  {'job_title': 'junior', 'min_salary': 3000, 'max_salary': 5000},
  {'job_title': 'pleno', 'min_salary': 6000, 'max_salary': 8000},
  {'job_title': 'senior', 'min_salary': 9000, 'max_salary': 12000},
]

salario_maior = [value['max_salary'] for value in data if value['max_salary'] >= 6000]
print(salario_maior)


# -------------------------------------------------
# 4 - usando HOF para filtrar salarios

data = [
  {'job_title': 'estagiario', 'min_salary': 1200, 'max_salary': 2300},
  {'job_title': 'junior', 'min_salary': 3000, 'max_salary': 5000},
  {'job_title': 'pleno', 'min_salary': 6000, 'max_salary': 8000},
  {'job_title': 'senior', 'min_salary': 9000, 'max_salary': 12000},
]

filter_salary = list(filter(lambda x : x['max_salary'] > 6000, data))

print(filter_salary)

# -------------------------------------------------
# 5 - filtro básico

teste = [1,2,3,4,5,6,7]
res = list(filter(lambda x : x > 5, teste))
print(res)

# ----------------------------------------------------
# 6 - map

teste = [1,2,3,4,5,6,7]
res = list(map(lambda x : x * 5, teste))
print(res)

# ------------------
# filtrando valores minimos e maximo

# import pandas as pd

# data = pd.read_csv('data.csv')
# result = data['max_salary']

# result.max()
# result.min()
