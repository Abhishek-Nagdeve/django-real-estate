#!/bin/sh

set -e  # Exit immediately if a command exits with a non-zero status

echo "🔄 Waiting for database..."
# Optional: wait-for-db logic if using Postgres/MySQL
# Example for Postgres:
# until nc -z db 5432; do
#   echo "⏳ Waiting for Postgres..."
#   sleep 1
# done

echo "🔄 Applying migrations..."
python manage.py migrate --noinput

echo "📦 Collecting static files..."
python manage.py collectstatic --no-input

echo "🚀 Starting Django server..."
python manage.py runserver 0.0.0.0:8000
