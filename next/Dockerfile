FROM node:latest
RUN git clone https://github.com/munvei/entry-exit-management.git /usr/src/entry-exit-management
WORKDIR /usr/src/entry-exit-management/next/web-app
RUN npm install
ENTRYPOINT npm run dev
