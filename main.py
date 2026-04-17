import random

numGreen = 0
numRed = 0
numBlack = 0
numOdd = 0
numEven = 0

spinCount = int(input("Enter the number of spins: "))

for i in range(spinCount):
    spin = int(random.randint(0, 36))
    if spin == 0:
        print("SPIN", i + 1, "  Green  ", spin)
        numGreen += 1

    elif spin % 2 == 0:
        print("SPIN", i + 1, "  Black  ", spin)
        numBlack += 1
        numEven += 1

    else:
        print("SPIN", i + 1, "  Red  ", spin)
        numRed += 1
        numOdd += 1

print("\n---STATS---")
print("Total spins: ", spinCount)

print("\n---COLORS---")
print("Green: ", numGreen)
print("Red: ", numRed)
print("Black: ", numBlack)

print("\n---ODD/EVEN---")
print("Odd: ", numOdd)
print("Even: ", numEven)
