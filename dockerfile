FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install apache2 -y
COPY . /var/www/html
EXPOSE 8088
ENTRYPOINT apachectl -D FOREGROUND