#!/usr/bin/make -f
# SHELL = /bin/sh

DC=docker-compose

APP_DIR=$(shell echo $$(cd . && pwd))
APP_CONTAINER=app
VITE_CONTAINER=vite


######### COMMANDS
start: build up vite_install vite_build
restart: stop up
rebuild: stop clear start

#=============== STEPS ========================

build:
	cd $(APP_DIR) && $(DC) build
up:
	docker rm -f $$(docker ps -a | grep $(APP_CONTAINER) | awk '{print $$1}') || echo
	cd $(APP_DIR) && $(DC) up -d --remove-orphans --force-recreate
	$(MAKE) composer
down:
	cd $(APP_DIR) && $(DC) down -v --remove-orphans
stop:
	cd $(APP_DIR) && $(DC) stop
composer:
	cd $(APP_DIR) && $(DC) exec -T $(APP_CONTAINER) composer install && \
	wait
comp:
	cd $(APP_DIR) && $(DC) exec -T $(APP_CONTAINER) composer

vite_install:
	cd $(APP_DIR) && $(DC) exec -T $(VITE_CONTAINER) npm install

vite_build:
	cd $(APP_DIR) && $(DC) exec -T $(VITE_CONTAINER) npm run build

vite_dev:
	cd $(APP_DIR) && $(DC) exec -T $(VITE_CONTAINER) npm run build



clear:
	$(DC) down -v --remove-orphans
	docker container prune -f
	docker image prune -f
	docker volume prune -f
	@echo "======================="
