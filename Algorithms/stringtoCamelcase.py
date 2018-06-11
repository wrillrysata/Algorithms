def to_camel_case(text):
    #your code here
    import re
    pattern = re.compile("[_-](.)")
    return pattern.match(text)
to_camel_case("va-ness") 
  
