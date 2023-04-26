import requests
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/images', methods=['GET'])
def get_images():
    url = 'https://www.reddit.com/r/images/top.json?limit=100&t=month'
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
    response = requests.get(url, headers=headers)
    json_data = response.json()
    image_urls = []
    for post in json_data['data']['children']:
        if post['data']['url'].endswith(('.png', '.jpg', '.jpeg', '.gif')):
            image_urls.append(post['data']['url'])
    return jsonify({'image_urls': image_urls})

if __name__ == '__main__':
    app.run(debug=True)
