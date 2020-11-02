FROM zenika/alpine-chrome

USER root
RUN echo "http://dl-cdn.alpinelinux.org/alpine/edge/main" > /etc/apk/repositories \
    && echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories \
    && echo "http://dl-cdn.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories \
    && echo "http://dl-cdn.alpinelinux.org/alpine/v3.12/main" >> /etc/apk/repositories \
    && apk upgrade -U -a \
    && apk add \
     tini \
      make \ 
      gcc \
      g++ \
      python3 \
      git \
      nodejs \ 
      nodejs-npm \
      yarn \
      openjdk8 \
      chromium-chromedriver
USER chrome
ENTRYPOINT ["tini", "--"]