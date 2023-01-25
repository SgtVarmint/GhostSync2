FROM httpd

COPY ./app/ /usr/local/apache2/htdocs/
WORKDIR /usr/local/apache2/htdocs/

EXPOSE 9000