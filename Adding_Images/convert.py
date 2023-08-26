import csv
import json
 
 
# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvFilePath, jsonFilePath):
     
    # create a dictionary
    data = {}
     
    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.reader(csvf, delimiter=';')
         
        # Convert each row into a dictionary
        # and add it to data
        for rows in csvReader:
            if len(rows) == 2:
                rows.append("")
            
             
            # Assuming a column named 'No' to
            # be the primary key
            key = rows[0]
            data[key] = {"name": rows[0], "id": rows[1], "slug": rows[2]}
            

    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))
         
# Driver Code
 
# Decide the two file paths according to your
# computer system
csvFilePath = r'output.csv'
jsonFilePath = r'items.json'
 
# Call the make_json function
make_json(csvFilePath, jsonFilePath)