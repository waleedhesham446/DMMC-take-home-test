import csv

with open('income_2010.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    total_income = 0
    reported = 0
    unreported = 0

    for row in csv_reader:
        if line_count != 0 and row[0] == '061':
            if row[2] != '-1':
                total_income += int(row[2])
                reported += 1
            else:
                unreported += 1
        line_count += 1
    avgIncome = total_income/reported
    missing_percentage = unreported/(unreported+reported)
    print('AVG Income: ', avgIncome)
    print('Percentage of unreported income: ', missing_percentage*100)
