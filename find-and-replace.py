import os, fnmatch
import re

# Counts the number of occurance of the phrase
occurance = 0

text_to_find = "Rocketchat " #str("premium".upper()) # The phrase to find
replace_with = "Rocket.Chat " # Phrase to replace found phrase
root_directory = "/workspace/rocketchat-docs" # default to current directory "/"
file_patten = "*.md"    # Extensions to look into

folders_to_ignore = [".gitbook", ".github", ".scripts"]

def findReplace(directory, find, replace, filePattern):
    for path, dirs, files in os.walk(os.path.abspath(directory)):
        for filename in fnmatch.filter(files, filePattern):
            filepath = os.path.join(path, filename)
            if("SUMMARY" in str(filepath)):
                continue
            else:
                with open(filepath, encoding="utf-8") as f:
                    s = f.read()
                find_word = re.finditer(find, s)
                for match in find_word:
                    print('String {}, founnd in: {} \n'.format(find,filepath))
                    global occurance
                    occurance = occurance + 1
                s = s.replace(find, replace)
                with open(filepath, "w") as f:
                    f.write(s)

findReplace(root_directory, text_to_find, replace_with, file_patten)
print("-----------")
print("Word {} replaced in {} locations".format(text_to_find, occurance))