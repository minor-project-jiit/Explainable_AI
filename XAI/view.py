#Separate File for Routes
from flask import Blueprint,render_template

view=Blueprint(__name__,"view")

@view.route('/')
def home():
    return render_template("index.html")




