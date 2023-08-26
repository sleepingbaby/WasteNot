import csv
from selenium import webdriver

# Read the CSV file
csv_filename = "top-1k-ingredients.csv"  # Replace with your CSV file's name
output_file = "output.csv" 


with open(csv_filename, "r") as csvfile, open(output_file, "w", newline="") as outputfile:
    reader = csv.reader(csvfile, delimiter=";")
    writer = csv.writer(outputfile, delimiter=';')
    # next(reader)  # Skip the header row

    # Set up the Selenium web driver
    driver = webdriver.Chrome()  # You'll need to download and install the appropriate WebDriver for your browser

    for row in reader:
        word = row[0].replace(" ", "-")
        print(word)
        url = f"https://spoonacular.com/cdn/ingredients_100x100/{word}.jpg"


        # Load the webpage
        driver.get(url)

        # Get the title using Selenium
        title = driver.title

        if "100" in title:
            print(f"Title containing '100' found in {url}: {title}")
            row.append(word)
            writer.writerow(row)
        else:
            writer.writerow(row)

    # Close the web driver
    driver.quit()