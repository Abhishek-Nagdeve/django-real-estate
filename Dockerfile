#Django backend
FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY ./estate-src/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY ./estate-src/ .

COPY ./estate-src/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]