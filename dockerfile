# Etapa 1: build da aplicação
# FROM node:20-alpine AS build

# # Define o diretório de trabalho
# WORKDIR /app

# # Copia os arquivos package.json e package-lock.json
# COPY package*.json ./

# # Instala as dependências
# RUN yarn install

# # Copia o restante da aplicação
# COPY . .

# # Faz o build da aplicação React
# RUN yarn build:storybook

# Etapa 2: Servir os arquivos com um servidor leve (nginx)
FROM nginx:stable-alpine

# Remove a configuração padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia o build da etapa anterior para o nginx
# COPY --from=build /app/storybook-static /usr/share/nginx/html
COPY /storybook-static /usr/share/nginx/html

# Copia a configuração personalizada do nginx (opcional)
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 3004
EXPOSE 3004

# Comando padrão para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]