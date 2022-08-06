"""
Python and PostgreSQL Exercises
Daniel Campos Perez
"""
import math
import random

#   Part A
print("-----  PART A  -----")
numItems = int(input("Enter the number of fruits you wish to enter: "))
fruitList = []

indexPosition = 0
while indexPosition < numItems:
    fruitList.append(input("Enter fruit {}: ".format(indexPosition + 1)))
    indexPosition += 1

print("Your list of fruits: %s \n" %(fruitList))



print("-----  PART B  -----")
#   Part B
print("We will increment by 1 within the range you determine =>")
userN1 = int(input("Enter number 1: "))
userN2 = int(input("Enter number 2: "))

smaller = 0
larger = 0
if userN1 < userN2:
    smaller = userN1
    larger = userN2
else:
    smaller = userN2
    larger = userN1

for x in range (smaller, (larger + 1)):
    print(x)



print("-----  PART C  -----")
print("Cylinder Volume Calculator")
#   Part C
def cylinderFormula(height, radius):
    volume = (radius**2) * math.pi * height
    return volume
    
def volumeCylinder():
    userH = float(input("Enter a height: "))
    userR = float(input("Enter a radius: "))
    userV = round(cylinderFormula(userH, userR), 2) #round() second argument to select decimal place
    print("The volume with radius %s and height %s is %s \n" %(userR, userH, userV))
volumeCylinder()



#   Part D
print("-----  PART D  -----")
print("Simulated Dice Rolls:")
def diceGame ():
    numRounds = int(input("How many times do you want to roll? "))
    for roundIndex in range (numRounds):
        rolledNum = random.randint(1, 6)
        print("Roll %s = %s" %((roundIndex + 1), rolledNum))
diceGame()
















