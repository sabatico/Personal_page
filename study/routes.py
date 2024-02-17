import datetime as datetime
import io as io
import mimetypes as mimetypes
import os as os
import uuid as uuid

from flask import Blueprint, current_app,  render_template,  session


pages = Blueprint("pages", __name__, template_folder="templates", static_folder="static")



@pages.route("/", methods=["GET", "POST"])
def index():
    return render_template("index.html")

