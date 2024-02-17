import datetime as datetime
import io as io
import os as os

import logging as logging
from dotenv import load_dotenv
from flask import Flask
from jinja2 import Environment
from whitenoise import WhiteNoise


from study.routes import pages
from study.lib.config import Config


# load the variables from .env file that are stored in os.environ
load_dotenv()


def create_app():

    app = Flask(__name__)
    #set app logs:
    app.logger.setLevel(logging.DEBUG)

    app.logger.debug("initiate env")
    
    #get configs
    env = Environment()
    app.config.from_object(Config())
    app.register_blueprint(pages)

    # initiate white noise for static files
    app.logger.debug("initiate white noise")
    app.wsgi_app = WhiteNoise(app.wsgi_app, root="static/", prefix="static/")

    



    return app




app = create_app()
