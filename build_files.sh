#!/bin/bash


echo " BUILD START"
# Install PostgreSQL client to get pg_config
apt-get update
apt-get install -y postgresql-client

# Install Python dependencies
python3.9 -m pip install -r requirements.txt
python3.9 manage.py collectstatic --noinput --clear

echo " BUILD END"