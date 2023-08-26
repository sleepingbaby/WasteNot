import csv
import requests
from bs4 import BeautifulSoup


# Read the CSV file
csv_filename = "top-10-ingredients.csv"  # Replace with your CSV file's name
with open(csv_filename, "r") as csvfile:
    reader = csv.reader(csvfile, delimiter=";")
    next(reader)  # Skip the header row

    for row in reader:
        print(row[0])
        url = f"https://spoonacular.com/cdn/ingredients_100x100/peaches.jpg"

        # Fetch the webpage content
        response = requests.get(url)
        print(response)
        if response.status_code == 200:
            html_content = response.text
            # print(html_content)

            # Parse the HTML content
            soup = BeautifulSoup(html_content, "html.parser")
            # print(soup)

            # Find all image elements
            title_element = soup.find("title")
            print(title_element)

            if title_element and "100" in title_element.text:
                print(f"Title containing '100' found in {url}: {title_element.text}")
        else:
            print(f"Error fetching {url}: Status code {response.status_code}")
