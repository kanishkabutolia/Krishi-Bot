from flask import Flask, request, jsonify, render_template, redirect, url_for

app = Flask(__name__)

# -------------------------
# Database-related stubs
# -------------------------
database = {"pests": "Use XYZ."}
users = {"Rajesh": "Rajesh123", "Mohit": "Mohit@Kumar123"}
feedbacks = []
queries = []
def connect_db():
    pass  # TODO: Connect to SQLite/MySQL

def save_query(query_data):
    pass  # TODO: Store query in DB
    queries.append(query_data)
    print(queries)

def save_feedback(feedback_data):
    pass  # TODO: Store feedback in DB
    feedbacks.append(feedback_data)
    print(feedbacks)

# -------------------------
# AI / ML / API stubs
# -------------------------
def process_text_query(text, language):
    pass  # TODO: Handle query text, call Translate API if needed

def process_image_query(image_file):
    pass  # TODO: Run crop disease detection model

def escalate_to_officer(query_data):
    pass  # TODO: Forward query if AI can't answer

# -------------------------
# Flask Routes
# -------------------------
@app.route('/')
def init():
    return redirect(url_for("login_page"))

@app.route('/login')
def login_page():
    return render_template("login.html")
    # TODO: Login Page

@app.route('/signin')
def sign_page():
    return render_template("signin.html")
    # TODO: Sign In page

@app.route('/home')
def home_page():
    return render_template("home.html")
    # TODO: Home Page

@app.route('/api/signin', methods=["POST"])
def signin():
    username, password = request.json["username"], request.json["password"]
    if username in users:
        return jsonify({"response": "This Username is already taken, Please take another one."})
    else:
        users[username] = password
        return jsonify({"response": "success"})

@app.route('/api/login', methods=["POST"])
def login():
    username, password = request.json["username"], request.json["password"]
    if username in users and password == users[username]:
        return jsonify({"response": "success"})
    else:
        return jsonify({"response": "Incorrect username or password."})

@app.route('/api/query', methods=['POST'])
def handle_query():
    query = request.json["query"].lower()
    save_query(query)
    response = database.get(query) or ""
    return jsonify({"response": response})
    # TODO: Get query type (text/image), call appropriate process function
    # TODO: Save query and generate response

@app.route('/api/feedback', methods=['POST'])
def handle_feedback():
    save_feedback(request.json["feedback"])
    return jsonify({"response": "Thank you for feedback!"})
    # TODO: Save user feedback

# -------------------------
# Main
# -------------------------
if __name__ == '__main__':
    connect_db()
    app.run(debug=True)
