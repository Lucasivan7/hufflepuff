from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def login():
    return render_template("login.html")


@app.route("/iniciar")
def inicio():
    return render_template("iniciar.html")


@app.route("/quiz1")
def quiz1():
    return render_template("quiz1.html")


@app.route("/buscador")
def buscador():
    return render_template("ar-view.html")
