FROM node:alphine
WORKDIR \Users\Fede\Source\Repos\FakeNuzzi\frontend_idsa\idsa_frontend
COPY package.json .
RUN npm i
COPY ..
EXPOSE 3000
CMD ["npm" "run" "dev"]