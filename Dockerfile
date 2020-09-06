FROM node:13.12.0-alpine
WORKDIR /app
COPY package*.json ./
COPY ./testcrt.pem /app/testcrt.pem
COPY ./testkey.pem /app/testkey.pem

RUN CI=true

COPY . .
EXPOSE 3006
CMD ["npm", "start"]