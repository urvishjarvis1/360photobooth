FROM node:alpine 
WORKDIR /portfoilio/priya/
COPY ./package.json /portfoilio/priya/
# RUN npm install
# EXPOSE 3000
# CMD npm start
RUN npm install -g react-script
RUN chown -Rh  node:node  /portfoilio/priya
USER node
EXPOSE 3000
CMD [ "sh", "-c", "npm install && npm start" ]