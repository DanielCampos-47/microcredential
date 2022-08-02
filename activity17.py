


# is used to write comments
"""
mutiple
line
comments
"""



#   LISTS / ARRAYS
fruits = ["apples", "oranges", "grapes", "pears", "cheries", "mangos"]
print(fruits)

copyFruits = fruits.copy()
copyFruits.reverse()
copyFruits.append("grapes")
print("Original list: %s \n Copy List: %s" %(fruits, copyFruits))

numGrapes = copyFruits.count("grapes")
numKiwi = copyFruits.count("kiwis")
indexPears = fruits.index("pears")
print("There are", numGrapes, "grapes in the list")
print("There are", numKiwi, "kiwis in the list")
print("Pears has index", indexPears)

# fruits[a:b] b being non inclusive, to access elements
# fruits*2 will duplicate the elements
# del fruits[1] will cut the element at said index
# fruits.pop(3) works in the same way as del
# fruits.append("STRAWBERRIES") will add the element to the end
# fruits.reverse() does what it does



#   STRING
msg = input("Enter a message: ")
fullName = input("Enter a full name: ")
print("%s. Welcome %s" %(msg, fullName))  # use % to shot-hand the printed message

nameLen = len(fullName)
lastCharName = fullName[nameLen - 1]

print("Name %s has %s characters and the last character is: %s" %(fullName.upper(), nameLen, lastCharName))

index_a = fullName.find("a")
print("Name %s has the letter a in it with index %s" $(fullName, index_a)) # will return -1 if no a



#   PRINT
print("Hello World Python!")



#   VARIABLES
number1 = -30
print("Number 1 =", number1)
number2 = 15.6
addition = number1 + number2

name = "Daniel Campos Perez"
character = 't'

yes_no = False



#   input () function
firstName = input("Enter a name: ")
print("Welcome to the program", firstName)



# changing input => integer
num1 = input("Enter a number: ")
num1 = int(num1)
num2 = int(input("Enter a second number: "))
prod = num1 + num2
print("The product of", num1, "and", num2, "is", prod)



# example 1) find the hypotenuse of the right angle
h = float(input("Enter the height: "))
w = float(input("Enter the width: "))

hyp = (h**2 + w**2)**0.5                          # ** is the syntax for power
print("The hypotenuse has a length of", hyp)







