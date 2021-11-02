FROM node:latest
RUN cd /usr/src
RUN git clone https://github.com/munvei/entry-exit-management.git
WORKDIR entry-exit-management/next/web-app
RUN npm install
ENTRYPOINT npm run dev
