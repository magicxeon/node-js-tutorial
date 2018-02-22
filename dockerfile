FROM node:6-alpine
EXPOSE 3310
COPY * .
RUN npm install 

CMD ["node","app.js"]