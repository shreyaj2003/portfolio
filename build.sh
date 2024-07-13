#!/bin/bash

# Install PostgreSQL client to get pg_config
apt-get update
apt-get install -y postgresql-client

# Install Python dependencies
pip install -r requirements.txt
