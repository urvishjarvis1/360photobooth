FROM node:slim 
WORKDIR /portfoilio/priya/
COPY . /portfoilio/priya/
RUN npm install --legacy-peer-deps
RUN npm install --global serve
EXPOSE 433
CMD serve -s build