print('Расчет вертикального отступа в процентах -')
margin = int(input('Введите отступ в пикселях - '))
width = int(input('Введите ширину родителя в пикселях -'))
height = int(input('Введите высоту родителя в пикселях -'))

print(f'Ваш отступ - {round((margin / (height / 100)) / (width / height), 4)}%')


