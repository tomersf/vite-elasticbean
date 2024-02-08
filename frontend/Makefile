.PHONY: build-dev run stop delete print
	

build-dev:
	docker-compose build

run: build-dev
	docker-compose up

stop:
	docker-compose down

delete: stop
	 docker rmi react-app-dev