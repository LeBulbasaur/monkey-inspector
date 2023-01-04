from flask import *
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os

UPLOAD_FOLDER = "server/uploads"
ALLOWED_EXTENSIONS = {'png','jpeg','jpg'}
app = Flask(__name__, static_folder='../client/src')
CORS(app)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
            filename.rsplit('.',1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/")
def home():
        return "hello world"
            
@app.route("/upload",methods=["POST","GET"])
def upload():
    if request.method == 'POST':
        if 'file' not in request.files:
            data = {"message": 69}
            return jsonify(data)
        file = request.files['file']
        if file.filename == '':
            data = {"message": 0}
            return jsonify(data) 
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            data = {"message": 1}
            return jsonify(data)

# @app.route("/upload", methods=["POST","GET"])
# def test():
#     if request.method == 'POST':
#         flash('XD')
#         data = {"message": 0}
#         return jsonify(data)

if __name__ == "__main__":
    app.run(port=3000)