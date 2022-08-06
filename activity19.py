"""
Activity 19: functions!!!
Daniel Campos Perez
"""
import math
import random




#   example 8) pass statement
print("----- Example 8 -----")
print('call "filter_num()" to see example 8 \n')
def filter_num():
    pass



#   example 7) Boolean functions
print("----- Example 7 -----")
print('call "is_divisible(number1, number2)" to see example 7 \n')
def is_divisible(x, y):
    print("----- You Called Example 7 -----")
    if x % y == 0 or y % x == 0:
        return True
    else:
        return False



#   example 6) define function: multiple parameters, return numbers
print("----- Example 6 -----")
print('call "number()" to see example 6 \n')
def sum(num1, num2):
    total = num1 + num2
    return total
def number():
    print("----- You Called Example 6 -----")
    n1 = float(input("Enter number 1: "))
    n2 = float(input("Enter number 2: "))
    total = sum(n1, n2)
    print("The sum of %s and %s is %s \n" %(n1, n2, total))



#   example 5) define function: default parameter, no return
print("----- Example 5 -----")
print('call "country("yourCountry")" to see example 5 \n')
def country(c = "Norway"):
    print("----- You Called Example 5 -----")
    print("I am from %s" %(c))



#   example 4) define function: parameter, no return
print("----- Example 4 -----")
print('call "name("yourFullName")" to see example 4 \n')
def name(fname):
    print("----- You Called Example 4 -----")
    print("welcome to the program %s", fname)



#   example 3) define function: no parameters or return value
print("----- Example 3 -----")
print('call "my_function()" to see example 3 \n')
def my_function ():
    print("----- You Called Example 3 -----")
    print("Hello from a function!\n")



#   example 2) random numbers
print("----- Example 2 -----")
color = ["red", "green", "blue"]
randomIndex = random.randint(0,2)
print("The random color is: %s \n" %(color[randomIndex]))



#   example 1) built-in math functions to find circumference given radius
print("----- Example 1 -----")
radius = float(input("Enter a radius: "))
circumference = round(2* math.pi * radius)
area = math.pow(radius, 2) * math.pi
print("The circumference = %s with radius %s. The area = %s \n" %(circumference, radius, area))

print("USE TEMPLATES ABOVE TO CALL EXAMPLE FUNCTIONS")
