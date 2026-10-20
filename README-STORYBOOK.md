# Para construir a imagem
docker build --no-cache --platform linux/amd64 -t drogal-story-book .

# GERAR TAG DA IMAGEM
docker tag drg/drogal-story-book:latest 179095145246.dkr.ecr.sa-east-1.amazonaws.com/drg/drogal-story-book:latest

# SUBIR IMAGEM PARA A PLATAFORMA
docker push 179095145246.dkr.ecr.sa-east-1.amazonaws.com/drg/drogal-story-book:latest

# Para rodar o container (OPCIONAL)
docker create --name drogal-story-book -p 3004:3004 drogal-story-book

# Para salvar a imagem (OPCIONAL)
docker save --output drogal-story-book.tar drogal-story-book

 