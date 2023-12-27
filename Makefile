IMAGE_NAME := todo-front
CONTAINER_NAME := todo_cnt

.PHONY: build run clean

build:
	docker build -t $(IMAGE_NAME) .

run: build
	docker run --name $(CONTAINER_NAME) -p 3000:3000 $(IMAGE_NAME)

clean:
	@echo "Stopping and removing all Docker containers, images, volumes, and networks"
	@docker stop $$(docker ps -q) 2>/dev/null || true
	@docker rm -f $$(docker ps -a -q) 2>/dev/null || true
	@docker rmi -f $$(docker images -q) 2>/dev/null || true
	@docker volume rm $$(docker volume ls -q) 2>/dev/null || true
	@docker network rm $$(docker network ls -q) 2>/dev/null || true
	@docker builder prune
	@echo "Cleanup complete"

attach:
	docker attach $(CONTAINER_NAME)

stop:
	docker stop $(CONTAINER_NAME)

start:
	docker start $(CONTAINER_NAME)

