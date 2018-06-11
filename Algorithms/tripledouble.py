def triple_double(num1):
    #loop thru num1 and check for triple occurences
    # if there's an
 num1 = [int(x) for x in str(num1)]
for i in num1:
 if num1.count(i) ==3: #if a number occurs thrice
  print("number occurs three times")
 else:
  print("number does not occur thrice")
triple_double(451999277)
