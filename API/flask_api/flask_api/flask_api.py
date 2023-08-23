
from flask import Flask, jsonify
import json
from random import randrange


app=Flask(__name__)


operatordict={
    1:'add', 
    2:'multiply',
    3:'subtract',
    4:'divide',

}

@app.route('/', methods=["GET"])
def index():
    res = generate()
    global numbers
    numbers = []
    return (res)

numbers = []

def generate():
    blanks = 6
    prevno = 0
    previ = 0
    for i in range(blanks):
        no = randrange(1,26)
        if no == prevno:
            i = previ
            continue
        previ = i
        prevno = no
        numbers.append(no)

    iterations = randrange(1,7)
    
    index = 0
    
    j = randrange(len(numbers))
    k = randrange(len(numbers))
    op = randrange(1,4)
    res = computeResult(op, numbers[j], numbers[k])
    solution = []
    solution.append([numbers[j], numbers[k], operatordict[op]])

    while index < iterations:
        op = randrange(1,4)
        j = randrange(len(numbers))
        if computeResult(op, numbers[j], res) == -1:
            index+=1
            continue
        solution.append([numbers[j], res, operatordict[op]])
        res = computeResult(op,numbers[j],res)
        if res > 450:
            break;
        
        index += 1

    print(f"final compute = {res}; solution = {solution}")

    values = {}
    values["Sum"] = f"{res}"
    values["numbers"] = f"{numbers}"
    values["Solution"] = f"{solution}"
        
    return json.dumps(values)

    

def computeResult(operator, num1, num2):
    if num1==None or num2 ==None:
        return -1
    match operator:
        case 1:
            return num1+num2
        case 2:
            return num1*num2
        case 3:
            return num1-num2 if num1>num2 else num2-num1
        case 4:
            return num1/num2 if num1>num2 else num2/num1
        case _:
            return -1


if __name__=="__main__":
    app.run(debug=True)
