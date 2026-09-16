# Nginx's official image is small and purpose-built for serving static
# files — exactly what a plain HTML/CSS/JS site needs. No app server,
# no runtime, just a web server.
FROM nginx:alpine

# Nginx's default config serves files from this directory automatically.
# Copying our site here means we don't need any custom Nginx config
# for a simple case like this.
COPY . /usr/share/nginx/html

# Nginx listens on port 80 by default
EXPOSE 80

# The official Nginx image already has a correct CMD to start the
# server — we don't need to override it.
