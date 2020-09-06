FROM node:13.12.0-alpine
WORKDIR /app
COPY package*.json ./
# COPY /root/testcrt.pem /app/testcrt.pem
# COPY /root/testkey.pem /app/testkey.pem

RUN CI=true


RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]