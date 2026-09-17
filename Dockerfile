# Nginx's official image is small and purpose-built for serving static
# files - exactly what a plain HTML/CSS/JS site needs.
FROM nginx:alpine

# Replace the default Nginx config with our custom one that adds the
# /stub_status endpoint used for monitoring (see nginx.conf comments).
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the actual website files
COPY . /usr/share/nginx/html

# Nginx listens on port 80 by default
EXPOSE 80
