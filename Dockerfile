FROM node:slim 
WORKDIR /portfoilio/priya/
COPY . /portfoilio/priya/
RUN npm install --legacy-peer-deps
EXPOSE 3000
CMD tail -f /dev/null 