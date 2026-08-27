# Static site — no build step, just serving.
FROM nginx:1.30.2-alpine

# Patch alpine packages (CVEs inherited from the base image)
RUN apk upgrade --no-cache

COPY index.html project.html /usr/share/nginx/html/
COPY assets/    /usr/share/nginx/html/assets/

RUN printf '\
server {\n\
    listen 80;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    charset utf-8;\n\
\n\
    gzip on;\n\
    gzip_types text/plain text/css application/javascript image/svg+xml;\n\
    gzip_min_length 1024;\n\
\n\
    add_header X-Content-Type-Options nosniff always;\n\
    add_header X-Frame-Options SAMEORIGIN always;\n\
    add_header Referrer-Policy strict-origin-when-cross-origin always;\n\
\n\
    # unhashed assets get a short cache so a redeploy shows up\n\
    location /assets/ {\n\
        expires 1h;\n\
        add_header Cache-Control "public, must-revalidate";\n\
        access_log off;\n\
    }\n\
\n\
    location = /healthz {\n\
        access_log off;\n\
        return 200 "ok\\n";\n\
    }\n\
\n\
    location / {\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80
