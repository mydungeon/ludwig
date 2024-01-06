FROM mongo

COPY init.json /init.json
CMD mongoimport mongodb://jonnyo:password123@mongo:27017/ludwigDb?authSource=admin --collection users --type json --file /init.json --jsonArray