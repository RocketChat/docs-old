import os, fnmatch

occurance = 0
text_to_find = "RocketChat" #"Rodriiqq" #str("premium".upper())
replace_with = ""
root_directory = "/workspace/rocketchat-docs" # default to current directory
file_patten = "*.md"
folders_to_ignore = [".gitbook", ".github", ".scripts"]

def findReplace(directory, find, replace, filePattern):
    for path, dirs, files in os.walk(os.path.abspath(directory)):
        # print(path)
        for filename in fnmatch.filter(files, filePattern):
            filepath = os.path.join(path, filename)
            if("SUMMARY" in str(filepath)):
                continue
            else:
                with open(filepath, mode="r", encoding = 'utf-8') as f:
                    lines = f.readlines()
                    for line in lines:
                    # check if string present on a current line
                        if line.find(find) != -1:
                            print(find, 'string exists in file')
                            print('Line Number:', lines.index(line))
                            print("In the file", filepath)
                            print('Line:', line)
                            print("\n")
                            global occurance
                            occurance = occurance + 1
                # s = s.replace(find, replace)
                # with open(filepath, "w") as f:
                #     f.write(s)

findReplace(root_directory, text_to_find, replace_with, file_patten)
print("-----------")
print("Word {} exist in {} locations".format(text_to_find, occurance))