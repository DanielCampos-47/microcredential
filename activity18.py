"""
Daniel Campos Perez
Activity 18: for and while loop
8/3/2022
"""



print("\n\n=====   WHILE LOOP   =====")

print("    example 15) collect two user numbers between 0 and 10. Increment both by 2 until 20, while addition < 30. USING INPUT VALIDATION")
number1 = int(input("Enter a number between 0 and 10: "))
while number1 < 0 or number1 > 10:
    number1 = int(input("Try again! Enter a number between 0 and 10: "))
number2 = int(input("Enter 2nd number between 0 and 10: "))
while number2 < 0 or number2 > 10:
    number2 = int(input("Try again! Enter a number between 0 and 10: "))
    
while number1 <= 20 and number2 <= 20:
    addition = number1 + number2
    if addition > 30:
        break
    print("%s + %s = %s" %(number1, number2, addition))
    number1 += 2
    number2 += 2


print("    example 14) while loop that ensure a number is between 0 and 10")
number = int(input("Enter a number between 0 and 10: "))
while number < 0 or number > 10:
    number = int(input("Try again! Enter a number between 0 and 10: "))
print("Entered number", number)


print("    example 13) collect two user numbers between 0 and 10. Increment both by 2 until 20. NO INPUT VALIDATION")
num1 = int(input("Enter the first number between 0 and 10: "))
num2 = int(input("Enter the second number between 0 and 10: "))
while num1 <= 20 and num2 <= 20:
    print("Number1:", num1, "\t number2:", num2)
    num1 += 2
    num2 += 2

    
print("    example 12) 'while' loop basics")
i = 0
while i < 6:
    print("i =", i)
    i += 1
else:
    print("i is no longer < 6")


print("\n\n=====   FOR LOOP   =====")
print("    example 11) 'for-else' staement")
for n in range(7):
    print(n)
else:
    print("DONE!") # will execute after "for" loop ends


print("    example 10) print num's 10 => -5 skipping num's divisible by 4")
for num in range(10, -5, -1):
    if num == 0:
        print(num)
    if num%4 == 0:
        continue # skip's onto the next loop iteration
    print(num)


print("    example 9) nesting a 'if' statement in a 'for' loop")
for counter in range (10): # start at 0 without a starting value
    print("Now counting:", counter)
    if counter == 5:
        break
    print("=*=*=*=*=")

    
print("    example 8) 'for' loop on a string")
msg = "Hello World!"
for m in msg:
    print("character =", m)


print("    example 7) 'for' loop on a list")
colors = ['yellow', 'red', 'blue', 'green', 'white', 'black']
for c in colors:
    print("color =", c)


print("    example 6) 'for' loop decrement")
for z in range (20, -10, -5): # 3rd argument must be (-) for decrement
    print("z =", z)


print("    example 5) 'for' loop with 3 arguments")
for y in range (2, 30, 3):
    print("y =", y)


print("    example 4) simple 'for' loop")
for x in range (1,5):
    print("Counting: ", x)

5

#    example 3) "and" "or" operators
print("\n\n=====   'and' 'or' OPERATORS   =====")

age = int(input("Enter an age: "))
gender = input("Type M for male or F for female: ")

if age == 5 and gender == "M" or gender == "m":
    print("5 year-old boy!")
elif age == 5 and gender == "F" or gender == "f":
    print("5 year-old girl!")
else:
    print("Age 5 was not used")



#    example 2) if-elif-else staements
print("\n\n=====   IF-ELIF-ELSE STATEMENTS   =====")

if age == 5:
    print("Age = 5. Height should be around 102 cm and weight 14.8 lbs")
elif age == 6:
    print("Age = 6. Height should be around 108 cm and weight 16.3 lbs")
elif age == 7:
    print("Age = 7. Height should be around 113 cm and weight 18.0 lbs")
else:
    print("Unable to display height and weight")


    
#    example 1) if statement
if age >= 21:
    print("You are an adult!")
else:
    print("You are underage")
print("Welcome to the class!")


